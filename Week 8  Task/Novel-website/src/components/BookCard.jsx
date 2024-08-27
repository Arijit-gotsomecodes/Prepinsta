import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/outline'; // Import an icon

function BookCard({ book, index }) {
  return (
    <Link to={`/book/${index}`} className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-full object-cover rounded-lg" 
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 p-4 flex items-center space-x-2 text-white">
            <BookOpenIcon className="w-6 h-6" />
            <span className="text-sm font-semibold">{book.title}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
        <p className="text-xs text-gray-400 mt-2">{book.genre}</p>
      </div>
    </Link>
  );
}

export default BookCard;
