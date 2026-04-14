import React from 'react';
import PageTransition from '../components/PageTransition';
import Badge from '../components/Badge';
import SectionNav from '../components/SectionNav';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiTailwindcss, 
  SiReact, SiRedux, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiMongodb, SiDocker, SiOpenai, SiVercel, SiGit, 
  SiGithub, SiPostman, SiNpm, SiFramer, SiMui, SiShadcnui, SiGoogle
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS', icon: <SiCss className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E] bg-black" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'shadcn/ui', icon: <SiShadcnui className="text-black" /> },
    { name: 'Material UI', icon: <SiMui className="text-[#007FFF]" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-[#0055FF]" /> },
    { name: 'ReactJS', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
    { name: 'NextJS', icon: <SiNextdotjs className="text-black" /> },
    { name: 'NodeJS', icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'ExpressJS', icon: <SiExpress className="text-black" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Langchian', icon: <TbBrandVscode className="text-[#1572B6]" /> }, // Using VSCode icon as placeholder for Langchain if Si isn't available
    { name: 'GeminiAI', icon: <SiGoogle className="text-[#4285F4]" /> },
    { name: 'OpenAI', icon: <SiOpenai className="text-[#412991]" /> },
    { name: 'Vercel', icon: <SiVercel className="text-black" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub className="text-[#181717]" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'npm', icon: <SiNpm className="text-[#CB3837]" /> },
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
          My expertise spans both frontend and backend development, enabling me to build complete, production-ready applications. I emphasize clean, maintainable code and design systems that are scalable, efficient, and reliable.
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge key={index}>
              <span className="text-xl">{skill.icon}</span>
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
