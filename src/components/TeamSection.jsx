import React, { useState } from 'react';
import { FaFacebookF, FaGlobe, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Ahmer Khan',
    role: 'Web Developer',
    image: 'ahmer.jpg',
    socials: [
      { icon: <FaFacebookF />, link: 'https://www.facebook.com/ahmer.khan.1088/' },
      { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ahmer-khan-0b4446318/' },
      { icon: <FaInstagram />, link: 'https://www.instagram.com/ahmer_011/?__pwa=1' },
      { icon: <FaGlobe />, link: 'https://ahmer-khan-nine.vercel.app/' },
    ],
  },
  {
    name: 'Umer Usman',
    role: 'UI/UX Designer',
    image: 'umer.jpg',
    socials: [
      { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=100067683253198' },
      { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/umer-mani/' },
      { icon: <FaInstagram />, link: 'https://www.instagram.com/umerusmann13/?__pwa=1' },
      { icon: <FaGlobe />, link: 'https://umer-portfolio-frontend.vercel.app/' },
    ],
  },
  {
    name: 'Yawar Hayat',
    role: 'Business Development Manager',
    image: 'yawar.png',
    socials: [
      { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=100067683253198' },
      { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/umer-mani/' },
      { icon: <FaInstagram />, link: 'https://www.instagram.com/umerusmann13/?__pwa=1' },
      { icon: <FaGlobe />, link: 'https://umer-portfolio-frontend.vercel.app/' },
    ],
  },
  {
    name: 'Eman Fatima',
    role: 'Frontend Developer',
    image: 'eman.jpg',
    socials: [
      { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=100067683253198' },
      { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/umer-mani/' },
      { icon: <FaInstagram />, link: 'https://www.instagram.com/umerusmann13/?__pwa=1' },
      { icon: <FaGlobe />, link: 'https://umer-portfolio-frontend.vercel.app/' },
    ],
  },
];

const TeamSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 px-6 md:px-16 min-h-[95vh] mainTeam flex flex-col items-center justify-between"
      style={{ backgroundImage: "url('team-bg.jpg')" }}
    >
      {/* Heading */}
      <div className="absolute top-10 left-6 md:left-16 text-white">
        <p className="text-cyan-400 uppercase text-sm tracking-wide">Nice to meet</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-2">Our Team</h2>
        <div className="w-20 h-1 bg-cyan-400" />
      </div>

      {/* Team Members */}
      <div className="flex justify-center items-center gap-10 pt-40 flex-wrap mb-20">
        {teamMembers.map((member, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative group w-72 h-[420px] rounded-lg shadow-lg overflow-hidden cursor-pointer singleMember
              ${index === 0 ? '-mt-10' : ''}
              ${index === 1 ? 'mt-6' : ''}
              ${index === 2 ? 'mt-6' : ''}
              ${index === 3 ? 'mt-6' : ''}
              `}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              {/* Info Section */}
              <div
                className={`absolute bottom-0 left-0 w-full px-4 pb-8 pt-10 text-white transition-all duration-500 ease-in-out ${
                  isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                }`}
              >
                <h3 className="text-lg font-bold text-center tracking-wide">{member.name}</h3>
                <p className="text-white/70 text-sm mt-1 text-center">{member.role}</p>
                <div className="flex justify-center gap-4 mt-3">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-cyan-400 transition"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      <div className="absolute bottom-10 right-6 md:right-16 meetButton">
        <button
          className="relative px-5 py-4 text-white font-semibold uppercase tracking-wide group"
          onClick={() => navigate('/about#team-section')}
        >
          <span className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></span>
          <span className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-cyan-400 transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"></span>
          <span className="relative z-10">Meet Our Team</span>
        </button>
      </div>
      </div>

      {/* Meet Button */}
    </section>
  );
};

export default TeamSection;
