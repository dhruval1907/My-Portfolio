export const projectsData = [
  {
    id: 'nike-reimagined',
    title: 'Nike Reimagined | Modern Redesign Concept',
    slug: 'nike-reimagined',
    shortDescription: 'A sleek and modern redesign of Nike\'s official web experience built with React and Tailwind CSS.',
    bannerImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop',
    category: 'Web Design',
    year: '2025',
    fullDescription: `Nike Reimagined is a complete visual and functional overhaul of Nike's e-commerce platform. This project showcases modern web design principles, focusing on minimalism, performance, and user experience. The redesign emphasizes product imagery with a clean, distraction-free interface that puts the shoes front and center.

The project implements advanced React patterns including lazy loading, code splitting, and optimized rendering to ensure fast load times even with high-resolution product images. The design system is built entirely with Tailwind CSS, providing a consistent and maintainable styling approach.

Key features include an interactive product carousel, smooth scroll animations, responsive navigation, and a streamlined checkout process. The color scheme pays homage to Nike's iconic branding while introducing fresh, contemporary elements.`,
    features: [
      'Fully responsive design for all devices',
      'Interactive product gallery with zoom',
      'Smooth scroll animations using Framer Motion',
      'Optimized image loading and lazy loading',
      'Advanced filtering and search functionality',
      'Shopping cart with local storage',
      'Modern checkout flow',
      'Dark mode support'
    ],
    techStack: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'React Router',
      'Zustand',
      'React Query'
    ],
    liveDemo: 'https://nike-reimagined-demo.vercel.app',
    github: 'https://github.com/yourusername/nike-reimagined',
    challenges: `Maintaining brand consistency while reimagining Nike's design language.
Achieving smooth animations without affecting performance.
Ensuring pixel-perfect responsiveness across devices.
Optimizing load times for a better user experience.`,
    learnings: `Mastered efficient UI composition with React and Tailwind CSS.
Improved understanding of animation principles using Framer Motion.
Enhanced deployment workflow using Vercel and Vite integration.
Developed better practices for responsive and scalable frontend design.`
  },
  {
    id: 'portfolio-aditya',
    title: 'Portfolio | Aditya Domle',
    slug: 'portfolio-aditya',
    shortDescription: 'A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    category: 'Portfolio',
    year: '2025',
    fullDescription: `A modern, fully responsive portfolio website built to showcase my work as a full-stack developer. This portfolio features smooth animations, dark mode support, and an intuitive user interface that makes it easy for visitors to explore my projects and get in touch.

The design philosophy centers around minimalism and professionalism, with careful attention to typography, spacing, and color theory. Every interaction is crafted to feel smooth and intentional, from page transitions to hover effects.

The portfolio includes dedicated sections for projects, skills, experience, education, and contact information. Each section is designed to tell a story about my journey as a developer, highlighting key achievements and technical capabilities.`,
    features: [
      'Dynamic project showcase with filtering',
      'Animated section transitions',
      'Integrated contact form with validation',
      'Skills visualization with progress indicators',
      'Experience timeline with hover effects',
      'Downloadable resume functionality',
      'Social media integration',
      'SEO optimized with meta tags'
    ],
    techStack: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
      'Vercel',
      'EmailJS'
    ],
    liveDemo: 'https://adityadomle.vercel.app',
    github: 'https://github.com/yourusername/portfolio',
    challenges: 'Creating smooth animations that don\'t impact performance was challenging. Had to optimize animation timing and use transform properties for better GPU acceleration.',
    learnings: 'Gained deep understanding of CSS animations, React performance optimization, and creating accessible web interfaces. Also learned about effective portfolio design principles.'
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
