// src/components/CallToActionServices.jsx
import React from "react";

import { useNavigate } from 'react-router-dom';

const CallToActionServices = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-6 text-center"
      style={{ backgroundImage: "url('/calltos-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Build Stunning Digital Experiences with Code & Canvas
        </h2>
        <p className="text-white/80 mb-8">
          We bring together all the tools you need to design and build stunning, high-performance websites.
        </p>
        <button
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded uppercase transition"
          onClick={() => navigate('/contact')}
        >
          Start Your Stories
        </button>
      </div>
    </section>
  );
};

export default CallToActionServices;
