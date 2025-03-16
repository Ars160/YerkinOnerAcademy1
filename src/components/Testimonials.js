import React from "react";
import TestimonialCard from "./TestimonialsCard";
import mathImg from '../assets/images/image1.jpg';
import img3 from '../assets/images/icon.jpg';


const testimonials = [
  {
    id: 1,
    name: "Арсен Орынбас",
    imageSrc:
      mathImg,
    testimonial:
      "Мен дебат және ораторлық өнер курсын өткеннен кейін кез келген ортада өз ойымды еркін әрі сенімді жеткізуге дағдыландым. Жаттығулар өте қызықты, ал тәжірибелі тәлімгерлер менің қабілетімді ашуға көмектесті. Қазір әртүрлі шараларда сөз сөйлеуден еш қорықпаймын!",
    className: "pb-32",
  },
  {
    id: 2,
    name: "Әлібек Мұрат",
    imageSrc:
      mathImg,
    testimonial:
      "Бұл курс ораторлық өнерімнің ғана емес, логикалық ойлауымның да дамуына зор ықпал етті. Практикалық тапсырмалар мен пікірталастар арқылы өзімнің көшбасшылық қабілетімді жетілдірдім. Енді кез келген аудиторияны баурап алу мен үшін оңай!",
    className: "pb-36",
  },
  {
    id: 3,
    name: "Айгерім Еркін",
    imageSrc:
      img3,
    testimonial:
      "Дебат және ораторлық өнер курсы – өзімді жан-жақты дамытудың таптырмас мүмкіндігі болды. Оқу барысында айтқан сөзімнің мәнін нақты жеткізуді, дауыс ырғағын дұрыс қолдануды және тыңдаушылармен байланыс орнатуды үйрендім. Енді маңызды іс-шараларда сөйлеуге сенімдімін.",
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
