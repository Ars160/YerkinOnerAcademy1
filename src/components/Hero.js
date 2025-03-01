import React from 'react';
import banner from '../assets/images/banner.png';
import { FiAward, FiUsers } from 'react-icons/fi';

const HeroEduStyle = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white overflow-hidden">
      {/* Декоративный полу-прозрачный круг (или дуга) за текстом */}
      <div className="absolute hidden md:block top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2 z-0">
        <div className="w-[500px] h-[500px] rounded-full border-[1px] border-blue-400/30"></div>
      </div>

      <div className="absolute hidden md:block top-0 right-0 z-0">
  <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-30">
    <path fill="#ffffff" d="M39.4,-70.8C50.1,-61.8,57.1,-50.1,62.1,-38C67.2,-25.9,70.3,-13.4,69.3,-1.4C68.3,10.6,63.2,21.3,56,30.6C48.8,39.9,39.5,47.9,28.3,52.1C17.1,56.3,3.9,56.7,-8.5,59.3C-21,61.9,-35.2,66.8,-45.8,63.6C-56.3,60.4,-63.2,49.1,-67,37.4C-70.8,25.8,-71.6,13.9,-70.4,2.2C-69.2,-9.5,-65,-19,-57.2,-27.5C-49.5,-36.1,-38.3,-43.7,-26.5,-49.8C-14.8,-55.9,-2.4,-60.5,9.5,-64C21.3,-67.4,33.2,-69.8,39.4,-70.8Z" transform="translate(100 100)" />
  </svg>
</div>


      {/* Контейнер контента */}
      <div className="relative z-10 container mx-auto px-24 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Левая колонка: Заголовок, текст, кнопки, поиск */}
        <div className="space-y-6">
          {/* Заголовок */}
          <h1 className="font-extrabold leading-tight">
  {/* Первая строка */}
  <span
    className="
      block 
      text-xl      /* На самых маленьких экранах */
      sm:text-3xl  /* >=640px */
      md:text-5xl  /* >=768px */
      lg:text-6xl  /* >=1024px */
      xl:text-7xl  /* >=1280px */
      
      ml-0         /* Мобильные экраны */
      sm:ml-0      /* На планшетах небольшой отступ */
      md:ml-0     /* На ноутбуках больше */
      lg:ml-8     /* На десктопах ещё больше */
      
      text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-purple-300
    "
  >
    Еркін сөйле
  </span>

  {/* Вторая строка */}
  <span
    className="
      block
      text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl
      ml-0 sm:ml-12 md:ml-36 lg:ml-36
      text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-purple-300
    "
  >
    Еркің ойла
  </span>

  {/* Третья строка */}
  <span
    className="
      block
      text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl
      ml-0 sm:ml-24 md:ml-48 lg:ml-60
      text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-purple-300
    "
  >
    Еркін бол!
  </span>
</h1>


          
          {/* Подзаголовок / описание */}
          <p className="text-base md:text-lg text-gray-100 max-w-xl leading-relaxed">
            Біздің курстарымыз сізге дебат әлемінде сенімді сөйлеу мен дұрыс ойлау дағдыларын үйретеді.<br/>
            Қазақстанның ең үздік университеттерінің тәжірибелі мамандарынан дәріс алыңыз.
          </p>

          {/* Кнопки */}
          <a
              href="#consultation"
              className="
                inline-block
                bg-white 
                hover:bg-gray-100 
                transition-colors 
                text-indigo-700 
                font-semibold 
                rounded-md

                py-2 px-4       /* Мобильная версия */
                sm:py-3 sm:px-8 /* >=640px (планшеты) */
                md:py-4 md:px-12 /* >=768px (ноутбуки) */
                lg:py-5 lg:px-16 /* >=1024px (большие экраны) */

                text-sm 
                sm:text-base 
                md:text-lg 
                lg:text-xl
              "
            >
              Толық ақпарат алу
            </a>
        </div>

        {/* Правая колонка: Изображение */}
        {/* Правая колонка: Изображение + карточки */}
<div className="relative w-full max-w-xl">
  {/* Само изображение */}
  <img
    src={banner}
    alt="Hero"
    className="z-10 w-full object-contain"
  />
  {/* Градиентная подложка (если нужно «стиреть» низ фото) */}
  <div
    className="absolute bottom-0 left-0 w-full h-24
               bg-gradient-to-b from-transparent to-[#4A16BD]"
  />

  {/* Карточка #1 */}
  <div className="absolute top-8 right-4 bg-white shadow-md rounded-md p-4 w-40 flex items-center space-x-2">
    <FiAward className="text-blue-600 text-2xl" />
    <div>
      <p className="text-sm font-semibold text-gray-800">+10000</p>
      <p className="text-xs text-gray-500">студент</p>
    </div>
  </div>
  
  {/* Карточка #2 */}
  <div className="absolute bottom-10 left-4 bg-white shadow-md rounded-md p-4 w-44 flex items-center space-x-2">
    <FiUsers className="text-purple-600 text-2xl" />
    <div>
      <p className="text-sm font-semibold text-gray-800">+7000</p>
      <p className="text-xs text-gray-500">адамдардың пікірі</p>
    </div>
  </div>
  
  {/* Карточка #3 */}
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