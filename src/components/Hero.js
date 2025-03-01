import React from "react";
import banner from "../assets/images/banner.png";
import { FiAward, FiUsers } from "react-icons/fi";

const HeroEduStyle = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute hidden lg:block top-1/2 left-1/3 transform -translate-y-1/3 -translate-x-1/2 z-0 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-full border border-blue-400/30" />
      <div className="absolute hidden md:block top-0 right-0 z-0 opacity-30">
        <svg
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          viewBox="0 0 200 200"
        >
          <path
            fill="#ffffff"
            d="M39.4,-70.8C50.1,-61.8,57.1,-50.1,62.1,-38C67.2,-25.9,70.3,-13.4,69.3,-1.4C68.3,10.6,63.2,21.3,56,30.6C48.8,39.9,39.5,47.9,28.3,52.1C17.1,56.3,3.9,56.7,-8.5,59.3C-21,61.9,-35.2,66.8,-45.8,63.6C-56.3,60.4,-63.2,49.1,-67,37.4C-70.8,25.8,-71.6,13.9,-70.4,2.2C-69.2,-9.5,-65,-19,-57.2,-27.5C-49.5,-36.1,-38.3,-43.7,-26.5,-49.8C-14.8,-55.9,-2.4,-60.5,9.5,-64C21.3,-67.4,33.2,-69.8,39.4,-70.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 md:px-16 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10 flex flex-col md:flex-row-reverse">
        {/* Изображение - сверху на моб. */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center">
          <img src={banner} alt="Hero" className="z-10 w-full object-contain" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#4A16BD]" />
          {[
            {
              icon: <FiAward className="text-blue-600 text-lg md:text-2xl" />,
              value: "+10000",
              label: "студент",
              position: "top-2 right-2 md:top-6 md:right-6",
              size: "w-24 p-1 md:w-40 md:p-4",
            },
            {
              icon: <FiUsers className="text-purple-600 text-lg md:text-2xl" />,
              value: "+7000",
              label: "адамдардың пікірі",
              position: "bottom-4 left-2 md:bottom-10 md:left-6",
              size: "w-24 p-1 md:w-40 md:p-4",
            },
          ].map(({ icon, value, label, position, size }, i) => (
            <div
              key={i}
              className={`absolute ${position} bg-white shadow-md rounded-md ${size} flex items-center space-x-2 text-center`}
            >
              {icon}
              <div>
                <p className="text-[8px] md:text-sm font-semibold text-gray-800">
                  {value}
                </p>
                <p className="text-[7px] md:text-xs text-gray-500">{label}</p>
              </div>
            </div>
          ))}
          <div className="absolute top-8 left-1 bg-white shadow-md rounded-md p-1 w-20 text-center md:top-16 md:p-3 md:w-36">
            <p className="text-[7px] md:text-xs italic text-gray-600">
              “Қорқынышты жеңудің жолы — оны түсіну”
            </p>
          </div>
        </div>

        {/* Текст - снизу на моб. и слева на больших экранах */}
        <div className="space-y-6 text-center md:text-left order-last md:order-first">
          <h1 className="font-extrabold leading-tight mt-10">
            {["Еркін сөйле", "Еркің ойла", "Еркін бол!"].map((text, i) => (
              <span
                key={i}
                className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-purple-300"
              >
                {text}
              </span>
            ))}
          </h1>
          <p className="text-base md:text-lg text-gray-100 max-w-xl leading-relaxed mx-auto md:mx-0">
            Біздің курстарымыз сізге дебат әлемінде сенімді сөйлеу мен дұрыс
            ойлау дағдыларын үйретеді.
            <br />
            <p className="mt-4">
              Қазақстанның ең үздік университеттерінің тәжірибелі мамандарынан
              дәріс алыңыз.
            </p>
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#consultation"
              className="inline-block bg-white hover:bg-gray-100 transition text-indigo-700 font-semibold rounded-md py-3 px-8 md:py-4 md:px-12 lg:py-5 lg:px-16 text-base md:text-lg"
            >
              Толық ақпарат алу
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEduStyle;
