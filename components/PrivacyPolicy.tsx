import React from 'react';
import SectionHeading from './SectionHeading';
import { Shield, Lock, Eye } from 'lucide-react';
import Reveal from './Reveal';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-forest-green mb-6">Privacy Policy</h1>
            <p className="font-sans text-gray-500 uppercase tracking-widest text-sm">Last Updated: October 2023</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="prose prose-stone max-w-none font-light text-charcoal leading-relaxed">
            <p className="text-xl text-gray-600 mb-8 border-l-4 border-clay pl-6 italic">
              Foliage & Form ("we", "us", "our") is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information in accordance with the Privacy Act 1988 (Cth).
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12 not-prose">
              <div className="bg-linen p-6 rounded-sm border border-sand">
                <Shield className="w-8 h-8 text-clay mb-4" />
                <h3 className="font-serif text-lg text-forest-green mb-2">Data Protection</h3>
                <p className="text-sm text-gray-600">We use industry-standard encryption to protect your details.</p>
              </div>
              <div className="bg-linen p-6 rounded-sm border border-sand">
                <Lock className="w-8 h-8 text-clay mb-4" />
                <h3 className="font-serif text-lg text-forest-green mb-2">No Sharing</h3>
                <p className="text-sm text-gray-600">We never sell your data to third-party marketing agencies.</p>
              </div>
              <div className="bg-linen p-6 rounded-sm border border-sand">
                <Eye className="w-8 h-8 text-clay mb-4" />
                <h3 className="font-serif text-lg text-forest-green mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">You have full right to access and correct your information.</p>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">1. Information We Collect</h3>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li><strong>Contact Details:</strong> Name, email address, phone number, and office address.</li>
              <li><strong>Project Details:</strong> Information about your workspace, including floor plans, photos, and access requirements.</li>
              <li><strong>Digital Info:</strong> IP addresses and browser types via cookies (to improve website performance).</li>
            </ul>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">2. How We Use Your Information</h3>
            <p>Your data is used strictly for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li>To provide quotes, schedule walkthroughs, and deliver our styling services.</li>
              <li>To issue invoices and process payments.</li>
              <li>To communicate regarding maintenance schedules or plant care.</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">3. Disclosure to Third Parties</h3>
            <p>We do not sell or trade your personal information. However, we may share data with trusted service providers who assist our operations, such as:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600">
              <li>Payment processors (e.g., Stripe, Xero).</li>
              <li>Delivery partners for large plant orders.</li>
              <li>IT and cloud storage providers.</li>
            </ul>
            <p>These third parties are obligated to keep your information confidential and secure.</p>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">4. Security</h3>
            <p>
              We implement appropriate technical and organisational measures to secure your personal data against unauthorised access, loss, or alteration. While no digital transmission is 100% secure, we strive to use commercially acceptable means to protect your information.
            </p>

            <h3 className="font-serif text-2xl text-forest-green mt-12 mb-4">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or wish to access/correct your personal data, please contact us at:
            </p>
            <p className="mt-4 font-medium text-forest-green">
              Email: privacy@foliageandform.com.au<br />
              Address: Merewether, NSW 2291
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PrivacyPolicy;