import React from 'react';
import PageTransition from '../components/PageTransition';
import Badge from '../components/Badge';
import SectionNav from '../components/SectionNav';

const Skills = () => {
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Tailwind CSS' },
    { name: 'shadcn/ui' },
    { name: 'Material UI' },
    { name: 'Framer Motion' },
    { name: 'ReactJS' },
    { name: 'Redux' },
    { name: 'NextJS' },
    { name: 'NodeJS' },
    { name: 'ExpressJS' },
    { name: 'MongoDB' },
    { name: 'Supabase' },
    { name: 'Docker' },
    { name: 'Vercel' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Postman' },
    { name: 'npm' },
  ];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Skills & Tools
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          Learned by coding all night and debugging all day!
        </h2>

        <p className="text-gray-soft text-lg mb-12 leading-relaxed max-w-4xl">
          As a full-stack Software Engineer, I specialize in building scalable web applications 
          using modern technologies such as Next.js, React, and Tailwind CSS. I'm also expanding 
          my expertise into DevOps and cloud practices to create efficient, maintainable, robust 
          web solutions.
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge key={index}>
              {skill.name}
            </Badge>
          ))}
        </div>

        <SectionNav
          prev={{ name: 'Projects', path: '/projects' }}
          next={{ name: 'Experience', path: '/experience' }}
        />
      </div>
    </PageTransition>
  );
};

export default Skills;
