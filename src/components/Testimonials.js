import React from "react";
import TestimonialCard from "./TestimonialsCard";
import mathImg from '../assets/images/banner.png';


const testimonials = [
  {
    id: 1,
    name: "Ronald Richards",
    imageSrc:
      mathImg,
    testimonial:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    className: "pb-32",
  },
  {
    id: 2,
    name: "Wade Warren",
    imageSrc:
      mathImg,
    testimonial:
      "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse.",
    className: "pb-36",
  },
  {
    id: 3,
    name: "Jacob Jones",
    imageSrc:
      mathImg,
    testimonial:
      "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit.",
    className: "pb-40",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-900 mb-12">
          Пікірлер
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              className={testimonial.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
