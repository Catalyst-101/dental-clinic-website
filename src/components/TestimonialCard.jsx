import React from 'react';
import { motion } from 'framer-motion';
import { getFullImageUrl } from '../api/axios';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, quote, avatar, rating = 5, image } = testimonial;
  const avatarUrl = getFullImageUrl(avatar || image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-morphism p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full"
    >

      <div>

        {/* Dynamic Rating */}
        <div className="flex text-primary mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: `
                  'FILL' ${i < rating ? 1 : 0},
                  'wght' 700,
                  'GRAD' 0,
                  'opsz' 24
                `
              }}
            >
              star
            </span>
          ))}
        </div>


        <p className="text-body-md text-on-surface italic mb-6 leading-relaxed">
          "{quote}"
        </p>

      </div>


      <div className="flex items-center gap-4">

        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-fixed"
        />

        <div>
          <h5 className="font-bold text-on-surface text-body-md">
            {name}
          </h5>

          <p className="text-label-sm text-on-surface-variant">
            {role}
          </p>
        </div>

      </div>

    </motion.div>
  );
};

export default TestimonialCard;
export { TestimonialCard };
