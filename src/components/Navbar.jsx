import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll offset listener for sticky py scaling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Doctors", path: "/doctors" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header
      className={`docked full-width top-0 sticky z-50 transition-all duration-300 ${scrolled
        ? 'bg-surface/90 py-2 shadow-md backdrop-blur-xl border-b border-outline-variant/30'
        : 'bg-surface py-4 shadow-sm border-b border-outline-variant/10'
        }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto h-16">
        {/* Brand Logo */}
        <Link to="/" className="text-headline-sm font-headline-sm font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            dentistry
          </span>
          DentaElite
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-label-md font-label-md transition-all duration-200 pb-1 ${isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/book-appointment"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md font-bold transition-all duration-150 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-on-surface hover:text-primary focus:outline-none"
        >
          <span className="material-symbols-outlined text-[32px]">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface border-b border-outline-variant overflow-hidden"
          >
            <div className="flex flex-col px-margin-mobile py-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-headline-sm font-semibold transition-all py-2 ${isActive ? 'text-primary' : 'text-on-surface-variant'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/book-appointment"
                className="bg-primary text-on-primary py-3 rounded-full text-center font-bold font-label-md text-label-md shadow-md mt-4"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
export { Navbar };
