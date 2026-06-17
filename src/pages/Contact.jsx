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

  return (
    <div className="overflow-hidden bg-background text-on-surface">
      
      {/* Hero Section */}
      <section className="relative pt-xl pb-lg overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm mb-md uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-md font-bold">
            Get in Touch
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We're here to help you achieve your perfect smile. Reach out to our team for any inquiries or to visit our clinic.
          </p>
        </div>
      
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl text-left">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
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
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-md">
            
            {/* Address */}
            <div className="glass-card rounded-xl p-5 flex items-start gap-md border border-[#DCFCE7] shadow-sm">
              <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px]">location_on</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-primary">Address</h3>
                <p className="text-on-surface-variant mt-1 leading-relaxed">
                  123 Health Ave, Medical District<br />New York, NY 10012
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-xl p-5 flex items-start gap-md border border-[#DCFCE7] shadow-sm">
              <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px]">phone_in_talk</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-primary">Phone</h3>
                <p className="text-on-surface-variant font-bold text-body-lg mt-1">+1 (555) 000-1234</p>
                <p className="text-label-sm font-label-sm text-on-surface-variant opacity-70">Mon-Fri 8am-7pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card rounded-xl p-5 flex items-start gap-md border border-[#DCFCE7] shadow-sm">
              <div className="bg-primary-container text-on-primary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px]">mail</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm font-bold text-primary">Email</h3>
                <p className="text-on-surface-variant mt-1 font-semibold text-body-md">hello@dentaelite.com</p>
                <p className="text-on-surface-variant font-semibold text-body-md">support@dentaelite.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface-container-high rounded-xl p-5 border border-outline-variant/30">
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
            </div>

            {/* Social Links */}
            <div className="flex gap-md pt-2">
              {['facebook', 'instagram', 'linkedin'].map((social, i) => (
                <a 
                  key={i} 
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[24px]">public</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full h-[450px] bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeZKfJGKwUMPtcvSEOnqhyKmKUN4rhMgXWQ1j5W0VrStkcgGoeZd_O-NZAiFmY1JbGVxlwOChIvw2E3WpxbqK3eQliScNoKDMrkm1_gP0if0xktGPxG27xntkLqOo-oIOTu37TkCO5WMjjUhC-uzOJmu8jMzkGxg_m7-R2njxMHeZNezS7nkug0Wa8i17rAu5W3KMImIsNVRmyv8EpsR95uE7BV98769aEl7sHGPo3E9M3J3XURDAqcKA4mhHgpwFLact7hvYoM_IF"
            alt="Clinic Map Placeholder" 
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          
          {/* Map Marker Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-primary text-on-primary p-3.5 rounded-full shadow-2xl animate-bounce flex items-center justify-center border-2 border-white">
              <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                dentistry
              </span>
            </div>
            <div className="mt-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-xl border border-primary shadow-lg">
              <p className="font-bold text-primary font-headline-sm text-sm">DentaElite Clinic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-xl bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-6">
          <h2 className="text-display-lg-mobile md:text-headline-md font-display-lg font-bold">Ready for your visit?</h2>
          <p className="text-body-lg mb-lg opacity-90 max-w-xl mx-auto leading-relaxed">
            Skip the wait and secure your slot with our top-rated specialists today.
          </p>
          <Button 
            onClick={() => navigate('/book-appointment')} 
            variant="primary" 
            className="bg-white text-primary hover:bg-primary-fixed hover:text-on-primary-fixed px-8 py-4 font-bold rounded-full shadow-lg"
          >
            Book Appointment
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
export { Contact };
