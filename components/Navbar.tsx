import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ArrowLeft } from 'lucide-react';
import Button from './Button';
import { PageView } from '../types';

interface NavbarProps {
  currentPage?: PageView;
  onNavigate?: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (onNavigate) {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          scrollToElement(target);
        }, 100);
      } else {
        scrollToElement(target);
      }
    }
  };

  const scrollToElement = (targetId: string) => {
    const href = targetId.startsWith('#') ? targetId : `#${targetId}`;
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Collection', href: '#collection' },
    { name: 'Services', href: '#services' },
    { name: 'The Science', href: '#science' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const isSolidNav = scrolled || isOpen || currentPage !== 'home';

  // Updated colors to be softer/cleaner
  const navClasses = isSolidNav 
    ? 'bg-linen/95 backdrop-blur-md shadow-sm py-4' 
    : 'bg-transparent py-6';

  const textClass = isSolidNav
    ? 'text-forest-green'
    : 'text-linen'; // Warmer white
    
  const logoClass = isSolidNav
    ? 'text-forest-green'
    : 'text-linen';

  const hoverClass = isSolidNav
    ? 'hover:text-clay'
    : 'hover:text-white';

  const iconClass = isSolidNav
    ? 'text-forest-green hover:text-clay'
    : 'text-linen hover:text-white';

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${navClasses}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
              setIsOpen(false);
            }}
          >
            <Leaf className={`w-6 h-6 transition-colors ${logoClass} group-hover:text-clay transition-colors duration-500`} />
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${logoClass}`}>
              Foliage & Form
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {currentPage === 'home' ? (
              <>
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-colors font-serif italic tracking-wide ${textClass} ${hoverClass}`}
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  variant="primary" 
                  onClick={() => scrollToElement('contact')}
                  className={isSolidNav ? "" : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-clay hover:border-clay"}
                >
                  Book Walkthrough
                </Button>
              </>
            ) : (
              <button 
                onClick={() => onNavigate && onNavigate('home')}
                className="flex items-center gap-2 text-forest-green hover:text-clay transition-colors font-serif italic"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            {currentPage !== 'home' ? (
               <button 
                onClick={() => onNavigate && onNavigate('home')}
                className={`transition-colors p-2 -mr-2 ${iconClass}`}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            ) : (
              <button 
                className={`transition-colors relative z-50 p-2 -mr-2 cursor-pointer ${iconClass}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {currentPage === 'home' && (
        <div 
          className={`fixed inset-0 z-40 bg-linen transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-serif text-forest-green hover:text-clay hover:italic transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <Button 
              className="w-64"
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => scrollToElement('contact'), 100);
              }}
            >
              Book Walkthrough
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;