import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { getFullImageUrl } from '../api/axios';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const { name, role, quote, comment, avatar, image, rating } = testimonial;
  const avatarUrl = getFullImageUrl(avatar || image);
  const testimonialText = quote || comment || '';
  const numRating = Math.min(5, Math.max(1, Number(rating) || Number(testimonial.stars) || 5));

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-morphism p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full border border-outline-variant/20 shadow-sm"
    >
      <div>
        {/* Dynamic Star Rating */}
        <div className="flex text-amber-400 gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            i < numRating ? (
              <FaStar key={i} className="text-[18px] text-amber-400 fill-amber-400" />
            ) : (
              <FaRegStar key={i} className="text-[18px] text-gray-300" />
            )
          ))}
        </div>

        <p className="text-body-md text-on-surface italic mb-6 leading-relaxed">
          "{testimonialText}"
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
        <img
          src={avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"}
          alt={name || "Patient"}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-fixed"
        />

        <div>
          <h5 className="font-bold text-on-surface text-body-md">
            {name || "Satisfied Patient"}
          </h5>
          {role && (
            <p className="text-label-sm text-on-surface-variant">
              {role}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
export { TestimonialCard };
