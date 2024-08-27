import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // Import layout

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, description, coverUrl };
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    localStorage.setItem('books', JSON.stringify([...storedBooks, newBook]));
    navigate('/');
  };

  return (
    <MainLayout>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Book Title"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Genre"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
            <textarea
              placeholder="Short Description"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <input
              type="text"
              placeholder="Cover Image URL"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-teal-500 text-white py-3 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
          >
            Add Book
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default AddBook;
