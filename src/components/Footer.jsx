import React, { useRef, useState } from 'react';
import { FaFacebookF, FaDribbble, FaInstagram, FaPaperPlane, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
const Footer = () => {
  const newsletterForm = useRef();

  const sendNewsletterEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "codecanvas",         // Your service ID
      "template_jygb615",  // Your newsletter template ID
      newsletterForm.current,
      "zK6u-rd_SZiuF8jf_"   // Your public key
    )
    .then((result) => {
      console.log("Newsletter sent!", result.text);
      alert("You've successfully subscribed!");
      newsletterForm.current.reset();
    })
    .catch((error) => {
      console.error("Newsletter error:", error.text);
      alert("Something went wrong. Try again.");
    });
  };
  const [expanded, setExpanded] = useState(false);

  const fullText =
    "Code & Canvas is a creative tech studio blending web development with innovative UI/UX design. We build visually stunning, high-performance websites tailored to modern digital experiences.";
  const shortText = fullText.slice(0, 100) + "...";
  return (
    <footer className="bg-[#0a0119] text-white px-6 md:px-20 py-16 text-sm">
      {/* Social Icons */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-4">
        <div className="text-xl font-bold tracking-wider flex items-center">
          <img src="/logo.png" alt="logo" className="w-[50px] mr-2" />
          CODE & CANVAS
        </div>
        <div className="flex space-x-3">
          <a target="blank" href="https://www.facebook.com/profile.php?id=61578840120984" className="hover:text-cyan-400"><FaFacebookF /></a>
          <a target="blank" href="https://www.linkedin.com/in/code-canvas-a37571377/" className="hover:text-cyan-400"><FaLinkedin /></a>
          <a target="blank" href="https://www.instagram.com/thecodeandcanvas_/?__pwa=1" className="hover:text-cyan-400"><FaInstagram /></a>
          <a target="blank" href="https://wa.me/923194189357" className="hover:text-cyan-400"><FaWhatsapp /></a>
          <a href="#" className="hover:text-cyan-400"><FaDribbble /></a>
        </div>
      </div>

      <hr className="my-8 border-white/10" />

      {/* Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white/80">
        <div>
      <h3 className="text-white font-semibold mb-4">About us</h3>
      <p className="text-white/80">
        {expanded ? fullText : shortText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-cyan-400 mt-4 inline-block font-semibold transition hover:underline"
      >
        {expanded ? "Show less ↑" : "Read more →"}
      </button>
    </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li> 
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="#">Terms and Conditions</Link></li>
            <li><Link to="#">Help & FAQ</Link></li>
            <li><Link to="#">Privacy Policy</Link></li> 
            <li><Link to="#">Cookies Policy</Link></li>
          </ul>
        </div>


        {/* Newsletter Form */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe for the latest updates in web development and creative design inspiration.</p>
          <form ref={newsletterForm} onSubmit={sendNewsletterEmail} className="flex">
            <input
              type="email"
              name="newsletter_email"
              placeholder="Email"
              required
              className="bg-transparent border border-white/30 px-4 py-2 w-full placeholder-white/60 text-white"
            />
            <button type="submit" className="bg-cyan-400 text-white px-4 py-2">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      <hr className="my-8 border-white/10" />

      {/* Copyright */}
      <p className="text-center text-white/50 text-xs">
        © 2025 Code & Canvas — Crafted with by Ahmer Khan.
      </p>
    </footer>
  );
};

export default Footer;
