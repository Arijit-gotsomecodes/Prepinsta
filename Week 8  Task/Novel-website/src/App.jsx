import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import './index.css';

function App() {
  useEffect(() => {
    const initializeBooks = async () => {
      const hasInitialized = localStorage.getItem('hasInitialized');
      const storedBooks = localStorage.getItem('books');
      
      if (!hasInitialized || !storedBooks) {
        try {
          console.log('Fetching books data...');
          const response = await fetch('/books.json');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log('Books data fetched:', data);
          localStorage.setItem('books', JSON.stringify(data));
          localStorage.setItem('hasInitialized', 'true');
          
          // Force reload to ensure that the data is correctly read
          window.location.reload();
        } catch (error) {
          console.error('Error loading books data:', error);
        }
      } else {
        console.log('Books data already in local storage.');
      }
    };

    initializeBooks();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
