import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { services, doctors } from '../data/clinicData';

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
    address: '',
    notes: '',
    serviceId: '',
    doctorId: '',
    date: '',
    time: ''
  });

  // Generate random Appointment ID on confirm
  const generateAppointmentId = () => {
    return `DE-${Math.floor(10000 + Math.random() * 90000)}`;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectServiceChange = (e) => {
    setFormData(prev => ({
      ...prev,
      serviceId: e.target.value
    }));
  };

  const handleSelectDoctorChange = (e) => {
    setFormData(prev => ({
      ...prev,
      doctorId: e.target.value
    }));
  };

  const handleTimeSelect = (timeSlot) => {
    setFormData(prev => ({
      ...prev,
      time: timeSlot
    }));
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.gender || !formData.dob || !formData.address) {
      alert('Please fill in all required patient details.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (!formData.serviceId || !formData.doctorId || !formData.date || !formData.time) {
      alert('Please complete all appointment details.');
      return;
    }
    setStep(3);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAppointmentId(generateAppointmentId());
      setStep(4);
      triggerConfetti();
    }, 1500);
  };

  // Confetti burst for step 4
  const triggerConfetti = () => {
    const container = document.body;
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti rounded-full';
      confetti.style.left = '50%';
      confetti.style.top = '40%';
      confetti.style.backgroundColor = i % 2 === 0 ? '#006b2c' : '#6bff8f';
      container.appendChild(confetti);

      const destinationX = (Math.random() - 0.5) * 800;
      const destinationY = (Math.random() - 0.5) * 600;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 0.2;

      confetti.animate([
        { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 0 },
        { transform: `translate(${destinationX}px, ${destinationY}px) scale(1) rotate(${rotation}deg)`, opacity: 0.6, offset: 0.2 },
        { transform: `translate(${destinationX}px, ${destinationY + 200}px) scale(0) rotate(${rotation * 2}deg)`, opacity: 0 }
      ], {
        duration: 2000 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay * 1000,
        fill: 'forwards'
      });

      setTimeout(() => confetti.remove(), 4000);
    }
  };

  // Helper values
  const selectedService = services.find(s => s.id === formData.serviceId);
  const selectedDoctor = doctors.find(d => d.id === formData.doctorId);
  const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';

  // Stepper helper
  const getStepperClasses = (nodeNum) => {
    if (step > nodeNum) return 'bg-primary-container text-white'; // Completed
    if (step === nodeNum || (nodeNum === 3 && step === 4)) return 'bg-primary text-white ring-4 ring-primary-fixed'; // Active
    return 'bg-surface-container-high text-on-surface-variant'; // Future
  };

  return (
    <div className="w-full max-w-3xl">
      {/* Stepper Header (steps 1, 2, 3) */}
      {step < 4 && (
        <div className="mb-lg">
          <div className="flex items-center justify-between relative max-w-2xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -z-10 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-500" 
              style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            ></div>
            
            {/* Step 1 Node */}
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 font-bold ${getStepperClasses(1)}`}>
                {step > 1 ? <span className="material-symbols-outlined text-[20px]">check</span> : <span className="material-symbols-outlined text-[20px]">person</span>}
              </div>
              <span className={`text-label-sm font-label-sm ${step >= 1 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>Patient</span>
            </div>
            
            {/* Step 2 Node */}
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 font-bold ${getStepperClasses(2)}`}>
                {step > 2 ? <span className="material-symbols-outlined text-[20px]">check</span> : <span className="material-symbols-outlined text-[20px]">event</span>}
              </div>
              <span className={`text-label-sm font-label-sm ${step >= 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>Schedule</span>
            </div>
            
            {/* Step 3 Node */}
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 font-bold ${getStepperClasses(3)}`}>
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
              <span className={`text-label-sm font-label-sm ${step >= 3 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>Review</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Glass Booking Form Container */}
      <div className="glass-card rounded-xl p-6 md:p-xl shadow-lg border border-outline-variant/30 relative overflow-hidden">
        
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.section
              key="step1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-gutter">
                <h1 className="text-headline-md font-headline-md text-on-surface mb-2">Patient Details</h1>
                <p className="text-body-md text-on-surface-variant">Please provide your medical registration information to continue.</p>
              </div>

              <form onSubmit={handleStep1Submit} className="space-y-gutter">
                <div className="space-y-xs">
                  <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="fullName">Full Name</label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                    id="fullName"
                    placeholder="John Doe"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="phone">Phone Number</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="email">Email Address</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="email"
                      placeholder="john@example.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="gender">Gender</label>
                    <select
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="gender"
                      required
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other / Prefer not to say</option>
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="dob">Date of Birth</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="dob"
                      required
                      type="date"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-xs">
                  <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="address">Address</label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                    id="address"
                    placeholder="123 Dental St, Suite 100"
                    required
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-xs">
                  <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="notes">Additional Notes (Optional)</label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                    id="notes"
                    placeholder="Any allergies or specific concerns?"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    className="relative w-full bg-primary hover:bg-primary-container text-white py-4 rounded-lg font-headline-sm text-[18px] transition-all transform active:scale-[0.98] shadow-md flex items-center justify-center gap-2 overflow-hidden"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                        </svg>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Choose Service &amp; Doctor
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </motion.section>
          )}

          {step === 2 && (
            <motion.section
              key="step2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-gutter">
                <h2 className="text-headline-md font-headline-md text-on-surface mb-2">Schedule Appointment</h2>
                <p className="text-body-md text-on-surface-variant">Select your preferred dental service and healthcare professional.</p>
              </div>

              <form onSubmit={handleStep2Submit} className="space-y-gutter">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="serviceId">Select Service</label>
                    <select
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="serviceId"
                      required
                      value={formData.serviceId}
                      onChange={handleSelectServiceChange}
                    >
                      <option value="">Choose a service...</option>
                      {services.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="doctorId">Select Doctor</label>
                    <select
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="doctorId"
                      required
                      value={formData.doctorId}
                      onChange={handleSelectDoctorChange}
                    >
                      <option value="">Choose a specialist...</option>
                      {doctors.map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.specialization.split(' ').slice(-1)[0]})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Show Doctor Mini Avatar if selected */}
                {selectedDoctor && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/30"
                  >
                    <img 
                      src={selectedDoctor.image} 
                      alt={selectedDoctor.name} 
                      className="w-12 h-12 rounded-full object-cover border border-primary-fixed"
                    />
                    <div>
                      <h4 className="text-body-md font-bold text-on-surface">{selectedDoctor.name}</h4>
                      <p className="text-label-sm text-primary">{selectedDoctor.specialization}</p>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1" htmlFor="date">Preferred Date</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md"
                      id="date"
                      required
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-on-surface-variant px-1">Preferred Time</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['09:00 AM', '10:30 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleTimeSelect(slot)}
                          className={`py-2 px-1 rounded-lg border text-label-sm font-label-sm transition-all text-center ${
                            formData.time === slot
                              ? 'border-primary bg-primary-fixed text-on-primary-fixed font-semibold ring-1 ring-primary'
                              : 'border-outline-variant bg-surface-container-lowest hover:border-primary text-on-surface'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    className="w-1/3 border border-outline-variant text-on-surface hover:bg-surface-variant/20 py-4 rounded-lg font-label-md text-label-md transition-all active:scale-95"
                    type="button"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    className="flex-grow bg-primary hover:bg-primary-container text-white py-4 rounded-lg font-headline-sm text-[18px] transition-all transform active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                    type="submit"
                  >
                    Review Details
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </motion.section>
          )}

          {step === 3 && (
            <motion.section
              key="step3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-gutter">
                <h1 className="text-headline-md font-headline-md text-on-surface mb-2">Review Your Appointment</h1>
                <p className="text-body-md text-on-surface-variant">Please check the details below before confirming your clinical reservation.</p>
              </div>

              <div className="space-y-6">
                {/* Patient Summary Card */}
                <div className="p-4 border border-outline-variant/30 rounded-lg relative bg-surface-container-lowest shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">person</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Patient Details</h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-primary font-bold hover:underline flex items-center gap-1 text-label-md"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div>
                      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Full Name</p>
                      <p className="text-body-md font-semibold text-on-surface">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Phone Number</p>
                      <p className="text-body-md font-semibold text-on-surface">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Email Address</p>
                      <p className="text-body-md font-semibold text-on-surface">{formData.email}</p>
                    </div>
                  </div>
                </div>

                {/* Appointment Summary Card */}
                <div className="p-4 border border-outline-variant/30 rounded-lg relative bg-surface-container-low/30 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">calendar_month</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Appointment Details</h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-primary font-bold hover:underline flex items-center gap-1 text-label-md"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                      Edit
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-left">
                    <div className="flex items-start gap-4">
                      {selectedDoctor && (
                        <>
                          <img 
                            src={selectedDoctor.image} 
                            alt={selectedDoctor.name} 
                            className="w-12 h-12 rounded-full object-cover border border-primary-fixed"
                          />
                          <div>
                            <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">Specialist</p>
                            <p className="text-body-md font-semibold text-on-surface">{selectedDoctor.name}</p>
                            <p className="text-label-sm text-primary font-medium">{selectedDoctor.specialization}</p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center shrink-0 text-primary">
                        <span className="material-symbols-outlined">health_and_safety</span>
                      </div>
                      <div>
                        <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">Service Type</p>
                        <p className="text-body-md font-semibold text-on-surface">{selectedService?.title}</p>
                        <p className="text-label-sm text-on-surface-variant font-medium">{selectedService?.tagline}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-surface-variant">event</span>
                      </div>
                      <div>
                        <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">Scheduled Date</p>
                        <p className="text-body-md font-semibold text-on-surface">{formattedDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                      </div>
                      <div>
                        <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">Time Slot</p>
                        <p className="text-body-md font-semibold text-on-surface">{formData.time}</p>
                        <p className="text-label-sm text-on-surface-variant font-medium">Estimated: 45-60 mins</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes Summary if filled */}
                {formData.notes && (
                  <div className="p-4 border border-outline-variant/30 rounded-lg text-left bg-surface-container-lowest">
                    <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Additional Patient Notes</p>
                    <p className="text-body-md text-on-surface-variant italic font-medium">"{formData.notes}"</p>
                  </div>
                )}

                {/* Footer Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-md pt-lg border-t border-outline-variant/30">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 text-on-surface-variant font-bold hover:text-primary transition-all text-label-md group active:scale-95"
                  >
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back to Schedule
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    disabled={loading}
                    className="w-full md:w-auto bg-primary text-on-primary font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-primary-container transition-all transform hover:scale-[1.02] active:scale-95 duration-200 text-body-md flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
                      </svg>
                    ) : (
                      <>
                        Confirm Appointment
                        <span className="material-symbols-outlined text-[20px]">check</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {step === 4 && (
            <motion.section
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="py-8">
                {/* Checkmark Animation */}
                <div className="mb-md flex justify-center">
                  <svg className="checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                    <circle className="checkmark-circle" cx="26" cy="26" fill="none" r="25"></circle>
                    <path className="checkmark-check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"></path>
                  </svg>
                </div>
                
                <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-2">
                  Booked Successfully
                </h1>
                
                <p className="text-body-lg font-body-lg text-on-surface-variant mb-lg">
                  Thank you, <span className="font-bold text-primary">{formData.fullName.split(' ')[0]}</span>. Your appointment has been confirmed. A copy of the details has been sent to your email.
                </p>

                {/* Appointment Details Bento Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-md mb-lg text-left">
                  <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant/30 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-xs block">Appointment ID</span>
                    <span className="text-headline-sm font-headline-sm text-on-surface font-mono">{appointmentId}</span>
                  </div>
                  <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant/30 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-xs block">Doctor</span>
                    <span className="text-headline-sm font-headline-sm text-on-surface">{selectedDoctor?.name}</span>
                  </div>
                  <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant/30 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-xs block">Date</span>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                      <span className="text-body-lg font-bold text-on-surface">{formattedDate}</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant/30 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider mb-xs block">Time Slot</span>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                      <span className="text-body-lg font-bold text-on-surface">{formData.time}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-md justify-center">
                  <button 
                    onClick={() => alert('Downloading confirmation PDF...')}
                    className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-full font-label-md text-label-md flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                  >
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    Download Confirmation
                  </button>
                  <button 
                    onClick={() => navigate('/')}
                    className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-full font-label-md text-label-md flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[20px]">home</span>
                    Back to Home
                  </button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Security compliance indicators */}
      {step < 4 && (
        <div className="mt-md grid grid-cols-1 md:grid-cols-2 gap-md opacity-70">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary">security</span>
            <p className="text-label-sm text-left leading-relaxed">Your medical information is encrypted and protected under HIPAA compliance standards.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary">verified</span>
            <p className="text-label-sm text-left leading-relaxed">Immediate confirmation via email and SMS will be sent once the process is complete.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
export { AppointmentForm };
