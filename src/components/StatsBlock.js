import React from "react";

const StatsBlock = () => {
  return (
    <section className="pt-24 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Жетісу облысындағы
            <br />
            <span className="text-blue-60 ">№1 білім беру орталығы</span>
          </h2>
        </div>

        {/* Статистика с градиентным фоном */}
        <div
          className="bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] 
                        rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Карточка 86 000 */}
            <div className="p-6 flex flex-col items-center">
              <p
                className="text-4xl md:text-5xl font-black mb-2
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-green-200 via-blue-200 to-purple-300
                           drop-shadow-md hover:scale-105 transition-transform"
              >
                18 000
              </p>
              <p className="text-gray-200 text-center text-sm md:text-base">
                оқушы 11 жылда
              </p>
            </div>

            {/* Карточка 90% */}
            <div className="p-6 flex flex-col items-center">
              <p
                className="text-4xl md:text-5xl font-black mb-2
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-green-200 via-blue-200 to-purple-300
                           drop-shadow-md hover:scale-105 transition-transform"
              >
                90%
              </p>
              <p className="text-gray-200 text-center text-sm md:text-base">
                республика жүлдегерлері
              </p>
            </div>

            {/* Карточка 140 балл */}
            <div className="p-6 flex flex-col items-center">
              <p
                className="text-4xl md:text-5xl font-black mb-2
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-green-200 via-blue-200 to-purple-300
                           drop-shadow-md hover:scale-105 transition-transform"
              >
                №1
              </p>
              <p className="text-gray-200 text-center text-sm md:text-base">
                алғашқылардың бірі бол
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;
