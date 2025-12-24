
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-black font-black text-xl">3G</span>
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">
              3am Goma3a <span className="text-yellow-500 underline decoration-yellow-500/30">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                  location.pathname === link.path ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95 glow-yellow"
            >
              Book Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-[#0a0a0a] transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 border-b border-white/10' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-300 hover:text-yellow-500 py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-yellow-500 text-black text-center py-3 rounded-xl font-bold"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
