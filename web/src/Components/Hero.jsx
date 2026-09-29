import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Logo from "../assets/Logo.png";
import { profile } from "../data";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new opportunities
          </motion.p>

          <motion.p {...fadeUp(0.1)} className="mb-3 text-lg text-muted">
            Hi, I'm <span className="font-semibold text-fg">{profile.name}</span> 👋
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            I turn ideas into{" "}
            <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
              high-impact web apps.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-lg text-muted">
            {profile.role} building responsive, user-friendly web and mobile applications
            with React, TypeScript, Node.js and Flutter.
          </motion.p>

          <motion.p {...fadeUp(0.35)} className="mt-3 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" /> {profile.location}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            {profile.cv ? (
              <a href={profile.cv} download className="btn-ghost">
                <Download size={16} /> Download CV
              </a>
            ) : (
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            )}
            <div className="flex gap-2 sm:ml-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 to-sky-400/20 blur-2xl" />
            <motion.img
              src={Logo}
              alt="Odiraa logo"
              className="relative w-full rounded-[2rem] border border-line shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
