import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchDoctorById } from '../api/doctorsApi';
import { getFullImageUrl } from '../api/axios';
import { Button } from '../components/Button';
import NotFound from './NotFound';

import { SkeletonDetail } from '../components/Skeleton';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadDoctor = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctorById(id);
        if (isMounted) setDoctor(data);
      } catch (err) {
        console.error("Failed to load doctor profile:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadDoctor();
    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return <SkeletonDetail />;
  }

  if (!doctor) {
    return <NotFound />;
  }

  return (
    <div className="bg-background text-on-surface">
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-xl">
        
        {/* Profile Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center text-left">
          
          {/* Left Column: Headshot & Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative max-w-sm lg:max-w-none justify-self-center w-full"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={getFullImageUrl(doctor.image)} 
                alt={doctor.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: `${doctor.imageFocalPoint?.x ?? 50}% ${doctor.imageFocalPoint?.y ?? 50}%` }}
              />
            </div>
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl flex flex-col items-center shadow-lg border border-[#DCFCE7] cursor-default"
            >
              <span className="text-headline-md font-headline-md text-primary font-bold">{doctor.experience.split(' ')[0]}</span>
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Experience</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Bio Details */}
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
            className="lg:col-span-7 space-y-md mt-8 lg:mt-0"
          >
            <div className="space-y-xs">
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: -15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              className="inline-block px-4 py-1.5 bg-[#DCFCE7] text-primary rounded-full text-label-sm font-label-sm uppercase tracking-wider"
              >
                {doctor.specialization}
              </motion.span>
              
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface leading-tight font-extrabold tracking-tight"
              >
                {doctor.name}
              </motion.h1>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0.9, transition: { duration: 0.5 } }
                }}
                className="text-headline-sm font-headline-sm text-primary font-semibold"
              >
                {doctor.qualifications}
              </motion.p>
            </div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
              }}
              className="flex flex-wrap gap-sm"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg"
              >
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-label-md font-label-md text-on-surface-variant">Board Certified</span>
              </motion.div>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg"
              >
                <span className="material-symbols-outlined text-primary">translate</span>
                <span className="text-label-md font-label-md text-on-surface-variant">{doctor.languages}</span>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-base"
            >
              <h3 className="text-headline-sm font-headline-sm font-bold">Professional Biography</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                {doctor.bio}
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="flex gap-md pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Button onClick={() => navigate('/book-appointment')} variant="primary" className="doctor-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg flex items-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined">calendar_month</span>
                  Book Appointment
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Button onClick={() => alert('Opening research publication details...')} variant="secondary" className="px-8 py-4 rounded-xl font-bold">
                  View Publications
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Grid: Qualifications & Weekly Schedule */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
          
          {/* Left Qualifications Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 glass-card p-6 md:p-8 rounded-[32px] space-y-md border border-[#DCFCE7] shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary-container p-3 rounded-2xl text-on-primary-container">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h2 className="text-headline-sm font-headline-sm font-bold">Academic Qualifications</h2>
            </div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-md"
            >
              {doctor.qualificationsList.map((qual, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                  }}
                  whileHover={{ y: -4, borderColor: "rgba(0, 107, 44, 0.2)" }}
                  className="p-4 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-all cursor-default"
                >
                  <p className="text-label-sm font-label-sm text-primary uppercase font-bold mb-1">{qual.title}</p>
                  <p className="text-body-lg font-body-lg font-bold text-on-surface">{qual.institution}</p>
                  <p className="text-label-md font-label-md text-on-surface-variant leading-relaxed">{qual.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Weekly Schedule Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 md:p-8 rounded-[32px] space-y-md bg-secondary-container/10 border border-[#DCFCE7] shadow-sm cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-2xl text-on-secondary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h2 className="text-headline-sm font-headline-sm font-bold">Weekly Schedule</h2>
            </div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-sm"
            >
              {doctor.schedule.map((sched, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex justify-between items-center py-2 border-b border-outline-variant/20 last:border-b-0 hover:bg-primary-container/5 px-2 rounded-lg transition-colors"
                >
                  <span className="text-label-md font-label-md font-bold text-on-surface">{sched.day}</span>
                  <span className={`text-label-md font-label-md ${sched.isWorking === false || sched.time === 'Closed' ? 'text-error font-semibold' : 'text-primary font-bold'}`}>
                    {sched.isWorking === false
                      ? "Off / Closed"
                      : (sched.startTime && sched.endTime)
                      ? `${sched.startTime} - ${sched.endTime}`
                      : sched.time || "Closed"}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </section>

        {/* Patient Reviews Section */}
        <section className="space-y-lg text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-md"
          >
            <div className="space-y-xs">
              <h2 className="text-headline-md font-headline-md font-bold">Patient Experiences</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Hear from those who trust {doctor.name.split(' ').slice(-1)[0]} with their smiles.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-surface-container-high px-6 py-3 rounded-full shadow-sm cursor-default"
            >
              <div className="flex text-primary">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <span className="text-label-md font-label-md font-bold text-on-surface">4.9/5 (240+ Reviews)</span>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
          >
            {doctor.reviews.map((rev, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                whileHover={{ 
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 12px 30px -10px rgba(22, 163, 74, 0.08)",
                  borderColor: "rgba(0, 107, 44, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 rounded-2xl space-y-4 border border-[#DCFCE7] shadow-sm flex flex-col justify-between cursor-default"
              >
                <div className="space-y-3">
                  <div className="flex gap-0.5 text-primary">
                    {[...Array(rev.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-body-md font-body-md italic text-on-surface leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name} 
                    className="w-10 h-10 rounded-full object-cover border border-primary-fixed"
                  />
                  <div>
                    <p className="text-label-md font-label-md font-bold text-on-surface">{rev.name}</p>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">{rev.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>
    </div>
  );
};

export default DoctorProfile;
export { DoctorProfile };
