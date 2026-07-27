import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { fetchSettings } from '../api/settingsApi';
import { fetchServices } from '../api/servicesApi';

const Footer = () => {
  const [settings, setSettings] = useState(null);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const loadFooterData = async () => {
      try {
        const [settingsRes, servicesRes] = await Promise.all([
          fetchSettings(),
          fetchServices()
        ]);
        if (isMounted) {
          setSettings(settingsRes);
          setServicesList((servicesRes || []).slice(0, 5));
        }
      } catch (err) {
        console.error("Failed to load footer data:", err);
      }
    };
    loadFooterData();
    return () => { isMounted = false; };
  }, []);

  const contact = settings?.contact || {};
  const social = settings?.social || {};
  const businessHours = settings?.businessHours || [];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-xl px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">

        {/* Brand Block */}
        <div className="space-y-md">
          <div className="text-headline-sm font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              dentistry
            </span>
            SAMI DENTAL CLINIC
          </div>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Providing premium dental care with a focus on hospitality and clinical excellence.
          </p>
          <div className="flex gap-sm justify-start">
            {social.whatsApp && (
              <a
                href={social.whatsApp.startsWith('http') ? social.whatsApp : `https://wa.me/${social.whatsApp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
              >
                <FaWhatsapp className="text-[20px]" />
              </a>
            )}

            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
              >
                <FaInstagram className="text-[20px]" />
              </a>
            )}

            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
              >
                <FaFacebook className="text-[20px]" />
              </a>
            )}
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
            {servicesList.length > 0 ? (
              servicesList.map((srv) => (
                <li key={srv.id || srv._id}>
                  <Link
                    className="text-on-surface-variant hover:text-primary transition-all text-body-md"
                    to={`/services/${srv.slug || srv.id || srv._id}`}
                  >
                    {srv.title}
                  </Link>
                </li>
              ))
            ) : (
              <>
                <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services">Dental Cleaning</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services">Root Canal Treatment</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-all text-body-md" to="/services">Orthodontics</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-md">
          <h6 className="text-label-md font-bold text-on-surface uppercase tracking-widest">Contact Info</h6>
          <ul className="space-y-sm">
            <li className="flex items-start gap-sm">
              <span className="material-symbols-outlined text-primary mt-1">location_on</span>
              <span className="text-on-surface-variant text-body-md">
                {contact.address || "New Diljanplaza Section D 2nd Floor Office D7 Ring Road Achini, chowk, Achini Payan, Peshawar, 25000, Pakistan"}
              </span>
            </li>
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">call</span>
              <span className="text-on-surface-variant text-body-md font-bold">
                {contact.phone || "+92 337 5675083"}
              </span>
            </li>
            {contact.whatsApp && (
              <li className="flex items-center gap-sm">
                <FaWhatsapp className="text-primary text-xl" />
                <span className="text-on-surface-variant text-body-md font-bold">
                  {contact.whatsApp}
                </span>
              </li>
            )}
            <li className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="text-on-surface-variant text-body-md">
                {contact.email || "hello@dentaelite.care"}
              </span>
            </li>
            <li className="flex gap-sm">
              <span className="material-symbols-outlined text-primary mt-1">schedule</span>
              <div className="flex flex-col justify-center gap-1 text-on-surface-variant text-body-sm">
                {businessHours.length > 0 ? (
                  businessHours.map((bh, idx) => (
                    <span key={idx}>
                      {bh.day}: {bh.isClosed ? "Closed" : `${bh.open} - ${bh.close}`}
                    </span>
                  ))
                ) : (
                  <span>Mon - Sat: 9:00 AM - 10:00 PM</span>
                )}
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-outline-variant py-md px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-label-sm text-on-surface-variant">© 2026 SAMI DENTAL CLINIC. All rights reserved.</p>
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
