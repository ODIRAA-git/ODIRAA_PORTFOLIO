import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Links from './links';


const Navbar = () => {
    const [Active, setActive] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(() => {
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : true;
    });

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [isDarkMode]);

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

    return(
   <nav className="w-full flex items-center py-3 fixed top-0 z-50 bg-primary dark:bg-primary">
  <div className="w-full flex justify-between items-center max-w-7xl  ">

    <Link
      to="/"
      className="flex flex-col items-start"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <p className="text-white text-sm font-semibold leading-tight">
        Madu Odiraa Perpetua
        <span className="block text-xs font-light opacity-70">
          | Software Developer
        </span>
      </p>
    </Link>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-2xl text-white hover:scale-110 transition-transform"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <Links />
      </div>




  </div>

</nav>




    );
}
export default Navbar;
