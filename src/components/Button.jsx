import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon, onClick, href, className = '', ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white',
    outline: 'border-2 border-gray-600 hover:border-purple-500 text-gray-light hover:text-white',
    ghost: 'text-gray-light hover:text-white hover:bg-dark-secondary',
  };

  const ButtonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
};

export default Button;
