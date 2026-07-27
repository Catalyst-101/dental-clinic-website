import React from 'react';
import { motion } from 'framer-motion';
import { getFullImageUrl } from '../api/axios';

const GalleryCard = ({ item, onClick }) => {
  const { category, tag, title, caption, image, url, isBeforeAfter, beforeImage, afterImage } = item;
  const displayTitle = title || caption || "Gallery Item";
  const displayTag = tag || category || "Clinic";
  const mainImage = getFullImageUrl(url || image);
  const beforeImgUrl = getFullImageUrl(beforeImage);
  const afterImgUrl = getFullImageUrl(afterImage);

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
            {beforeImgUrl ? (
              <img 
                src={beforeImgUrl} 
                alt={`${displayTitle} Before`} 
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.03]" 
              />
            ) : <div className="w-full aspect-[4/5] bg-surface-container-high" />}
            {afterImgUrl ? (
              <img 
                src={afterImgUrl} 
                alt={`${displayTitle} After`} 
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.03]" 
              />
            ) : <div className="w-full aspect-[4/5] bg-surface-container-high" />}
          </div>
        ) : (
          mainImage ? (
            <img 
              src={mainImage} 
              alt={displayTitle} 
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
            />
          ) : <div className="w-full h-64 bg-surface-container-high" />
        )}
        
        {/* Hover overlay with glassmorphism blur */}
        <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 backdrop-blur-[2px]">
          <div className="text-white">
            <p className="text-label-sm font-label-sm uppercase mb-1 opacity-85">
              {displayTag.replace('-', ' ')}
            </p>
            <h3 className="text-headline-sm font-headline-sm font-bold">
              {displayTitle}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
export { GalleryCard };
