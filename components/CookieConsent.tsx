import React, { useState, useEffect } from 'react';
import Button from './Button';
import { X } from 'lucide-react';
import { PageView } from '../types';

interface CookieConsentProps {
  onNavigate: (page: PageView) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('foliage-cookie-consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly on load, feeling less aggressive
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('foliage-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-forest-green text-white z-[60] py-5 px-6 shadow-2xl animate-fade-in-up border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-light text-gray-300 max-w-3xl leading-relaxed">
          <p>
            We use cookies to analyse site traffic and improve your experience. By continuing to use our site, you agree to our 
            <button 
                onClick={() => onNavigate('privacy')}
                className="text-white underline hover:text-clay ml-1 decoration-1 underline-offset-4 transition-colors"
            >
                Privacy Policy
            </button>.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Button variant="primary" onClick={handleAccept} className="py-2 px-6 text-xs h-10 border border-transparent hover:border-white">
            Accept & Close
          </Button>
          <button 
            onClick={() => setIsVisible(false)} 
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Dismiss cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;