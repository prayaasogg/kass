import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="text-secondary" size={24} fill="#f2a2b8" />
          <span className="font-headline text-xl md:text-2xl text-secondary">My Love for Kashaf</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-text-light" />
            ) : (
              <Sun size={20} className="text-text-light" />
            )}
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-text-light p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background paper-texture py-4 px-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/first-meeting', label: 'First Sight' },
    { path: '/special-days', label: 'Special Moments' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/distance', label: 'Unspoken Words' },
    { path: '/message-board', label: 'My Letters' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link 
          key={link.path} 
          to={link.path}
          className={`font-handwritten text-lg transition-colors duration-300 ${
            location.pathname === link.path 
              ? 'text-secondary' 
              : 'text-text-light hover:text-secondary'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Header;