import React from "react";
import "./TechLogosCSS.css"; 

const TechLogos = () => {
  const logos = [
    // Languages
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",

    // Frontend
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",

    // Backend
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",

    // DB
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",

    // Tools
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",

    // Cloud / infra
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Microsoft_Azure_Logo.svg",
  ];

  // duplicate to allow seamless scrolling
  const items = [...logos, ...logos];

  return (
    <div className="techlogos-section" aria-hidden="false">
      <div className="techlogos-track" role="presentation">
        {items.map((src, i) => (
          <div className="techlogo" key={i}>
            <img src={src} alt={`tech-${i}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechLogos;
