import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionNav from '../components/SectionNav';

const About = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About Dhruval
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-12">
          More than just a title—let's dive deeper!
        </h2>

        <div className="space-y-6 text-gray-soft text-lg leading-relaxed">
          <p>
            I am a dedicated Front-End Developer specializing in building scalable and performance-driven React.js applications. I focus on crafting clean, responsive, and animation-rich user interfaces that deliver smooth and engaging user experiences. My development approach emphasizes maintainable architecture, optimized rendering, and modern UI practices.
          </p>
          <p>

            With a strong understanding of JavaScript fundamentals and component-based development, I design applications that balance functionality with visual precision. Alongside my front-end expertise, I possess foundational backend knowledge, including building RESTful APIs, configuring Node.js and Express servers, and integrating MongoDB for efficient data management to support full-stack workflows.
          </p>
{/* 
          <p>
            Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems
            with creative solutions. I aim to contribute to impactful projects that make a difference in
            users' lives.
          </p> */}
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
