// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Acme",
    image: "p2.png",
    link: "https://acme-drab-three.vercel.app/",
    span: "col-span-2 row-span-2",
  },
  {
    title: "E-Store",
    image: "p4.png",
    link: "https://e-store-gules-six.vercel.app/",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Eventify",
    image: "p8.png",
    link: "https://eventify-one-beta.vercel.app/",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Genial",
    image: "p5.png",
    link: "https://genial-one.vercel.app/",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Code Upscale",
    image: "p3.png",
    link: "https://code-upscale.vercel.app/",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Academia",
    image: "p1.png",
    link: "https://academia-seven-omega.vercel.app/",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Neve",
    image: "p6.png",
    link: "https://neve-zeta.vercel.app/",
    span: "col-span-1 row-span-1",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#0b0423] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
           className={`relative overflow-hidden group rounded-md ${project.span ? `md:${project.span}` : ''}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 border border-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border-l-4 border-t-4 border-white rotate-45"></div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
