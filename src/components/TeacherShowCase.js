"use client";

import React from "react";
import TeacherCard from "./TeacherCard";
import img1 from "../assets/images/IMG_2381.png";
import img2 from "../assets/images/IMG_0599.PNG";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.PNG";
import img6 from "../assets/images/img6.png";


const TeacherShowcase = () => {
  // ОДИН массив с учителями
  const teachers = [
    {
      image: img1,
      subject: "Дебат және Ораторлық өнер",
      name: "Ержан Дәулетбаев",
      students: "8500+ оқушы",
      experience: "тәжірибесі: 11 жыл",
    },
    {
      image: img2,
      subject: "Дебат",
      name: "Орманова Еркежан",
      students: "2530 оқушы",
      experience: "тәжірибесі: 6 жыл",
    },
    {
      image: img3,
      subject: "Дебат",
      name: "Омархан Мейрамбек",
      students: "1900+ оқушы",
      experience: "тәжірибесі: 7 жыл",
    },
    {
      image: img4,
      subject: "Дебат",
      name: "Байбол Жанбол",
      students: "3000 оқушы",
      experience: "тәжірибесі: 7 жыл",
    },
    {
      image: img5,
      subject: "Дебат",
      name: "Мекзам Нұржан",
      students: "1853 оқушы",
      experience: "тәжірибесі: 6 жыл",
    },
    {
      image: img6,
      subject: "Дебат",
      name: "Назым Мұратқызы",
      students: "3446 оқушы",
      experience: "тәжірибесі: 8 жыл",
    },
  ];

  return (
    <section className="flex flex-col items-center px-20 py-36 w-full bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1233px] max-md:max-w-full">
        <h1 className="text-5xl font-bold leading-none text-white max-md:text-4xl">
          Грантқа жеткізетін<br />үздік мұғалімдер
        </h1>

        {/* 
          Сетка из 4 колонок на больших экранах и 1 колонка на маленьких (max-md). 
          Можно менять grid-cols-4 на grid-cols-3, если нужно другое количество колонок.
        */}
        <div className="grid grid-cols-3 gap-5 mt-20 max-md:grid-cols-1">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              image={teacher.image}
              subject={teacher.subject}
              name={teacher.name}
              students={teacher.students}
              experience={teacher.experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherShowcase;
