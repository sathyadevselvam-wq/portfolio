import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Sathyadev. All rights reserved.
        </p>
        
        <p className="text-gray-400 text-sm flex items-center gap-1">
          Built with <Heart size={14} className="text-red-500 animate-pulse" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
