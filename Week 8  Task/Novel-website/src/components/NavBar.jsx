import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, PlusIcon } from '@heroicons/react/24/outline'; // Import icons

function NavBar() {
  const location = useLocation(); // Get current path

  // Determine if we're on the Home page or Book Details page
  const isHomePage = location.pathname === '/';
  const isBookDetailsPage = location.pathname.startsWith('/book/');

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold flex items-center">
          BookInsta
        </Link>
        <div className="flex gap-4">
          {isHomePage || isBookDetailsPage ? (
            <>
              <Link 
                to="/add-book" 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-700"
              >
                <PlusIcon className="w-5 h-5" />
                Add New Book
              </Link>
              {isBookDetailsPage && (
                <Link 
                  to="/" 
                  className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-600"
                >
                  <HomeIcon className="w-5 h-5" />
                  Go Home
                </Link>
              )}
            </>
          ) : (
            <Link 
              to="/" 
              className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-600"
            >
              <HomeIcon className="w-5 h-5" />
              Go Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
