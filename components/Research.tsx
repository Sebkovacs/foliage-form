import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';
import SmartImage from './SmartImage';
import { Download, Brain, Wind, TrendingUp, CheckCircle, Mail } from 'lucide-react';

const Research: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1200);
  };

  const stats = [
    {
      icon: TrendingUp,
      value: "15%",
      label: "Productivity Increase",
      source: "University of Exeter",
      desc: "Employees in environments with minimal greenery complete tasks faster and with fewer errors."
    },
    {
      icon: Brain,
      value: "60%",
      label: "Reduction in Stress",
      source: "UTS Sydney",
      desc: "Visual access to nature lowers cortisol levels and anxiety within minutes of exposure."
    },
    {
      icon: Wind,
      value: "87%",
      label: "Toxin Removal",
      source: "NASA Clean Air Study",
      desc: "Specific plant varieties actively scrub VOCs and formaldehydes from recycled office air."
    }
  ];

  return (
    <section id="science" className="py-24 bg-linen border-t border-sage/20">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <Reveal>
          <SectionHeading 
            title="Biophilia & Business" 
            subtitle="The science is settled: Bringing the outside in isn't just an aesthetic choice; it's a financial one."
          />
        </Reveal>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto mt-12 items-center">
          
          {/* Left: The Write Up */}
          <div className="lg:w-1/2 space-y-8">
            <Reveal delay={200}>
              <h3 className="font-serif text-3xl text-forest-green">
                Your staff are <span className="italic text-clay">starving</span> for nature.
              </h3>
            </Reveal>
            <Reveal delay={300}>
              <div className="prose text-gray-600 font-light leading-relaxed space-y-6">
                <p>
                  Humans spent 99% of our evolutionary history in the wild. We are hardwired to respond to organic forms, fractal patterns, and the colour green.
                </p>
                <p>
                  In the stark, linear environments of modern offices, our brains experience a low-level, constant "fight or flight" stress response. It exhausts cognitive resources, kills creativity, and leads to burnout.
                </p>
                <p>
                  This is the core of <strong>Biophilic Design</strong>. By reintroducing foliage into your workspace, we trigger an autonomic relaxation response. It is a "soft reset" for the mind, allowing your team to focus deeper and work happier.
                </p>
              </div>
            </Reveal>

            {/* Stats Grid */}
            <div className="grid gap-6 mt-8">
              {stats.map((stat, i) => (
                <Reveal key={i} delay={400 + (i * 100)}>
                  <div className="flex items-start gap-4 p-4 bg-white/50 rounded-sm border-l-2 border-sage hover:border-clay transition-colors">
                    <div className="bg-white p-2 rounded-full shadow-sm text-clay">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-serif text-forest-green">{stat.value}</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-charcoal">{stat.label}</span>
                      </div>
                      <p className="text-xs text-stone-gray mt-1 italic">Source: {stat.source}</p>
                      <p className="text-sm text-gray-600 mt-2 leading-snug">{stat.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: The Lead Magnet */}
          <div className="lg:w-1/2 w-full">
            <Reveal delay={500}>
              <div className="bg-forest-green text-white p-8 md:p-12 rounded-sm relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-clay/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative z-10">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center text-center animate-fade-in-up">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-forest-green mb-6 shadow-lg">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-2xl mb-2">Check your inbox!</h4>
                      <p className="text-white/80 font-light text-sm mb-6 max-w-xs">
                        We've sent the <strong>Biophilic ROI Guide</strong> to your email address.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs text-white/60 hover:text-white underline"
                      >
                        Send to a different address
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row gap-8 items-center transition-all duration-300">
                      {/* Book Cover Visual */}
                      <div className="w-32 h-44 shrink-0 bg-linen shadow-2xl rotate-3 transition-transform group-hover:rotate-0 duration-500 flex flex-col items-center justify-center p-2 text-center border border-white/10 hidden md:flex">
                        <SmartImage 
                          localSrc="/images/guide-cover.png"
                          fallbackSrc="https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                          alt="Guide Cover" 
                          className="w-full h-24 object-cover mb-2 grayscale opacity-80"
                        />
                        <span className="font-serif text-forest-green text-[8px] leading-tight">The Biophilic<br/>ROI Guide</span>
                        <div className="w-8 h-[1px] bg-clay my-1"></div>
                        <span className="text-[6px] text-charcoal uppercase tracking-widest">Foliage & Form</span>
                      </div>

                      <div className="w-full">
                        <span className="text-clay font-bold tracking-widest text-xs uppercase mb-2 block">Free Download</span>
                        <h4 className="font-serif text-2xl mb-4">The Biophilic ROI Guide</h4>
                        <p className="text-white/80 font-light text-sm mb-6 leading-relaxed">
                          A 12-page breakdown for business owners. Includes tax-deduction checklists, the "Green Ratio" for floor plans, and case studies on staff retention.
                        </p>
                        
                        <form className="space-y-3" onSubmit={handleSubmit}>
                           <div className="relative">
                             <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                             <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your work email" 
                                className="w-full pl-10 pr-4 py-2 text-charcoal bg-white/95 border-none focus:ring-2 focus:ring-clay placeholder-gray-400 text-sm rounded-sm"
                              />
                           </div>
                            <Button 
                              type="submit" 
                              variant="primary" 
                              fullWidth 
                              disabled={isSubmitting}
                              className="bg-clay hover:bg-white hover:text-forest-green border-none"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center gap-2">Processing...</span>
                              ) : (
                                <span className="flex items-center gap-2"><Download className="w-4 h-4" /> Download Guide</span>
                              )}
                            </Button>
                        </form>
                        <p className="text-[10px] text-white/40 mt-3 text-center md:text-left">Instant PDF Access. No spam, ever.</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;