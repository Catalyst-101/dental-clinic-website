import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, quote, avatar } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-morphism p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex text-primary mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
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
          src={avatar} 
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
