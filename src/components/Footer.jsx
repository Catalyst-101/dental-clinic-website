import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { fetchSettings } from '../api/settingsApi';
import { fetchServices } from '../api/servicesApi';

import { Skeleton } from './Skeleton';

const Footer = () => {
  const [settings, setSettings] = useState(null);
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadFooterData = async () => {
      try {
        setLoading(true);
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
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadFooterData();
    return () => { isMounted = false; };
  }, []);

  const contact = settings?.contact || {};
  const social = settings?.social || {};
  const businessHours = settings?.businessHours || [];
  const whatsAppVal = contact.whatsApp || social.whatsApp || "";

  // Helper to group consecutive days with identical timings
  const groupedHours = React.useMemo(() => {
    if (!businessHours || businessHours.length === 0) return [];
    
    const groups = [];
    let current = { start: businessHours[0].day, end: businessHours[0].day, ...businessHours[0] };

    for (let i = 1; i < businessHours.length; i++) {
      const bh = businessHours[i];
      if (bh.isClosed === current.isClosed && bh.open === current.open && bh.close === current.close) {
        current.end = bh.day;
      } else {
        groups.push(current);
        current = { start: bh.day, end: bh.day, ...bh };
      }
    }
    groups.push(current);
    
    return groups.map(g => {
      const dayLabel = g.start === g.end ? g.start.substring(0, 3) : `${g.start.substring(0, 3)} - ${g.end.substring(0, 3)}`;
      const timeLabel = g.isClosed ? "Closed" : `${g.open} - ${g.close}`;
      return { label: dayLabel, time: timeLabel };
    });
  }, [businessHours]);

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full">
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-xl px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto w-full">

        {/* Brand Block */}
        <div className="space-y-md flex-1 min-w-[250px]">
          <div className="text-xs sm:text-sm lg:text-headline-sm font-bold text-primary flex items-center gap-2 whitespace-nowrap">
            <span
              className="material-symbols-outlined text-[24px] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dentistry
            </span>
            SAMI DENTAL CLINIC
          </div>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Providing premium dental care with a focus on hospitality and clinical excellence.
          </p>
          <div className="flex gap-sm justify-start">
            {whatsAppVal && (
              <a
                href={whatsAppVal.startsWith('http') ? whatsAppVal : `https://wa.me/${whatsAppVal.replace(/[^0-9]/g, '')}`}
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
        <div className="space-y-md flex-1 min-w-[150px] md:text-center lg:text-left">
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
        <div className="space-y-md flex-1 min-w-[150px] md:text-center lg:text-left">
          <h6 className="text-label-md font-bold text-on-surface uppercase tracking-widest">Services</h6>
          <ul className="space-y-sm">
            {loading ? (
              [...Array(4)].map((_, i) => (
                <li key={i}><Skeleton className="h-4 w-28" /></li>
              ))
            ) : (
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
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-md flex-1 min-w-[200px]">
          <h6 className="text-label-md font-bold text-on-surface uppercase tracking-widest">Contact Info</h6>
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ) : (
            <ul className="space-y-sm">
              {contact.address && (
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <span className="text-on-surface-variant text-body-md">
                    {contact.address}
                  </span>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-on-surface-variant text-body-md font-bold">
                    {contact.phone}
                  </span>
                </li>
              )}
              {whatsAppVal && (
                <li className="flex items-center gap-sm">
                  <FaWhatsapp className="text-primary text-xl" />
                  <a
                    href={whatsAppVal.startsWith('http') ? whatsAppVal : `https://wa.me/${whatsAppVal.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors text-body-md font-bold"
                  >
                    {whatsAppVal}
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-on-surface-variant text-body-md">
                    {contact.email}
                  </span>
                </li>
              )}
              {businessHours.length > 0 && (
                <li className="flex gap-sm">
                  <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                  <div className="flex flex-col justify-center gap-1 text-on-surface-variant text-label-sm">
                    {groupedHours.map((g, idx) => (
                      <div key={idx} className="flex justify-between gap-4">
                        <span className="font-bold">{g.label}</span>
                        <span>{g.time}</span>
                      </div>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          )}
        </div>

      </div>

      {/* Footer Bottom Row */}
      <div className="border-t border-outline-variant py-md px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-label-sm text-on-surface-variant">© 2026 SAMI DENTAL CLINIC. All rights reserved.</p>
        <div className="flex gap-md">
          <Link className="text-label-sm text-on-surface-variant hover:text-primary underline" to="/privacy-policy">Privacy Policy</Link>
          <Link className="text-label-sm text-on-surface-variant hover:text-primary underline" to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };
