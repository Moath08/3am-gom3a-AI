
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black font-black">3G</span>
              </div>
              <span className="text-xl font-bold">3am Goma3a AI</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dall2 el business btaak with Egypt's leading AI consultancy. We bridge the gap between traditional operations and futuristic efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={18} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Smart Technology Park, Cairo, Egypt</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail size={18} className="text-yellow-500 flex-shrink-0" />
                <a href="mailto:hello@3amgoma3a.ai" className="hover:text-yellow-500">hello@3amgoma3a.ai</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-gray-500">
          <p>© 2024 3am Goma3a AI. All Rights Reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
