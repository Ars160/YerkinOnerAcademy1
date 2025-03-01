import React from 'react';
import teacher1 from '../assets/images/banner.png';
import teacher2 from '../assets/images/banner.png';

const Teachers = () => {
  const teachersData = [
    {
      name: 'Айгерім Жұмабекова',
      subject: 'Математика',
      img: teacher1,
      desc: '5 жылдық тәжірибесі бар мұғалім, Назарбаев Университеті түлегі.',
    },
    {
      name: 'Ербол Сейтқали',
      subject: 'Физика',
      img: teacher2,
      desc: 'PhD докторы, халықаралық олимпиада жүлдегерлерін дайындаған.',
    },
  ];

  return (
    <section id="teachers" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Мұғалімдер</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachersData.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-6 transform hover:scale-105 transition duration-300"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-1">{t.name}</h3>
                <p className="text-blue-600 mb-2">{t.subject}</p>
                <p className="text-gray-700">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
