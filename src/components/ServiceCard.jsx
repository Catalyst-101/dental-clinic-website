import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFullImageUrl } from '../api/axios';

const ServiceCard = ({ service }) => {
  const { title, summary, image, slug, id, _id, duration, doctors, price } = service;
  const serviceIdentifier = slug || id || _id;

  const imgUrl = getFullImageUrl(image);
  const doctorsCount = Array.isArray(doctors) ? doctors.length : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card rounded-xl overflow-hidden card-shadow flex flex-col h-full"
    >
      <div className="relative h-60 w-full overflow-hidden bg-primary/10">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary/50 text-5xl">medical_services</span>
          </div>
        )}

        {/* Badges container */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
          {price !== undefined && price !== null && (
            <div className="bg-primary/90 backdrop-blur-xs text-white text-[12px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <span>${price}</span>
            </div>
          )}
          {/* Duration badge */}
          <div className="bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            <span>{duration || 30} mins</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
          {title}
        </h3>
        <p className="text-on-surface-variant font-body-md text-body-md mb-4 flex-grow line-clamp-3">
          {summary}
        </p>
        
        {doctorsCount > 0 && (
          <div className="mb-4 text-xs font-semibold text-on-surface-variant flex items-center gap-1.5 opacity-85">
            <span className="material-symbols-outlined text-[16px] text-primary">groups</span>
            <span>{doctorsCount} {doctorsCount === 1 ? 'specialist' : 'specialists'} available</span>
          </div>
        )}
        <Link
          to={`/services/${serviceIdentifier}`}
          className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all group font-label-md text-label-md"
        >
          Learn More
          <span className="material-symbols-outlined ml-1 transition-all group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
export { ServiceCard };
