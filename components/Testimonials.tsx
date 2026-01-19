import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Jess transformed our sterile legal office into a space that feels calm and professional. The 10-minute response time is no joke—we had a pot knocked over and she was there within the hour.",
      author: "Sarah Jenkins",
      role: "Partner, Jenkins Legal",
      location: "The Junction"
    },
    {
      text: "The curated pots are stunning. We didn't realize how much the cheap plastic ones we had before were bringing down our brand image until we switched to Foliage & Form.",
      author: "Michael Ross",
      role: "Creative Director, Neon Agency",
      location: "Newcastle West"
    },
    {
      text: "Finally, a plant service that understands design. It's not just plants in corners; it's a cohesive styling package that actually complements our fit-out.",
      author: "Dr. Emily Chen",
      role: "Merewether Medical Centre",
      location: "Merewether"
    }
  ];

  return (
    <section className="py-24 bg-soft-sand/30">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionHeading 
            title="Local Feedback" 
            subtitle="We work exclusively with Newcastle's most discerning businesses."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto mt-8">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="flex flex-col h-full justify-between">
                <div className="mb-8">
                  <span className="text-6xl text-forest-green/20 font-serif leading-none">"</span>
                  <p className="font-serif text-xl text-charcoal italic leading-relaxed -mt-6 relative z-10">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-forest-green/20"></div>
                  <div className="text-right">
                    <h4 className="font-sans font-bold text-sm text-forest-green uppercase tracking-wide">{item.author}</h4>
                    <p className="text-xs text-stone-gray font-medium mt-1">{item.role}</p>
                    <p className="text-xs text-stone-gray/60 mt-0.5">{item.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;