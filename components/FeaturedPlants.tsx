import React from 'react';
import SectionHeading from './SectionHeading';
import { Sprout, Star, Sun, Heart } from 'lucide-react';
import Reveal from './Reveal';
import SmartImage from './SmartImage';

const FeaturedPlants: React.FC = () => {
  const plants = [
    {
      name: "The Fiddle Leaf",
      botanical: "Ficus lyrata",
      tagline: "The Icon",
      localImage: "/images/plant-fiddle.png",
      fallbackImage: "https://images.unsplash.com/photo-1597054652230-f2038747a255?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "The undisputed king of interior editorial. With massive, violin-shaped leaves, it provides immediate structural height and drama. We source established, multi-branched specimens that turn a corner into a destination.",
      needs: "Bright Indirect Light",
      vibe: "Dramatic, Sculptural & Tall",
      meaning: "Abundance and good luck.",
      propagated: false
    },
    {
      name: "The Peace Lily",
      botanical: "Spathiphyllum 'Sensation'",
      tagline: "The Communicator",
      localImage: "/images/plant-peace.png",
      fallbackImage: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "We use the giant 'Sensation' variety for a lush, tropical canopy effect. It acts as a natural humidifier and air purifier. Best of all, it dramatically droops when thirsty, telling you exactly when it needs care.",
      needs: "Low to Medium Light",
      vibe: "Lush, Flowering & Soft",
      meaning: "Peace and sympathy.",
      propagated: true
    },
    {
      name: "Devil's Ivy",
      botanical: "Epipremnum aureum",
      tagline: "The Cascader",
      localImage: "/images/plant-ivy.png",
      fallbackImage: "https://images.unsplash.com/photo-1598971861713-54ad16a75af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "The ultimate styling tool for softening hard architectural lines. We drape these resilient vines from shelves or high storage units. Its neon or variegated leaves bring a splash of living color to the highest points of a room.",
      needs: "Any Light Condition",
      vibe: "Trailing, Wild & Resilient",
      meaning: "Determination and energy.",
      propagated: true
    },
    {
      name: "Cast Iron Plant",
      botanical: "Aspidistra elatior",
      tagline: "The Stoic",
      localImage: "/images/plant-castiron.png",
      fallbackImage: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Appropriately named, this plant is nearly indestructible. With dark, vertical, strappy leaves, it adds upright elegance to the darkest corners of an office where other plants would fail. A zero-stress option.",
      needs: "Low Light / Shadow",
      vibe: "Vertical, Dark & Elegant",
      meaning: "Persistence and strength.",
      propagated: true
    }
  ];

  return (
    <section id="collection" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <SectionHeading 
            title="The Low-Maintenance Edit" 
            subtitle="Beautiful plants shouldn't be a burden. We curate species that deliver maximum visual impact with minimal fuss."
          />
        </Reveal>

        <div className="flex flex-col gap-20 max-w-6xl mx-auto mt-16">
          {plants.map((plant, index) => (
            <Reveal key={index}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-stretch`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 border-2 border-forest-green/10 transform translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-3 group-hover:translate-y-3 z-0" />
                  <div className="h-[500px] w-full relative z-10 overflow-hidden rounded-sm shadow-md">
                    <SmartImage 
                      localSrc={plant.localImage}
                      fallbackSrc={plant.fallbackImage}
                      alt={plant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-white/95 px-6 py-3 m-6 shadow-sm">
                        <p className="font-serif italic text-forest-green text-lg">{plant.tagline}</p>
                    </div>
                  </div>
                  
                  {plant.propagated && (
                    <div className="absolute top-6 right-6 z-20 bg-forest-green text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Sprout className="w-3 h-3" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Studio Propagated</span>
                    </div>
                  )}
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-4xl text-forest-green mb-2">{plant.name}</h3>
                    <p className="font-sans text-stone-gray text-sm tracking-widest uppercase font-medium">{plant.botanical}</p>
                  </div>

                  <p className="text-lg text-charcoal font-light leading-relaxed mb-8 border-l-2 border-forest-green pl-6">
                    {plant.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-soft-sand/50 p-6 rounded-sm">
                     <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-forest-green mt-0.5" />
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-wider text-charcoal mb-1">The Vibe</h4>
                            <p className="text-sm text-gray-600">{plant.vibe}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-forest-green mt-0.5" />
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-wider text-charcoal mb-1">Meaning</h4>
                            <p className="text-sm text-gray-600">{plant.meaning}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3">
                        <Sun className="w-5 h-5 text-forest-green mt-0.5" />
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-wider text-charcoal mb-1">Light Needs</h4>
                            <p className="text-sm text-gray-600">{plant.needs}</p>
                        </div>
                     </div>
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

export default FeaturedPlants;