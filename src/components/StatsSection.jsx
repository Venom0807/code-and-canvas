import React from 'react';
import { FaClipboardCheck, FaSmile, FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    image: "ci-1.png" ,
    value: 10,
    label: 'Total Projects',
  },
  {
    image: "ci-2.png" ,
    value: 8,
    label: 'Happy Clients',
  },
  {
    image: "ci-3.png" ,
    value: 8,
    label: 'Complete Projects',
  },
  {
    image: "ci-4.png" ,
    value: 4,
    label: 'Perspective Clients',
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-[#0C0324] py-30 px-6 md:px-16 m" ref={ref} >
      <div className=" mx-auto grid md:grid-cols-2 items-center gap-10 min-h-[60vh] stats">
        {/* Left Text Section */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stats that Reflect Our Passion</h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Every number here stands for a story of creativity, collaboration, and successful delivery.
            We don't just build — we build with purpose, keeping clients happy and work meaningful.
          </p>
        </div>

        {/* Right Diamond Stats */}
        <div className="relative flex justify-center items-center ">
          <div className="grid grid-cols-2 gap-6 rotate-45 statbox">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="w-50 h-50 bg-[#0C0324] border border-cyan-400 flex flex-col justify-center items-center shadow-xl Sbox"
              >
                <div className="-rotate-45 flex flex-col justify-center items-center text-white statbox-icon">
                  <img src={stat.image} alt="" />
                  <div className="text-3xl font-bold mt-1">
                    {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                  </div>
                  <p className="text-xs mt-1 text-center text-white/80">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
