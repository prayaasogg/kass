import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizontal } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to a server
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 relative">
        <HeartDoodle className="top-40 left-[5%]" size={30} delay={0.2} />
        <HeartDoodle className="bottom-40 right-[8%]" size={24} delay={0.6} />
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.div 
            className="paper-texture p-6 md:p-8 rounded-lg max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-handwritten text-xl text-text-light text-center mb-8">
              Whenever you feel ready, I'd love to hear from you. Your words mean the world to me.
            </p>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-secondary mb-4">
                  <SendHorizontal size={48} className="mx-auto" />
                </div>
                <h2 className="font-headline text-2xl text-secondary mb-2">Message Sent!</h2>
                <p className="font-handwritten text-lg text-text-light">
                  Thank you for reaching out. I'll treasure your words and respond soon.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="btn mt-6"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-handwritten text-lg text-text-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border border-primary/30 rounded-lg font-handwritten text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-handwritten text-lg text-text-light mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border border-primary/30 rounded-lg font-handwritten text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-handwritten text-lg text-text-light mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border border-primary/30 rounded-lg font-handwritten text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className="btn inline-flex items-center gap-2"
                  >
                    <span>Send message</span>
                    <SendHorizontal size={18} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="paper-texture p-6 rounded-lg text-center">
                <h3 className="font-headline text-xl text-secondary mb-3">A Promise</h3>
                <p className="font-handwritten text-text-light">
                  Every message you send will be treasured, every word held close to my heart.
                </p>
              </div>
              
              <div className="paper-texture p-6 rounded-lg text-center">
                <h3 className="font-headline text-xl text-secondary mb-3">Remember</h3>
                <p className="font-handwritten text-text-light">
                  No matter how much time passes, the memories we created will always be special.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;