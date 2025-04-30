import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send } from 'lucide-react';
import { messages as initialMessages } from '../data/messages';
import { Message } from '../types';
import PageTransition from '../components/PageTransition';
import HeartDoodle from '../components/HeartDoodle';

const MessageBoard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    const message: Message = {
      id: messages.length + 1,
      content: newMessage,
      author: 'Me',
      date: 'Just now'
    };
    
    setMessages([message, ...messages]);
    setNewMessage('');
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 relative">
        <HeartDoodle className="top-32 right-[8%]" size={24} delay={0.3} />
        <HeartDoodle className="bottom-32 left-[10%]" size={30} delay={0.7} />
        
        <div className="container mx-auto px-4">
          <motion.h1 
            className="section-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Message Board
          </motion.h1>
          
          <motion.p 
            className="font-handwritten text-xl text-center text-text-light max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            This is where I share my thoughts, feelings, and memories. A place for the words I wish I could tell you in person.
          </motion.p>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="paper-texture p-6 rounded-lg mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="message" className="block font-handwritten text-lg text-text-light mb-2">
                    Write a new message:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-4 bg-white border border-primary/30 rounded-lg font-handwritten text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                    placeholder="Share your thoughts, feelings, or memories..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="btn inline-flex items-center gap-2"
                  >
                    <span>Send message</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="font-headline text-2xl text-primary mb-4">Messages</h2>
              
              {messages.map((message, index) => (
                <motion.div 
                  key={message.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="paper-texture p-6 rounded-lg relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 rotate-12 text-primary/10">
                    <Heart size={80} fill="#f9c5d1" stroke="none" />
                  </div>
                  
                  <p className="font-handwritten text-lg text-text-light mb-4 relative z-10">
                    {message.content}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-text-light/70">
                    <span>From: {message.author}</span>
                    <span>{message.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default MessageBoard;