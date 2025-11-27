import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Links() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className="flex gap-6 cursor-pointer">
      <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
    </ul>
  );
}

export default Links;
