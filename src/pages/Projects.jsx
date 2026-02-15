import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import SectionNav from '../components/SectionNav';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Projects</h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-12">
          A lot of ideas, but some are still under construction!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="border border-red-900/30 hover:border-red-700/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-soft mb-4 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
              <Link
                to={`/project/${project.slug}`}
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors text-sm group"
              >
                Learn More...
              </Link>
            </Card>
          ))}
        </div>

        <SectionNav
          prev={{ name: 'About', path: '/about' }}
          next={{ name: 'Skills & Tools', path: '/skills' }}
        />
      </div>
    </PageTransition>
  );
};

export default Projects;
