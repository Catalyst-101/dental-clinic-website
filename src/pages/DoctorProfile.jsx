import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { doctors } from '../data/clinicData';
import { Button } from '../components/Button';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find doctor
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-md">
        <h2 className="text-headline-md font-bold mb-4">Doctor Not Found</h2>
        <Button onClick={() => navigate('/doctors')} variant="primary">
          Back to Doctors List
        </Button>
      </div>
    );
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
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative max-w-sm lg:max-w-none justify-self-center w-full"
          >
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl flex flex-col items-center shadow-lg border border-[#DCFCE7]">
              <span className="text-headline-md font-headline-md text-primary font-bold">{doctor.experience.split(' ')[0]}</span>
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Experience</span>
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-md mt-8 lg:mt-0"
          >
            <div className="space-y-xs">
              <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-secondary-fixed-variant rounded-full text-label-sm font-label-sm uppercase tracking-wider">
                {doctor.specialization}
              </span>
              <h1 className="text-display-lg font-display-lg text-on-surface leading-tight font-bold">
                {doctor.name}
              </h1>
              <p className="text-headline-sm font-headline-sm text-primary opacity-90 font-semibold">
                {doctor.qualifications}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-sm">
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-label-md font-label-md text-on-surface-variant">Board Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">translate</span>
                <span className="text-label-md font-label-md text-on-surface-variant">{doctor.languages}</span>
              </div>
            </div>

            <div className="space-y-base">
              <h3 className="text-headline-sm font-headline-sm font-bold">Professional Biography</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                {doctor.bio}
              </p>
            </div>

            <div className="flex gap-md pt-4">
              <Button onClick={() => navigate('/book-appointment')} variant="primary" className="doctor-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_month</span>
                Book Appointment
              </Button>
              <Button onClick={() => alert('Opening research publication details...')} variant="secondary" className="px-8 py-4 rounded-xl font-bold">
                View Publications
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid: Qualifications & Weekly Schedule */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-left">
          
          {/* Left Qualifications Card */}
          <div className="md:col-span-2 glass-card p-6 md:p-8 rounded-[32px] space-y-md border border-[#DCFCE7] shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-primary-container p-3 rounded-2xl text-on-primary-container">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h2 className="text-headline-sm font-headline-sm font-bold">Academic Qualifications</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              {doctor.qualificationsList.map((qual, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors">
                  <p className="text-label-sm font-label-sm text-primary uppercase font-bold mb-1">{qual.title}</p>
                  <p className="text-body-lg font-body-lg font-bold text-on-surface">{qual.institution}</p>
                  <p className="text-label-md font-label-md text-on-surface-variant leading-relaxed">{qual.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Weekly Schedule Card */}
          <div className="glass-card p-6 md:p-8 rounded-[32px] space-y-md bg-secondary-container/10 border border-[#DCFCE7] shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-2xl text-on-secondary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h2 className="text-headline-sm font-headline-sm font-bold">Weekly Schedule</h2>
            </div>
            <div className="space-y-sm">
              {doctor.schedule.map((sched, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-outline-variant/20 last:border-b-0">
                  <span className="text-label-md font-label-md font-bold text-on-surface">{sched.day}</span>
                  <span className={`text-label-md font-label-md ${sched.time === 'Closed' ? 'text-error' : 'text-primary'}`}>
                    {sched.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Patient Reviews Section */}
        <section className="space-y-lg text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div className="space-y-xs">
              <h2 className="text-headline-md font-headline-md font-bold">Patient Experiences</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">Hear from those who trust {doctor.name.split(' ').slice(-1)[0]} with their smiles.</p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-high px-6 py-3 rounded-full shadow-sm">
              <div className="flex text-primary">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <span className="text-label-md font-label-md font-bold text-on-surface">4.9/5 (240+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {doctor.reviews.map((rev, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl space-y-4 border border-[#DCFCE7] shadow-sm flex flex-col justify-between">
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
                
                <div className="flex items-center gap-3 pt-2">
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
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default DoctorProfile;
export { DoctorProfile };
