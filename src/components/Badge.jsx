import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg font-medium text-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
