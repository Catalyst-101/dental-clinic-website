import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 py-xl px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/30">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display-lg-mobile md:text-display-lg font-display-lg font-bold text-primary mb-4"
        >
          Terms of Service
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Please read these terms and conditions carefully before using our website or booking an appointment.
        </motion.p>
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="text-label-sm font-label-sm text-on-surface-variant/70 mt-6 uppercase tracking-wider"
        >
          Last Updated: August 10, 2026
        </motion.p>
      </section>

      {/* Content Body */}
      <main className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-12 rounded-3xl shadow-sm space-y-8 text-body-md text-on-surface-variant leading-relaxed"
        >
          
          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">2. Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">3. Appointments and Services</h2>
            <p>
              All appointments booked through our platform are subject to availability and confirmation by our clinic staff. We reserve the right to cancel or reschedule appointments due to unforeseen medical emergencies or staffing conflicts. Patients are expected to provide at least 24 hours notice for cancellations to avoid potential fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">4. Payments and Billing</h2>
            <p>
              While some services may display estimated costs on this website, final pricing is determined after a physical consultation and diagnosis. Copays, deductibles, and out-of-pocket expenses are due at the time of service unless a prior payment plan has been established.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">5. Medical and Dental Disclaimer</h2>
            <p className="p-4 bg-error/10 border border-error/20 rounded-xl text-on-surface">
              <strong>Important:</strong> The content provided on this website is for informational purposes only and is not intended as a substitute for professional medical or dental advice, diagnosis, or treatment. Always seek the advice of your dentist, physician, or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">6. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by the Clinic and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party web sites or services that are not owned or controlled by the Clinic. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">8. Limitation of Liability</h2>
            <p>
              In no event shall the Clinic, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 mt-4">
              <p className="font-bold text-on-surface">Dental Clinic HQ</p>
              <p>Email: legal@dentalclinic.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </section>

        </motion.div>
      </main>
    </div>
  );
};

export default TermsOfService;
