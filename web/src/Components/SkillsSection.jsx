import React, { useState, useRef } from "react";
import Experience from "./Experience";
import TechStack from "./TechStack";

function SkillsSection() {
  const [open, setOpen] = useState(false);
  const [hiding, setHiding] = useState(false);
  const buttonRef = useRef(null);

  const handleShow = () => setOpen(true);
  const handleHide = () => {
    setHiding(true);
    setTimeout(() => {
      setOpen(false);
      setHiding(false);
      if (buttonRef.current) {
        buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 500);
  };

  // Generate circle data once
  const circles = [...Array(8)].map((_, i) => ({
    size: 60 + Math.random() * 80, // width = height
    top: Math.random() * 100,
    left: Math.random() * 100,
    color1: `hsl(${Math.random() * 360}, 80%, 60%)`,
    color2: `hsl(${Math.random() * 360}, 70%, 50%)`,
    duration: 15 + Math.random() * 15, // speed of float
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10">
      {!open && (
        <button
          ref={buttonRef}
          onClick={handleShow}
          className="relative overflow-hidden px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-transform duration-300 hover:scale-105"
        >
          <span className="relative z-10">Show Skills</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></span>
        </button>
      )}

      {open && (
        <div
          className={`flex flex-col gap-6 w-full mt-8 relative 
            ${hiding ? "animate-fadeOutUp" : "animate-fadeInUp"}`}
        >
          {/* Floating Circles */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {circles.map((c, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-overlay opacity-40 animate-float"
                style={{
                  width: `${c.size}px`,
                  height: `${c.size}px`,
                  top: `${c.top}%`,
                  left: `${c.left}%`,
                  background: `linear-gradient(135deg, ${c.color1}, ${c.color2})`,
                  animationDuration: `${c.duration}s`,
                  animationDelay: `${c.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Skill Content */}
          <div className="flex gap-8 justify-between items-start w-full relative z-10">
            <Experience />
            <TechStack />
          </div>

          <button
            onClick={handleHide}
            className="self-center mt-4 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-transform duration-300 hover:scale-105"
          >
            Hide Skills
          </button>
        </div>
      )}
    </div>
  );
}

export default SkillsSection;
