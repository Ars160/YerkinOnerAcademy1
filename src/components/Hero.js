import React from 'react';
import banner from '../assets/images/banner.jpg';

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white pt-20 pb-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Еркін сөйле<br/>Еркің ойла<br/>Еркін бол!
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Біздің курстарымыз сізге дебат әлемінде сенімді сөйлеу мен дұрыс ойлау дағдыларын үйретеді
          </p>
          <a
            href="#register"
            className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition"
          >
            Курска тіркелу
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Hero"
            className="max-w-md w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
