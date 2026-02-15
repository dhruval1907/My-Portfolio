import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug } from '../data/projectsData';
import Badge from '../components/Badge';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-20"
    >
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8 mb-8">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to projects</span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {project.title}
        </motion.h1>

        {/* Short Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-8"
        >
          {project.shortDescription}
        </motion.p>

        {/* Full Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-gray-400 leading-relaxed">
            {project.fullDescription.split('\n\n')[0]}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge key={index} className="bg-dark-secondary text-white border border-dark-border">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        {project.features && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <span className="text-white mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Challenges */}
        {project.challenges && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.split('\n').filter(c => c.trim()).map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <span className="text-white mt-1">•</span>
                  <span>{challenge.replace(/^[•\-]\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Learnings */}
        {project.learnings && (
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Learnings</h2>
            <ul className="space-y-2">
              {project.learnings.split('\n').filter(l => l.trim()).map((learning, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <span className="text-white mt-1">•</span>
                  <span>{learning.replace(/^[•\-]\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Links */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
            >
              Live
              <ExternalLink size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-dark-secondary border border-dark-border hover:border-gray-600 text-white rounded-lg transition-colors"
            >
              Github
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
