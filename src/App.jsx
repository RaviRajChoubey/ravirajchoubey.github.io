import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineeringRange from './components/EngineeringRange';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <EngineeringRange />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
