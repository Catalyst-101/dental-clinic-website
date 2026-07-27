import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCardSimple } from '../components/DoctorCardSimple';
import { TestimonialCard } from '../components/TestimonialCard';
import { fetchServices } from '../api/servicesApi';
import { fetchDoctors } from '../api/doctorsApi';
import { fetchTestimonials, fetchSettings, fetchGallery } from '../api/settingsApi';
import { getFullImageUrl } from '../api/axios';
import { Skeleton, SkeletonCard, SkeletonProfile, SkeletonStat, SkeletonTestimonial, SkeletonGallery } from '../components/Skeleton';
import Counter from '../components/Counter';
import heroImage from "../assets/images/home_hero.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [settingsData, setSettingsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const [servicesData, doctorsData, testimonialsData, settingsRes, galleryRes] = await Promise.all([
          fetchServices({ all: "true" }),
          fetchDoctors({ all: "true" }),
          fetchTestimonials(),
          fetchSettings(),
          fetchGallery()
        ]);
        if (isMounted) {
          setServicesList(servicesData || []);
          setDoctorsList(doctorsData || []);
          setTestimonialsList(testimonialsData || []);
          setSettingsData(settingsRes || null);
          setGalleryList(galleryRes || []);
        }
      } catch (err) {
        console.error("Failed to load home data from backend:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadHomeData();
    return () => { isMounted = false; };
  }, []);

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

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10">

            <span className="inline-block bg-[#DCFCE7] text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-base uppercase tracking-wider">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: +60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >

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
                src={heroImage}
                className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover aspect-[4/3]"
              />

              {/* Stat Card */}
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

          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-lg bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <SkeletonStat key={i} />
            ))
          ) : (
            (settingsData?.stats || []).map((stat, idx) => {
              const valStr = String(stat.value || '').trim();
              const numMatch = valStr.match(/\d+[\d,]*/);
              let endVal = 0;
              let prefixStr = '';
              let suffixStr = valStr;

              if (numMatch) {
                const numStr = numMatch[0];
                const numIndex = valStr.indexOf(numStr);
                prefixStr = valStr.substring(0, numIndex);
                suffixStr = valStr.substring(numIndex + numStr.length);
                endVal = parseInt(numStr.replace(/,/g, ''), 10);
              }

              return (
                <div key={idx} className="text-center p-md">
                  <div className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-xs">
                    {prefixStr}<Counter end={endVal} suffix={suffixStr} />
                  </div>
                  <div className="text-label-md font-medium text-on-surface-variant">{stat.label}</div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <SectionTitle
          title="Specialized Dental Services"
          description="Combining clinical excellence with high-end hospitality to provide a unique, comfortable, and effective dental experience."
        />
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md"
          >
            {servicesList.slice(0, 6).map((service) => (
              <motion.div key={service.id || service._id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        )}
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


        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {[...Array(4)].map((_, i) => (
              <SkeletonProfile key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md"
          >
            {doctorsList.slice(0, 4).map((doctor) => (
              <motion.div
                key={doctor.id || doctor._id}
                variants={fadeInUp}
              >
                <DoctorCardSimple doctor={doctor} />
              </motion.div>
            ))}
          </motion.div>
        )}


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


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            className="flex flex-col md:flex-row md:justify-between md:items-end mb-xl text-left"
          >

            <div>

              <h2 className="text-headline-md font-headline-md text-on-surface mb-sm">
                What Our Patients Say
              </h2>

              <p className="text-body-md text-on-surface-variant">
                Real stories from people who found their perfect smile with us.
              </p>

            </div>



            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7
              }}
              className="hidden md:flex gap-sm mt-4 md:mt-0"
            >

              <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">

                <span className="material-symbols-outlined">
                  chevron_left
                </span>

              </button>


              <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-all duration-300">

                <span className="material-symbols-outlined">
                  chevron_right
                </span>

              </button>

            </motion.div>


          </motion.div>




          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {[...Array(3)].map((_, i) => (
                <SkeletonTestimonial key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {testimonialsList.map((t, idx) => (
                <motion.div
                  key={t._id || t.id || idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                >
                  <TestimonialCard testimonial={t} />
                </motion.div>
              ))}
            </div>
          )}

        </div>

      </section>

      {/* Inside Our Clinic (Gallery Teaser) */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

        <SectionTitle
          title="Inside Our Clinic"
          description="A clinical environment designed entirely for your comfort, sterility, and serenity."
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
            <div className="md:col-span-7 h-[420px] rounded-3xl overflow-hidden">
              <Skeleton className="w-full h-full rounded-3xl" />
            </div>
            <div className="md:col-span-5 grid gap-5">
              <Skeleton className="w-full h-[200px] rounded-3xl" />
              <Skeleton className="w-full h-[200px] rounded-3xl" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">

            {/* Large Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-7 relative group overflow-hidden rounded-3xl"
            >
              <img
                src={galleryList[0] ? getFullImageUrl(galleryList[0].image || galleryList[0].url) : ""}
                alt={galleryList[0]?.title || "Clinical Facility"}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />
            </motion.div>

            {/* Right Side Images */}
            <div className="md:col-span-5 grid gap-5">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group overflow-hidden rounded-3xl"
              >
                <img
                  src={galleryList[1] ? getFullImageUrl(galleryList[1].image || galleryList[1].url) : ""}
                  alt={galleryList[1]?.title || "Operating Facility"}
                  className="w-full h-[200px] object-cover rounded-3xl transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="relative group overflow-hidden rounded-3xl"
              >
                <img
                  src={galleryList[2] ? getFullImageUrl(galleryList[2].image || galleryList[2].url) : ""}
                  alt={galleryList[2]?.title || "Patient Lounge"}
                  className="w-full h-[200px] object-cover rounded-3xl transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </motion.div>
            </div>

          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-xl"
        >

          <Button
            onClick={() => navigate('/gallery')}
            variant="secondary"
            className="px-8 py-3 rounded-full font-bold"
          >
            Explore Full Gallery
          </Button>

        </motion.div>


      </section>

      {/* Appointment CTA Banner */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="max-w-7xl mx-auto glass-morphism p-xl rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl text-center md:text-left border border-[#DCFCE7]"
        >

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-fixed/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-fixed/20 blur-[80px] rounded-full pointer-events-none"></div>



          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-lg">


            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="max-w-2xl text-left"
            >

              <h2 className="text-display-lg-mobile md:text-headline-md font-display-lg text-on-surface mb-sm">
                Need Dental Care?
              </h2>

              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Don't wait for a small problem to become a major procedure. Book your appointment today and join thousands of happy patients.
              </p>

            </motion.div>




            {/* Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
              className="flex-shrink-0 w-full md:w-auto"
            >

              <Button
                onClick={() => navigate('/book-appointment')}
                variant="primary"
                className="
                  w-full md:w-auto
                  px-10
                  py-5
                  text-xl
                  rounded-full
                  font-bold
                  shadow-xl
                  text-center
                  hover:scale-105
                  transition-transform
                "
              >
                Book Your Visit Now
              </Button>

            </motion.div>


          </div>

        </motion.div>

      </section>

    </div>
  );
};

export default Home;
export { Home };
