import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { doctors } from '../data/clinicData';
import { DoctorCard } from '../components/DoctorCard';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';

const Doctors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter handlers
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Filtered doctors list
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doctor.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'All') return matchesSearch;
    
    // Categorize doctors based on specialization tags
    const categoryMapping = {
      'General Dentistry': ['General', 'Pediatric', 'Endodontic'],
      'Orthodontics': ['Orthodontics', 'Orthodontist'],
      'Cosmetic Surgery': ['Cosmetic', 'Implant']
    };

    const targetKeywords = categoryMapping[activeCategory] || [];
    const matchesCategory = targetKeywords.some(keyword => 
      doctor.specialization.toLowerCase().includes(keyword.toLowerCase())
    );

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="overflow-hidden bg-background">
      
      {/* Header Section */}
      <header className="relative py-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <span className="bg-[#DCFCE7] text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm inline-block mb-4 uppercase tracking-wider">
            Our Specialists
          </span>
          <h1 className="text-display-lg font-display-lg text-on-surface mb-gutter">Meet Our Elite Medical Team</h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Discover our world-class practitioners dedicated to your oral health and aesthetic excellence through personalized dental care.
          </p>
        </div>
      </header>

      {/* Main Grid & Filters */}
      <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-xl">
        
        {/* Interactive Filters & Search bar */}
        <div className="glass-card rounded-xl p-6 mb-lg flex flex-col md:flex-row gap-gutter items-center justify-between border border-[#DCFCE7]">
          {/* Search Input */}
          <div className="relative w-full md:w-96 text-left">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-sm w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {['All', 'General Dentistry', 'Orthodontics', 'Cosmetic Surgery'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors duration-250 ${
                  activeCategory === cat
                    ? 'bg-primary text-white font-bold'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
                }`}
              >
                {cat === 'All' ? 'All Specialists' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid with Transition */}
        {filteredDoctors.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
          >
            <AnimatePresence mode="popLayout">
              {filteredDoctors.map((doctor) => (
                <motion.div 
                  key={doctor.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">
              search_off
            </span>
            <h3 className="text-headline-sm font-bold text-on-surface mb-2">No Specialists Found</h3>
            <p className="text-body-md text-on-surface-variant">Try refining your search terms or filters.</p>
          </div>
        )}

      </main>

      {/* Appointment CTA Banner */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-xl">
        <div className="relative overflow-hidden rounded-2xl primary-gradient text-white p-8 md:p-xl text-center shadow-xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-headline-md font-headline-md font-bold max-w-xl mx-auto leading-tight">
              Can't decide which specialist is right for you?
            </h2>
            <p className="text-body-lg font-body-lg max-w-xl mx-auto opacity-90 leading-relaxed">
              Book a general consultation and our head doctor will recommend the best specialist for your unique dental needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button onClick={() => navigate('/book-appointment')} variant="primary" className="bg-white text-primary hover:bg-white/95 px-8 py-3 rounded-full font-bold shadow-lg">
                Schedule Consultation
              </Button>
              <Button onClick={() => window.open('tel:+15550001234')} variant="secondary" className="bg-primary-container text-white border border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-bold">
                Call Clinic Now
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Doctors;
export { Doctors };
