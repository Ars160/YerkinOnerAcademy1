import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm' 
        : 'py-4 bg-indigo-950/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            YerkinOner<span className={isScrolled ? 'text-blue-600' : 'text-blue-300'}>Academ</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#курстар" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Курстар</a>
          <a href="#оқу-жүйесі" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Оқу жүйесі</a>
          <a href="#мұғалімдер" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Мұғалімдер</a>
          <a href="#байланыс" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-blue-100 hover:text-white'}`}>Байланыс</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#тіркелу"
            className={`
              font-medium px-6 py-3 rounded-full transition-all
              ${isScrolled 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-white hover:bg-blue-50 text-blue-800'}
            `}
          >
            Кіру
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-md focus:outline-none ${
            isScrolled 
              ? 'text-gray-700 focus:ring-2 focus:ring-blue-600/30' 
              : 'text-white focus:ring-2 focus:ring-white/30'
          }`}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`
          md:hidden absolute top-full left-0 w-full shadow-lg border-t animate-fade-in-down
          ${isScrolled ? 'bg-white border-gray-100' : 'bg-indigo-950 border-indigo-900'}
        `}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#курстар" className={`block px-4 py-2 rounded-lg transition ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                : 'text-blue-100 hover:bg-indigo-900 hover:text-white'
            }`}>Курстар</a>
            <a href="#оқу-жүйесі" className={`block px-4 py-2 rounded-lg transition ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                : 'text-blue-100 hover:bg-indigo-900 hover:text-white'
            }`}>Оқу жүйесі</a>
            <a href="#мұғалімдер" className={`block px-4 py-2 rounded-lg transition ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                : 'text-blue-100 hover:bg-indigo-900 hover:text-white'
            }`}>Мұғалімдер</a>
            <a href="#байланыс" className={`block px-4 py-2 rounded-lg transition ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                : 'text-blue-100 hover:bg-indigo-900 hover:text-white'
            }`}>Байланыс</a>
            <div className="px-4 pt-2 pb-1">
              <a
                href="#тіркелу"
                className={`
                  block w-full text-center font-medium py-3 rounded-full transition
                  ${isScrolled 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white hover:bg-blue-50 text-blue-800'}
                `}
              >
                Кіру
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;