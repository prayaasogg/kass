import React from 'react';
import { motion } from 'framer-motion';

interface HeartDoodleProps {
  className?: string;
  size?: number;
  delay?: number;
}

const HeartDoodle: React.FC<HeartDoodleProps> = ({ 
  className = '', 
  size = 40, 
  delay = 0 
}) => {
  return (
    <motion.div 
      className={`absolute ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        delay, 
        duration: 1.5 
      }}
    >
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#f2a2b8" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay
        }}
      >
        <path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.566" />
      </motion.svg>
    </motion.div>
  );
};

export default HeartDoodle;