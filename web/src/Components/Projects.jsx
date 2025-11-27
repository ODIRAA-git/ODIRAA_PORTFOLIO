import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EASYM from "../assets/EASYM.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import { Italic } from "lucide-react";

function Projects() {
  const projects = [
    {
      img: EASYM,
      title: "EASYMEAL",
      subtitles: "A Recipe Search Engine",
      link: "https://eaziimeal.netlify.app/",
      isExternal: true,
      techStack: "React • JavaScript • REST API • Responsive Design"
    },
    {
      img: Project2,
      title: "LIST VAULT",
      subtitles: "Family Shopping List App",
      link: "/list-vault-demo",
      isExternal: false,
      techStack: "Flutter • Supabase • PostgreSQL • Real-time Sync"
    },
    {
      img: Project3,
      title: "BOOKFLIX",
      subtitles: "The Reader´s Guide",
      link: "https://bookfliix.netlify.app/",
      isExternal: true,
      techStack: "React • TypeScript • Vite • Supabase • CSS"
    },
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">

        {projects.map((project, index) => {
          const MotionLink = project.isExternal ? motion.a : motion(Link);
          const linkProps = project.isExternal
            ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
            : { to: project.link };

          return (
            <div key={index} className="flex-1 max-w-sm">

              {/* Title outside the anchor (cleanest method) */}
              <h3 className="text-center text-xl font-bold mb-3" style={{letterSpacing: "5px"}}>
                {project.title}
              </h3>
              {/* Subtitle outside the anchor (cleanest method) */}
              <p className="text-center text-xl font-bold mb-3 text-blue-300" style={{fontStyle: "Italic"}}>
                {project.subtitles}
              </p>

              <MotionLink
                {...linkProps}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <span className="text-blue-400 underline hover:text-blue-300">
                    View Project
                  </span>
                </div>
              </MotionLink>

              {/* Tech Stack */}
              <p className="text-center text-sm mt-4 text-gray-400 font-medium">
                {project.techStack}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Projects;
