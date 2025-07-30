import React from "react";
import { FaLaptopCode, FaPencilRuler, FaMobileAlt, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Custom Web Development",
    desc: "We build fast, scalable, and high-performance websites tailored to your business needs using modern technologies like React, Vite, and Tailwind CSS.",
  },
  {
    icon: <FaPencilRuler size={28} />,
    title: "UI/UX Design",
    desc: "From wireframes to high-fidelity prototypes, we craft intuitive and visually striking interfaces that enhance the user experience and deliver real value.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive Design",
    desc: "Your website will look stunning and function seamlessly on all devices — from mobile phones to large desktop screens, ensuring a flawless experience.",
  },
  {
    icon: <FaLayerGroup size={28} />,
    title: "Design Systems",
    desc: "We establish scalable design systems with reusable components, consistent styling, and solid documentation to keep your brand experience unified.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#0b0423] text-white px-6 md:px-16 py-20 min-h-[70vh] flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="h-full flex flex-col gap-4">
          <p className="text-sm text-white/60 uppercase tracking-widest mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            WHAT WE DO?
          </h2>
          <p className="text-white/80 mb-10 max-w-md">
            We help startups and businesses bring their digital ideas to life with beautifully designed and efficiently coded web applications that convert and engage.
          </p>

          {/* View All Services Button */}
          <div>
            <Link to="/services">
            <button className="relative px-5 py-4 text-white font-semibold uppercase tracking-wide group">
              <span className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></span>
              <span className="relative z-10">View All Services</span>
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-8 w-full">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col gap-4 group">
              {/* Rotating Border Box with Fixed Icon */}
              <div className="relative w-[70px] h-[70px] rotate-45 max-[1260px]:rotate-0">
                <div className="absolute inset-0 border-2 border-cyan-400 rounded-sm transform transition-transform duration-500 group-hover:rotate-[45deg]"></div>
                <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 -rotate-45 max-[1260px]:rotate-0">
                  {service.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
