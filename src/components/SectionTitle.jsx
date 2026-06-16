

const SectionTitle = ({ title, description, align = 'center', badge, className = '' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-xl ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span className="inline-block bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-base uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-display-lg-mobile md:text-headline-md font-headline-md text-on-surface mb-sm">
        {title}
      </h2>
      <div className={`w-20 h-1 bg-primary rounded-full mb-sm ${isCenter ? 'mx-auto' : 'mr-auto'}`} />
      {description && (
        <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
export { SectionTitle };
