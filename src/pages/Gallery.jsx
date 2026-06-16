import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/clinicData';
import { GalleryCard } from '../components/GalleryCard';
import { Button } from '../components/Button';

const Gallery = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filterCategories = [
    { label: "All Collections", value: "all" },
    { label: "The Clinic", value: "clinic" },
    { label: "Equipment", value: "equipment" },
    { label: "Treatments", value: "treatments" },
    { label: "Before & After", value: "before-after" }
  ];

  // Filtering items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="overflow-hidden bg-background text-on-surface">
      
      {/* Hero Section */}
      <header className="relative py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto overflow-hidden text-left">
        <div className="max-w-2xl">
          <span className="inline-block bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm font-label-sm mb-base uppercase tracking-wider">
            Visual Excellence
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface mb-md">
            Our Clinical <span className="text-primary font-bold">Portfolio</span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Explore our world-class facilities, state-of-the-art dental technology, and the transformative results we achieve for our patients every day.
          </p>
        </div>
      </header>

      {/* Category Filters */}
      <section className="sticky top-[64px] z-40 bg-background/90 backdrop-blur-md py-md border-y border-outline-variant/30 mb-xl">
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-wrap gap-sm justify-center md:justify-start">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2.5 rounded-full text-label-md font-label-md transition-all duration-250 ${
                filter === cat.value
                  ? 'bg-primary text-on-primary font-bold shadow-md'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <motion.div 
          layout
          className="masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                onClick={(item) => setSelectedItem(item)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors focus:outline-none z-50"
              onClick={() => setSelectedItem(null)}
            >
              <span className="material-symbols-outlined text-[40px]">close</span>
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Stop bubbling
            >
              {selectedItem.isBeforeAfter ? (
                <div className="grid grid-cols-2 gap-2 bg-white p-2 rounded-2xl shadow-2xl">
                  <div className="relative">
                    <img 
                      src={selectedItem.beforeImage} 
                      alt="Before" 
                      className="max-h-[70vh] w-full object-contain rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/75 text-white px-3 py-1 rounded text-label-sm uppercase font-bold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={selectedItem.afterImage} 
                      alt="After" 
                      className="max-h-[70vh] w-full object-contain rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-3 py-1 rounded text-label-sm uppercase font-bold">
                      After
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-2 rounded-2xl shadow-2xl">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="max-h-[75vh] max-w-full object-contain rounded-lg"
                  />
                </div>
              )}
              
              <div className="mt-4 text-center">
                <span className="text-white font-bold text-headline-sm uppercase tracking-wider block opacity-70 text-sm">
                  {selectedItem.category.replace('-', ' ')}
                </span>
                <h3 className="text-white font-bold text-headline-md mt-1">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking CTA */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="glass-card rounded-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-xl border border-[#DCFCE7] shadow-sm text-left">
          <div className="flex-1 space-y-4">
            <h2 className="text-headline-md font-headline-md text-primary font-bold">Ready for Your New Smile?</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Our team of specialists is ready to provide you with the same high-quality care you see in our gallery. Book your consultation today.
            </p>
            <div className="flex flex-wrap gap-sm pt-2">
              <Button onClick={() => navigate('/book-appointment')} variant="primary" className="flex items-center gap-2">
                <span className="material-symbols-outlined">event</span>
                Book Appointment
              </Button>
              <Button onClick={() => alert('Opening clinic price list brochure...')} variant="secondary">
                View Price List
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-lg relative">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS_TaKu79QBW4QkuFVczMgk0g2BRyj32JN6KhFB5EqJ2-n6h7mT-t1zqGuPbQdD7ks5bGBvE91wGy1UwVJe88mLuKMbqJYU_qFQHa-serLTNRLXnUJX01FfKUEPkfxrf-CQyczwE5r0XHEzB1RNwLAHmVUqmjP4eeKF_6Y9RHpZlR5IvPD9s40k77cv92nJSW_A1Wc_VwzrTqDUZYp_GFxUkMe-a-PI7j7dcDjj1hQEYi12nzC1dU5Gsj3QuxK8BIsxrLmB_NT26Pm"
              alt="Transformation Outcome" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
export { Gallery };
