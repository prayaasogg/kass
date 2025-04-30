import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Skull } from 'lucide-react';
import LoveTimer from './components/LoveTimer';
import HeartDoodle from './components/HeartDoodle';
import Calendar from './components/Calendar';
import { galleryImages } from './data/gallery';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "KASHAF BABYGIRLLL";
  }, []);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 shadow-md backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2">
          <Heart className="text-secondary" size={24} fill="currentColor" />
          <span className="font-headline text-xl md:text-2xl text-secondary">My Love for Kashaf</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-16 relative">
        <HeartDoodle className="top-32 left-[8%]" size={30} delay={0.2} />
        <HeartDoodle className="bottom-32 right-[12%]" size={24} delay={0.6} />
        
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            className="relative w-full max-w-3xl mx-auto h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8 shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://instagram.flko7-2.fna.fbcdn.net/v/t1.15752-9/491008662_1727796008162844_4219440282038814120_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EDWPtEA59coQ7kNvwHOaUR3&_nc_oc=Adlh5ykOiXzBArwK6oscfAp6WyPglqcUcR8IJ8O3WVA-3VFXAex6kvnoI2x9ZMELTW0WlG82NOhSr1-t6Ng1xaa9&_nc_zt=23&_nc_ht=instagram.flko7-2.fna&oh=03_Q7cD2AHaym0enWEEiFmT4cfO4kN3o5FUah0vhQHz_4f867FB7A&oe=682E3ABB"
              alt="Our first date" 
              className="w-full h-full object-contain bg-white"
            />
          </motion.div>

          <motion.h1 
            className="section-title mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            My Love for Kashaf: An Untold Story
          </motion.h1>

          {/* Love Timer */}
          <div className="max-w-3xl mx-auto mb-12">
            <LoveTimer startDate="2025-02-19" />
          </div>

          {/* Calendar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Calendar />
          </motion.div>

          {/* Our Story */}
          <motion.div 
            className="paper-texture max-w-3xl mx-auto p-8 rounded-lg mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="font-headline text-2xl text-secondary mb-6 text-center">The Day I First Saw Her</h2>
            <p className="font-handwritten text-xl text-text-light leading-relaxed mb-6">
              It was a magical evening, February 19th 2025, when I first saw Kashaf. My heart skipped a beat, 
              and time seemed to stand still. Though we talked until dawn, sharing stories and laughter, 
              she never knew that with each passing moment, I was falling deeper in love.
            </p>
            <p className="font-cursive text-2xl text-secondary text-center">
              "Sometimes love means watching from afar"
            </p>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h2 className="font-headline text-2xl text-secondary mb-8 text-center">Moments I Cherish</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="paper-texture rounded-lg overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-handwritten text-lg text-secondary">{image.caption}</p>
                    <p className="font-handwritten text-sm text-text-light">{image.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="font-cursive text-xl md:text-2xl text-text-light max-w-2xl mx-auto mb-4 leading-relaxed">
            "In silence, I love you. In distance, I cherish you. In my heart, you'll always have a special place."
          </div>
          <div className="flex justify-center items-center gap-2 text-sm text-text-light mt-6">
            <div className="flex items-center gap-1">
              <Heart size={16} className="text-secondary" fill="currentColor" />
              <span>Created by a</span>
              <Skull size={16} className="text-secondary" />
              <span>with pure</span>
              <Heart size={16} className="text-secondary" fill="currentColor" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;