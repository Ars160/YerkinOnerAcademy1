import React from 'react';

const StatsBlock = () => {
  return (
    <section className="mt-16 py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Сетка 2×2 на больших экранах, 1×4 на мобильных */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Карточка №1: Заголовок */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-blue-900">
              ҰБТ-ға дайындатын №1 <br />
              білім беру орталығы
            </h2>
          </div>
          
          {/* Карточка №2: 86 000 оқушы */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
                86 000
              </p>
              <p className="text-sm md:text-base text-gray-700">
                оқушы 6 жылда
              </p>
            </div>
          </div>
          
          {/* Карточка №3: 90% грант */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
                90%
              </p>
              <p className="text-sm md:text-base text-gray-700">
                түлектер грант иегерлері
              </p>
            </div>
          </div>
          
          {/* Карточка №4: 140 балл */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
                140 балл
              </p>
              <p className="text-sm md:text-base text-gray-700">
                иегерін шығаратын білім орталығы
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBlock;
