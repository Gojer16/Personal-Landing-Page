export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
  Frameworks: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Framer Motion",
    "Radix UI",
    "Zustand",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask"
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Prisma"],
  Tools: [
    "Docker",
    "AWS",
    "Git",
    "CI/CD",
    "Github (Version Control)",
    "Vercel / Render / Heroku",
    "Github Actions",
    "Sentry",
    "PostHog",
    "Vercel Analytics"
  ],
  Other: [
    "APIs & REST Design",
    "Unit & Integration Testing (Jest, Vitest)",
    "End-to-End Testing (Playwright)",
    "OAuth2",
    "Encryption",
    "Agile / Scrum",
    "Zod",
  ],
  Learning: ["LangChain", "AI Agents", "MCPs"]
};

type ResumeProject = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  experienceLevel?: 'Junior' | 'Mid' | 'Senior' | 'Expert';
  projectDuration?: string;
  metrics?: {
    linesOfCode?: number;
    performance?: string;
    users?: number;
  };
  learnings?: string[];
};

export const projects: ResumeProject[] = [
    {
      title: "Room Planner Prototype",
      description:
        "I built an Ikea Kreativ-inspired 3D room design prototype using Next.js + React Three Fiber to validate rapid 3D development concepts.",
      stack: ["Next.js", "Three.js", "React Three Fiber", "TailwindCSS"],
      link: "/projects/ikea",
      experienceLevel: "Expert" as const,
      projectDuration: "1 week",
      metrics: {
        linesOfCode: 8000,
        performance: "60fps 3D rendering",
        users: 25
      },
      learnings: ["Three.js scene optimization", "WebGL performance tuning", "Rapid prototyping techniques"]
    },
    {
      title: "Elevare",
    description:
      "I created a full-stack productivity app that helps users build better habits, track progress, and achieve goals through focused task management, reflection, and gamification.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Radix UI",
      "Framer Motion",
      "TanStack Query",
      "Zod",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "NextAuth.js",
      "Vitest",
      "Playwright",
      "Vercel Analytics",
      "PostHog",
      "Sentry"
    ],
    link: "/projects/elevare",
    experienceLevel: "Senior" as const,
    projectDuration: "3 months",
    metrics: {
      linesOfCode: 15000,
      performance: "95+ Lighthouse score",
      users: 50
    },
    learnings: ["Advanced Next.js 14 app router patterns", "Supabase real-time subscriptions", "Complex form validation with Zod"]
  },
    {
      title: "Librora (Book Management App)",
      description:
        "I developed a SaaS-style book management platform that combines a global catalog with personal libraries and reading analytics.",
      stack: ["Next.js", "TailwindCSS", "Framer Motion", "Express.js", "Joi", "MongoDB", "Cloudinary", "TypeScript"],
      link: "/projects/librora",
      experienceLevel: "Senior" as const,
      projectDuration: "2 months",
      metrics: {
        linesOfCode: 20000,
        performance: "99% uptime",
        users: 100
      },
      learnings: ["Production-grade security patterns", "CI/CD with automated testing", "Cloudinary integration optimization"]
    }, 
    {
        title: "Online Resume Website",
        description: "I built a responsive portfolio with full-page scroll, animations, and an AI chatbot guide to showcase my work interactively.",
        stack: ["React", "Framer Motion", "TailwindCSS", "Flask", "Gemini API", "AI Chatbot"],
        link: "/projects/portfolio",
        experienceLevel: "Senior" as const,
        projectDuration: "2 weeks",
        metrics: {
          linesOfCode: 8000,
          performance: "95+ Lighthouse score",
          users: 200
        },
        learnings: ["Full-page scroll animations", "AI chatbot integration", "Modern portfolio design patterns"]
     }
  ];