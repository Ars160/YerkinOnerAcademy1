import React from 'react';
import mathImg from '../assets/images/banner.png';
import physicsImg from '../assets/images/banner.png';
import chemistryImg from '../assets/images/banner.png';

const Courses = () => {
  const courses = [
    {
      title: 'Математика',
      img: mathImg,
      desc: 'ҰБТ-ға тереңдетілген дайындық, есептерді шешу тәсілдері...',
    },
    {
      title: 'Физика',
      img: physicsImg,
      desc: 'Теория және практика, формулалар және есептер...',
    },
    {
      title: 'Химия',
      img: chemistryImg,
      desc: 'Химиялық реакциялар, зертханалық тәжірибе...',
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Курстар</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
                <a
                  href="#register"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Тіркелу
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
