import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SectionNav = ({ prev, next }) => {
  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-dark-border">
      {prev ? (
        <Link
          to={prev.path}
          className="flex items-center gap-2 text-gray-soft hover:text-white transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>{prev.name}</span>
        </Link>
      ) : (
        <div></div>
      )}
      
      {next && (
        <Link
          to={next.path}
          className="flex items-center gap-2 text-gray-soft hover:text-white transition-colors group"
        >
          <span>{next.name}</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export default SectionNav;
