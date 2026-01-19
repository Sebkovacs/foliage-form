import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

const DesignerPots: React.FC = () => {
  const pots = [
    {
      title: "The Eco-Fiberstone",
      description: "The workhorse of commercial styling. A mixture of fiberglass and crushed stone dust. Extremely durable, lightweight for easy moving, and fully waterproof for office safety.",
      material: "Fiberglass & Stone",
      vibe: "Industrial Minimalist",
      localImage: "/images/pot-fiber.png",
      fallbackImage: "https://images.unsplash.com/photo-1517816428103-7dc308d7d623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Spun Aluminium",
      description: "For the modern executive suite. Seamless, lightweight metal with a powder-coated matte finish. It offers a sharp, precise silhouette that complements glass and steel architecture.",
      material: "Powder-Coated Metal",
      vibe: "Sleek & Executive",
      localImage: "/images/pot-alum.png",
      fallbackImage: "https://images.unsplash.com/photo-1628124269325-1e42b28c2e64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Artisan Glaze",
      description: "High-fired ceramic with reactive glazes. These heavy, substantial pots anchor a room and introduce that 'boho chic' texture. Sealed internally to prevent floor damage.",
      material: "Glazed Ceramic",
      vibe: "Curated & Organic",
      localImage: "/images/pot-glaze.png",
      fallbackImage: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-soft-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-gray/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading 
            title="Office-Ready Vessels" 
            subtitle="Commercial-grade durability meets high-end residential aesthetic. All pots include water-tight liners to protect your flooring."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {pots.map((pot, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500 ease-out h-full flex flex-col">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  <SmartImage 
                    localSrc={pot.localImage}
                    fallbackSrc={pot.fallbackImage}
                    alt={pot.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-widest uppercase text-forest-green">
                    {pot.vibe}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-forest-green mb-2">{pot.title}</h3>
                    <p className="font-sans text-xs font-bold text-stone-gray uppercase tracking-wider mb-4 border-b border-gray-100 pb-4">
                        {pot.material}
                    </p>
                    <p className="text-gray-600 leading-relaxed font-sans font-light">
                      {pot.description}
                    </p>
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

export default DesignerPots;