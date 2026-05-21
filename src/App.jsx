import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Custom cursor effect
  useEffect(() => {
    const cursor = document.getElementById('cursor-glow');
    
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-dark-900 min-h-screen text-gray-100 font-sans selection:bg-primary/30 selection:text-white relative overflow-hidden">
      {/* Interactive Cursor Glow */}
      <div 
        id="cursor-glow" 
        className="fixed w-[600px] h-[600px] bg-primary/10 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 blur-[100px] z-0 hidden lg:block transition-all duration-300 ease-out"
        style={{ mixBlendMode: 'screen' }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
