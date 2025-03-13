import React from "react";
// Замените на свои реальные файлы (иконки/фото)
import platformImg from "../assets/images/live.png";
import liveImg from "../assets/images/live.png";
import testImg from "../assets/images/live.png";
import analysisImg from "../assets/images/kurator.png";
import curatorImg from "../assets/images/kurator.png";
import supportImg from "../assets/images/kurator.png";

const LearningSystem = () => {
  const cards = [
    {
      id: 1,
      title: "Платформа",
      description:
        "Интерактивті платформада сабақтарды кез келген уақытта қарау",
      img: platformImg,
    },
    {
      id: 2,
      title: "Тікелей эфир",
      description: "Әр сабақтан  аптасына екі рет тікелей эфирге қатысу",
      img: liveImg,
    },
    {
      id: 3,
      title: "Көрініс қарар",
      description: "Апта сайын көрініс қарар анализдеу",
      img: testImg,
    },
    {
      id: 4,
      title: "Спикерлермен кездесу",
      description: "Атақты тұлғалармен кездесу(блогер,актер,журналист)",
      img: analysisImg,
    },
    {
      id: 5,
      title: "Куратор",
      description: "Куратор әр студентің үлгерімін қадағалап, қолдау көрсетеді",
      img: curatorImg,
    },
    {
      id: 6,
      title: "Қолдау",
      description: "Сабақ барысында туындаған кез келген сұраққа жедел жауап",
      img: supportImg,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Заголовок секции */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Оқыту жүйесі
        </h2>

        {/* Сетка карточек (2 столбца на больших экранах) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center bg-[#0F2F4D] text-white rounded-lg shadow-md p-6 space-x-4"
            >
              {/* Иконка / картинка слева */}
              <img
                src={card.img}
                alt={card.title}
                className="w-16 h-16 object-contain flex-shrink-0"
              />

              {/* Текстовая часть */}
              <div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSystem;
