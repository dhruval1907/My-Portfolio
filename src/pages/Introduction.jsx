import React from 'react';
import { ExternalLink, Mail, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Dhruval Dalwadi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              A coder by day, problem-solver by night!
            </h2>
            <p className="text-gray-soft text-lg mb-8 max-w-3xl leading-relaxed">
              Front-End Developer focused on crafting scalable React.js applications with smooth animations and performance-optimized UI. Possess foundational backend knowledge, including building basic REST APIs, configuring Node.js/Express servers, and integrating MongoDB for data storage to support full-stack functionality
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                icon={<ExternalLink size={18} />}
                onClick={() => window.open("/DHRUVAL_RESuME.pdf.pdf", "_blank")}
              >
                View Resume
              </Button>
              <Button
                variant="outline"
                icon={<Mail size={18} />}
                onClick={() => window.location.href = "mailto:yourmail@gmail.com"}
              >
                Send Mail
              </Button>
            </div>
          </motion.div>

          <div className="flex justify-end mt-16">
            <Link
              to="/about"
              className="flex items-center gap-2 text-gray-soft hover:text-white transition-colors group"
            >
              <span className="text-sm">About Me</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Introduction;
