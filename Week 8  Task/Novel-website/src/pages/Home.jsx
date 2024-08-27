import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Import icons
import MainLayout from '../layouts/MainLayout'; // Import layout
import Slider from 'react-slick';

function Home() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [carouselBooks, setCarouselBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Function to get 5 random books
    const getRandomBooks = (bookList) => {
      if (bookList.length <= 5) return bookList;
      const shuffled = bookList.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 5);
    };

    setCarouselBooks(getRandomBooks(filteredBooks));
  }, [books, searchQuery]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200, // Change this value to adjust the speed to 3.2 seconds
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <header className="flex flex-col md:flex-row md:justify-between items-center mb-8 p-6 bg-gray-100 shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4 md:mb-0 mx-3">
          Explore Your Library
        </h1>
        <div className="relative w-full max-w-md md:ml-6">
          <input
            type="text"
            placeholder="Search books by title..."
            className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
        </div>
      </header>

      {!searchQuery && (
        <div className="mb-12 relative p-4 md:p-6 lg:p-8">
          <Slider {...carouselSettings}>
            {carouselBooks.map((book, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black opacity-75 p-4">
                  <h2 className="text-white text-lg md:text-xl font-semibold">{book.title}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      <main className="px-4 md:px-6 lg:px-8">
        {filteredBooks.length > 0 ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book, index) => (
                <BookCard key={index} book={book} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-700 text-lg mt-20">
            No books found. Start by adding new titles to your collection.
          </div>
        )}
      </main>
    </MainLayout>
  );
}

export default Home;
