import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="h-[400px] flex items-center justify-center text-white text-center px-4 bg-black/40">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Work</h1>
        <p className="text-white/70 text-sm">
          <span className="text-white">Home</span> / Portfolio
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
