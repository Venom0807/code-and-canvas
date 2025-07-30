import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import TestimonialSlider from '../components/TestimonialSlider';
import StatsSection from '../components/StatsSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div
        className="bg-no-repeat h-[100vh] bg-cover "
      style={{
        backgroundImage: `url('breadcrumb-bg.jpg')`,
      }}
    >
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <TestimonialSlider />
      <StatsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
