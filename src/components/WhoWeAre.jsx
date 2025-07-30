import React from "react";
import { FaCode, FaLightbulb } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="bg-[#100028] px-6 md:px-24 py-20 text-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="about1.jpg"
            alt="workspace"
            className="w-full h-[280px] sm:h-[620px] object-cover rounded-md sm:row-span-2"
          />
          <img
            src="about2.jpg"
            alt="workspace"
            className="w-full h-[300px] object-cover rounded-md"
          />
          <img
            src="A man coding on a computer-1.webp"
            alt="workspace"
            className="w-full h-[300px] object-cover rounded-md"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-between h-full w-full max-w-[600px] space-y-8">
          <div>
            <p className="text-1xl text-white/60 tracking-widest mb-2 uppercase">
              ABOUT CODE & CANVAS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WHO WE ARE?
              <span className="block w-10 h-[3px] bg-cyan-400 mt-2"></span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-start gap-4 group flex-1">
              <div className="relative w-[70px] h-[70px]">
                <div className="absolute inset-0 border-2 border-[#281A3E] rounded-sm transform transition-transform duration-500 group-hover:rotate-[45deg]"></div>
                <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 text-2xl">
                  <FaCode />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Design & Development</h4>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  We combine design thinking with engineering precision to create
                  visually stunning, user-centric, and technically sound digital
                  products that enhance user experience and deliver business impact.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start gap-4 group flex-1">
              <div className="relative w-[70px] h-[70px]">
                <div className="absolute inset-0 border-2 border-[#281A3E] rounded-sm transform transition-transform duration-500 group-hover:rotate-[45deg]"></div>
                <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 text-2xl">
                  <FaLightbulb />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Creative Strategy</h4>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  From branding to UI/UX, we help businesses craft clear and memorable
                  narratives that connect emotionally and visually with their audiences.
                </p>
              </div>
            </div>
          </div>

          <p className="text-white/60 text-[15px] leading-relaxed">
            At Code & Canvas, we are a hybrid of code architects and creative thinkers.
            We don't just build websites — we build immersive digital experiences
            designed to inspire, engage, and drive measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
