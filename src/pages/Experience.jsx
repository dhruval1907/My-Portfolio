import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionNav from '../components/SectionNav';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Open Source Developer',
      organization: 'Hacktoberfest',
      date: 'Oct. 2025 - Present',
      description: 'Currently contributing as an Open Source Developer at Hacktoberfest, working on various web development projects and collaborating with the global developer community.',
      badge: 'Latest',
    },
    {
      id: 2,
      role: 'Trainee',
      organization: 'Sheriyans Coding School',
      date: 'May 2025 - Oct. 2025',
      description: 'Trainee at Sheriyans Coding School, learned full-stack technologies and DevOps practices. Participated in hackathons and collaborated on projects with the developer community.',
    },
    {
      id: 3,
      role: 'Project Admin',
      organization: 'GSSoC25 (GirlScript Summer of Code)',
      date: 'Aug. 2025 - Sept. 2025',
      description: 'As a Project Admin, I reviewed code, merged pull requests, and communicated with developers, ensuring smooth project workflow and collaboration during GSSoC25.',
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Experience</h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          You need it to get the job, but the job's what gives it!
        </h2>

        <p className="text-gray-soft text-lg mb-12 leading-relaxed">
          Throughout my journey as a developer, I have had the opportunity to work with cutting-edge 
          technologies while also mastering the fine art of debugging at 2 AM. From building dynamic 
          web applications to deciphering cryptic error messages, my experience has been a mix of 
          structured learning and spontaneous problem-solving. Each project and internship has sharpened 
          my ability to write clean code, collaborate effectively, and most importantly—fix bugs before 
          they fix me.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-dark-border last:pb-0">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-dark"></div>
              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role} · {exp.organization}
                  </h3>
                  {exp.badge && (
                    <span className="px-2 py-1 text-xs bg-purple-600 text-white rounded">
                      {exp.badge}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
              <p className="text-gray-soft leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        <SectionNav
          prev={{ name: 'Skills & Tools', path: '/skills' }}
          next={{ name: 'Education', path: '/education' }}
        />
      </div>
    </PageTransition>
  );
};

export default Experience;
