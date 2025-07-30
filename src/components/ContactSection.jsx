import React, { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "codecanvas",     // Replace with your EmailJS Service ID
        "template_n5o3vmi",    // Replace with your EmailJS Template ID
        form.current,
        "zK6u-rd_SZiuF8jf_"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-[#0b0423] text-white px-6 md:px-16 py-20">
      {/* Top Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-16">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-xl">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-bold text-lg">Address</h3>
          <p className="text-white/70">Lahore, Pakistan, Liberty Market</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-xl">
            <FaPhoneAlt />
          </div>
          <h3 className="font-bold text-lg">Hotline</h3>
          <p className="text-white/70">+92-323-4487705 • +92-328-0703800</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-xl">
            <FaEnvelope />
          </div>
          <h3 className="font-bold text-lg">Email</h3>
          <p className="text-white/70">codecanvas078@gmail.com</p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Google Map */}
        <iframe
          title="Lahore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27227.041726225236!2d74.3372617!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd96beac95%3A0x9855a991b08b261d!2sLiberty%20Market%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692101728992!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md"
        ></iframe>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">GET IN TOUCH</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full bg-transparent border border-white/30 text-white px-4 py-3 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full bg-transparent border border-white/30 text-white px-4 py-3 focus:outline-none focus:border-cyan-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-transparent border border-white/30 text-white px-4 py-3 focus:outline-none focus:border-cyan-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full bg-transparent border border-white/30 text-white px-4 py-3 focus:outline-none focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 uppercase tracking-wide hover:bg-cyan-500 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
