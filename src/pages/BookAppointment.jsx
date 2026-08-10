import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';

const BookAppointment = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col justify-between">
      
      {/* Simple Header */}
      <header className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-4">
          <button 
            onClick={() => navigate('/')} 
            className="text-headline-sm font-headline-sm font-bold text-primary flex items-center gap-2 focus:outline-none"
          >
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              dentistry
            </span>
            DentaElite
          </button>
          
          <button 
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md focus:outline-none" 
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
            Exit Booking
          </button>
        </div>
      </header>

      {/* Booking Form Layout */}
      <main className="flex-grow flex items-start md:items-center justify-center pt-md pb-xl px-margin-mobile">
        <AppointmentForm />
      </main>

      {/* Simple Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant py-8">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-on-surface-variant">© 2026 DentaElite Premium Care. All rights reserved.</p>
          <div className="flex gap-gutter">
            <Link className="text-label-sm text-on-surface-variant hover:text-primary underline transition-all" to="/privacy-policy">Privacy Policy</Link>
            <Link className="text-label-sm text-on-surface-variant hover:text-primary underline transition-all" to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default BookAppointment;
export { BookAppointment };
