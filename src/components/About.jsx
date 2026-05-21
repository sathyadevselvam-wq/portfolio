import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Cpu } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Who I Am",
      description: "An ECE student at Sri Krishna College of Engineering & Technology from Tamil Nadu, with a deep passion for coding and building software solutions."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "My Objective",
      description: "Seeking a challenging software development role where I can apply my analytical skills and drive for continuous learning to create impactful applications."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "My Strength",
      description: "My electronics background provides a strong foundation in logic and problem-solving, making me uniquely equipped for full-stack and systems programming."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2"
            >
              <div className="bg-dark-700/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
