"use client";

import React from "react";
import TeacherCard from "./TeacherCard";
import chemistryImg from '../assets/images/kurator.png';

const TeacherShowcase = () => {
  const teachersFirstRow = [
    {
      image:
        chemistryImg,
      subject: "Математика",
      name: "Нұрдәулет Құлахмет",
      students: "8500+ оқушы",
      experience: "тәжірибесі: 4 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Химия",
      name: "Сансызбаева Жанар",
      students: "10000 оқушы",
      experience: "тәжірибесі: 8 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Дүниежүзі тарихы",
      name: "Ізгілік Бекслан",
      students: "10000 оқушы",
      experience: "тәжірибесі: 5 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Биология",
      name: "Рахмет Айтуған",
      students: "3000 оқушы",
      experience: "тәжірибесі: 3 жыл",
    },
  ];

  const teachersSecondRow = [
    {
      image:
        chemistryImg,
      subject: "Математика",
      name: "Нұрдәулет Олжас",
      students: "10 000 оқушы",
      experience: "тәжірибесі: 8 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "География",
      name: "Өмірсеріков Бахтияр",
      students: "4000+ оқушы",
      experience: "тәжірибесі: 6 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Математикалық сауаттылық",
      name: "Абайұлы Исламбек",
      students: "10000+ оқушы",
      experience: "тәжірибесі: 4 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Ағылшын",
      name: "Амирбекова Ажар",
      students: "8500 оқушы",
      experience: "тәжірибесі: 5 жыл",
    },
  ];

  const teachersThirdRow = [
    {
      image:
        chemistryImg,
      subject: "Физика",
      name: "Ізгілік Сланбек",
      students: "3500 оқушы",
      experience: "тәжірибесі: 3 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Информатика",
      name: "Ертай Тасқын",
      students: "13 000 оқушы",
      experience: "тәжірибесі: 8 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Әдебиет",
      name: "Жайлаубек Тоғжан",
      students: "2500+ оқушы",
      experience: "тәжірибесі: 4 жыл",
    },
    {
      image:
        chemistryImg,
      subject: "Қазақстан тарихы",
      name: "Шора Абай",
      students: "12000+ оқушы",
      experience: "тәжірибесі: 4 жыл",
    },
  ];

  // Special case for the math literacy teacher which has a different text size
  const renderMathLiteracyTeacher = () => {
    const teacher = teachersSecondRow[2];
    return (
      <article className="flex flex-col grow items-start text-xl leading-none text-white max-md:mt-10">
        <img
          src={teacher.image}
          alt={`${teacher.name} - ${teacher.subject} teacher`}
          className="object-contain self-stretch w-full rounded-3xl aspect-[1.04]"
        />
        <h2 className="mt-8">{teacher.subject.split(" ")[0]}</h2>
        <p className="mt-1.5">{teacher.subject.split(" ")[1]}</p>
        <p className="mt-4 text-sm">{teacher.name}</p>
        <div className="flex flex-col mt-2.5 ml-5 text-sm leading-none max-md:ml-2.5">
          <p className="self-start">{teacher.students}</p>
          <p className="mt-1.5">{teacher.experience}</p>
        </div>
      </article>
    );
  };

  const renderTeacherRow = (teachers, rowIndex) => {
    return (
      <div className="flex gap-5 max-md:flex-col">
        {teachers.map((teacher, index) => {
          // Special case for math literacy teacher
          if (rowIndex === 1 && index === 2) {
            return (
              <div
                key={`${rowIndex}-${index}`}
                className={`${index > 0 ? "ml-5" : ""} w-3/12 max-md:ml-0 max-md:w-full`}
              >
                {renderMathLiteracyTeacher()}
              </div>
            );
          }

          return (
            <div
              key={`${rowIndex}-${index}`}
              className={`${index > 0 ? "ml-5" : ""} w-3/12 max-md:ml-0 max-md:w-full`}
            >
              <TeacherCard
                image={teacher.image}
                subject={teacher.subject}
                name={teacher.name}
                students={teacher.students}
                experience={teacher.experience}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 py-36 w-full bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1233px] max-md:max-w-full">
        <h1 className="self-start text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
          Грантқа жеткізетін<br/>
          үздік мұғалімдер
        </h1>
          

        <div className="mt-20 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          {renderTeacherRow(teachersFirstRow, 0)}
        </div>

        <div className="mt-16 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          {renderTeacherRow(teachersSecondRow, 1)}
        </div>

        <div className="mt-10 max-md:max-w-full">
          {renderTeacherRow(teachersThirdRow, 2)}
        </div>
      </div>
    </section>
  );
};

export default TeacherShowcase;
