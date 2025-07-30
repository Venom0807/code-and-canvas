import React from 'react'
import Navbar from '../components/Navbar'
import ServicesHero from '../components/ServicesHero'
import ServicesPortfolio from '../components/ServicesPortfolio'
import CallToActionServices from '../components/CallToActionServices'
import Footer from '../components/Footer'

function Services() {
  return (
    <div
        className="bg-no-repeat h-[100vh] bg-cover "
      style={{
        backgroundImage: `url('breadcrumb-bg.jpg')`,
      }}
    >
      <Navbar />
      <ServicesHero />
      <ServicesPortfolio />
      <CallToActionServices />
      <Footer />
    </div>
  )
}

export default Services