import React from "react";
import banner from "../assets/images/banner.png";
import { FiAward, FiUsers } from "react-icons/fi";

const HeroEduStyle = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute hidden md:block top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2 z-0 w-[500px] h-[500px] rounded-full border border-blue-400/30" />
      <div className="absolute hidden md:block top-0 right-0 z-0 opacity-30">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            fill="#ffffff"
            d="M39.4,-70.8C50.1,-61.8,57.1,-50.1,62.1,-38C67.2,-25.9,70.3,-13.4,69.3,-1.4C68.3,10.6,63.2,21.3,56,30.6C48.8,39.9,39.5,47.9,28.3,52.1C17.1,56.3,3.9,56.7,-8.5,59.3C-21,61.9,-35.2,66.8,-45.8,63.6C-56.3,60.4,-63.2,49.1,-67,37.4C-70.8,25.8,-71.6,13.9,-70.4,2.2C-69.2,-9.5,-65,-19,-57.2,-27.5C-49.5,-36.1,-38.3,-43.7,-26.5,-49.8C-14.8,-55.9,-2.4,-60.5,9.5,-64C21.3,-67.4,33.2,-69.8,39.4,-70.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <h1 className="font-extrabold leading-tight">
            {[
              { text: "Еркін сөйле", ml: "ml-0" },
              { text: "Еркің ойла", ml: "sm:ml-12 md:ml-36" },
              { text: "Еркін бол!", ml: "sm:ml-24 md:ml-48 lg:ml-60" },
            ].map(({ text, ml }, i) => (
              <span
                key={i}
                className={`block text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl ${ml} text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-purple-300`}
              >
                {text}
              </span>
            ))}
          </h1>
          <p className="text-base md:text-lg text-gray-100 max-w-xl leading-relaxed">
            Біздің курстарымыз сізге дебат әлемінде сенімді сөйлеу мен дұрыс
            ойлау дағдыларын үйретеді.
            <br />
            Қазақстанның ең үздік университеттерінің тәжірибелі мамандарынан
            дәріс алыңыз.
          </p>
          <a
            href="#consultation"
            className="inline-block bg-white hover:bg-gray-100 transition text-indigo-700 font-semibold rounded-md py-3 px-8 md:py-4 md:px-12 lg:py-5 lg:px-16 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Толық ақпарат алу
          </a>
        </div>
        <div className="relative w-full max-w-xl">
          <img src={banner} alt="Hero" className="z-10 w-full object-contain" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#4A16BD]" />
          {[
            {
              icon: <FiAward className="text-blue-600 text-2xl" />,
              value: "+10000",
              label: "студент",
              position: "top-8 right-4",
            },
            {
              icon: <FiUsers className="text-purple-600 text-2xl" />,
              value: "+7000",
              label: "адамдардың пікірі",
              position: "bottom-10 left-4",
            },
          ].map(({ icon, value, label, position }, i) => (
            <div
              key={i}
              className={`absolute ${position} bg-white shadow-md rounded-md p-4 w-40 flex items-center space-x-2`}
            >
              {icon}
              <div>
                <p className="text-sm font-semibold text-gray-800">{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            </div>
          ))}
          <div className="absolute bottom-40 left-10 bg-white shadow-md rounded-md p-3 w-36 text-center">
            <p className="text-xs italic text-gray-600">
              “Қорқынышты жеңудің жолы — оны түсіну”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEduStyle;
