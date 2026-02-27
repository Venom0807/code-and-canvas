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
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/A man coding on a computer-1.webp')" }}
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
