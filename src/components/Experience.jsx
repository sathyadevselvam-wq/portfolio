import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 ml-8 md:ml-12 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-10 md:-left-14 top-1 w-6 h-6 bg-dark-900 border-4 border-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
                  <p className="text-primary font-medium text-lg">Infosys</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-400 mb-6 font-medium bg-dark-900/50 inline-block px-3 py-1 rounded-md">
                Timeline / Duration
              </div>
              
              <ul className="list-disc list-inside text-gray-300 space-y-3 leading-relaxed">
                <li>Gained hands-on experience in software development lifecycle and corporate IT workflows.</li>
                <li>Collaborated with cross-functional teams to understand project requirements and deliver solutions.</li>
                <li>Developed and optimized code under the guidance of senior engineers, improving application efficiency.</li>
                <li>Participated in technical workshops and training sessions to enhance full-stack development skills.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
