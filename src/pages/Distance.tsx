import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';

const Distance: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 relative">
        <HeartDoodle className="top-40 left-[10%]" size={30} delay={0.2} />
        <HeartDoodle className="bottom-40 right-[12%]" size={26} delay={0.6} />
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Feelings of Distance
          </motion.h1>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="paper-texture p-8 md:p-10 rounded-lg mb-12 relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mb-8 text-center">
                <p className="font-cursive text-3xl md:text-4xl text-secondary mb-2">In the silence of our distance</p>
                <p className="font-handwritten text-xl md:text-2xl text-text-light leading-relaxed">
                  My heart aches for your presence. Each day without you feels incomplete.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img 
                  src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Distance memories" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                
                <div className="flex flex-col justify-center">
                  <p className="font-handwritten text-xl text-text-light leading-relaxed">
                    I find myself looking for you in crowds, searching for your smile among strangers. The world feels different without you in it.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="paper-texture p-8 rounded-lg">
                <h2 className="font-headline text-2xl text-secondary mb-6 text-center">A Letter to You</h2>
                <div className="font-handwritten text-lg text-text-light leading-relaxed space-y-4">
                  <p>My dearest,</p>
                  <p>
                    As I write this, the moon casts its gentle glow through my window, reminding me of nights we spent together under the same sky. Though miles separate us now, I feel you in every heartbeat, in every breath I take.
                  </p>
                  <p>
                    I miss the sound of your laughter, the warmth of your touch, the way your eyes would light up when you spoke about things you love. These memories are treasures I hold close to my heart.
                  </p>
                  <p>
                    Distance may keep our bodies apart, but it cannot separate our souls. What we shared was real, beautiful, and unforgettable. No amount of time or space can diminish that.
                  </p>
                  <p>
                    Until we meet again, if fate allows, I will keep you in my thoughts, in my dreams, and most importantly, in my heart.
                  </p>
                  <p>Forever yours,</p>
                  <p>Me</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="paper-texture p-8 rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h2 className="font-headline text-2xl text-secondary mb-6 text-center">The Little Things I Miss</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/50 rounded-lg shadow-sm">
                  <p className="font-handwritten text-lg text-text-light">The way you'd text me good morning before I even woke up</p>
                </div>
                
                <div className="p-4 bg-white/50 rounded-lg shadow-sm">
                  <p className="font-handwritten text-lg text-text-light">Our long conversations that would last until sunrise</p>
                </div>
                
                <div className="p-4 bg-white/50 rounded-lg shadow-sm">
                  <p className="font-handwritten text-lg text-text-light">The sound of your voice when you were excited about something</p>
                </div>
                
                <div className="p-4 bg-white/50 rounded-lg shadow-sm">
                  <p className="font-handwritten text-lg text-text-light">The comfortable silence we could share without awkwardness</p>
                </div>
                
                <div className="p-4 bg-white/50 rounded-lg shadow-sm">
                  <p className="font-handwritten text-lg text-text-light">Your smile that could brighten even my darkest days</p>
                </div>
                
                <div className="p-4 bg-white/50 rounded-lg shadow-sm">
                  <p className="font-handwritten text-lg text-text-light">The way you understood me without words</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Distance;