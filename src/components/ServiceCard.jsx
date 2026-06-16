import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const { id, title, icon, summary, image } = service;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card rounded-xl overflow-hidden card-shadow flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-primary/90 text-on-primary p-2.5 rounded-lg backdrop-blur-md flex items-center justify-center">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
          {title}
        </h3>
        <p className="text-on-surface-variant font-body-md text-body-md mb-6 flex-grow">
          {summary}
        </p>
        <Link 
          to={`/services/${id}`} 
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
