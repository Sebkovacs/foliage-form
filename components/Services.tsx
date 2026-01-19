import React from 'react';
import { Ruler, Sprout, RefreshCw, Check, Briefcase, ShoppingBag, Calendar, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Button from './Button';

const Services: React.FC = () => {
  const process = [
    {
      icon: Ruler,
      title: "1. The Audit",
      description: "A 1-hour onsite consultation. We assess your light, space, and style to create a bespoke plant schedule."
    },
    {
      icon: ShoppingBag,
      title: "2. The Source",
      description: "We purchase high-quality specimens specifically for your project from wholesale growers—no warehousing, fresh to you."
    },
    {
      icon: Sparkles,
      title: "3. The Style",
      description: "We deliver, pot, and style the plants onsite. You get an instant transformation without lifting a finger."
    }
  ];

  const tiers = [
    {
      name: "The Design Audit",
      subtitle: "One-Off Consultation",
      price: "$250",
      unit: "flat fee",
      icon: Ruler,
      description: "Perfect for businesses who want professional direction but are happy to DIY the rest. Expert advice on what to put where.",
      features: [
        "1-Hour Onsite Walkthrough",
        "Light & Environment Assessment",
        "Bespoke Plant Schedule (PDF)",
        "Pot & Styling Recommendations",
        "Care Guide Included"
      ],
      cta: "Book Audit",
      highlight: false
    },
    {
      name: "Source & Style",
      subtitle: "Complete Transformation",
      price: "Cost",
      unit: "+ design fee",
      icon: Sparkles,
      description: "We design, buy, deliver, and install. You own everything outright. The easiest way to get an instant magazine-worthy office.",
      features: [
        "Everything in 'The Audit'",
        "Wholesale Plant Sourcing",
        "Designer Pot Sourcing",
        "White-Glove Delivery & Install",
        "Zero Storage / Immediate Handover"
      ],
      cta: "Get a Quote",
      highlight: true
    },
    {
      name: "VIP Care Club",
      subtitle: "Waitlist Only",
      price: "$150",
      unit: "/ week min",
      icon: RefreshCw,
      description: "Weekly maintenance for a strictly limited number of local boutique offices. We keep your investment thriving.",
      features: [
        "Weekly Watering & Feeding",
        "Leaf Shine & Pruning",
        "Pest Management",
        "Exclusive to Merewether/Junction",
        "Limited Client Intake (Currently 2 spots)"
      ],
      cta: "Join Waitlist",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Process Section */}
        <div className="mb-24">
          <Reveal>
            <SectionHeading 
              title="The Boutique Approach" 
              subtitle="We don't do mass-market leasing. We design curated green spaces that you own."
            />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto mt-12">
            {process.map((item, index) => (
              <Reveal key={index} delay={index * 200}>
                <div className="flex flex-col items-start group border-l-2 border-sage hover:border-clay pl-8 transition-colors duration-500 h-full">
                  <div className="mb-6 text-sage group-hover:text-clay transition-colors duration-300">
                    <item.icon className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-2xl text-forest-green mb-4 group-hover:italic transition-all duration-300">{item.title}</h3>
                  <p className="font-sans text-gray-600 leading-relaxed font-light text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="border-t border-gray-100 pt-24">
           <Reveal>
            <SectionHeading 
              title="Ways to Work" 
              subtitle="Transparent, high-value packages designed for busy professionals."
            />
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
            {tiers.map((tier, index) => (
              <Reveal key={index} delay={index * 150}>
                <div className={`relative flex flex-col h-full p-8 rounded-sm border transition-all duration-300 hover:shadow-xl ${tier.highlight ? 'border-sage bg-sage/10 text-forest-green shadow-lg transform md:-translate-y-4' : 'border-gray-200 bg-white text-charcoal'}`}>
                  
                  {tier.highlight && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-clay text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <tier.icon className={`w-8 h-8 mb-4 ${tier.highlight ? 'text-clay' : 'text-sage'}`} />
                    <h3 className="font-serif text-2xl font-bold mb-1">{tier.name}</h3>
                    <p className={`text-sm uppercase tracking-wider font-medium ${tier.highlight ? 'text-charcoal' : 'text-stone-gray'}`}>{tier.subtitle}</p>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-serif">{tier.price}</span>
                    <span className={`text-sm ${tier.highlight ? 'text-charcoal' : 'text-gray-500'}`}>{tier.unit}</span>
                  </div>

                  <p className={`mb-8 leading-relaxed text-sm ${tier.highlight ? 'text-charcoal' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-clay' : 'text-sage'}`} />
                        <span className={`text-sm ${tier.highlight ? 'text-forest-green' : 'text-gray-600'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={tier.highlight ? 'primary' : 'outline'} 
                    className={tier.highlight ? 'bg-forest-green text-white hover:bg-clay border-none' : 'border-sage text-sage hover:border-clay hover:text-clay'}
                    fullWidth
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;