import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionNav from '../components/SectionNav';

const About = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About Aditya
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-12">
          More than just a title—let's dive deeper!
        </h2>

        <div className="space-y-6 text-gray-soft text-lg leading-relaxed">
          <p>
            I am a passionate Software Engineer with a knack for building full-stack web applications 
            using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a 
            curiosity for solving real-world problems through innovative solutions, which evolved into 
            a love for crafting user-centric digital experiences.
          </p>

          <p>
            With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, 
            and visually appealing applications. Currently, I am diving deeper into backend development 
            with Node.js and Express to expand my skill set and deliver powerful, server-side solutions.
          </p>

          <p>
            Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems 
            with creative solutions. I aim to contribute to impactful projects that make a difference in 
            users' lives.
          </p>
        </div>

        <SectionNav
          prev={{ name: 'Introduction', path: '/' }}
          next={{ name: 'Projects', path: '/projects' }}
        />
      </div>
    </PageTransition>
  );
};

export default About;
