import React from 'react';

import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white py-28 px-4 md:px-20"
      style={{ backgroundImage: "url('callto-bg.jpg')" }}
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
          Fresh Ideas, Fresh Moments Giving<br />Wings to your Stories.
        </h2>
        <p className="text-sm text-white/70 mb-8 uppercase tracking-wide">
          INC5000, BEST PLACES TO WORK 2025
        </p>
        <button
          className="bg-[#00C8FF] text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-[#00a6d8] transition duration-300"
          onClick={() => navigate('/contact')}
        >
          START YOUR STORIES
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
