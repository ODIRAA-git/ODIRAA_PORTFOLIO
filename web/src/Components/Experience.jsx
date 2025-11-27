import React from "react";

function Experience() {
  const experiences = [
    {
      name: "Frontend Developer",
      company: "Axinity GmbH.Co.Kg",
      level: "Intern",
      duration: "2025 - Present",
      
    },
    {
      name: "Frontend Developer",
      company: "Swilook UG",
      level: "Working Student",
      duration: "2023 - 2024",
    },
    {
      name: "IT Support",
      company: "REDI School of Digital Integration",
      level: "Working Student",
      duration: "2022 - 2023",
    },
   
  ];

  return (
    <section className="exp-section max-w-4xl mx-auto my-12 p-4">
      <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{exp.name}</h3>
            <p className="text-white-100">Company: {exp.company}</p>
            <p className="text-white-100">Level: {exp.level}</p>
            <p className="text-white-100">Experience: {exp.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
