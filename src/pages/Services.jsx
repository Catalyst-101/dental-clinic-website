import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { services } from '../data/clinicData';

const Services = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="overflow-hidden bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-xl pb-lg overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-primary px-4 py-1.5 rounded-full mb-6">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Premium Care Services</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-background mb-gutter max-w-3xl mx-auto">
            Advanced Dental Solutions Tailored to Your Smile
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Combining clinical excellence with high-end hospitality to provide a unique, comfortable, and effective dental experience.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="bg-primary-container text-on-primary-container rounded-3xl p-8 md:p-xl flex flex-col md:flex-row items-center gap-lg relative overflow-hidden shadow-xl border border-primary/20 text-left">
          <div className="relative z-10 md:w-2/3 space-y-4">
            <h2 className="font-headline-md text-headline-md font-bold">Ready for a Healthier Smile?</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-xl leading-relaxed">
              Schedule your first consultation today and experience premium dental care designed specifically for your needs and comfort.
            </p>
          </div>
          <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end w-full">
            <Button 
              onClick={() => navigate('/book-appointment')} 
              variant="primary" 
              className="bg-surface-container-lowest text-primary hover:bg-white px-8 py-4 font-bold text-label-md rounded-full shadow-lg"
            >
              Book Your Visit
            </Button>
          </div>
          {/* Abstract decorative elements */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
};

export default Services;
export { Services };
