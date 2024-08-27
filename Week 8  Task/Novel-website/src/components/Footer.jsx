import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; BookInsta - Book Database.</p>
        <div className="flex items-center gap-4">
          <p>Made by Arijit with 💖</p>
          <a href="https://github.com/Arijit-gotsomecodes" target="_blank" rel="noopener noreferrer">
            <img
              src="pngwing.com.png" // Placeholder image link
              alt="GitHub"
              className="w-auto h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
