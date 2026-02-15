import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionNav from '../components/SectionNav';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Application',
      institution: 'GH Raisoni College of Engineering and Management',
      location: 'Nagpur, India',
      date: 'Aug 2023 - June 2026 (Expected)',
      description: 'Pursuing BCA with a focus on programming, web development, and software engineering. Current CGPA: 8.40.',
    },
    {
      id: 2,
      degree: 'Higher Secondary Education',
      institution: 'NPW Science College',
      location: 'Lakhani',
      date: 'July 2021 - May 2023',
      description: 'Completed 12th in Information Technology. Overall: 70%, IT: 95%.',
    },
    {
      id: 3,
      degree: 'Secondary Education',
      institution: 'Shivaji Vidyalaya Seloti/Manegaon',
      location: 'SEE',
      date: 'Apr 2012 - Mar 2021',
      description: 'Completed 10th grade with 82%. Assisted peers in learning computer skills through hands-on lab sessions.',
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Education</h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          I learned a lot, but the real learning happens in the code editor!
        </h2>

        <p className="text-gray-soft text-lg mb-12 leading-relaxed">
          Education has always been the cornerstone of my journey into the tech world. Pursuing a 
          Bachelor's in Computer Application (BCA) at GH Raisoni College of Engineering and Management, 
          Nagpur, has provided me a strong foundation in computer science and software development.
        </p>

        <p className="text-gray-soft text-lg mb-12 leading-relaxed">
          My academic journey has been complemented by hands-on projects and coursework, enabling me 
          to build practical skills and a deep understanding of modern technological solutions.
        </p>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-8 pb-8 border-l-2 border-dark-border last:pb-0">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-dark"></div>
              <div className="flex items-start gap-3 mb-2">
                <GraduationCap size={20} className="text-purple-400 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {edu.degree} · {edu.institution}
                  </h3>
                  {edu.location && (
                    <p className="text-sm text-gray-500">{edu.location}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{edu.date}</p>
              <p className="text-gray-soft leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        <SectionNav
          prev={{ name: 'Experience', path: '/experience' }}
          next={{ name: 'Contact', path: '/contact' }}
        />
      </div>
    </PageTransition>
  );
};

export default Education;
