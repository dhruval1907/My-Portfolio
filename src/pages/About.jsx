import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionNav from '../components/SectionNav';

const About = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          I Build The Impossible
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-12">
          Code is my canvas. Problems are my fuel.
        </h2>

        <div className="space-y-6 text-gray-soft text-lg leading-relaxed">
          <p>
            I'm the developer who doesn't just write code—I bring ideas to life. While others see limitations, I see challenges waiting to be crushed. I build full-stack applications that don't just work—they perform, scale, and amaze. Every pixel, every API call, every database query is crafted with obsession.
          </p>
          <p>
            I don't just connect frontends to backends—I bridge the gap between imagination and reality. I architect systems that handle real traffic, design UIs that users remember, and write APIs that developers actually enjoy using. When you work with me, you're not getting a developer—you're getting a partner who's equally invested in making your vision extraordinary.
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
