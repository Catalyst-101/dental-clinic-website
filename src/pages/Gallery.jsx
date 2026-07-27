import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchGallery } from '../api/settingsApi';
import { getFullImageUrl } from '../api/axios';
import { GalleryCard } from '../components/GalleryCard';
import { Button } from '../components/Button';

const Gallery = () => {
  const navigate = useNavigate();

  const [galleryList, setGalleryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const filterCategories = [
    { label: "All Collections", value: "all" },
    { label: "The Clinic", value: "clinic" },
    { label: "Equipment", value: "equipment" },
    { label: "Treatments", value: "treatments" },
    { label: "Before & After", value: "before-after" }
  ];

  useEffect(() => {
    let isMounted = true;
    const loadGallery = async () => {
      try {
        setLoading(true);
        const data = await fetchGallery();
        if (isMounted) setGalleryList(data || []);
      } catch (err) {
        console.error("Failed to load gallery:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadGallery();
    return () => { isMounted = false; };
  }, []);

  const filteredItems = galleryList.filter(item => {
    if (filter === "all") return true;
    const tagStr = (item.tag || item.category || "").toLowerCase();
    if (filter === "clinic") return tagStr.includes("clinic");
    if (filter === "equipment") return tagStr.includes("equipment");
    if (filter === "treatments") return tagStr.includes("treatment");
    if (filter === "before-after") return tagStr.includes("before") || item.isBeforeAfter;
    return true;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;

  const visibleItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="overflow-hidden bg-background text-on-surface">
      {/* HERO SECTION */}
      <section className="relative py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto text-center">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.span
            variants={itemAnimation}
            className="inline-block bg-[#DCFCE7] text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider mb-base"
          >
            Visual Excellence
          </motion.span>

          <motion.h1
            variants={itemAnimation}
            className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface mb-md"
          >
            Our Clinical <span className="text-primary font-bold">Portfolio</span>
          </motion.h1>

          <motion.p
            variants={itemAnimation}
            className="text-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed"
          >
            Explore our world-class facilities, state-of-the-art dental technology, and the transformative results we achieve for our patients every day.
          </motion.p>
        </motion.div>
      </section>

      {/* FILTERS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="sticky top-[64px] z-40 bg-background/90 backdrop-blur-md py-md border-y border-outline-variant/30 mb-xl"
      >
        <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex justify-center gap-sm">
          {filterCategories.map(cat => (
            <motion.button
              key={cat.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all ${
                filter === cat.value
                  ? 'bg-primary text-on-primary font-bold shadow-md'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-secondary-container'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* GALLERY */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map(item => (
              <motion.div
                layout
                variants={itemAnimation}
                key={item.id}
                className="break-inside-avoid"
                whileHover={{ scale: 1.02 }}
              >
                <GalleryCard
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* PAGINATION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
        className="flex justify-center items-center gap-4 mb-xl"
      >

        <button
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-all duration-300"
          onClick={() => setCurrentPage(p => p - 1)}
          disabled={currentPage === 1}
        >

          <span className="material-symbols-outlined">
            chevron_left
          </span>

        </button>



        <span className="font-bold text-body-lg px-4 py-2 rounded-full bg-surface-container-high text-on-surface">
          {currentPage}
          {totalPages > 1 && <> / {totalPages}</>}
        </span>



        <button
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-all duration-300"
          onClick={() => setCurrentPage(p => p + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >

          <span className="material-symbols-outlined">
            chevron_right
          </span>

        </button>

      </motion.div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              className="absolute top-6 Tri-6 text-white z-50"
              onClick={() => setSelectedItem(null)}
            >
              <span className="material-symbols-outlined text-[40px]">
                close
              </span>
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getFullImageUrl(selectedItem.url || selectedItem.image || selectedItem.afterImage)}
                alt={selectedItem.title || selectedItem.caption || "Gallery item"}
                className="max-h-[80vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              />
              <h3 className="text-white text-center mt-5 text-headline-md font-bold">
                {selectedItem.title || selectedItem.caption || selectedItem.tag}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            duration: 0.8,
            delay: 0.25
          }}
        className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl"
      >
        <div className="glass-card rounded-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center gap-xl border border-[#DCFCE7] shadow-sm">
          <div className="flex-1 space-y-4">
            <h2 className="text-headline-md font-bold text-primary">
              Ready for Your New Smile?
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Our team of specialists is ready to provide you with the same high-quality care you see in our gallery. Book your consultation today.
            </p>

            <div className="flex gap-sm flex-wrap">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  onClick={() => navigate('/book-appointment')}
                  variant="primary"
                >
                  <span className="material-symbols-outlined">event</span>
                  Book Appointment
                </Button>
              </motion.div>

              <Button
                variant="secondary"
                onClick={() => alert('Opening clinic price list brochure...')}
              >
                View Price List
              </Button>
            </div>
          </div>

          <motion.div 

            animate={{
              scale: [1, 1.01, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          
            className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS_TaKu79QBW4QkuFVczMgk0g2BRyj32JN6KhFB5EqJ2-n6h7mT-t1zqGuPbQdD7ks5bGBvE91wGy1UwVJe88mLuKMbqJYU_qFQHa-serLTNRLXnUJX01FfKUEPkfxrf-CQyczwE5r0XHEzB1RNwLAHmVUqmjP4eeKF_6Y9RHpZlR5IvPD9s40k77cv92nJSW_A1Wc_VwzrTqDUZYp_GFxUkMe-a-PI7j7dcDjj1hQEYi12nzC1dU5Gsj3QuxK8BIsxrLmB_NT26Pm"
              alt="Clinic"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Gallery;
export { Gallery };