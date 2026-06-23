import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-xl px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">

        {/* Brand Block */}
        <div className="space-y-md">
          <div className="text-headline-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              dentistry
            </span>
            DentaElite
          </div>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Providing premium dental care with a focus on hospitality and clinical excellence since 1998.
          </p>
          <div className="flex gap-sm justify-start">
            <a
              href="https://wa.me/919765432109"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
            >
              <FaWhatsapp className="text-[20px]" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
            >
              <FaInstagram className="text-[20px]" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
            >
              <FaFacebook className="text-[20px]" />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-md">
          <h6 className="text-label-md font-bold text-on-surface uppercase tracking-widest">Quick Links</h6>
          <ul className="space-y-sm">
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/">Home</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/about">About Us</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/doctors">Our Doctors</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/gallery">Clinic Gallery</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-md">
          <h6 className="text-label-md font-bold text-on-surface uppercase tracking-widest">Services</h6>
          <ul className="space-y-sm">
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services/dental-cleaning">Dental Cleaning</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services/root-canal">Root Canal Treatment</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services/dental-implants">Dental Implants</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services/teeth-whitening">Teeth Whitening</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services/braces-aligners">Orthodontics</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-md">
          <h6 className="text-label-md font-bold text-on-surface uppercase tracking-widest">Contact Info</h6>
          <ul className="space-y-sm">
            <li className="flex items-start gap-sm">
              <span className="material-symbols-outlined text-primary mt-1">location_on</span>
              <span className="text-on-surface-variant text-body-md">123 Health Ave, Medical District, NY 10012</span>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">call</span>
              <span className="text-on-surface-variant text-body-md font-bold">+1 (555) 000-1234</span>
            </li>
            <li className="flex items-center gap-sm">
              <FaWhatsapp className="text-primary text-xl" />
              <span className="text-on-surface-variant text-body-md font-bold">
                +91 9765432109
              </span>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="text-on-surface-variant text-body-md">hello@dentaelite.com</span>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="text-on-surface-variant text-body-md">Mon - Sat: 8:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-outline-variant py-md px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-label-sm text-on-surface-variant">© 2026 DentaElite Premium Care. All rights reserved.</p>
        <div className="flex gap-md">
          <a className="text-label-sm text-on-surface-variant hover:text-primary underline" href="#">Privacy Policy</a>
          <a className="text-label-sm text-on-surface-variant hover:text-primary underline" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };
