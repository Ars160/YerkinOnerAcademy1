import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Логотип / Название */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="JUZO" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-800">JUZO</span>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-6">
          <a href="#courses" className="hover:text-blue-600 transition">
            Курстар
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">
            Оқу жүйесі
          </a>
          <a href="#teachers" className="hover:text-blue-600 transition">
            Мұғалімдер
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Байланыс
          </a>
        </nav>

        {/* Кнопка "Курска тіркелу" */}
        <div className="hidden md:block">
          <a
            href="#register"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Курска тіркелу
          </a>
        </div>

        {/* Кнопка-иконка меню (для мобильных) */}
        <button className="md:hidden flex items-center px-3 py-2 border rounded text-blue-600 border-blue-600">
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
          >
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
