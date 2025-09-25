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

export const projects = [
    {
      title: "Room Planner Prototype",
      description:
        "Ikea Kreativ-inspired 3D room design prototype built with Next.js + React Three Fiber.",
      stack: ["Next.js", "Three.js", "React Three Fiber", "TailwindCSS"],
      link: "/projects/ikea",
    },
    {
      title: "Elevare",
    description:
      "A full-stack productivity app designed to help users build better habits, track progress, and achieve goals through task management, reflection, and gamification.",
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
    link: "/projects/elevare"
  },
    {
      title: "Librora (Book Management App)",
      description:
        "A SaaS-style book management platform that combines a global catalog with personal libraries and reading analytics.",
      stack: ["Next.js", "TailwindCSS", "Framer Motion", "Express.js", "Joi", "MongoDB", "Cloudinary", "TypeScript"],
      link: "/projects/librora",
    }, 
    {
        title: "Online Resume Website",
        description: "Responsive portfolio with full-page scroll, animations, and an AI chatbot guide.",
        stack: ["React", "Framer Motion", "TailwindCSS", "Flask", "Gemini API", "AI Chatbot"],
        link: "/projects/resumewebsite"
     }
  ];