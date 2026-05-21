import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-gray-400 mb-4 tracking-wide uppercase font-medium">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Sathyadev
            </h1>
            <div className="text-2xl md:text-4xl font-semibold mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'Aspiring Software Professional',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Embedded Systems Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-gradient"
                repeat={Infinity}
              />
            </div>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
              Aspiring software professional seeking an opportunity to grow and develop technical skills, 
              combining my background in ECE with a strong passion for software development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full glass hover:bg-white/10 text-white font-medium transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <FileText size={20} />
                Resume
              </a>
            </div>

            <div className="mt-12 flex justify-center gap-6">
              <a href="https://github.com/Sathyadev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/sathyadev-s-8a8500373/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors hover:scale-110 transform duration-300">
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:sathyadevselvam@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-300">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
