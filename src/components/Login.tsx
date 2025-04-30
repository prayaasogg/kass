import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '57') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div 
        className="paper-texture p-8 rounded-lg max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <Heart className="text-secondary mx-auto mb-4" size={40} fill="#f2a2b8" />
          <h1 className="font-headline text-2xl text-secondary mb-2">Our Love Story</h1>
          <p className="font-handwritten text-lg text-text-light">Enter our special number to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg font-handwritten text-lg transition-colors duration-300 ${
                  error 
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                    : 'border-primary/30 focus:border-secondary focus:ring-secondary/20'
                } focus:outline-none focus:ring-2`}
                placeholder="Enter password"
              />
            </div>
            {error && (
              <motion.p 
                className="text-red-500 font-handwritten mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Incorrect password. Try adding our birthdays.
              </motion.p>
            )}
          </div>

          <button 
            type="submit"
            className="w-full btn"
          >
            Enter Our Story
          </button>
        </form>

        <p className="font-handwritten text-center text-text-light mt-6">
          Hint: Sum of our day of birth (eg 20+15)
        </p>
      </motion.div>
    </div>
  );
};

export default Login;