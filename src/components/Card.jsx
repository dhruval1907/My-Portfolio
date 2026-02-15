import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.1)' } : {}}
      className={`bg-dark-secondary border border-dark-border rounded-xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
