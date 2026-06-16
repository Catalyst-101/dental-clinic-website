import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ item, onClick }) => {
  const { category, title, image, isBeforeAfter, beforeImage, afterImage } = item;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="masonry-item break-inside-avoid mb-6 cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="gallery-image-container relative overflow-hidden rounded-xl bg-surface-container-low group shadow-sm">
        {isBeforeAfter ? (
          <div className="grid grid-cols-2 gap-[2px]">
            <img 
              src={beforeImage} 
              alt={`${title} Before`} 
              className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.03]" 
            />
            <img 
              src={afterImage} 
              alt={`${title} After`} 
              className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.03]" 
            />
          </div>
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
          />
        )}
        
        {/* Hover overlay with glassmorphism blur */}
        <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 backdrop-blur-[2px]">
          <div className="text-white">
            <p className="text-label-sm font-label-sm uppercase mb-1 opacity-85">
              {category.replace('-', ' ')}
            </p>
            <h3 className="text-headline-sm font-headline-sm font-bold">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
export { GalleryCard };
