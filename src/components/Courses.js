import React from "react";
import mathImg from "../assets/images/banner.png";
import physicsImg from "../assets/images/banner.png";
import chemistryImg from "../assets/images/banner.png";

const Courses = () => {
  const courses = [
    {
      title: "Ораторлық өнер",
      img: mathImg,
      desc: "Балаға ойын ашық әрі нақты жеткізуде таптырмас құрал",
    },
    {
      title: "Дебат",
      img: physicsImg,
      desc: "Логикалық және сыни ойлауды, коммуникативті мәдениетті және көпшілік алдында сөйлеу дағдыларын дамыту",
    },
    {
      title: "Актерлық шеберлік",
      img: chemistryImg,
      desc: "Студент бойындағы қабілеттерінің көмегімен белгілі бір кезең мен уақытқа тән тірі образ(кейіп) жасау өнері",
    },
  ];

  return (
    <section
      id="courses"
      className="py-16 bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Курстар
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              {/* Картинка сверху */}
              <img
              src={course.img}
              alt={course.title}
              className="w-full h-auto max-h-64 object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  {course.title}
                </h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
                <a
                  href="#register"
                  className="inline-block bg-indigo-600 text-white font-medium py-2 px-5 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Тіркелу
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
