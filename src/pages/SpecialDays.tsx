import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { specialDays } from '../data/specialDays';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';

const SpecialDays: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDay = specialDays[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? specialDays.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === specialDays.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 relative">
        <HeartDoodle className="top-40 right-[10%]" size={28} delay={0.3} />
        <HeartDoodle className="bottom-40 left-[15%]" size={24} delay={0.7} />
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Special Days
          </motion.h1>
          
          <motion.p 
            className="font-handwritten text-xl text-center text-text-light max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            April 14 - April 17: These days changed everything. Each moment more precious than gold, each memory a treasure I hold close to my heart.
          </motion.p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row bg-white paper-texture rounded-lg overflow-hidden shadow-lg"
              >
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={currentDay.imageUrl} 
                    alt={currentDay.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-8">
                  <h2 className="font-headline text-2xl md:text-3xl text-secondary mb-2">
                    {currentDay.date}
                  </h2>
                  <h3 className="font-handwritten text-2xl text-text mb-4">
                    {currentDay.title}
                  </h3>
                  <p className="font-handwritten text-xl text-text-light leading-relaxed">
                    {currentDay.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Navigation buttons */}
              <button 
                onClick={goToPrevious}
                className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Previous day"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Next day"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {specialDays.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-secondary' : 'bg-gray-300 hover:bg-secondary/50'
                  }`}
                  aria-label={`Go to day ${index + 1}`}
                />
              ))}
            </div>
            
            {/* All days gallery */}
            <div className="mt-16">
              <h2 className="font-headline text-2xl text-primary text-center mb-8">All Our Special Moments</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialDays.map((day, index) => (
                  <motion.div 
                    key={day.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="paper-texture rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={day.imageUrl} 
                        alt={day.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-handwritten text-lg text-secondary">{day.date}</h3>
                      <p className="font-handwritten text-text-light">{day.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SpecialDays;