import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} JUZO. Барлық құқықтар қорғалған.
        </p>
        <div className="space-x-4">
          <a href="#privacy" className="hover:text-white transition">
            Құпиялылық саясаты
          </a>
          <a href="#terms" className="hover:text-white transition">
            Қолдану ережелері
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
