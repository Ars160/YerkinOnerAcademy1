"use client";

import React from "react";

const TeacherCard = ({ image, subject, name, students, experience }) => {
  return (
    <article className="flex flex-col items-start text-sm leading-none text-white max-md:mt-10">
      <img
        src={image}
        alt={`${name} - ${subject} teacher`}
        className="object-contain self-stretch w-full rounded-3xl aspect-[1.05]"
      />
      <h2 className="mt-7 text-2xl">{subject}</h2>
      <p className="mt-5">{name}</p>
      <div className="flex flex-col mt-3 ml-5 leading-none max-md:ml-2.5">
        <p className="self-start">{students}</p>
        <p className="mt-1.5">{experience}</p>
      </div>
    </article>
  );
};

export default TeacherCard;
