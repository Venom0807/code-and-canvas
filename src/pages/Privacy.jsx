import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => (
  <div className="bg-no-repeat min-h-[100vh] bg-cover" style={{backgroundImage: `url('breadcrumb-bg.jpg')`}}>
    <Navbar />
    <section className="max-w-3xl mx-auto py-20 px-6 text-white min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-white/80 mb-6 text-lg">Your privacy is important to us. This policy explains how we handle your personal information.</p>
      <ul className="list-disc ml-6 space-y-4 text-white/70 text-base">
        <li className="text-lg">We do not share your personal information with third parties except as necessary to provide our services.</li>
        <li className="text-lg">We may collect information such as your name and email for newsletter or contact purposes.</li>
        <li className="text-lg">By using our site, you consent to our privacy policy.</li>
      </ul>
    </section>
    <Footer />
  </div>
);

export default Privacy;
