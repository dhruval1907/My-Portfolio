export const projectsData = [
  {
    id: 'Coros LLM',
    title: 'Coros LLM',
    slug: 'Coros LLM',
    shortDescription: 'Integrated multiple LLMs (Gemini + Mistral AI) in a unified pipeline ',
    category: 'Web Design',
    year: '2025',
    fullDescription: `CoreOS is a next-generation AI-powered search and reasoning engine designed to move beyond traditional link-based search systems.
`,
    features: [
      'Built intent-aware query system using LangChain',
      'Built a response fusion system to generate the best final output',
    ],
    techStack: [
      'React',
      'Tailwind CSS',
      'Npm packages',
      'Vite',
      'React Router',
    ],
    liveDemo: 'https://github.com/afdhruval/CoreOs',
    github: 'https://github.com/afdhruval/CoreOs',
  },
  {
    id: 'Medio Post App',
    title: 'Medio App',
    slug: 'Medio Post App',
    shortDescription: 'Medio Post App where you can save ur memories .',
    category: 'crud',
    year: '2026',
    fullDescription: `A Full Stack Social Media Application with Authentication, Posts, Likes, and Follow System
This project is a full-stack app. The application allows users to register, login, create posts, like posts, follow or unfollow users, and interact with other users just like a real social media platform.`,


    features: [
      'Imagekit to store photos. ',
      'Follow/Unfollow other users',
      'JWT-based authentication',
      'Post creation',
    ],
    techStack: [
      'React',
      'Imgekit',
      'Node.js',
      'express.js',
      'Mongo DB',
      'Tailwind css',
      'JWT',
    ],
    liveDemo: 'https://medio-app-2xfe.onrender.com/',
    github: 'https://github.com/afdhruval/Medio-app',
  },
  {
    id: 'figma',
    title: 'Figma based || design tool',
    slug: 'figma-tool',
    shortDescription: 'A real-time news platform delivering the latest headlines across various categories using the News API.',
    bannerImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop',
    category: 'Web Application',
    year: '2025',
    fullDescription: `I built a Figma-inspired notes tool to better understand layout structuring and UI composition using pure HTML, CSS, and JavaScript. The goal was to break down complex design layouts and recreate them from scratch to strengthen my frontend fundamentals. This project helped me deeply understand positioning, spacing systems, DOM manipulation, and interactive UI behavior while thinking like a designer and a developer at the same time.`,
    features: [
      'Interactive canvas-style workspace',
      'Real-time DOM manipulation using JavaScript',
      'Draggable elements for flexible layout positioning',
      'Responsive design principles applied',
    ],
    techStack: [
      'HTML',
      'HTML Canvas',
      'CSS',
      'SASS',
      'Js',
    ],
    liveDemo: 'https://figma-vanillajs.vercel.app/',
    github: 'https://github.com/dhruval1907/Figma-vanillajs',

  },
  {
    id: 'Invincible Org  Clone',
    title: 'Invincible Org  Clone',
    slug: 'Invincible Org  Clone',
    shortDescription: 'A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.',
    category: 'E-Commerce',
    year: '2024',
    fullDescription: `I created a travel booking website using HTML, CSS, JavaScript, and Bootstrap to simulate a real-world ticket booking platform. Users can explore destinations, view pricing details, and experience a structured booking flow (UI-based simulation). This project strengthened my understanding of responsive design, component structuring, and interactive front-end behavior while focusing on clean layout and user-friendly navigation.`,
    features: [
      'Destination listing with pricing details ',
      'Responsive design using Bootstrap grid system',
      'Mobile-first layout approach',
      'Smooth navigation and user-friendly experience',
    ],
    techStack: [
      'HTML',
      'Css',
      'BootStrap 5',
      'js',
    ],
    liveDemo: 'https://invincible-clone-fawn.vercel.app/',
    github: 'https://github.com/dhruval1907/Invincible_Clone',
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Helper function to get all project slugs
export const getAllProjectSlugs = () => {
  return projectsData.map(project => project.slug);
};
