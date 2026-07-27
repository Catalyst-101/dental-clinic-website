import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFullImageUrl } from '../api/axios';

const DoctorCard = ({ doctor }) => {
  const { id, _id, slug, name, qualifications, specialization, experience, availability, image } = doctor;
  const doctorIdentifier = slug || id || _id;

  const imgUrl = getFullImageUrl(image);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-surface-container-lowest rounded-xl overflow-hidden border border-[#DCFCE7] card-shadow flex flex-col h-full group"
    >
      <div className="h-72 overflow-hidden relative">
        {imgUrl ? (
          <img 
            src={imgUrl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/50 text-5xl">person</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-label-sm font-label-sm">
          Top Rated
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-headline-sm font-headline-sm text-on-surface">
              {name}
            </h3>
            <p className="text-primary font-label-md text-label-md mb-2">
              {qualifications}
            </p>
          </div>
          <div className="flex items-center gap-0.5 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span className="font-bold">4.9</span>
          </div>
        </div>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">medical_services</span>
            <span className="text-body-md font-body-md">{specialization}</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">history_edu</span>
            <span className="text-body-md font-body-md">{experience}</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-primary">event_available</span>
            <span className="text-body-md font-body-md text-primary font-semibold">{availability}</span>
          </div>
        </div>

        <Link 
          to={`/doctors/${doctorIdentifier}`}
          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all py-3 rounded-lg font-label-md text-label-md flex justify-center items-center gap-2 active:scale-95"
        >
          View Profile
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
export { DoctorCard };
