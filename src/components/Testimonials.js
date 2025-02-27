import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анар',
      text: 'JUZO арқасында ҰБТ-дан жоғары балл жинап, грантқа түстім!',
    },
    {
      name: 'Дәурен',
      text: 'Мұғалімдер өте түсінікті түсіндіреді, кез келген уақытта сұрақ қоюға болады.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Оқушылардың пікірі
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">“{item.text}”</p>
              <p className="text-blue-800 font-semibold">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
