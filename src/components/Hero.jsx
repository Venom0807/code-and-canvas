import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const slides = [
  {
    subtitle: "For Website and UI/UX Design",
    title: "CODE & CANVAS",
    desc: "Bridging code with creativity — design and development studio.",
  },
  {
    subtitle: "Custom Web Solutions",
    title: "FULL STACK APPS",
    desc: "We craft functional web platforms with modern UI and performance.",
  },
  {
    subtitle: "Design-Led Development",
    title: "UI/UX FOCUSED",
    desc: "We turn your ideas into visually powerful user experiences.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-[80vh] flex items-center text-white relative px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative z-10 text-left max-w-2xl flex flex-col justify-center h-[90vh]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base text-cyan-300 tracking-widest mb-4 uppercase">
            {slides[index].subtitle}
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {slides[index].title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8">
            {slides[index].desc}
          </p>

          {/* Animated Button */}
          <div className="mb-12">
            <Link to="/about">
  <button className="relative px-6 py-3 text-white font-semibold uppercase tracking-wide group">
    {/* Top-left corner */}
    <span className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></span>

    {/* Bottom-right corner */}
    <span className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></span>

    <span className="relative z-10">See More About Us</span>
  </button>
</Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center space-x-6 text-gray-300 text-sm font-mono">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`pb-1 ${
                  i === index
                    ? "border-b-2 border-white text-white"
                    : "border-b border-gray-500"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
