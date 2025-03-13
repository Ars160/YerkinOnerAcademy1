import React from 'react';

/**
 * Компонент карточки.
 * Если backgroundImage начинается с 'bg-gradient', используем inline-градиент.
 * Иначе считаем, что это URL-адрес картинки (фон).
 */
const FeatureCard = ({ backgroundImage, title, description, image }) => {
  // Проверяем, начинается ли backgroundImage с 'bg-gradient'
  const isGradient = backgroundImage.startsWith('bg-gradient');

  // Если это градиент, делаем inline-стиль. Иначе — картинка
  const style = isGradient
    ? {
        backgroundImage: 'linear-gradient(to bottom right, #04016C, #2C0F9B, #4A16BD)',
      }
    : {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

  return (
    <div className="relative flex flex-col justify-center rounded-2xl overflow-hidden min-h-[250px]">
      {/* Фон */}
      <div className="absolute inset-0" style={style} />

      {/* Контент */}
      <div className="relative z-10 p-6 md:p-8 text-white flex gap-4 md:gap-6 items-center">
        {/* Левая часть: Текст */}
        <div className="w-1/2 md:w-2/3">
          {title && (
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Правая часть: Картинка */}
        <div className="w-1/2 md:w-1/3">
          <img
            src={image}
            alt={title || 'Feature illustration'}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
