import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email });
    setIsFormSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">DebateSchool</h1>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-300 transition">О курсе</a>
            <a href="#benefits" className="hover:text-blue-300 transition">Преимущества</a>
            <a href="#program" className="hover:text-blue-300 transition">Программа</a>
            <a href="#teachers" className="hover:text-blue-300 transition">Преподаватели</a>
            <a href="#contact" className="hover:text-blue-300 transition">Контакты</a>
          </div>
          <div>
            <a href="#register" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-lg transition">Записаться</a>
          </div>
        </div>
      </header>

      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Освойте искусство дебатов и ораторского мастерства</h2>
            <p className="text-xl mb-8">Развивайте критическое мышление, учитесь структурированно излагать мысли и уверенно выступать перед публикой</p>
            <a href="#register" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg inline-block transition">Начать обучение</a>
          </div>
          <div className="md:w-1/2">
            <img src="/api/placeholder/600/400" alt="Курсы дебатов" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">О курсе дебатов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Для кого этот курс</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Для студентов, желающих развить навыки аргументации</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Для будущих юристов и политологов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Для тех, кто хочет научиться уверенно выступать публично</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Для всех, кто хочет развить критическое мышление</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Формат обучения</h3>
              <p className="mb-4">Курс состоит из 8 недель интенсивного обучения с практическими занятиями и мини-турнирами.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>2 занятия в неделю по 2 часа</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Индивидуальная обратная связь от тренеров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>Участие в итоговом турнире</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Опытные тренеры</h3>
              <p>Наши преподаватели — действующие судьи и победители республиканских и международных турниров</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Практические навыки</h3>
              <p>Более 70% времени на курсе посвящено практике и отработке навыков в реальных дебатах</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">Сертификат</h3>
              <p>По окончании курса вы получите сертификат, подтверждающий ваши навыки в дебатах</p>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Программа курса</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Модуль 1: Основы дебатов</h3>
              <p>Введение в формат дебатов, структура аргументов, логические ошибки, основы публичных выступлений</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Модуль 2: Построение аргументации</h3>
              <p>Работа с фактами, построение убедительных аргументов, анализ позиции оппонента</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Модуль 3: Техники опровержения</h3>
              <p>Стратегии опровержения, контраргументация, работа с возражениями</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Модуль 4: Ораторское мастерство</h3>
              <p>Убедительная речь, работа с голосом, контроль эмоций, язык тела</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Модуль 5: Тренировочные дебаты</h3>
              <p>Практика в различных форматах, обратная связь, подготовка к турниру</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="register" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Записаться на курс</h2>
          <p className="text-center mb-8 text-xl">Оставьте свои контактные данные, и мы свяжемся с вами для уточнения деталей</p>
          <div className="max-w-md mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            {isFormSubmitted ? (
              <div className="text-center text-green-600 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Спасибо за заявку!</h3>
                <p>Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">Номер телефона</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="+7 () ___--_"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">Отправить заявку</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
