import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-sand/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content */}
          <div className="lg:w-5/12 order-2 lg:order-1">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl text-forest-green mb-8 leading-none">
                Not just plants. <br />
                <span className="italic font-light text-clay">Living Design.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="space-y-6 text-lg text-charcoal font-light leading-relaxed mb-10 border-l-2 border-clay/30 pl-6">
                <p>
                  Most hire services drop a pot in a corner and leave. We don't.
                </p>
                <p>
                  Led by Jessie-Gray, our approach is rooted in interior design principles. We treat plants as architectural elements—using them to soften acoustics, guide foot traffic, and frame viewpoints.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="bg-white p-8 rounded-sm shadow-sm border border-sage/20">
                <h3 className="font-serif text-xl text-forest-green mb-6">The Boutique Standard</h3>
                <ul className="space-y-4">
                  {[
                    "Zero Effort: We water, prune, and polish.",
                    "Bespoke Styling: Pots sourced to match your joinery.",
                    "Ultra-Local: 10 minute response radius."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-1" />
                      <span className="text-gray-600 font-sans text-sm tracking-wide uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Image Collage - Boho Chic Style */}
          <div className="w-full lg:w-7/12 relative order-1 lg:order-2 min-h-[300px] md:min-h-[500px]">
            <Reveal delay={300}>
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-3/4 md:w-3/4 h-[250px] md:h-[400px] z-10">
                <SmartImage 
                  localSrc="/images/philosophy-main.png"
                  fallbackSrc="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Designer furniture and plants" 
                  className="w-full h-full object-cover shadow-xl rounded-sm"
                />
              </div>

              {/* Overlapping Image */}
              <div className="absolute bottom-0 left-0 w-3/5 md:w-3/5 h-[200px] md:h-[350px] z-20 transform translate-y-8 md:translate-y-12 -translate-x-2 md:-translate-x-4 lg:-translate-x-12">
                 <div className="absolute inset-0 border-2 md:border-4 border-sand z-30 pointer-events-none rounded-sm"></div>
                 <SmartImage 
                  localSrc="/images/philosophy-detail.png"
                  fallbackSrc="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Minimalist plant styling detail" 
                  className="w-full h-full object-cover shadow-2xl rounded-sm"
                />
              </div>

              {/* Decorative Element */}
              <div className="hidden md:block absolute top-1/2 left-1/4 w-64 h-64 bg-sage rounded-full mix-blend-multiply opacity-20 filter blur-3xl -z-0 animate-pulse"></div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;