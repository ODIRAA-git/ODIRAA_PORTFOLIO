import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function About() {
  const aboutText = `I build responsive, user-friendly, and scalable applications that solve real problems. I expect to utilize a comprehensive skill set that includes both front-end and back-end technologies. I am proficient in HTML, CSS, JavaScript, React, Node.js, Express, and Python. I have experience with SQL and NoSQL databases, Git, and Agile development methodologies. I am also eager to expand my DevOps knowledge, including CI/CD pipelines.`;

  return (
    <>
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8 text-white tracking-wide">
        About Me
      </h2>

      {/* About Section */}
      <motion.section
        className="max-w-xl mx-auto p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-4 text-white">
          I am a Software Developer
        </h1>

        <p className="text-white/90 text-lg leading-relaxed">
          <Typewriter
            words={[aboutText]}
            loop={1}
            cursor={false}
            typeSpeed={20}
            deleteSpeed={0}
            delaySpeed={0}
          />
        </p>
      </motion.section>
    </>
  );
}

export default About;
