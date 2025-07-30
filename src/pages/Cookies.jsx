import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => (
  <div className="bg-no-repeat min-h-[100vh] bg-cover" style={{backgroundImage: `url('breadcrumb-bg.jpg')`}}>
    <Navbar />
    <section className="max-w-3xl mx-auto py-20 px-6 text-white min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
      <p className="text-white/80 mb-6 text-lg">This website uses cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.</p>
      <ul className="list-disc ml-6 space-y-4 text-white/70 text-base">
        <li className="text-lg">Cookies help us analyze web traffic and improve usability.</li>
        <li className="text-lg">You can choose to accept or decline cookies in your browser settings.</li>
        <li className="text-lg">Disabling cookies may prevent you from taking full advantage of the website.</li>
      </ul>
    </section>
    <Footer />
  </div>
);

export default Cookies;
