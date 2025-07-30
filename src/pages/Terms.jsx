import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => (
  <div className="bg-no-repeat min-h-[100vh] bg-cover" style={{backgroundImage: `url('breadcrumb-bg.jpg')`}}>
    <Navbar />
    <section className="max-w-3xl mx-auto py-20 px-6 text-white min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-white/80 mb-6 text-lg">Welcome to Code & Canvas. These terms and conditions outline the rules and regulations for the use of our website.</p>
      <ul className="list-disc ml-6 space-y-4 text-white/70 text-base">
        <li className="text-lg">By accessing this website, you accept these terms in full.</li>
        <li className="text-lg">Do not use this website if you disagree with any part of these terms.</li>
        <li className="text-lg">Content on this site is for your general information and use only. It is subject to change without notice.</li>
        <li className="text-lg">Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
      </ul>
    </section>
    <Footer />
  </div>
);

export default Terms;
