import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';
import LoveTimer from '../components/LoveTimer';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 relative">
        {/* Background hearts */}
        <HeartDoodle className="top-32 left-[10%]" size={30} delay={0.2} />
        <HeartDoodle className="top-40 right-[15%]" size={24} delay={0.5} />
        <HeartDoodle className="bottom-32 left-[20%]" size={28} delay={0.8} />
        <HeartDoodle className="bottom-40 right-[25%]" size={22} delay={1.1} />

        {/* Hero section */}
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <motion.div 
            className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden mb-8 shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Couple together" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Love Story: A Journey Through Time
          </motion.h1>
          
          <motion.div 
            className="paper-texture max-w-3xl p-8 md:p-10 rounded-lg mb-12 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-handwritten text-xl md:text-2xl text-text-light text-center leading-relaxed">
              Though distance separates us, our love remains a cherished memory. Let's look back at the beautiful moments we shared.
            </p>
          </motion.div>

          {/* Love Timer */}
          <div className="w-full max-w-3xl mb-12">
            <LoveTimer />
          </div>
          
          {/* Journey sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full max-w-4xl">
            <JourneyCard 
              title="Our First Meeting"
              description="It was a magical night, the clock struck twelve, and our paths crossed in a moment I'll never forget."
              image="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/first-meeting"
              delay={0.5}
            />
            
            <JourneyCard 
              title="Special Days"
              description="April 14-17: The days that changed everything. Each moment more precious than the last."
              image="https://images.pexels.com/photos/2145820/pexels-photo-2145820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/special-days"
              delay={0.6}
            />
            
            <JourneyCard 
              title="Photo Gallery"
              description="A collection of our precious moments together, frozen in time."
              image="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/gallery"
              delay={0.7}
            />
            
            <JourneyCard 
              title="Message Board"
              description="Words unsaid, feelings unexpressed. Here's where I share my deepest thoughts with you."
              image="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="/message-board"
              delay={0.8}
            />
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Link 
              to="/contact" 
              className="btn inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

interface JourneyCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, description, image, link, delay }) => {
  return (
    <motion.div 
      className="paper-texture rounded-lg overflow-hidden h-full flex flex-col"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline text-xl text-secondary mb-2">{title}</h3>
        <p className="font-handwritten text-text-light mb-4 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="font-handwritten text-secondary hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
        >
          <span>Read our story</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default HomePage;