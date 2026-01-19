import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer residential styling?",
      answer: "We focus primarily on commercial workspaces and boutique professional suites to maintain our high service standards and response times. However, we do take on select large-scale residential projects within Merewether."
    },
    {
      question: "What happens if a plant dies?",
      answer: "Our Green Care Subscription includes a full Replacement Guarantee. If a plant looks unhappy or drops below our aesthetic standards, we swap it out immediately at no extra cost to you."
    },
    {
      question: "Is there a lock-in contract?",
      answer: "We offer flexible terms. Our standard agreement is 12 months to allow us to source and acclimate your specific plants, but we have a 3-month trial period available for new clients."
    },
    {
      question: "How often do you visit?",
      answer: "Weekly. We find that fortnightly visits often lead to dust buildup and missed watering cycles. Our weekly 'white-glove' service ensures your plants always look showroom-ready."
    },
    {
      question: "Can I choose my own pots?",
      answer: "Absolutely. While we have our curated range of designer vessels, we can source specific pots to match your existing branding or interior design scheme."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-soft-sand border-t border-gray-200">
      <div className="container mx-auto px-6">
        <Reveal>
            <SectionHeading 
            title="Common Questions" 
            subtitle="Everything you need to know about our service."
            />
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 100}>
              <div 
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center select-none">
                  <h3 className="font-serif text-lg text-forest-green">{faq.question}</h3>
                  {openIndex === index ? 
                    <Minus className="w-5 h-5 text-forest-green" /> : 
                    <Plus className="w-5 h-5 text-forest-green" />
                  }
                </div>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 font-sans leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;