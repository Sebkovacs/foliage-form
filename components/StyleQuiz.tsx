import React, { useState } from 'react';
import { X, Sun, CloudRain, Zap, Coffee, Droplets, ArrowRight, Check } from 'lucide-react';
import Button from './Button';

interface StyleQuizProps {
  onClose: () => void;
  onComplete: (result: string) => void;
}

const StyleQuiz: React.FC<StyleQuizProps> = ({ onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Record<string, string>>({});

  const totalSteps = 3;

  const handleSelect = (key: string, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    if (step < totalSteps) {
      setTimeout(() => setStep(prev => prev + 1), 200);
    } else {
      finishQuiz({ ...selections, [key]: value });
    }
  };

  const finishQuiz = (finalSelections: Record<string, string>) => {
    // Simple logic to determine style
    const light = finalSelections.light; // 'low', 'bright'
    const vibe = finalSelections.vibe; // 'minimal', 'lush'
    
    let result = '';
    let resultName = '';

    if (vibe === 'minimal') {
      resultName = 'The Minimalist';
      result = "I took the style quiz! I matched with 'The Minimalist' look (Clean lines, architectural plants). I'd love a quote for this style.";
    } else if (light === 'bright') {
      resultName = 'The Tropical Executive';
      result = "I took the style quiz! I matched with 'The Tropical Executive' look (Statement Ficus, lush canopy). I'd love a quote for this style.";
    } else {
      resultName = 'The Industrial Loft';
      result = "I took the style quiz! I matched with 'The Industrial Loft' look (Hardy trailing plants, texture). I'd love a quote for this style.";
    }

    // Small delay for UI effect
    setTimeout(() => {
      onComplete(result);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-forest-green/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-linen w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col min-h-[500px] animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-sand">
          <div>
            <span className="text-xs font-bold tracking-widest text-clay uppercase">Style Finder</span>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1 w-8 rounded-full transition-colors ${step >= i ? 'bg-forest-green' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <X className="w-6 h-6 text-charcoal" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow p-8 md:p-12 flex flex-col justify-center">
          
          {/* Step 1: Light */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-3xl text-forest-green mb-4">Let's talk light.</h2>
              <p className="text-gray-600 mb-8 font-light text-lg">How much natural sunlight does your main workspace get?</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleSelect('light', 'low')}
                  className="p-6 border-2 border-transparent bg-white hover:border-clay hover:shadow-lg transition-all text-left group rounded-sm"
                >
                  <CloudRain className="w-8 h-8 text-sage mb-4 group-hover:text-clay" />
                  <h3 className="font-bold text-forest-green mb-1">Low / Artificial</h3>
                  <p className="text-sm text-gray-500">We rely mostly on overhead office lights or have small windows.</p>
                </button>

                <button 
                   onClick={() => handleSelect('light', 'bright')}
                   className="p-6 border-2 border-transparent bg-white hover:border-clay hover:shadow-lg transition-all text-left group rounded-sm"
                >
                  <Sun className="w-8 h-8 text-clay mb-4" />
                  <h3 className="font-bold text-forest-green mb-1">Bright & Sunny</h3>
                  <p className="text-sm text-gray-500">Large windows, plenty of sky visibility, or direct sun beams.</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Vibe */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h2 className="font-serif text-3xl text-forest-green mb-4">Pick your vibe.</h2>
              <p className="text-gray-600 mb-8 font-light text-lg">What best describes your brand's interior aesthetic?</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleSelect('vibe', 'minimal')}
                  className="p-6 border-2 border-transparent bg-white hover:border-clay hover:shadow-lg transition-all text-left group rounded-sm"
                >
                  <Zap className="w-8 h-8 text-sage mb-4 group-hover:text-clay" />
                  <h3 className="font-bold text-forest-green mb-1">Clean & Minimal</h3>
                  <p className="text-sm text-gray-500">White walls, concrete, tech-focused, uncluttered lines.</p>
                </button>

                <button 
                   onClick={() => handleSelect('vibe', 'lush')}
                   className="p-6 border-2 border-transparent bg-white hover:border-clay hover:shadow-lg transition-all text-left group rounded-sm"
                >
                  <Coffee className="w-8 h-8 text-clay mb-4" />
                  <h3 className="font-bold text-forest-green mb-1">Warm & Texture</h3>
                  <p className="text-sm text-gray-500">Timber, brick, rugs, cozy breakout spaces, creative feel.</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Maintenance */}
          {step === 3 && (
             <div className="animate-fade-in-up">
             <h2 className="font-serif text-3xl text-forest-green mb-4">Hands on?</h2>
             <p className="text-gray-600 mb-8 font-light text-lg">Do you want to look after them, or should we?</p>
             
             <div className="grid md:grid-cols-2 gap-4">
               <button 
                 onClick={() => handleSelect('care', 'diy')}
                 className="p-6 border-2 border-transparent bg-white hover:border-clay hover:shadow-lg transition-all text-left group rounded-sm"
               >
                 <Droplets className="w-8 h-8 text-sage mb-4 group-hover:text-clay" />
                 <h3 className="font-bold text-forest-green mb-1">I'll water them</h3>
                 <p className="text-sm text-gray-500">I have a green thumb (or I'm willing to learn). Low maintenance plants please.</p>
               </button>

               <button 
                  onClick={() => handleSelect('care', 'service')}
                  className="p-6 border-2 border-transparent bg-white hover:border-clay hover:shadow-lg transition-all text-left group rounded-sm"
               >
                 <Check className="w-8 h-8 text-clay mb-4" />
                 <h3 className="font-bold text-forest-green mb-1">Do it for me</h3>
                 <p className="text-sm text-gray-500">I want the VIP Care Club. I don't want to lift a finger.</p>
               </button>
             </div>
           </div>
          )}

        </div>
        
        {/* Footer actions */}
        <div className="p-6 border-t border-sand bg-white/50 flex justify-between items-center">
            {step > 1 && (
                <button onClick={() => setStep(prev => prev - 1)} className="text-sm text-gray-500 hover:text-forest-green underline">
                    Back
                </button>
            )}
            <div className="text-xs text-gray-400 ml-auto">
                Step {step} of 3
            </div>
        </div>

      </div>
    </div>
  );
};

export default StyleQuiz;