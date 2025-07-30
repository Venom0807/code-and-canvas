import React from "react";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaLayerGroup,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Frontend Development",
    desc: "We build high-performance, pixel-perfect interfaces using React, Vite, and Tailwind — optimized for performance and scalability.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "UI/UX Design",
    desc: "We design beautiful and intuitive user interfaces focused on clarity, accessibility, and seamless user journeys.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive Web Design",
    desc: "All our designs adapt flawlessly to mobile, tablet, and desktop screens for consistent experiences across devices.",
  },
  {
    icon: <FaLayerGroup size={28} />,
    title: "Design Systems",
    desc: "We build robust, scalable design systems with reusable components to ensure brand consistency and development efficiency.",
  },
  {
    icon: <FaSearch size={28} />,
    title: "UX Audits & Research",
    desc: "We evaluate products using heuristic methods, usability testing, and analytics to uncover pain points and optimize usability.",
  },
  {
    icon: <FaUserFriends size={28} />,
    title: "Client Collaboration",
    desc: "We collaborate closely with clients, developers, and stakeholders to align vision, goals, and execution every step of the way.",
  },
];

const ServicesPortfolio = () => {
  return (
    <section className="bg-[#0b0423] text-white px-6 md:px-16 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col gap-4 group">
            <div className="relative w-[70px] h-[70px] rotate-0">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-sm transition-transform duration-500 group-hover:rotate-[45deg]"></div>
              <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 -rotate-0">
                {service.icon}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPortfolio;
