import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/clinicData';
import { Button } from '../components/Button';

const ServiceProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  // Find service
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-md">
        <h2 className="text-headline-md font-bold mb-4">Service Not Found</h2>
        <Button onClick={() => navigate('/services')} variant="primary">
          Back to Services
        </Button>
      </div>
    );
  }

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-background text-on-surface">
      
      {/* Hero Banner */}
      <header className="relative h-[550px] flex items-center overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-bright/95 to-transparent"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-secondary-fixed-variant rounded-full text-label-sm font-label-sm mb-4 uppercase tracking-wider">
              {service.tagline}
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              {service.title} <br />
              <span className="text-primary font-bold">Treatment</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              {service.overview}
            </p>
            <div className="flex gap-4">
              <Button onClick={() => navigate('/book-appointment')} variant="primary" className="px-8 py-4 font-bold rounded-xl shadow-lg">
                Schedule Now
              </Button>
              <a 
                href="#procedure" 
                className="border border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-primary-container/10 transition-all flex items-center justify-center"
              >
                Learn Process
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Service Overview & Benefits */}
      <section className="py-xl bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center text-left">
            
            {/* Left Texts */}
            <div>
              <h2 className="font-headline-md text-headline-md font-bold mb-6">Gentle Care for Deep Relief</h2>
              <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Every procedure in DentaElite is carried out under high safety guidelines with a key focus on patient wellness and pain prevention.
              </p>
              <div className="space-y-4">
                {service.bulletPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary bg-secondary-container p-2 rounded-full">
                      check_circle
                    </span>
                    <span className="font-label-md text-label-md font-semibold">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 gap-md">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl flex gap-sm items-start text-left hover:scale-[1.01] transition-transform duration-300">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold mb-xs">{benefit.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3-Step Procedure */}
      <section className="py-xl" id="procedure">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center mb-lg">
          <h2 className="font-headline-md text-headline-md font-bold mb-4">Your Path to a Healthy Smile</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We follow a rigorous, clinical protocol to ensure the highest success rate and patient comfort.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {service.steps.map((step, idx) => (
            <div key={idx} className="relative group text-left flex flex-col justify-between">
              <div className="mb-sm text-primary font-bold text-headline-sm">{step.number}</div>
              <div className="bg-surface-container rounded-xl p-6 md:p-8 h-full transition-transform duration-300 group-hover:-translate-y-2 border border-transparent group-hover:border-primary/20 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-sm">{step.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold mb-sm">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recovery Information */}
      <section className="py-xl bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            
            {/* Left Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 max-w-md lg:max-w-none justify-self-center">
              <img 
                className="w-full h-96 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzqphuSJpBHH0E3yFoG8foJ_zw5NaZzGdtkrWjyEiL6EgwZ3Is6BL8EOz1cbF6aU7hbEZbrsnfaATWbMv0jH6T0GZrOoYC0zGRLM05aXrVgc7Z0LFMMglO3kNl2CnsAlaIxYL5JBx_Zp9whHS5LWI85_ZLs8P0NZskT8iCO_cA61oRp4cVqKlvX-AFEhlPNbtfXLzOyHhcGQuUoBIOCinczi14w1x83S3-jbzKikVOJwJKgBhbG8fmsh1zquVWo5vcy0832dkLvKc"
                alt="Patient Recovery" 
              />
            </div>
            
            {/* Right Texts */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-display-lg text-headline-md font-bold mb-2">Post-Treatment Care</h2>
              <p className="text-body-lg mb-8 opacity-95 leading-relaxed">
                {service.recovery.intro}
              </p>
              <div className="space-y-6">
                {service.recovery.tips.map((tip, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                      <span className="material-symbols-outlined">{tip.icon}</span>
                    </div>
                    <p className="text-body-md leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-xl">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-left">
          <h2 className="font-headline-md text-headline-md text-center mb-xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border border-outline-variant rounded-xl overflow-hidden bg-surface shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-surface hover:bg-surface-container transition-colors focus:outline-none"
                >
                  <span className="font-headline-sm text-label-md text-left font-bold text-on-surface">
                    {faq.question}
                  </span>
                  <span 
                    className="material-symbols-outlined transition-transform duration-300"
                    style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-surface-container-lowest text-on-surface-variant border-t border-outline-variant leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="glass-card p-xl rounded-[2rem] text-center relative overflow-hidden border border-[#DCFCE7] shadow-xl">
            <div className="relative z-10 space-y-6">
              <h2 className="font-display-lg text-display-lg text-primary font-bold">Ready for Relief?</h2>
              <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                Book your consultation today and take the first step toward a healthier, pain-free smile with our elite dental experts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-md">
                <Button onClick={() => navigate('/book-appointment')} variant="primary" className="px-10 py-4 font-bold rounded-full">
                  Book Appointment
                </Button>
                <Button onClick={() => window.open('tel:+15550001234')} variant="secondary" className="bg-surface-container-highest hover:bg-surface-container text-on-surface border-none px-10 py-4 font-bold rounded-full">
                  Call (555) 000-1234
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceProfile;
export { ServiceProfile };
