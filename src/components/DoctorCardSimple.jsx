import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getFullImageUrl } from "../api/axios";

const DoctorCardSimple = ({ doctor }) => {
    const { id, _id, slug, name, specialization, image } = doctor;
    const doctorIdentifier = slug || id || _id;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group"
        >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl mb-md">
                <img
                    src={getFullImageUrl(image)}
                    alt={name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div
                    className="
          absolute bottom-0 left-0 right-0 
          p-md 
          bg-gradient-to-t from-primary/90 to-transparent
          translate-y-full 
          group-hover:translate-y-0
          transition-transform duration-500
          flex justify-center
          "
                >
                    <Link
                        to={`/doctors/${doctorIdentifier}`}
                        className="
            bg-transparent 
            text-white 
            px-6 py-2.5 
            font-bold
            hover:scale-105
            transition-all
            "
                    >
                        View Profile
                    </Link>
                </div>
            </div>


            {/* Details */}
            <div className="text-center">
                <h4 className="text-headline-sm font-bold text-on-surface">
                    {name}
                </h4>

                <p className="text-label-md text-primary font-bold uppercase">
                    {specialization}
                </p>
            </div>

        </motion.div>
    );
};

export default DoctorCardSimple;
export { DoctorCardSimple };