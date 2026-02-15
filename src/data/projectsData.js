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
    id: 'news-hub',
    title: 'News Hub | Real-Time News Platform',
    slug: 'news-hub',
    shortDescription: 'A real-time news platform delivering the latest headlines across various categories using the News API.',
    bannerImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop',
    category: 'Web Application',
    year: '2025',
    fullDescription: `News Hub is a modern news aggregation platform that pulls real-time news from multiple sources using the News API. The application provides users with the latest headlines across various categories including technology, business, entertainment, sports, and more.

The platform features a clean, newspaper-inspired design with a focus on readability and information hierarchy. Articles are presented in a card-based layout with featured images, headlines, and brief excerpts. Users can filter news by category, search for specific topics, and bookmark articles for later reading.

Built with React and leveraging modern hooks for state management, the application demonstrates efficient API integration, error handling, and loading states. The responsive design ensures a great reading experience across all devices.`,
    features: [
      'Real-time news updates',
      'Category-based filtering',
      'Search functionality',
      'Bookmark articles',
      'Share articles on social media',
      'Dark/Light mode toggle',
      'Infinite scroll pagination',
      'Source attribution and links'
    ],
    techStack: [
      'React',
      'News API',
      'Axios',
      'React Router',
      'Tailwind CSS',
      'LocalStorage API',
      'Framer Motion'
    ],
    liveDemo: 'https://newshub-realtime.vercel.app',
    github: 'https://github.com/yourusername/news-hub',
    challenges: 'Managing API rate limits and handling large datasets efficiently. Implemented caching strategies and pagination to optimize performance.',
    learnings: 'Learned about API integration, data caching, and building responsive layouts for content-heavy applications. Also gained experience with infinite scroll implementations.'
  },
  {
    id: 'freshmart-store',
    title: 'Freshmart Store | Modern Grocery Web App',
    slug: 'freshmart-store',
    shortDescription: 'A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.',
    bannerImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop',
    category: 'E-Commerce',
    year: '2024',
    fullDescription: `Freshmart Store is a full-featured e-commerce application designed for online grocery shopping. The platform provides an intuitive shopping experience with features like product browsing, cart management, user authentication, and order tracking.

The application uses Redux for state management, ensuring consistent state across all components. The shopping cart persists even when users refresh the page, thanks to localStorage integration. The checkout process is streamlined and user-friendly, guiding customers through each step.

Product categories include fresh produce, dairy, meat, bakery, and pantry items. Each product has detailed information, high-quality images, nutritional facts, and customer reviews. The search and filter functionality makes it easy to find exactly what you're looking for.`,
    features: [
      'User authentication and profiles',
      'Product catalog with categories',
      'Advanced search and filters',
      'Shopping cart with persistence',
      'Wishlist functionality',
      'Order history and tracking',
      'Product reviews and ratings',
      'Responsive design for all devices'
    ],
    techStack: [
      'React',
      'Vite',
      'Redux Toolkit',
      'Tailwind CSS',
      'React Router',
      'Axios',
      'Firebase Auth'
    ],
    liveDemo: 'https://freshmart-store.vercel.app',
    github: 'https://github.com/yourusername/freshmart-store',
    challenges: 'Implementing complex cart logic with quantity management, price calculations, and discount applications. Also ensuring data consistency across multiple components.',
    learnings: 'Mastered Redux Toolkit for state management, learned about e-commerce best practices, and gained experience with Firebase authentication integration.'
  },
  {
    id: 'github-profile-viewer',
    title: 'GitHub Profile Viewer | Instant GitHub Insights',
    slug: 'github-profile-viewer',
    shortDescription: 'An interactive web app to instantly view GitHub profiles with clean UI built using HTML, CSS, and JavaScript.',
    bannerImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&fit=crop',
    category: 'Web Application',
    year: '2024',
    fullDescription: `GitHub Profile Viewer is a lightweight application that fetches and displays GitHub user profiles using the GitHub API. Simply enter a username and get instant access to profile information, repositories, followers, following, and contribution statistics.

The application provides a clean visualization of GitHub data, making it easy to explore any developer's work and activity. Repository cards show key metrics like stars, forks, and primary language. The profile section displays bio, location, company, and social links.

Built with vanilla JavaScript to demonstrate fundamental web development skills without framework dependencies. The application handles API rate limiting gracefully and provides clear error messages for invalid usernames.`,
    features: [
      'Search GitHub users by username',
      'Display profile information',
      'List repositories with sorting',
      'Show contribution statistics',
      'Follower and following counts',
      'Repository language distribution',
      'Responsive card-based layout',
      'Error handling for invalid users'
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'GitHub API',
      'Fetch API',
      'CSS Grid',
      'Flexbox'
    ],
    liveDemo: 'https://github-viewer-insights.vercel.app',
    github: 'https://github.com/yourusername/github-profile-viewer',
    challenges: 'Working with GitHub API rate limits and handling various response scenarios. Implemented caching to reduce API calls and improve performance.',
    learnings: 'Learned to work with REST APIs, handle asynchronous JavaScript, and create responsive layouts with pure CSS. Also gained experience with error handling and user feedback.'
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Helper function to get all project slugs
export const getAllProjectSlugs = () => {
  return projectsData.map(project => project.slug);
};
