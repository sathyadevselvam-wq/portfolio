import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5 flex-shrink-0">
              <GraduationCap className="w-16 h-16 text-accent" />
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Engineering</h3>
              <h4 className="text-xl text-primary font-medium mb-4">Electronics & Communication Engineering (ECE)</h4>
              
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin size={18} />
                <span>Sri Krishna College of Engineering & Technology, Coimbatore, Tamil Nadu</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Focusing on core electronics principles alongside programming and software development. 
                Developing a strong foundation in embedded systems, digital logic, and modern programming 
                languages like C++, Python, and Java.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
