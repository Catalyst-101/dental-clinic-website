import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchServiceById } from '../api/servicesApi';
import { getFullImageUrl } from '../api/axios';
import { Button } from '../components/Button';

import { SkeletonDetail } from '../components/Skeleton';

const ServiceProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadService = async () => {
      try {
        setLoading(true);
        const data = await fetchServiceById(id);
        if (isMounted) setService(data);
      } catch (err) {
        console.error("Failed to load service details:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadService();
    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return <SkeletonDetail />;
  }

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
      <header className="relative h-[600px] flex items-center overflow-hidden bg-background">
        <img 
          src={getFullImageUrl(service.image)} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Responsive Gradient Overlay for High Readability & Image Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent md:bg-gradient-to-r md:from-background md:via-background/85 md:to-transparent z-0"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop z-10 text-left">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1
                }
              }
            }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="inline-block px-4 py-1.5 bg-[#DCFCE7] text-primary rounded-full text-label-sm font-label-sm uppercase tracking-wider font-bold"
              >
                {service.tagline || "CLINICAL SERVICE"}
              </motion.span>

              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="inline-flex items-center gap-1 px-4 py-1.5 bg-primary text-on-primary rounded-full text-label-sm font-label-sm uppercase tracking-wider font-bold"
              >
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>{service.duration || 30} Minutes</span>
              </motion.span>
            </div>

            {/* Heading reveals smoothly */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight font-extrabold tracking-tight"
            >
              {service.title} <br />
              <span className="text-primary font-bold">Treatment</span>
            </motion.h1>

            {/* Description text fades in after heading with improved hierarchy & spacing */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-body-lg text-on-surface font-medium mb-10 leading-loose max-w-xl"
            >
              {service.overview}
            </motion.p>

            {/* Buttons animate in last */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button onClick={() => navigate('/book-appointment')} variant="primary" className="px-8 py-4 font-bold rounded-xl shadow-lg">
                  Schedule Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="#procedure" 
                  className="border border-primary text-primary bg-background/50 backdrop-blur-sm px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-primary-container/10 transition-all flex items-center justify-center cursor-pointer"
                >
                  Learn Process
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Service Overview & Benefits */}
      <section className="py-xl bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center text-left"
          >
            
            {/* Left Texts */}
            <div>
              <h2 className="font-headline-md text-headline-md font-bold mb-6">Gentle Care for Deep Relief</h2>
              <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Every procedure in DentaElite is carried out under high safety guidelines with a key focus on patient wellness and pain prevention.
              </p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {service.bulletPoints.map((pt, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                    className="flex items-center gap-4"
                  >
                    <span className="material-symbols-outlined text-primary bg-secondary-container p-2 rounded-full">
                      check_circle
                    </span>
                    <span className="font-label-md text-label-md font-semibold">{pt}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Cards */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-md"
            >
              {service.benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02, 
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                    borderColor: "rgba(0, 107, 44, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card p-6 rounded-xl flex gap-sm items-start text-left border border-outline-variant/40 shadow-sm cursor-default"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold mb-xs">{benefit.title}</h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Assigned Doctors Section */}
      {Array.isArray(service.doctors) && service.doctors.length > 0 && (
        <section className="py-lg bg-surface-container/30 border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-left">
            <h3 className="font-headline-sm text-headline-sm font-bold mb-6 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px]">groups</span>
              Specialists Assigned to {service.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
              {service.doctors.map((doc) => {
                const doctorObj = typeof doc === "object" ? doc : null;
                if (!doctorObj) return null;

                return (
                  <div
                    key={doctorObj._id || doctorObj.slug}
                    onClick={() => navigate(`/doctors/${doctorObj.slug || doctorObj._id}`)}
                    className="glass-card rounded-2xl p-4 border border-outline-variant/30 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all"
                  >
                    <img
                      src={getFullImageUrl(doctorObj.image)}
                      alt={doctorObj.name}
                      className="w-14 h-14 rounded-full object-cover border border-primary-fixed shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-on-surface text-sm">{doctorObj.name}</h4>
                      <p className="text-xs text-primary font-semibold">{doctorObj.specialization}</p>
                      <p className="text-[11px] text-on-surface-variant opacity-75">{doctorObj.experience}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3-Step Procedure */}
      <section className="py-xl" id="procedure">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center mb-lg">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-headline-md text-headline-md font-bold mb-4"
          >
            Your Path to a Healthy Smile
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            We follow a rigorous, clinical protocol to ensure the highest success rate and patient comfort.
          </motion.p>
        </div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter"
        >
          {service.steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group text-left flex flex-col justify-between cursor-default"
            >
              <div className="mb-sm text-primary font-bold text-headline-sm">{step.number}</div>
              <div className="bg-surface-container rounded-xl p-6 md:p-8 h-full border border-transparent hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-sm">{step.icon}</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold mb-sm">{step.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Recovery Information */}
      <section className="py-xl bg-primary text-on-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 max-w-md lg:max-w-none justify-self-center"
            >
              <img 
                className="w-full h-96 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzqphuSJpBHH0E3yFoG8foJ_zw5NaZzGdtkrWjyEiL6EgwZ3Is6BL8EOz1cbF6aU7hbEZbrsnfaATWbMv0jH6T0GZrOoYC0zGRLM05aXrVgc7Z0LFMMglO3kNl2CnsAlaIxYL5JBx_Zp9whHS5LWI85_ZLs8P0NZskT8iCO_cA61oRp4cVqKlvX-AFEhlPNbtfXLzOyHhcGQuUoBIOCinczi14w1x83S3-jbzKikVOJwJKgBhbG8fmsh1zquVWo5vcy0832dkLvKc"
                alt="Patient Recovery" 
              />
            </motion.div>
            
            {/* Right Texts */}
            <div className="order-1 lg:order-2 space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display-lg text-headline-md font-bold mb-2"
              >
                Post-Treatment Care
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-body-lg mb-8 opacity-95 leading-relaxed"
              >
                {service.recovery.intro}
              </motion.p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {service.recovery.tips.map((tip, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                      <span className="material-symbols-outlined">{tip.icon}</span>
                    </div>
                    <p className="text-body-md leading-relaxed">{tip.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-xl bg-background">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-xl"
          >
            <h2 className="font-headline-md text-headline-md font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
              Get answers to common questions about our {service.title} treatments.
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  whileHover={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  className={`border border-outline-variant/60 rounded-2xl overflow-hidden bg-surface transition-all duration-300 ${
                    isOpen ? 'shadow-md border-primary/20 bg-surface-container-lowest' : 'shadow-sm hover:shadow-md hover:border-primary/20'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer select-none"
                  >
                    <span className="font-headline-sm text-label-md md:text-body-lg font-bold text-on-surface pr-4 leading-normal">
                      {faq.question}
                    </span>
                    <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-surface-container text-primary">
                      <motion.span 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="material-symbols-outlined text-[20px]"
                      >
                        {isOpen ? 'remove' : 'add'}
                      </motion.span>
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.2, delay: 0.05 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.1 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-on-surface-variant border-t border-outline-variant/30 leading-relaxed text-body-md">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-xl relative overflow-hidden"
      >
        {/* Subtle Ambient Green Glow Behind the Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl h-64 bg-primary-container/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="glass-card p-xl rounded-[2.5rem] text-center relative overflow-hidden border border-[#DCFCE7] shadow-xl backdrop-blur-xl bg-white/80">
            
            {/* Animated Glow Elements Inside Card */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="relative z-10 space-y-6">
              <h2 className="font-display-lg text-display-lg text-primary font-bold">Ready for Relief?</h2>
              <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed font-medium">
                Book your consultation today and take the first step toward a healthier, pain-free smile with our elite dental experts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-md">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-full sm:w-auto"
                >
                  <Button onClick={() => navigate('/book-appointment')} variant="primary" className="w-full px-10 py-4 font-bold rounded-full shadow-md">
                    Book Appointment
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-full sm:w-auto"
                >
                  <Button onClick={() => window.open('tel:+15550001234')} variant="secondary" className="w-full bg-surface-container-highest hover:bg-surface-container text-on-surface border-none px-10 py-4 font-bold rounded-full shadow-sm transition-colors">
                    Call Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default ServiceProfile;
export { ServiceProfile };
