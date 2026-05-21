import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'Embedded', 'Software'];

  const projects = [
    {
      title: "Portfolio Website",
      category: "Web",
      description: "A modern, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/Sathyadev/portfolio",
      demo: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Home Automation",
      category: "Embedded",
      description: "IoT-based smart home system using Arduino and various sensors to monitor and control home appliances remotely.",
      tech: ["Arduino", "C++", "IoT"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Task Management App",
      category: "Web",
      description: "Full-stack web application for task tracking with features like user authentication, real-time updates, and drag-and-drop boards.",
      tech: ["React", "Node.js", "SQL"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <a href={project.github} className="p-3 bg-dark-800 rounded-full text-white hover:text-primary hover:scale-110 transition-all">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.demo} className="p-3 bg-primary rounded-full text-white hover:bg-primary-hover hover:scale-110 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-sm font-semibold mb-2 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-dark-700/50 text-gray-300 text-xs rounded-full border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
