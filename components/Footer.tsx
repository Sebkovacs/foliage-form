import React from 'react';
import { Leaf, Instagram, Linkedin, Mail } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: PageView) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      // If we are not on home, we need to go home first
      onNavigate('home');
      setTimeout(() => {
         document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-forest-green text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-soft-sand" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                Foliage & Form
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Transforming Newcastle's professional spaces with designer-led botanical styling and white-glove maintenance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-soft-sand">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-white transition-colors">About Jess</a></li>
              <li><a href="#philosophy" onClick={(e) => handleScroll(e, 'philosophy')} className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#collection" onClick={(e) => handleScroll(e, 'collection')} className="hover:text-white transition-colors">The Collection</a></li>
              <li><a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-soft-sand">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@foliageandform.com.au" className="hover:text-white transition-colors">hello@foliageandform.com.au</a>
              </li>
            </ul>
          </div>

          {/* Legal / Hours */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-soft-sand">Hours</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Mon - Fri: 9am - 5pm</p>
              <p>Sat - Sun: Closed</p>
              <p className="pt-4 text-xs opacity-60">
                10-Minute Response Radius<br/>
                Merewether HQ
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} Foliage & Form. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={(e) => handleNav(e, 'privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={(e) => handleNav(e, 'terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <span>ABN 12 345 678 901</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;