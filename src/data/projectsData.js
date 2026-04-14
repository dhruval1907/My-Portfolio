export const projectsData = [
  {
    id: "Coros LLM",
    title: "Coros LLM",
    slug: "Coros LLM",
    shortDescription:
      "Integrated multiple LLMs (Gemini + Mistral AI) in a unified pipeline ",
    category: "Web Design",
    year: "2025",
    fullDescription: `CoreOS is a next-generation AI-powered search and reasoning engine designed to move beyond traditional link-based search systems.
`,
    features: [
      "Built intent-aware query system using LangChain",
      "Built a response fusion system to generate the best final output",
    ],
    techStack: [
      "Langchain",
      "Gemini API",
      "Mistral API",
      "React.js",
      "Node.js",
    ],
    liveDemo: "https://github.com/afdhruval/CoreOs",
    github: "https://github.com/afdhruval/CoreOs",
  },
  {
    id: "Medio Post App",
    title: "Medio App",
    slug: "Medio Post App",
    shortDescription: "Medio Post App where you can save ur memories .",
    category: "crud",
    year: "2026",
    fullDescription: `A Full Stack Social Media Application with Authentication, Posts, Likes, and Follow System
This project is a full-stack app. The application allows users to register, login, create posts, like posts, follow or unfollow users, and interact with other users just like a real social media platform.`,

    features: [
      "Imagekit to store photos. ",
      "Follow/Unfollow other users",
      "JWT-based authentication",
      "Post creation",
    ],
    techStack: [
      "React",
      "Imgekit",
      "Node.js",
      "express.js",
      "Mongo DB",
      "Tailwind css",
      "JWT",
    ],
    liveDemo: "https://medio-app-2xfe.onrender.com/",
    github: "https://github.com/afdhruval/Medio-app",
  },
  {
    id: "Lamzy",
    title: "Lamzy",
    slug: "Lamzy",
    shortDescription:
      "An AI-powered resume optimization platform that analyzes user-uploaded resumes and transforms them into professionally structured, ATS-friendly documents.",
    bannerImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    category: "Web Application",
    year: "2025",
    fullDescription: `Powered by Google Gemini for deep language understanding and high-quality content generation, the system delivers precise and context-aware resume improvements..`,
    features: [
      "Integrated Google Gemini API for AI-based resume analysis and content optimization",
      "Built LLM workflows using LangChain for prompt chaining and structured output generation",
      "Designed scalable pipeline for resume parsing, enhancement, and template generation",
    ],
    techStack: ["Langchain", "Gemini API", "React.js", "Node.js"],
    liveDemo: "https://github.com/afdhruval/interview-GenAI",
    github: "https://github.com/afdhruval/interview-GenAI",
  },
  // {
  //   id: "MacDeck",
  //   title: "Mac Style Portfolio",
  //   slug: "Mac Style Portfolio",
  //   shortDescription:
  //     "A clean, modern, and responsive store web app built with React, Vite, Redux, and Tailwind CSS.",
  //   category: "E-Commerce",
  //   year: "2024",
  //   fullDescription: `I created a travel booking website using HTML, CSS, JavaScript, and Bootstrap to simulate a real-world ticket booking platform. Users can explore destinations, view pricing details, and experience a structured booking flow (UI-based simulation). This project strengthened my understanding of responsive design, component structuring, and interactive front-end behavior while focusing on clean layout and user-friendly navigation.`,
  //   features: [
  //     "Destination listing with pricing details ",
  //     "Responsive design using Bootstrap grid system",
  //     "Mobile-first layout approach",
  //     "Smooth navigation and user-friendly experience",
  //   ],
  //   techStack: ["HTML", "Css", "BootStrap 5", "js"],
  //   liveDemo: "https://invincible-clone-fawn.vercel.app/",
  //   github: "https://github.com/dhruval1907/Invincible_Clone",
  // },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

// Helper function to get all project slugs
export const getAllProjectSlugs = () => {
  return projectsData.map((project) => project.slug);
};
