import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';

const FirstMeeting: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 relative">
        {/* Background hearts */}
        <HeartDoodle className="top-40 left-[8%]" size={32} delay={0.2} />
        <HeartDoodle className="top-48 right-[12%]" size={26} delay={0.6} />
        <HeartDoodle className="bottom-32 left-[15%]" size={28} delay={1.0} />
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our First Meeting
          </motion.h1>
          
          <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="paper-texture p-8 rounded-lg mb-6">
                <h2 className="font-headline text-2xl text-secondary mb-4">February 19</h2>
                <p className="font-handwritten text-xl text-text-light leading-relaxed mb-4">
                  It was a magical night, the clock struck twelve, and our paths crossed in a moment I'll never forget.
                </p>
                <p className="font-handwritten text-xl text-text-light leading-relaxed">
                  The stars seemed to shine just for us as we talked until dawn, lost in conversation and the beginnings of something beautiful.
                </p>
              </div>
              
              <div className="paper-texture p-8 rounded-lg">
                <h2 className="font-headline text-2xl text-secondary mb-4">The First Words</h2>
                <p className="font-handwritten text-xl text-text-light leading-relaxed mb-4">
                  "Hi, I've noticed you here before..." Your voice was gentle yet confident, carrying a warmth that immediately put me at ease.
                </p>
                <p className="font-handwritten text-xl text-text-light leading-relaxed">
                  In that moment, something shifted in the universe. A simple hello that would change everything that followed.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <img 
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="First meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="paper-texture p-8 rounded-lg">
                <h2 className="font-headline text-2xl text-secondary mb-4">The Midnight Connection</h2>
                <p className="font-handwritten text-xl text-text-light leading-relaxed">
                  There's something about midnight that makes everything feel possible. The world grows quiet, and suddenly, it's just two souls connecting in the stillness.
                </p>
                <div className="mt-6 pl-4 border-l-4 border-primary/50">
                  <p className="font-cursive text-2xl text-secondary">
                    "When our eyes met, time stood still."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FirstMeeting;