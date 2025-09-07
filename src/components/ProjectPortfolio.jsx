// src/components/ProjectsPortfolio.jsx
import React, { useState } from "react";

const categories = ["All", "Web", "eCommerce", "Photography", "Design"];

const projects = [
  {
    title: "Acme",
    image: "p2.png",
    link: "https://acme0.vercel.app/",
    category: "Web",
  },
  {
    title: "E-Store",
    image: "p4.png",
    link: "https://e-store0.vercel.app/",
    category: "eCommerce",
  },
  {
    title: "Eventify",
    image: "p8.png",
    link: "https://eventify-one-beta.vercel.app/",
    category: "Design",
  },
  {
    title: "Genial",
    image: "p5.png",
    link: "https://genial-one.vercel.app/",
    category: "Web",
  },
  {
    title: "Code Upscale",
    image: "p3.png",
    link: "https://code-upscale.vercel.app/",
    category: "Design",
  },
  {
    title: "Academia",
    image: "p1.png",
    link: "https://academia-seven-omega.vercel.app/",
    category: "eCommerce",
  },
  {
    title: "Neve",
    image: "p6.png",
    link: "https://neve-zeta.vercel.app/",
    category: "Photography",
  },
];

const ProjectsPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-[#0b0423] text-white px-6 py-16">
      {/* Filter Tabs */}
<div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-4 py-1 uppercase tracking-wide transition-all duration-300 hover:border-cyan-400  ${
        selectedCategory === cat
          ? "text-white border border-cyan-400"
          : "text-gray-300 border border-transparent"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[800px] transition-all duration-300 ">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-4 bg-[#100028]">
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-cyan-400">{project.category}</p>
            </div>
            <div className="absolute inset-0  bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center object-cover">
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
