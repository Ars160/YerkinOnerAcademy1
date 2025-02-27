import React from 'react';
import './index.css'; // ваш Tailwind + глобальные стили

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Teachers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
