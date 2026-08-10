import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          Privacy Policy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Your privacy is important to us. Read how we collect, use, and protect your personal and medical information.
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
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">1. Introduction</h2>
            <p>
              Welcome to our Dental Clinic. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information that you voluntarily give to us when booking an appointment.</li>
              <li><strong>Medical Data:</strong> Information regarding your dental history, current symptoms, and previous treatments, which is collected securely to provide you with the best possible care.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">3. How We Use Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule, manage, and remind you of your dental appointments.</li>
              <li>Provide personalized dental treatment plans.</li>
              <li>Respond to customer service requests and patient inquiries.</li>
              <li>Improve website performance and user experience.</li>
              <li>Process payments and refunds safely.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">4. Cookies and Web Beacons</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">6. Data Retention</h2>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or strict medical record requirements).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">7. Third-Party Services</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">8. User Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification if your information is inaccurate or incomplete.</li>
              <li>The right to object to our processing of your Personal Data.</li>
              <li>The right to withdraw consent at any time.</li>
            </ul>
            <p>To exercise these rights, please contact our clinic administration directly.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-outline-variant/30">
            <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 mt-4">
              <p className="font-bold text-on-surface">Dental Clinic HQ</p>
              <p>Email: privacy@dentalclinic.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </section>

        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
