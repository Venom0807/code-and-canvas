import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [location]);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.focus({ preventScroll: true });
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 md:px-16 py-4 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#100028]/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wider flex items-center">
          <img src="/logo.png" alt="logo" className="w-[50px] mr-2" />
          CODE & CANVAS
        </Link>

        {/* Hamburger - visible on small screens */}
        {!menuOpen && (
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-cyan-400 rounded group bg-[#100028] z-50"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-cyan-400 mb-1"></span>
            <span className="block w-6 h-0.5 bg-cyan-400 mb-1"></span>
            <span className="block w-6 h-0.5 bg-cyan-400"></span>
          </button>
        )}

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 uppercase text-sm font-medium ">
          <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
          <li><Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link></li>
          <li><Link to="/services" className="hover:text-cyan-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-[16px] text-white">
          <a href="https://www.facebook.com/profile.php?id=61578840120984" target="_blank" className="hover:text-cyan-400"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/code-canvas-a37571377/" target="_blank" className="hover:text-cyan-400"><FaLinkedin /></a>
          <a href="https://www.instagram.com/thecodeandcanvas_/?__pwa=1" target="_blank" className="hover:text-cyan-400"><FaInstagram /></a>
          <a href="https://wa.me/923194189357" target="_blank" className="hover:text-cyan-400"><FaWhatsapp /></a>
          <a href="#" onClick={e => e.preventDefault()} className="hover:text-cyan-400"><FaDribbble /></a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          tabIndex={-1}
          className="fixed inset-0 bg-[#100028]/95 z-[9999] flex flex-col items-center justify-center px-6 h-[100vh]"
        >
          <button
            className="absolute top-6 right-6 text-cyan-400 text-4xl z-50"
            onClick={() => setMenuOpen(false)}
          >
            <IoMdClose />
          </button>

          <ul className="space-y-8 text-2xl font-bold uppercase text-cyan-300 text-center">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          <div className="flex space-x-6 mt-12 text-2xl text-cyan-400">
            <a href="https://www.facebook.com/profile.php?id=61578840120984" target="_blank"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/code-canvas-a37571377/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/thecodeandcanvas_/?__pwa=1" target="_blank"><FaInstagram /></a>
            <a href="https://wa.me/923194189357" target="_blank"><FaWhatsapp /></a>
            <a href="#" onClick={e => e.preventDefault()}><FaDribbble /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
