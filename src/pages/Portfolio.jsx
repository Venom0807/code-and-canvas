import React from 'react'
import PortfolioHero from '../components/PortfolioHero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectPortfolio from '../components/ProjectPortfolio'

function Portfolio() {
  return (
    <div
        className="bg-no-repeat h-[100vh] bg-cover "
      style={{
        backgroundImage: `url('breadcrumb-bg.jpg')`,
      }}
    >
      <Navbar />
      <PortfolioHero/>
      <ProjectPortfolio />
      <Footer />
    </div>
  )
}

export default Portfolio
