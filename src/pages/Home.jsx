import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-1.jpg')" }}
    >
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <StatsSection />
      <TeamSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
