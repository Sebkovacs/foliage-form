import React from 'react';
import Reveal from './Reveal';
import { AlertCircle } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-forest-green mb-6">Terms of Service</h1>
            <p className="font-sans text-gray-500 uppercase tracking-widest text-sm">Effective Date: October 2023</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="prose prose-stone max-w-none font-light text-charcoal leading-relaxed">
            <p className="text-lg text-gray-600 mb-8">
              Welcome to Foliage & Form. By engaging our services, you agree to the following terms and conditions. These terms ensure we can maintain the high standard of service our clients expect.
            </p>

            <div className="bg-sage/10 border-l-4 border-forest-green p-6 my-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-forest-green shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-forest-green mb-1 text-sm uppercase tracking-wide">Key Summary</h4>
                  <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1 mt-2">
                    <li>Quotes are valid for 30 days.</li>
                    <li>We require safe access to your premises for maintenance.</li>
                    <li>Plant health guarantees apply only to 'VIP Care Club' subscribers.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">1. Services & Quotes</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li>All quotes provided by Foliage & Form are valid for 30 days from the date of issue.</li>
              <li>Quotes are based on the site conditions assessed during the initial walkthrough. Significant changes to the site (e.g., lighting changes, moving of furniture) may require a re-quote.</li>
              <li>We reserve the right to substitute plant species of equivalent value and aesthetic if specified stock is unavailable due to seasonal changes.</li>
            </ul>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">2. Payment Terms</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li><strong>Installation:</strong> A 50% deposit is required to secure stock and booking dates. The remaining 50% is due 7 days after installation.</li>
              <li><strong>Maintenance:</strong> Invoiced monthly in advance. Payment is due within 7 days of invoice date.</li>
              <li>Late payments may incur a 5% administrative fee.</li>
            </ul>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">3. Plant Health & Guarantees</h3>
            <p><strong>For 'Source & Style' (Purchase Only) Clients:</strong><br/>
            Plants are living organisms. Once delivered and installed, their health depends on the environment and care provided by the client. We cannot guarantee plant survival if we are not engaged for ongoing maintenance.</p>
            
            <p><strong>For 'VIP Care Club' (Maintenance) Clients:</strong><br/>
            We provide a full replacement guarantee. If a plant declines in health while under our care (excluding Force Majeure or client interference), we will replace it at no cost.</p>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">4. Client Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li>Clients must provide safe and clear access to all plants during agreed maintenance hours.</li>
              <li>Clients must not water, prune, or move plants under our maintenance care unless directed by us. Over-watering by staff is the #1 cause of plant death.</li>
              <li>Climate control (AC/Heating) must be kept within reasonable limits (15°C - 26°C) for plant survival.</li>
            </ul>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">5. Liability</h3>
            <p>
              While we take extreme care with all installations (using water-tight liners and protective felt pads), Foliage & Form is not liable for minor floor scratches or water damage caused by moving plants or pots after our installation is complete.
            </p>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">6. Safety & Toxicity</h3>
            <p>
              Some plant species (including but not limited to Philodendrons, Alocasias, and Lilies) may be toxic if ingested by humans or animals.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li>It is the client's responsibility to inform Foliage & Form if the workspace is accessible to pets or small children.</li>
              <li>We can provide a non-toxic plant schedule upon request.</li>
              <li>Foliage & Form accepts no liability for illness or injury resulting from the ingestion or handling of plants by staff, visitors, or pets.</li>
            </ul>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">7. Cancellation</h3>
            <p>
              Maintenance agreements may be cancelled with 30 days' written notice. Deposits for installations are non-refundable if materials have already been purchased.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
              <p>Questions? Contact us at <a href="mailto:hello@foliageandform.com.au" className="text-clay hover:underline">hello@foliageandform.com.au</a></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TermsOfService;