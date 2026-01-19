import React, { useState, useEffect } from 'react';
import Button from './Button';
import { MapPin, Mail, Phone, Navigation, AlertCircle, ArrowRight } from 'lucide-react';
import SmartImage from './SmartImage';

interface ContactProps {
  initialMessage?: string;
}

const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    deskCount: '',
    naturalLight: false,
    message: ''
  });
  
  // Pre-fill message if provided via props (e.g. from Quiz)
  useEffect(() => {
    if (initialMessage) {
      setFormState(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!validateEmail(formState.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError(null);

    setIsSubmitting(true);
    
    // Simulate API call - In production, replace with fetch to Formspree/EmailJS
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormState({
        name: '',
        email: '',
        company: '',
        deskCount: '',
        naturalLight: false,
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types in email field
    if (name === 'email') {
      setEmailError(null);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl text-forest-green mb-6">Let's Transform Your Workspace</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We are currently accepting new clients within our strict 10-minute service radius of Merewether. 
              Book a complimentary 15-minute walkthrough to assess your light, space, and style.
            </p>

            {/* Visual Map */}
            <div className="mb-10 relative rounded-lg overflow-hidden h-48 w-full group">
              <SmartImage 
                localSrc="/images/map-stylized.png"
                fallbackSrc="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Map of Newcastle Service Area" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-sage/20 mix-blend-multiply" />
              
              {/* Radius Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white rounded-full bg-clay/30 flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full shadow-lg" />
              </div>
              
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-clay shadow-sm flex items-center gap-1">
                 <Navigation className="w-3 h-3" />
                 10 Min Radius
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linen rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-clay" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-forest-green">Service Area</h4>
                  <p className="text-gray-500">Newcastle CBD, The Hill, Cooks Hill, The Junction, Merewether, Honeysuckle</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linen rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-clay" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-forest-green">Email Us</h4>
                  <a href="mailto:hello@foliageandform.com.au" className="text-gray-500 hover:text-clay transition-colors">hello@foliageandform.com.au</a>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linen rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-clay" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-forest-green">Call Jess</h4>
                  <p className="text-gray-500">0400 123 456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-linen p-8 md:p-10 rounded-lg shadow-sm border border-sand">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in-up">
                <div className="w-20 h-20 bg-forest-green text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                  <MapPin className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl text-forest-green mb-2">Thank you!</h3>
                <p className="text-gray-600 mb-6 max-w-xs mx-auto">We've received your details. Jess will be in touch shortly to schedule your walkthrough.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="text-xs">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest-green mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-clay focus:border-transparent bg-white transition-shadow"
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-forest-green mb-1">Company Name</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-clay focus:border-transparent bg-white transition-shadow"
                    placeholder="Design Co."
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-green mb-1">Email Address</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-clay focus:border-transparent bg-white transition-colors
                        ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    {emailError && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  {emailError && (
                    <p className="mt-1 text-xs text-red-500 font-medium ml-1">{emailError}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="deskCount" className="block text-sm font-medium text-forest-green mb-1">Approx. Desks</label>
                    <select 
                      id="deskCount"
                      name="deskCount"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-clay focus:border-transparent bg-white cursor-pointer"
                      value={formState.deskCount}
                      onChange={handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="1-5">1-5</option>
                      <option value="6-15">6-15</option>
                      <option value="16-30">16-30</option>
                      <option value="30+">30+</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-6">
                    <label className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox"
                          name="naturalLight"
                          className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm checked:border-clay checked:bg-clay hover:border-clay focus:ring-2 focus:ring-clay focus:ring-offset-1"
                          checked={formState.naturalLight}
                          onChange={(e) => setFormState(prev => ({...prev, naturalLight: e.target.checked}))}
                        />
                        <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700 group-hover:text-forest-green transition-colors">Has natural light?</span>
                    </label>
                  </div>
                </div>

                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-forest-green mb-1">Message</label>
                   <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-clay focus:border-transparent bg-white transition-shadow"
                      placeholder="Tell us about your space..."
                      value={formState.message}
                      onChange={handleChange}
                   />
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={isSubmitting}
                  className="mt-2"
                >
                  {isSubmitting ? 'Sending...' : 'Request Walkthrough'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;