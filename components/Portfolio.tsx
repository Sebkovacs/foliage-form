import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

const Portfolio: React.FC = () => {
  const styles = [
    {
      title: "The Minimalist",
      description: "Clean lines, matte white or concrete vessels, and architectural foliage like Sansevieria and Rubber Plants. Perfect for tech startups and modern law firms.",
      localImage: "/images/portfolio-minimal.png",
      fallbackImage: "https://images.unsplash.com/photo-1599827668582-7d351336c1c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Tech", "Modern", "Clean"]
    },
    {
      title: "The Tropical Executive",
      description: "Lush, statement pieces. Large Fiddle Leaf Figs and Bird of Paradise in textured terracotta or basketry. Adds warmth to sterile boardrooms.",
      localImage: "/images/portfolio-tropical.png",
      fallbackImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Warmth", "Statement", "Lush"]
    },
    {
      title: "The Industrial Loft",
      description: "Trailing Devils Ivy and Monsteras paired with charcoal or metallic vessels. Softens brickwork and exposed beams common in Newcastle East.",
      localImage: "/images/portfolio-industrial.png",
      fallbackImage: "https://images.unsplash.com/photo-1598971861713-54ad16a75af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Texture", "Contrast", "Softening"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-sage/20 text-forest-green">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionHeading 
            title="Signature Looks" 
            subtitle="We don't do generic. Choose a curation that speaks to your brand."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {styles.map((style, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                  <SmartImage 
                    localSrc={style.localImage}
                    fallbackSrc={style.fallbackImage}
                    alt={style.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      {style.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-sans tracking-wider uppercase bg-white/90 text-clay px-2 py-1 shadow-sm backdrop-blur-sm">{tag}</span>
                      ))}
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-clay transition-colors">{style.title}</h3>
                <p className="font-sans text-charcoal font-light text-sm leading-relaxed">
                  {style.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;