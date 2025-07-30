import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/ContactHero'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div
        className="bg-no-repeat h-[100vh] bg-cover "
      style={{
        backgroundImage: `url('breadcrumb-bg.jpg')`,
      }}
    >
      <Navbar />
      <ContactHero />
      <ContactSection />
      <Footer/>
    </div>
  )
}

export default Contact