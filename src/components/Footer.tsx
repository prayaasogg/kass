import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-primary/30">
      <div className="container mx-auto px-4 text-center">
        <div className="font-cursive text-xl md:text-2xl text-text-light max-w-2xl mx-auto mb-4 leading-relaxed">
          "Though miles may lie between us, we are never far apart, for love doesn't count miles, it's measured by the heart."
        </div>
        
        <div className="flex justify-center items-center gap-2 text-sm text-text-light mt-6">
          <Heart size={16} className="text-secondary" fill="#f2a2b8" />
          <span>Created with love, 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;