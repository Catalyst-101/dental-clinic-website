import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

const Contact = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubjectChange = (e) => {
    setFormData(prev => ({ ...prev, subject: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      alert('Message sent successfully! Our clinical staff will reach out to you shortly.');
    }, 600);
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/15550005678',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.923 9.923 0 004.934 1.317c5.506 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.18-2.92-7.065A9.925 9.925 0 0012.012 2zm5.727 14.154c-.237.669-1.392 1.282-1.92 1.32-.475.034-.943.167-3.036-.656-2.522-.992-4.14-3.554-4.266-3.722-.127-.168-.925-1.229-.925-2.343 0-1.114.58-1.66.786-1.884.207-.224.453-.28.604-.28.152 0 .304.002.437.008.138.006.322-.053.504.385.188.452.64 1.557.696 1.669.056.112.094.243.019.393-.075.15-.113.243-.226.373-.113.13-.238.29-.339.39-.113.11-.233.23-.1.458.133.227.59 2.06 1.277 2.68.884.795 1.63 1.04 1.86 1.152.228.112.362.093.497-.06.136-.155.586-.684.743-.916.157-.23.314-.193.53-.112.217.081 1.378.65 1.616.769.239.118.398.177.456.277.06.1.06.579-.177 1.248z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/dentaelite',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/dentaelite',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      )
    }
  ];

  return (
    <div className="overflow-hidden bg-background text-on-surface">
      
      {/* Hero Section */}
      <section className="relative pt-xl pb-lg overflow-hidden bg-background">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
          className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary text-label-sm font-label-sm mb-md uppercase tracking-wider"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-md font-bold"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            We're here to help you achieve your perfect smile. Reach out to our team for any inquiries or to visit our clinic.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl text-left">
          
          {/* Left Column: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-xl p-6 md:p-8 border border-[#DCFCE7] shadow-sm">
              <h2 className="text-headline-md font-headline-md text-primary mb-lg font-bold">Send us a Message</h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-md">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-body-md"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-body-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-body-md"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant ml-1">Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={handleSubjectChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-body-md appearance-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Request">Booking Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Emergency Services">Emergency Services</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-xs">
                  <label className="text-label-md font-label-md text-on-surface-variant ml-1">Message</label>
                  <textarea 
                    id="message"
                    required
                    placeholder="How can we help you?"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all text-body-md"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-4 text-headline-sm font-bold flex items-center justify-center gap-2"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? 'Sending...' : 'Send Message'}
                  <span className="material-symbols-outlined">send</span>
                </Button>

              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-md">
            
            {/* Combined Contact Information Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    staggerChildren: 0.12,
                    delayChildren: 0.1
                  }
                }
              }}
              className="glass-card rounded-xl p-6 md:p-8 border border-[#DCFCE7] shadow-sm space-y-lg"
            >
              <h2 className="text-headline-md font-headline-md text-primary font-bold border-b border-[#DCFCE7] pb-4">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Address Row */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex items-start gap-md"
                >
                  <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-label-lg font-bold text-primary">Clinic Address</h3>
                    <p className="text-on-surface-variant mt-1 leading-relaxed text-body-md">
                      123 Health Ave, Medical District<br />New York, NY 10012
                    </p>
                  </div>
                </motion.div>

                {/* Phone Row */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex items-start gap-md"
                >
                  <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
                  </div>
                  <div>
                    <h3 className="text-label-lg font-bold text-primary">Phone</h3>
                    <p className="text-on-surface-variant font-bold text-body-lg mt-1">+1 (555) 000-1234</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant opacity-70">Mon-Fri 8am-7pm</p>
                  </div>
                </motion.div>

                {/* WhatsApp Row */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex items-start gap-md"
                >
                  <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-[28px] h-[28px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.331a9.923 9.923 0 004.934 1.317c5.506 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.18-2.92-7.065A9.925 9.925 0 0012.012 2zm5.727 14.154c-.237.669-1.392 1.282-1.92 1.32-.475.034-.943.167-3.036-.656-2.522-.992-4.14-3.554-4.266-3.722-.127-.168-.925-1.229-.925-2.343 0-1.114.58-1.66.786-1.884.207-.224.453-.28.604-.28.152 0 .304.002.437.008.138.006.322-.053.504.385.188.452.64 1.557.696 1.669.056.112.094.243.019.393-.075.15-.113.243-.226.373-.113.13-.238.29-.339.39-.113.11-.233.23-.1.458.133.227.59 2.06 1.277 2.68.884.795 1.63 1.04 1.86 1.152.228.112.362.093.497-.06.136-.155.586-.684.743-.916.157-.23.314-.193.53-.112.217.081 1.378.65 1.616.769.239.118.398.177.456.277.06.1.06.579-.177 1.248z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-label-lg font-bold text-primary">WhatsApp</h3>
                    <p className="text-on-surface-variant font-bold text-body-lg mt-1">+1 (555) 000-5678</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant opacity-70">24/7 Support Line</p>
                  </div>
                </motion.div>

                {/* Email Row */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex items-start gap-md"
                >
                  <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">mail</span>
                  </div>
                  <div>
                    <h3 className="text-label-lg font-bold text-primary">Email</h3>
                    <p className="text-on-surface-variant mt-1 font-semibold text-body-md hover:text-primary transition-colors">
                      <a href="mailto:hello@dentaelite.com">hello@dentaelite.com</a>
                    </p>
                    <p className="text-on-surface-variant font-semibold text-body-md hover:text-primary transition-colors">
                      <a href="mailto:support@dentaelite.com">support@dentaelite.com</a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Business Hours Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-surface-container-high rounded-xl p-5 border border-outline-variant/30"
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined">schedule</span>
                <h3 className="font-bold text-label-md tracking-wider">BUSINESS HOURS</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-outline-variant/20 pb-2 text-body-md">
                  <span className="text-on-surface-variant">Mon - Sat</span>
                  <span className="font-bold text-on-surface">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between pt-1 text-body-md">
                  <span className="text-on-surface-variant">Sunday</span>
                  <span className="text-error font-bold">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links below Business Hours */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  } 
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center gap-md pt-4"
            >
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm bg-transparent cursor-pointer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </main>

      {/* Map Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[450px] bg-surface-container relative overflow-hidden"
      >
        <iframe 
          title="DentaElite Clinic Location"
          src="https://maps.google.com/maps?q=123%20Health%20Ave,%20Medical%20District,%20New%20York,%20NY%2010012&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale opacity-90 contrast-100 hover:grayscale-0 transition-all duration-500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>

      {/* Footer CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-xl bg-primary text-on-primary"
      >
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-6">
          <h2 className="text-display-lg-mobile md:text-headline-md font-display-lg font-bold">Ready for your visit?</h2>
          <p className="text-body-lg mb-lg opacity-90 max-w-xl mx-auto leading-relaxed">
            Skip the wait and secure your slot with our top-rated specialists today.
          </p>
          <div className="flex justify-center pt-2">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button 
                onClick={() => navigate('/book-appointment')} 
                variant="primary" 
                className="bg-white text-primary hover:bg-primary-fixed hover:text-on-primary-fixed px-8 py-4 font-bold rounded-full shadow-lg transition-colors duration-300"
              >
                Book Appointment
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Contact;
export { Contact };
