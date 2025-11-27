import React from "react";
import FloatingCircle from "./FloatingCircle";
function Techstacks() {
  const techs = [
    "HTML",
    "CSS / Tailwind CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Angular",
    "Java",
    "Flutter"
  ];

  return (
    <section className="tech-section max-w-4xl mx-auto my-12 p-4">
      <h2 className="text-2xl font-bold mb-6">Tech Stacks</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {techs.map((tech, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-lg font-medium"
          >
            {tech}
          </li>
        ))}
      </ul>
      <FloatingCircle />
    </section>
  );
}

export default Techstacks;
