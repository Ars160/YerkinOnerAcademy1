import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Байланыс</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Левая часть: контакты, адрес, телефон */}
          <div>
            <p className="mb-2">
              <strong>Телефон:</strong> +7 (700) 123-45-67
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@juz40.kz
            </p>
            <p className="mb-2">
              <strong>Мекенжай:</strong> Нұр-Сұлтан, Қабанбай батыр, 53
            </p>
            <p className="mb-8">
              Жұмыс уақыты: 09:00 - 18:00 (Дс - Жм)
            </p>
          </div>

          {/* Правая часть: форма */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Хабарласыңыз</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Аты-жөні
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Атыңыз"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Хабарлама
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Сұрағыңызды жазыңыз..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-800 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Жіберу
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
