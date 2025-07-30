import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Code & Canvas built us a fast, responsive website that looks amazing on every device. Highly recommend!",
    name: "Krista Attorn",
    role: "Founder, Bloom Agency",
    img: "ta-1.jpg",
  },
  {
    text: "Their UI/UX design brought a fresh and intuitive experience to our platform. Our users love it.",
    name: "James Warren",
    role: "Product Manager, TechNova",
    img: "ta-2.jpg",
  },
  {
    text: "Delivered a full-stack website on time with zero bugs. Everything just worked out perfectly.",
    name: "Lina Moore",
    role: "CTO, BrightLearn",
    img: "ta-3.jpg",
  },
  {
    text: "Superb attention to detail and a collaborative design process. They understood our brand vision from day one.",
    name: "Jason Ray",
    role: "UX Lead, Fintelligence",
    img: "ta-1.jpg",
  },
  {
    text: "From landing pages to animations, everything felt modern and smooth. They truly go the extra mile.",
    name: "Diana Clark",
    role: "Marketing Head, TrendFlick",
    img: "ta-2.jpg",
  },
  {
    text: "One of the best teams we’ve worked with — creative, fast, and always open to feedback.",
    name: "Tom Baker",
    role: "Startup Founder, LaunchPad",
    img: "ta-3.jpg",
  },
];


const TestimonialSlider = () => {
  return (
    <section
      className="relative text-white py-20 px-6 md:px-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('testimonials.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm text-white/60 tracking-widest uppercase mb-2">
            Loved by Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Clients Say?
            <span className="block w-10 h-[3px] bg-cyan-400 mt-3 mx-auto"></span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {[0, 1].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex flex-col md:flex-row justify-center gap-8 ">
                {testimonials
                  .slice(slideIndex * 3, slideIndex * 3 + 3)
                  .map((t, i) => (
                    <div
                      key={i}
                      className="border border-white/30 bg-white/5 p-6 rounded-md w-full md:w-[30%]  flex flex-col justify-between mb-15"
                    >
                      <FaQuoteLeft className="text-white text-2xl mb-4 opacity-60" />
                      <p className="italic text-white/80 mb-6">{t.text}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover border border-cyan-400"
                        />
                        <div>
                          <h4 className="font-semibold">{t.name}</h4>
                          <p className="text-sm text-white/60">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
