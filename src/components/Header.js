import React, { useState } from 'react';
import banner from '../assets/images/banner.jpg';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={banner} alt="Yerkin" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-800">YerkinOnerAcadem</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#courses" className="hover:text-blue-600 transition">Курстар</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">Оқу жүйесі</a>
          <a href="#teachers" className="hover:text-blue-600 transition">Мұғалімдер</a>
          <a href="#contact" className="hover:text-blue-600 transition">Байланыс</a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#register"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Курска тіркелу
          </a>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center px-3 py-2 border rounded text-blue-600 border-blue-600 focus:outline-none"
        >
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
            {isMobileMenuOpen ? (
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-sm">
          <div className="px-4 py-2 space-y-2">
            <a href="#courses" className="block hover:text-blue-600 transition">Курстар</a>
            <a href="#how-it-works" className="block hover:text-blue-600 transition">Оқу жүйесі</a>
            <a href="#teachers" className="block hover:text-blue-600 transition">Мұғалімдер</a>
            <a href="#contact" className="block hover:text-blue-600 transition">Байланыс</a>
            <a
              href="#register"
              className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
            >
              Курска тіркелу
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
