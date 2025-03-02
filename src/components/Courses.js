import React from 'react';
import mathImg from '../assets/images/banner.png';
import physicsImg from '../assets/images/IMG_2381.png';
import chemistryImg from '../assets/images/kurator.png';

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
    <section
      id="courses"
      className="py-16 bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]"
    >
      <div className="container mx-auto px-4">
        {/* Заголовок и подзаголовок */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Курстар
          </h2>
          <p className="text-white mt-2">
            Біздің ең танымал бағыттар
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              {/* Картинка сверху */}
              <img
              src={course.img}
              alt={course.title}
              className="w-full h-auto max-h-64 object-contain rounded-t-lg"
              />

              {/* Текстовое описание */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-3 text-blue-800">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {course.desc}
                </p>
                <a
                  href="#register"
                  className="inline-block bg-indigo-600 text-white font-medium py-2 px-5 rounded-md hover:bg-indigo-700 transition-colors"
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
