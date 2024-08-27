import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // Import layout

function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // Hook to programmatically navigate
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const book = books[id]; // Retrieve the correct book using the ID

  const handleDelete = () => {
    const updatedBooks = books.filter((_, index) => index !== parseInt(id, 10));
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    navigate('/'); // Redirect to home page after deletion
  };

  // Handle the case where the book might not exist
  if (!book) {
    return (
      <MainLayout>
        <div className="container mx-auto p-6">
          <p className="text-xl">Book not found</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto p-6 flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={book.coverUrl} alt={book.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
          <p className="text-lg mb-2"><strong>Author:</strong> {book.author}</p>
          <p className="text-lg mb-2 pb-5"><strong>Genre:</strong> {book.genre}</p>
          <p className="text-lg mb-2"><strong>About the book:</strong></p>
          <p className="text-lg mt-4">{book.description}</p>
          <button 
            onClick={handleDelete} 
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          >
            Delete Book
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default BookDetails;
