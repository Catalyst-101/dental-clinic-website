import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const baseStyle = "font-label-md text-label-md transition-all duration-150 focus:outline-none flex items-center justify-center gap-2";
  const styles = {
    primary: "bg-primary text-on-primary px-6 py-2.5 rounded-full hover:opacity-90 shadow-md active:scale-95",
    secondary: "border-2 border-primary text-primary px-6 py-2.5 rounded-full hover:bg-primary/5 active:scale-95",
    gradient: "primary-gradient text-white px-6 py-2.5 rounded-full shadow-md scale-95 hover:scale-100 active:scale-90",
    link: "text-primary font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
  };

  const selectedStyle = styles[variant] || styles.primary;
  const combinedClass = `${baseStyle} ${selectedStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};

export default Button;
export { Button };
