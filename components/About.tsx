import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-forest-green/20 rounded-sm z-0"></div>
                <SmartImage 
                  localSrc="/images/about-jessie.png"
                  fallbackSrc="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Jessie-Gray styling a space" 
                  className="w-full h-[500px] object-cover rounded-sm relative z-10 shadow-md"
                />
              </div>
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <Reveal delay={200}>
              <h2 className="font-serif text-3xl md:text-5xl text-forest-green mb-6 leading-tight">
                Meet <span className="italic">Jessie-Gray</span>
              </h2>
              <h3 className="font-sans text-stone-gray uppercase tracking-widest text-sm font-bold mb-8">
                Interior Designer • Botanical Stylist
              </h3>
            </Reveal>

            <Reveal delay={400}>
              <div className="space-y-6 text-lg text-charcoal font-light leading-relaxed">
                <p>
                  With over a decade of experience in high-end residential and commercial interior design, Jessie realized that the final layer of styling—the greenery—was often an afterthought. 
                </p>
                <p>
                  Beautiful spaces were frequently let down by poor plant choices, incorrect placement, or dying foliage that hadn't been maintained.
                </p>
                <p>
                  Now focusing full-time on <strong>Foliage & Form</strong>, Jessie brings an interior designer's eye to plant styling. She doesn't just place plants; she curates living sculptures that enhance architectural lines, improve spatial flow, and breathe life into Newcastle's most professional workspaces.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;