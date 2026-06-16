import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';

const About = () => {
  const navigate = useNavigate();

  // Scroll animations
  const revealAnim = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="overflow-hidden bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-xl pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-md items-center text-left">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm mb-6 uppercase tracking-wider">
              SINCE 1998
            </span>
            <h1 className="text-display-lg font-display-lg text-on-surface mb-6 leading-tight">
              Redefining the <span className="text-primary">Art of Smiles</span> Through Clinical Excellence
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-xl max-w-xl leading-relaxed">
              At DentaElite, we blend advanced medical technology with a high-end hospitality experience to ensure your journey to a perfect smile is as comfortable as it is effective.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-fixed">verified</span>
                </div>
                <span className="text-label-md font-label-md font-bold">Certified Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-fixed">medical_services</span>
                </div>
                <span className="text-label-md font-label-md font-bold">Advanced Tech</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group w-full max-w-md lg:max-w-none justify-self-center mt-10 lg:mt-0"
          >
            <div className="absolute -inset-4 bg-primary-container/10 rounded-[2rem] blur-2xl pointer-events-none"></div>
            <img 
              alt="Clinic Interior" 
              className="relative rounded-[2rem] shadow-2xl w-full h-[450px] object-cover transition-transform duration-700 hover:scale-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxXhRmPwPxYWtomIn1zq-1W-2pjPE63DRztteTIu_tqUhNJwpdzOfJLzNA_eC1t32K_sEoS-_4n83RIbFQwrQENdn4x9baXH95kJHTIiMSiqFID9ZIFRCLpH8p6pPUC_ZsVbqJlV-iKHC03NOZ_kvrxmNra8q5rycc4En6VZA5rWrCeN0khaWBvNledlaf9N2vkyvaalAIWn3MNgg6F4XCyB4UZcTgpAwgaKGJNwp5Da9Uz2O5cQXjt3dbRQoQa9TF4cAuiCcy6m0n"
            />
          </motion.div>

        </div>
      </section>

      {/* Achievement Counters */}
      <section className="bg-surface-container-lowest py-lg border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div className="p-base">
              <div className="text-display-lg font-display-lg text-primary mb-2">28+</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="p-base">
              <div className="text-display-lg font-display-lg text-primary mb-2">15k+</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Happy Patients</div>
            </div>
            <div className="p-base">
              <div className="text-display-lg font-display-lg text-primary mb-2">40+</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Medical Awards</div>
            </div>
            <div className="p-base">
              <div className="text-display-lg font-display-lg text-primary mb-2">12+</div>
              <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Story and Core Values */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionTitle 
            title="The Foundation of Our Care" 
            description="Founded on the principles of integrity and innovation, DentaElite has evolved from a small private practice into a leading dental center."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter text-left">
            {/* Story Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealAnim}
              className="md:col-span-8 glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-4 font-bold">Our Story</h3>
                <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Our journey began two decades ago with a simple vision: to make high-quality dentistry accessible without compromising on the patient experience. We recognized that dental visits are often met with anxiety, and we set out to change that narrative by creating an environment that feels more like a wellness retreat than a clinic.
                </p>
                <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Today, DentaElite stands at the forefront of digital dentistry, utilizing 3D scanning, laser treatments, and AI-driven diagnostics to provide unparalleled precision in every treatment plan.
                </p>
              </div>
              <div className="h-48 rounded-lg overflow-hidden mt-4">
                <img 
                  alt="Medical Technology" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8q_ZzRmr-CEfOSKX0jXv5BCYs4PtvnGlUJHroHAkIDIQ7ys0U5lZO89F6oAr7sM8RTTYukEY89zbaO-ir4TVCSdU8wgre1FszO3NeLoUSxqVoU1ed2ykDeJ8yr-8xqkvakLA2BFGo0xhJJfXZ5136EbJNKHiSuSnlZP8ngZdPyG7wrFrEaHXd-xDmLlOIouZOSeM97piplRwFoMEVas10YehXhdjySccWv7aw7Wk6buMvARMQQeVPbL7zsXu2YfLJCsIs6Br6a94q" 
                />
              </div>
            </motion.div>

            {/* Mission & Vision Column */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealAnim}
                className="bg-primary-container rounded-xl p-6 md:p-8 text-on-primary-container flex-grow"
              >
                <span className="material-symbols-outlined text-[48px] mb-4">track_changes</span>
                <h3 className="text-headline-sm font-headline-sm font-bold mb-2">Our Mission</h3>
                <p className="text-label-md font-label-md opacity-90 leading-relaxed">
                  To provide transformative dental care through the fusion of artistic precision and medical science.
                </p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealAnim}
                className="bg-secondary-container rounded-xl p-6 md:p-8 text-on-secondary-container flex-grow"
              >
                <span className="material-symbols-outlined text-[48px] mb-4">visibility</span>
                <h3 className="text-headline-sm font-headline-sm font-bold mb-2">Our Vision</h3>
                <p className="text-label-md font-label-md opacity-90 leading-relaxed">
                  To become the global gold standard for premium patient-centered dental health and aesthetics.
                </p>
              </motion.div>
            </div>

            {/* Core Values Rows */}
            <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-gutter mt-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealAnim}
                className="glass-card p-gutter rounded-xl text-center"
              >
                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <span className="material-symbols-outlined">diversity_1</span>
                </div>
                <h4 className="text-headline-sm font-headline-sm mb-2 font-bold">Patient First</h4>
                <p className="text-label-md font-label-md text-on-surface-variant">We tailor every treatment to the unique needs and comfort of our patients.</p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealAnim}
                className="glass-card p-gutter rounded-xl text-center"
              >
                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h4 className="text-headline-sm font-headline-sm mb-2 font-bold">Innovation</h4>
                <p className="text-label-md font-label-md text-on-surface-variant">Constantly adopting the latest dental advancements and technologies.</p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealAnim}
                className="glass-card p-gutter rounded-xl text-center"
              >
                <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <h4 className="text-headline-sm font-headline-sm mb-2 font-bold">Integrity</h4>
                <p className="text-label-md font-label-md text-on-surface-variant">Maintaining transparent communication and the highest ethical standards.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-xl bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionTitle title="Milestones of Excellence" />
          
          <div className="relative mt-12">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full timeline-gradient hidden md:block rounded-full"></div>
            
            <div className="space-y-xl relative">
              
              {/* 1998 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-headline-sm font-headline-sm text-primary mb-2 font-bold">1998</h4>
                  <h5 className="text-label-md font-label-md font-bold text-on-surface mb-2">The Inception</h5>
                  <p className="text-body-md text-on-surface-variant">Dr. Elizabeth Sterling opened the first DentaElite studio with two consultation rooms and a dream.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface-container-lowest z-10 my-4 md:my-0 shadow"></div>
                <div className="md:w-5/12"></div>
              </div>

              {/* 2010 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-headline-sm font-headline-sm text-primary mb-2 font-bold">2010</h4>
                  <h5 className="text-label-md font-label-md font-bold text-on-surface mb-2">Technological Expansion</h5>
                  <p className="text-body-md text-on-surface-variant">Became the first clinic in the region to offer fully digital 3D panoramic imaging and laser surgery.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface-container-lowest z-10 my-4 md:my-0 shadow"></div>
                <div className="md:w-5/12"></div>
              </div>

              {/* 2018 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-headline-sm font-headline-sm text-primary mb-2 font-bold">2018</h4>
                  <h5 className="text-label-md font-label-md font-bold text-on-surface mb-2">Award Winning Care</h5>
                  <p className="text-body-md text-on-surface-variant">Recognized as the 'Clinic of the Year' for outstanding patient experience and medical safety protocols.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface-container-lowest z-10 my-4 md:my-0 shadow"></div>
                <div className="md:w-5/12"></div>
              </div>

              {/* 2026 */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-headline-sm font-headline-sm text-primary mb-2 font-bold">2026</h4>
                  <h5 className="text-label-md font-label-md font-bold text-on-surface mb-2">Future of Dentistry</h5>
                  <p className="text-body-md text-on-surface-variant">Opening our new flagship facility featuring AI diagnostics and holistic dental wellness programs.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface-container-lowest z-10 my-4 md:my-0 shadow"></div>
                <div className="md:w-5/12"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-xl items-center text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <img 
                alt="Our Medical Team" 
                className="rounded-[2.5rem] shadow-xl w-full h-[500px] object-cover border border-outline-variant/20" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWx9ChKkKJh800iBd4atXda9vExcO92Ne6Yd7hST_quJAqJQUtBcnLLsxUWQvJGpEOjLW2RbQ0DSzNMDAEBcP9A92HF3sXITLYhRdLYAVsUB7jmTlSWpSshu4fnWabg7eZSkkLvrAcEtqHY-oXDgPCUzV12AI7V92pF4dJeeKIL7oRXmejCQnIckTqYHiS7gnUeFfEZX-xJX0LXGXWOjIZiOZhpL-yLSBMerXcJRoenOLfNdHU142DSU4ONPRBcFGmXg-NhwuRo_Nk" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full space-y-6"
            >
              <span className="text-primary font-bold tracking-widest text-label-sm block uppercase">Our People</span>
              <h2 className="text-headline-md font-headline-md text-on-surface font-bold">Expertise Meets Empathy</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                Behind every successful smile is a dedicated team of specialists who care about your well-being as much as your dental health. Our team comprises internationally trained surgeons, orthodontists, and hygiene experts.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl border border-outline-variant hover:bg-white transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h5 className="text-label-md font-label-md font-bold mb-1">Continual Education</h5>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Our doctors undergo 100+ hours of advanced training annually.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-outline-variant hover:bg-white transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <div>
                    <h5 className="text-label-md font-label-md font-bold mb-1">Compassionate Care</h5>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Trained in trauma-informed care to support anxious patients.</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => navigate('/doctors')} variant="primary" className="px-8 py-3 rounded-full mt-2">
                Meet the Specialists
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-5xl mx-auto bg-inverse-surface rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center shadow-xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-white">
              Ready for a <span className="text-primary-fixed font-bold">Premium Experience?</span>
            </h2>
            <p className="text-body-lg font-body-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Experience dental care that feels like luxury hospitality. Book your consultation today and discover the DentaElite difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => navigate('/book-appointment')} variant="primary" className="bg-primary-fixed text-on-primary-fixed px-8 py-4 font-bold rounded-full hover:bg-primary-fixed/90 shadow-md">
                Book Your Visit
              </Button>
              <Button onClick={() => navigate('/services')} variant="secondary" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 font-bold rounded-full">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
export { About };
