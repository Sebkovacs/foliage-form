import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Button from './Button';
import SmartImage from './SmartImage';

interface HeroProps {
  onStartQuiz?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image with Boho Treatment */}
      <div className="absolute inset-0 z-0">
        <SmartImage 
          localSrc="/images/hero.png"
          
          fallbackSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Sunlit boho office space with plants" 
          className="w-full h-full object-cover opacity-90"
          priority={true}
        />
        
        {/* Layer 1: Warmth (Clay Tint) - Gives it the Boho Vibe */}
        <div className="absolute inset-0 bg-clay/30 mix-blend-overlay" />
        
        {/* Layer 2: Contrast & Readability (Dark Gradient from bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90" />
        
        {/* Layer 3: Texture (Subtle Grain) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-12">
        
        {/* Location Kicker - Minimal, no border */}
        <div className="mb-6 animate-fade-in-up flex flex-col items-center gap-3">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-linen/90 font-medium drop-shadow-md">
                Merewether • Newcastle
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-linen/80 to-transparent"></div>
        </div>
        
        {/* Main Heading - Editorial Style */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] animate-fade-in-up delay-100 font-light text-linen drop-shadow-sm tracking-tight">
          Your Office, <br />
          <span className="italic font-normal text-white">Redesigned by Nature.</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl max-w-xl mx-auto mb-10 text-linen/90 font-light animate-fade-in-up delay-200 leading-relaxed drop-shadow-md">
          Curated plant styling for boutique workspaces. <br className="hidden md:block" />
          Where interior design meets living art.
        </p>
        
        {/* Actions */}
        <div className="animate-fade-in-up delay-300 flex flex-col md:flex-row gap-5 justify-center items-center">
          <Button 
            variant="primary" 
            className="bg-clay/90 backdrop-blur-sm text-white hover:bg-white hover:text-clay px-10 py-4 text-base border border-white/10 shadow-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Site Walkthrough
          </Button>
          
          {onStartQuiz && (
            <button 
              onClick={onStartQuiz}
              className="group flex items-center gap-2 text-linen/90 px-6 py-3.5 rounded-sm hover:text-white transition-all font-serif italic text-lg hover:translate-x-1 duration-300"
            >
              <Sparkles className="w-4 h-4 text-clay group-hover:text-white transition-colors" />
              <span>Discover your style</span>
            </button>
          )}
        </div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-linen/60 animate-pulse flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.2em] uppercase font-sans opacity-80">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};

export default Hero;