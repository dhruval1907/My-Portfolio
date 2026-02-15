export const projectsData = [
  {
    id: 'Mac-os Portfolio',
    title: 'Mac-os Portfolio',
    slug: 'Mac-os styling',
    shortDescription: 'A sleek and modern redesign of mac os for that was created for obsession ',
    category: 'Web Design',
    year: '2025',
    fullDescription: `I built a macOS-style portfolio using React and Tailwind CSS, inspired purely by my obsession with Apple’s design language. Clean layouts, subtle animations, and a desktop-like experience define the interface. It’s a minimal, performance-focused project that reflects both precision in UI development and appreciation for macOS aesthetics.`,
    features: [
      'Fully responsive design for all devices',
      'Interactive movable all the component not suitable for mobile ',
      'Comparing head to head design with the mac-os',
    ],
    techStack: [
      'React',
      'Tailwind CSS',
      'Npm packages',
      'Vite',
      'React Router',
    ],
    liveDemo: 'https://mac-os-ashen.vercel.app/',
    github: 'https://github.com/dhruval1907/MacDeck',
  },
  {
    id: 'Admin-panel in mern',
    title: 'Admin-panel in mern',
    slug: 'Admin-panel in mern',
    shortDescription: 'MERN Admin Dashboard with Full CRUD Operations',
    category: 'crud',
    year: '2026',
    fullDescription: `I built a MERN stack application as a strong starting point in my backend development journey. This project focuses on implementing complete CRUD operations using MongoDB, where an admin can securely create, update, manage, and delete data. It helped me understand server-side logic, RESTful API structure, database schema design, and real-world data handling with a practical, hands-on approach.`,


    features: [
      'Full CRUD Operations (Create, Read, Update, Delete)',
      'MongoDB integration for data storage',
      'Structured REST API using Node.js & Express',
      'Admin-based data management system',
      'Mongoose schema & model implementation',
    ],
    techStack: [
      'React',
      'Node.js',
      'express.js',
      'Mongo DB',
      'Vercel',
      // 'EmailJS'
    ],
    liveDemo: 'https://www.linkedin.com/posts/dhruval-dalwadi-892144306_mernstack-reactjs-nodejs-ugcPost-7424909715589066752-whX9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE35j-4BkTuWjj63GD2QtVKJfaFFkosMU3Y',
    github: 'https://github.com/dhruval1907/admin-mern-app',
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
  //   {
  //     id: 'github-profile-viewer',
  //     title: 'GitHub Profile Viewer | Instant GitHub Insights',
  //     slug: 'github-profile-viewer',
  //     shortDescription: 'An interactive web app to instantly view GitHub profiles with clean UI built using HTML, CSS, and JavaScript.',
  //     bannerImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&fit=crop',
  //     category: 'Web Application',
  //     year: '2024',
  //     fullDescription: `GitHub Profile Viewer is a lightweight application that fetches and displays GitHub user profiles using the GitHub API. Simply enter a username and get instant access to profile information, repositories, followers, following, and contribution statistics.

  // The application provides a clean visualization of GitHub data, making it easy to explore any developer's work and activity. Repository cards show key metrics like stars, forks, and primary language. The profile section displays bio, location, company, and social links.

  // Built with vanilla JavaScript to demonstrate fundamental web development skills without framework dependencies. The application handles API rate limiting gracefully and provides clear error messages for invalid usernames.`,
  //     features: [
  //       'Search GitHub users by username',
  //       'Display profile information',
  //       'List repositories with sorting',
  //       'Show contribution statistics',
  //       'Follower and following counts',
  //       'Repository language distribution',
  //       'Responsive card-based layout',
  //       'Error handling for invalid users'
  //     ],
  //     techStack: [
  //       'HTML5',
  //       'CSS3',
  //       'JavaScript (ES6+)',
  //       'GitHub API',
  //       'Fetch API',
  //       'CSS Grid',
  //       'Flexbox'
  //     ],
  //     liveDemo: 'https://github-viewer-insights.vercel.app',
  //     github: 'https://github.com/yourusername/github-profile-viewer',
  //     challenges: 'Working with GitHub API rate limits and handling various response scenarios. Implemented caching to reduce API calls and improve performance.',
  //     learnings: 'Learned to work with REST APIs, handle asynchronous JavaScript, and create responsive layouts with pure CSS. Also gained experience with error handling and user feedback.'
  //   }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Helper function to get all project slugs
export const getAllProjectSlugs = () => {
  return projectsData.map(project => project.slug);
};
