import React from 'react';
import FeatureCard from './FeatureCard';

// Импортируйте свои локальные фото
import liveImg from '../assets/images/live.png';
import curatorImg from '../assets/images/kurator.png';

const TeachingSystemSection = () => {
  const features = [
    {
      id: 1,
      backgroundImage:
        'bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]',
      title: 'Платформа',
      description: 'Ыңғайлы платформада сабақтарды кез келген уақытта қарау',
      image: liveImg,
    },
    {
      id: 2,
      backgroundImage:
        'bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]',
      title: 'Тікелей эфир',
      description: 'Әр пәннен аптасына екі рет тікелей эфирге қатысу',
      image: liveImg,
    },
    {
      id: 3,
      backgroundImage:
        'bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]',
      title: 'Байқау тест',
      description:
        'Апта сайын ҰБТ-да келетін сұрақтарды арнайы сабақта талдау',
      image: liveImg,
    },
    {
      id: 4,
      backgroundImage:
        'bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]',
      title: 'Нұсқа талдау',
      description:
        'Апта сайын ҰБТ-да келетін сұрақтарды талдайтын арнайы сабақ',
      image: curatorImg,
    },
    {
      id: 5,
      backgroundImage:
        'bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]',
      title: 'Куратор',
      description: 'Әр оқушыны қадағалайтын жеке куратордың болуы',
      image: curatorImg,
    },
    {
      id: 6,
      backgroundImage:
        'bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]',
      title: 'Қолдау',
      description: 'Оқушыларға техникалық қолдау көрсету',
      image: curatorImg,
    },
  ];

  // Функция для разбивки массива на группы по 2
  const chunkArray = (array, size = 2) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(features, 2);

  return (
    <section className="flex flex-col justify-center items-center p-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1231px] max-md:max-w-full mx-auto">
      <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Оқыту жүйесі
          </h2>
        </div>

        {rows.map((pair, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const leftWidth = isEvenRow ? "w-[45%]" : "w-[55%]";
          const rightWidth = isEvenRow ? "w-[55%]" : "w-[45%]";

          return (
            <div className="mt-5 max-md:max-w-full" key={rowIndex}>
              <div className="flex gap-5 max-md:flex-col">
                <div className={`${leftWidth} max-md:w-full border border-gray-300 rounded-xl p-4 shadow-md`}>
                  <FeatureCard
                    backgroundImage={pair[0].backgroundImage}
                    title={pair[0].title}
                    description={pair[0].description}
                    image={pair[0].image}
                  />
                </div>
                {pair[1] && (
                  <div className={`${rightWidth} max-md:w-full border border-gray-300 rounded-xl p-4 shadow-md`}>
                    <FeatureCard
                      backgroundImage={pair[1].backgroundImage}
                      title={pair[1].title}
                      description={pair[1].description}
                      image={pair[1].image}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeachingSystemSection;
