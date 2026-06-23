import { motion } from "framer-motion";

const TimelineCard = ({ year, title, description, side }) => {
  const isLeft = side === "left";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-sm md:gap-0">

      {/* Left Card */}
      {isLeft ? (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            md:w-5/12
            glass-card
            rounded-2xl
            p-6
            text-center
            md:text-right
          "
        >
          <h4 className="text-headline-sm font-bold text-primary mb-2">
            {year}
          </h4>

          <h5 className="text-label-md font-bold text-on-surface mb-2">
            {title}
          </h5>

          <p className="text-body-md text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </motion.div>
      ) : (
        <div className="hidden md:block md:w-5/12"></div>
      )}

      {/* Dot - Hidden on Mobile */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          hidden
          md:block
          w-8
          h-8
          rounded-full
          bg-primary
          border-4
          border-surface-container-lowest
          z-10
          shadow
          flex-shrink-0
        "
      />

      {/* Right Card */}
      {!isLeft ? (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            w-full
            md:w-5/12
            glass-card
            rounded-2xl
            p-6
            text-center
            md:text-left
          "
        >
          <h4 className="text-headline-sm font-bold text-primary mb-2">
            {year}
          </h4>

          <h5 className="text-label-md font-bold text-on-surface mb-2">
            {title}
          </h5>

          <p className="text-body-md text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </motion.div>
      ) : (
        <div className="hidden md:block md:w-5/12"></div>
      )}

    </div>
  );
};

export default TimelineCard;
export { TimelineCard };