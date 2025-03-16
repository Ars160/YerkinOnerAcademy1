"use client";

import React from "react";
import TeacherCard from "./TeacherCard";
import teacherImg from "../assets/images/kurator.png"; // Для примера одна и та же картинка

const TeacherShowcase = () => {
  // ОДИН массив с учителями
  const teachers = [
    {
      image: teacherImg,
      subject: "Математика",
      name: "Нұрдәулет Құлахмет",
      students: "8500+ оқушы",
      experience: "тәжірибесі: 4 жыл",
    },
    {
      image: teacherImg,
      subject: "Химия",
      name: "Сансызбаева Жанар",
      students: "10000 оқушы",
      experience: "тәжірибесі: 8 жыл",
    },
    {
      image: teacherImg,
      subject: "Дүниежүзі тарихы",
      name: "Ізгілік Бекслан",
      students: "10000 оқушы",
      experience: "тәжірибесі: 5 жыл",
    },
    {
      image: teacherImg,
      subject: "Биология",
      name: "Рахмет Айтуған",
      students: "3000 оқушы",
      experience: "тәжірибесі: 3 жыл",
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
        <div className="grid grid-cols-4 gap-5 mt-20 max-md:grid-cols-1">
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
