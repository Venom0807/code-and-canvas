import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => (
  <div className="bg-no-repeat min-h-[100vh] bg-cover" style={{backgroundImage: `url('breadcrumb-bg.jpg')`}}>
    <Navbar />
    <section className="max-w-3xl mx-auto py-20 px-6 text-white min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Help & FAQ</h1>
      <div className="space-y-8 w-full">
        <div>
          <h2 className="text-2xl font-semibold mb-2">How do I contact Code & Canvas?</h2>
          <p className="text-white/70 text-lg">You can reach us via our Contact page or email us directly for inquiries.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">What services do you offer?</h2>
          <p className="text-white/70 text-lg">We offer web development, UI/UX design, and digital strategy services. See our Services page for details.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Can I request a custom project?</h2>
          <p className="text-white/70 text-lg">Absolutely! We welcome custom project requests. Contact us to discuss your ideas.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default FAQ;
