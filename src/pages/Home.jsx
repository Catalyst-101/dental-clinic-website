import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCardSimple } from '../components/DoctorCardSimple';
import { TestimonialCard } from '../components/TestimonialCard';
import { services, doctors, testimonials } from '../data/clinicData';
import Counter from '../components/Counter';

const Home = () => {
  const navigate = useNavigate();

  // Animations config
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden py-xl md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="z-10">
            <span className="inline-block bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full text-label-sm font-label-sm mb-base uppercase tracking-wider">
              Premium Dental Experience
            </span>

            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface mb-md">
              Your Smile, <br />
              <span className="text-primary">Our Priority</span>
            </h1>

            <p className="text-lg leading-7 text-gray-600 mb-6 max-w-lg">
              Professional Dental Care for the Whole Family. Experience dental
              excellence with our state-of-the-art technology and compassionate care.
            </p>

            <div className="flex flex-wrap gap-md">
              <Button
                onClick={() => navigate("/book-appointment")}
                variant="primary"
                className="px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-primary-container"
              >
                Book Appointment
              </Button>

              <Button
                onClick={() => navigate("/contact")}
                variant="secondary"
                className="px-8 py-4 rounded-xl font-bold"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>

            <img
              alt="Smiling Patient"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOvDU8SEGcwWn-yZQdn5kgz-TtL7SEYztCT4HCgPRIfJKoJmvfQUfuMlJH4BVYh8yOhonlDnvQuFUAEjsZRbgkOXyXCykVI6cvkkE0hxL41UOvMu9S-WoTvFehrqaPjxE3ilXGzokQ0UL1HxxrnkibbTo5mmonM60YHvvf2ut4FEkmGLVU8qDKY5A4ch1j04CXlgXw156PoK2qMQ05dcz7mDVjUfsXS0NUTepyauK2qUDpGqvUM-KG6gJipGUF3naK_hQnXvYeh45n"
              className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover aspect-[4/3]"
            />

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -left-6 glass-morphism p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">
                    verified
                  </span>
                </div>

                <div>
                  <div className="text-headline-sm font-bold text-on-surface">
                    99%
                  </div>
                  <div className="text-label-sm text-on-surface-variant">
                    Patient Satisfaction
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-lg bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="text-center p-md">
            <div className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-xs"><Counter end={15} suffix="k+" /></div>
            <div className="text-label-md font-medium text-on-surface-variant">Patients Treated</div>
          </div>
          <div className="text-center p-md">
            <div className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-xs"><Counter end={28} suffix="+" /></div>
            <div className="text-label-md font-medium text-on-surface-variant">Years Experience</div>
          </div>
          <div className="text-center p-md">
            <div className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-xs"><Counter end={45} suffix="+" /></div>
            <div className="text-label-md font-medium text-on-surface-variant">Expert Dentists</div>
          </div>
          <div className="text-center p-md">
            <div className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-xs"><Counter end={98} suffix="%" /></div>
            <div className="text-label-md font-medium text-on-surface-variant">Successful Procedures</div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <SectionTitle
          title="Specialized Dental Services"
          description="Combining clinical excellence with high-end hospitality to provide a unique, comfortable, and effective dental experience."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md"
        >
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-xl">
          <Button
            onClick={() => navigate('/services')}
            variant="secondary"
            className="px-8 py-3 rounded-xl font-bold"
          >
            View All Services
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xl bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-xl items-center">

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              opacity: { duration: 0.7 },
              x: { duration: 0.7 },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="order-2 md:order-1 relative"
          >
            <img
              alt="Modern Equipment"
              className="rounded-[2rem] shadow-xl w-full h-[450px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOHAuYtEUWVB1ylQ4aX_IcBYH0L-R9w86H4_NBiYqwYFAUud8HTVDrZlPLnfbyPmxQrvCRmLYi5j8ls0blcUmNZ_BXIzvfiKh9Ob0sb0GJ3Mc6pMtpX4CD3mlBjGXacCrGOc5SB7wG4P8pztSNg_oYBNNXwq1GXWWvWzWyu5XEb84upYiFaRsFSYHsW71EG2kROtk-qbm8YyvdxrlFmUFEsxeQf3I9fKF0EdJHfjXBNpJciBDJGloUhZ1VP1f2rFRUxqIkWMkuUA22"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] pointer-events-none"></div>
          </motion.div>

          {/* Right Column: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 text-left"
          >
            <h2 className="text-headline-md font-headline-md text-on-surface mb-lg">
              Why Patients Trust DentaElite
            </h2>
            <div className="space-y-lg">

              <div className="flex gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="text-headline-sm font-bold text-on-surface mb-xs">Modern Equipment</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    We utilize the latest 3D imaging and laser technology to ensure painless and precise treatments.
                  </p>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <div>
                  <h4 className="text-headline-sm font-bold text-on-surface mb-xs">Experienced Dentists</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Our team consists of board-certified specialists with over 20 years of clinical excellence.
                  </p>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
                  <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
                <div>
                  <h4 className="text-headline-sm font-bold text-on-surface mb-xs">Affordable Pricing</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Premium care doesn't have to be expensive. We offer flexible payment plans and insurance support.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

        <SectionTitle
          title="Our Expert Medical Team"
          description="Dedicated professionals committed to your oral health and beautiful smile."
        />


        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md"
        >

          {doctors.slice(0, 4).map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={fadeInUp}
            >
              <DoctorCardSimple doctor={doctor} />
            </motion.div>
          ))}

        </motion.div>


        <div className="flex justify-center mt-xl">
          <Button
            onClick={() => navigate('/doctors')}
            variant="secondary"
            className="px-8 py-3 rounded-full font-bold"
          >
            Meet the Specialists
          </Button>
        </div>

      </section>

      {/* Testimonials */}
      <section className="py-xl bg-surface-container-highest/20 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-xl text-left">
            <div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-sm">What Our Patients Say</h2>
              <p className="text-body-md text-on-surface-variant">Real stories from people who found their perfect smile with us.</p>
            </div>
            <div className="hidden md:flex gap-sm mt-4 md:mt-0">
              <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-all duration-300">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Inside Our Clinic (Gallery Teaser) */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <SectionTitle
          title="Inside Our Clinic"
          description="A clinical environment designed entirely for your comfort, sterility, and serenity."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">

          {/* Large Featured Image */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-3xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEr4YK7fnQH3ANsEdFGI45FA3kOYs5QS5ykcYw7jH1gvFz5VrsQQwAJQL-OR7QDRrX2aX-AKNNLCSa0OS0Go0x0D2yEM__QrSr9O_Bm7pI9HnqBXTqBM17Qoj1_Wt5tROSkwZsvNMQF3hWPPQNyECeRAPG1ofxH8L4-fVLYH_-FM0W_WVJTwr3Y6D86cLbNQgEN-yXnnZg2P_jwXFOrS2mjQU8zLosrVnFwZahziGwXPUfzCIIDTMi3M233n97wwsVn1Z5M2aTdlLH"
              alt="Lobby Area"
              className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
          </div>


          {/* Right Side Images */}
          <div className="md:col-span-5 grid gap-5">

            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8jOMVoVIgykP6d3AKhsrdnrOZqDa0AceqwoRO92Sgaads-OETKZer6gMCmqKSjTlEbQremFCeQJx4zeYC9XQKROJ9T8zJyPJ_4OATTh6TuowcCd1Q5rz3fofAc7Hx18jipfj_NyLWfLLms6-CjoxqgXsnOgkjdxVbqu79fSnOBGJd917nysxk6najqeSPfQgt0cbM1SCenWQtGgZ0Qxy5nATAJQ7cdMe6wlgZqRurGKHcOLPMz3EoR45-zHmKQ1bMea8MHFGVOCum"
                alt="Operating Room"
                className="w-full h-[200px] object-cover rounded-3xl transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>


            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSo2rvH1iMKqIXt8r54vu3TyDMjPZwr4PJMkxTIzDo-CqRBsSHkUwf-psFIpwINaQGtYYKq6jELljCBx_DYoqpqYA9boPV72H08M6x_z6OBrG-dWw8idCc7RW_4DNj4TgDJt3AANDaYMIobmorWYYtIJHXB7Muxe5q3chywxacIaikhONkxRcIGd8xWFhU4oKXlX-dI1YU6pAe2sbWiM4_WQSQ0iwsazioC9UwXvfAT_MvISUAjr7NKk5_fnC0ll422rWHjpz-bJk_"
                alt="Patient Lounge"
                className="w-full h-[200px] object-cover rounded-3xl transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>

          </div>

        </div>


        <div className="flex justify-center mt-xl">
          <Button onClick={() => navigate('/gallery')} variant="secondary" className="px-8 py-3 rounded-full font-bold"> Explore Full Gallery </Button>
        </div>

      </section>

      {/* Appointment CTA Banner */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto glass-morphism p-xl rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl text-center md:text-left border border-[#DCFCE7]">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-fixed/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-fixed/20 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-lg">
            <div className="max-w-2xl text-left">
              <h2 className="text-display-lg-mobile md:text-headline-md font-display-lg text-on-surface mb-sm">
                Need Dental Care?
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Don't wait for a small problem to become a major procedure. Book your appointment today and join thousands of happy patients.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <Button
                onClick={() => navigate('/book-appointment')}
                variant="primary"
                className="w-full  md:w-auto px-18 py-10 text-2xl rounded-full font-bold shadow-xl text-center"
              >
                Book Your Visit Now
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
export { Home };
