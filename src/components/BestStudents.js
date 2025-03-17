import React, { useRef, useState, useEffect } from 'react';
import images1 from '../assets/images/images1.PNG';
import images2 from '../assets/images/images2.PNG';
import images3 from '../assets/images/images3.PNG';
import images4 from '../assets/images/images4.PNG';
import images5 from '../assets/images/images5.PNG';
import images6 from '../assets/images/images6.PNG';
import images7 from '../assets/images/images7.PNG';
import images8 from '../assets/images/images8.PNG';
import images9 from '../assets/images/images9.PNG';

const BestStudents = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  // Example data
  const students = [
    {
      id: 1,
      name: 'Елдесбек Жаннур',
      subject: 'Математика',
      score: '140 балл',
      desc: 'Сұхбаттасу: Демография...',
      image: images1,
    },
    {
      id: 2,
      name: 'Мұратова Аяулым',
      subject: 'Физика',
      score: '139 балл',
      desc: 'Сұхбаттасу: Деформация...',
      image: images2,
    },
    {
      id: 3,
      name: 'Оңғарбек Абай',
      subject: 'Дүниежүзі тарихы',
      score: '136 балл',
      desc: 'Сұхбаттасу: Демография...',
      image: images3,
    },
    {
      id: 4,
      name: 'Тиырысбекова Айша',
      subject: 'Химия',
      score: '137 балл',
      desc: 'Сұхбаттасу: Термодинамика...',
      image: images4,
    },
    {
      id: 5,
      name: 'Тыныбекова Ерна',
      subject: 'Геометрия',
      score: '135 балл',
      desc: 'Сұхбаттасу: Үшбұрыштар...',
      image: images5,
    },
    {
      id: 6,
      name: 'Мұратова Аяулым',
      subject: 'Физика',
      score: '139 балл',
      desc: 'Сұхбаттасу: Деформация...',
      image: images6,
    },
    {
      id: 7,
      name: 'Тиырысбекова Айша',
      subject: 'Химия',
      score: '137 балл',
      desc: 'Сұхбаттасу: Термодинамика...',
      image: images7,
    },
    {
      id: 8,
      name: 'Тыныбекова Ерна',
      subject: 'Геометрия',
      score: '135 балл',
      desc: 'Сұхбаттасу: Үшбұрыштар...',
      image: images8,
    },
    {
      id: 9,
      name: 'Тыныбекова Ерна',
      subject: 'Геометрия',
      score: '135 балл',
      desc: 'Сұхбаттасу: Үшбұрыштар...',
      image: images9,
    },
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftGradient(container.scrollLeft > 20);
      setShowRightGradient(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Initialize gradient states
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      top: 0,
      left: -320,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      top: 0,
      left: 320,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16  bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Біздің түлектер
          </h2>
        </div>

        {/* Wrapper with navigation and gradients */}
        <div className="relative">
          {/* Left gradient - only visible when scrolled */}
          <div
            className={`absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              showLeftGradient ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Right gradient - only visible when content remains */}
          <div
            className={`absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              showRightGradient ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Left navigation button */}
          <button
            onClick={scrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-indigo-50 text-indigo-700 rounded-full p-3 z-20 shadow-lg border border-indigo-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              showLeftGradient ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards container */}
          <div
            ref={scrollContainerRef}
            className="
              flex gap-5 overflow-x-auto px-2 py-4
              scroll-smooth snap-x snap-mandatory
              scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent
              pb-8
            "
            style={{
              scrollbarWidth: 'thin',
              msOverflowStyle: 'none',
            }}
          >
            {students.map((student) => (
              <div
                key={student.id}
                className="
                  snap-center min-w-[240px] sm:min-w-[280px] bg-white
                  rounded-2xl shadow-md hover:shadow-xl flex-shrink-0
                  transform hover:-translate-y-2 transition duration-300
                  border border-gray-100 overflow-hidden
                "
              >
                <div className="relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white shadow-md">
                      {student.score}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {student.name}
                  </h3>
                  <div className="inline-block px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium mb-2">
                    {student.subject}
                  </div>
                  <p className="text-sm text-gray-600">
                    {student.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right navigation button */}
          <button
            onClick={scrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-indigo-50 text-indigo-700 rounded-full p-3 z-20 shadow-lg border border-indigo-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              showRightGradient ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center items-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {[...Array(Math.ceil(students.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  const cardWidth = 240 + 20; // card width + gap
                  container?.scrollTo({
                    left: index * cardWidth * 3,
                    behavior: 'smooth',
                  });
                }}
                className="w-2 h-2 rounded-full bg-indigo-300 hover:bg-indigo-600 transition-colors"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestStudents;