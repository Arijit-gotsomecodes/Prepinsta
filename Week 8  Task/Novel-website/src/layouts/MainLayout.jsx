import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
