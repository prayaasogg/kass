import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(prev => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(prev => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 relative">
        <HeartDoodle className="top-32 left-[8%]" size={30} delay={0.2} />
        <HeartDoodle className="bottom-32 right-[12%]" size={24} delay={0.6} />
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our Photo Gallery
          </motion.h1>
          
          <motion.p 
            className="font-handwritten text-xl text-center text-text-light max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Each photo tells a story, each moment captured forever in time
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="paper-texture rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-handwritten text-lg text-secondary">{image.caption}</p>
                  <p className="font-handwritten text-sm text-text-light">{image.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft size={48} />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={48} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-4xl w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].caption}
                  className="w-full rounded-lg"
                />
                <div className="text-center mt-4">
                  <p className="font-handwritten text-2xl text-white mb-2">
                    {galleryImages[selectedImage].caption}
                  </p>
                  <p className="font-handwritten text-lg text-white/70">
                    {galleryImages[selectedImage].date}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Gallery;