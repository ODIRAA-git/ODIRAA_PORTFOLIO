import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import './index.css';

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from './Components/About';
import TechLogos from './Components/TechLogos';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import SkillsSection from "./Components/SkillsSection";
import ScrollSpy from './Components/ScrollSpy';
import ListVaultDemo from './pages/ListVaultDemo';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <div className="relative z-0 bg-primary pt-20 min-h-screen w-full text-white">
            <Navbar />
            <ScrollSpy />

            <section id="home">
              <Hero />
            </section>

            <section id="experience">
              <SkillsSection />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section className="flex flex-col md:flex-row gap-10 px-6 md:px-12 mt-20">
              <div id="about" className="flex-none w-full md:w-96">
                <About />
              </div>
              <div id="contact" className="flex-1">
                <Contact />
              </div>
            </section>

            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-2">I am a Continuous Learner</h3>
              <p className="text-base opacity-90 mb-6">
                My skillset keeps growing — I'm always exploring new tools, frameworks, and technologies.
              </p>
              <TechLogos />
            </div>
          </div>
        } />

        {/* List Vault Demo Route */}
        <Route path="/list-vault-demo" element={<ListVaultDemo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}


export default App;



