import React, { useState, useEffect } from 'react';

const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
    { id: 'footer', label: 'Footer' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group relative flex items-center justify-end"
          >
            {/* Tooltip */}
            <span className="absolute right-8 bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>

            {/* Dot */}
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-600 dark:bg-blue-500 scale-125'
                  : 'bg-gray-400 dark:bg-gray-500 hover:bg-blue-400 dark:hover:bg-blue-300 hover:scale-110'
              }`}
              aria-label={`Scroll to ${section.label}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpy;
