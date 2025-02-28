import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Тәжірибелі мұғалімдер',
      text: 'Университет түлектері, халықаралық деңгейдегі ұстаздар',
    },
    {
      title: 'Онлайн платформа',
      text: 'Бейне сабақтар, интерактивті тапсырмалар және тестілер',
    },
    {
      title: 'Жеке бақылау',
      text: 'Әрбір оқушыға жеке жоспар құрылады, прогресс бақыланады',
    },
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Неге бізді таңдау керек?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{feat.title}</h3>
              <p className="text-gray-700">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
