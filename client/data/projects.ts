const projects = [
  {
    slug: "ai-customer-interview-analyzer",
    title: "AI Customer Interview Analyzer",
    tagline: "Turning Messy Customer Interviews Into a Clear Roadmap",
    year: 2025,
    image: "/ai-analyzer.png",
    stack: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS", "Radix UI", "shadcn/ui", "jsPDF"],
    problem: "A pre-seed founder had 17 customer interviews scattered across Notion, Zoom, and Slack, but no way to extract actionable direction or prioritize features efficiently.",
    role: "Full-Stack AI Engineer",
    impact: [
      "I reduced analysis time from 12 hours to 15 minutes, processing 17 interviews into structured insights in one short session",
      "I identified hidden recurring pain points like 'lack of trust in scheduling' that were missed in manual review"
    ],
    demoLink: "https://ai-customer-interview-analyzer.vercel.app/",
    githubLink: "https://github.com/Gojer16/AI-Customer-Interview-Analyzer",
    featured: true,
    experienceLevel: "Expert" as const,
    projectDuration: "1 week",
    metrics: {
      performance: "<10s analysis time",
      users: 1
    },
    learnings: ["LLM-powered extraction systems",
      "Multi-stage prompting strategies",
      "Text preprocessing pipelines"]
  },
  {
    slug: "fluentmaker",
    title: "FluentMaker",
    tagline: "AI-Powered Flashcard Generator",
    year: 2025,
    image: "/fluentmaker.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini API", "DeepSeek API", "Wiktionary API", "Zod", "LLMs", "NLP", "Jest", "React Testing Library"],
    problem: "Language learning apps promise speed and fluency, yet the most effective method—contextual, personalized flashcards (Fluent Forever method)—remains too time-consuming for the average learner.",
    role: "Full-Stack AI Engineer",
    impact: [
      "I reduced flashcard creation time from 30 minutes to a few minutes, allowing users to turn short articles into 50+ usable cards instantly",
      "I implemented a multi-language processing engine supporting 14 languages with custom rules for compounds, contractions, and honorifics",
      "I built a robust validation pipeline ensuring vocabulary accuracy, correct gender/plural forms, and consistent sentence complexity"
    ],
    demoLink: "https://fluentmaker.vercel.app",
    githubLink: "https://github.com/Gojer16/FluentMaker",
    featured: true,
    experienceLevel: "Expert" as const,
    projectDuration: "3 weeks",
    metrics: {
      performance: "<3m generation time",
      users: 55
    },
    learnings: ["Multi-language NLP processing",
      "LLM prompt optimization",

      "Quality-control metrics for AI output",
      "Multi-format export pipelines"
    ]
  },
  {
    slug: "elevare",
    title: "Elevare.",
    tagline: "A modern productivity app.",
    year: 2025,
    image: "/elevare.png",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Radix UI", "Framer Motion", "TanStack Query", "Zod", "Prisma", "PostgreSQL", "Supabase", "NextAuth.js", "Vitest", "Playwright", "Vercel Analytics", "PostHog", "Sentry"],
    problem: "I noticed that modern productivity tools overwhelm users with endless to-do lists, notifications, and features. Instead of helping people focus, they create decision fatigue and encourage busyness over meaningful progress.",
    role: "Full-stack Developer / Founder",
    impact: ["I built Elevare to reframe productivity by guiding users to define and commit to their single most important task", "I increased task completion rates by promoting deep focus instead of shallow multitasking", "I helped users achieve meaningful results consistently through the Domino Effect - small, focused wins compounding into extraordinary outcomes"],
    demoLink: "https://elevareapp.vercel.app",
    githubLink: "https://github.com/Gojer16/Elevare",
    featured: true,
    experienceLevel: "Senior" as const,
    projectDuration: "1 month",
    metrics: {
      performance: "95+ Lighthouse score",
      users: 14
    },
    learnings: [
      "Designed a full end-to-end product workflow from idea validation to UI/UX, architecture, and deployment.",
      "Added monitoring, logging, and error tracking with Sentry for production-grade reliability.",
      "Implemented CI/CD test pipelines using Vitest and Playwright for both unit and end-to-end testing."
    ]
  },
  {
    slug: "ikea",
    title: "Ikea Kreativ Clone.",
    tagline: "Ikea Kreativ-inspired 3D room design prototype.",
    year: 2025,
    image: "/ikea.png",
    stack: ["Next.js", "Three.js", "React Three Fiber", "TailwindCSS"],
    problem: "A client needed to validate whether 3D room customization, camera controls, and material export could be built quickly and run smoothly in-browser. I love these kinds of technical challenges.",
    role: "Full-stack Developer & Freelancer",
    impact: ["I delivered a working 3D room planner in under 7 days, proving the concept was not only feasible but could be built rapidly with the right approach", "I implemented furniture placement, snapping, and rotation controls, enabling realistic room editing", "I open-sourced the project, turning a discontinued prototype into a portfolio case study recruiters can explore"],
    demoLink: "",
    githubLink: "",
    featured: true,
    experienceLevel: "Expert" as const,
    projectDuration: "1 week",
    metrics: {
      performance: "60fps 3D rendering",
      users: 1
    },
    learnings: ["Three.js scene optimization", "WebGL performance tuning", "Rapid prototyping techniques"]
  },
  {
    slug: "librora",
    title: "Librora.",
    tagline: "A SaaS-style book management platform.",
    year: "2025",
    image: "/librora.png",
    stack: ["Next.js", "Express.js", "MongoDB", "Joi", "Cloudinary", "Jest", "Swagger", "Framer Motion", "TypeScript", "Tailwind CSS"],
    problem: "I wanted to build a unified SaaS platform with both global cataloging and personal library features, focusing on robust security, testing, and CI/CD for true production readiness.",
    role: "Full-stack Developer / Founder",
    impact: ["I built a secure, production-grade backend with JWT auth, rate limiting, sanitization, and full validation", "I integrated Cloudinary for cover uploads and auto-generated thumbnails, significantly improving UX and performance", "I delivered a complete CI/CD pipeline with automated testing, ensuring reliability at scale"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Senior" as const,
    projectDuration: "2 months",
    metrics: {
      performance: "99% uptime",
      users: 100
    },
    learnings: ["Production-grade security patterns", "CI/CD with automated testing", "Cloudinary integration optimization"]
  },
  {
    slug: "ai-assistant",
    title: "Orlando AI Assistant.",
    tagline: "A Resume Q&A Chatbot.",
    year: 2025,
    image: "/ai.png",
    stack: ["Gemini API", "API Integration", "Flask", "Python", "AI"],
    problem: "I realized that recruiters and hiring managers often want quick, resume-specific answers without digging through long PDFs, so I built an AI solution for this exact pain point.",
    role: "Back-end Developer / AI Engineer",
    impact: ["I built a resume-aware chatbot that delivers tailored responses for recruiters, career coaches, or anyone wanting detailed explanations about my background", "I added both streaming and non-streaming modes, making the chatbot responsive and versatile for different use cases", "I deployed a lightweight, scalable solution that demonstrates real-world AI integration with Gemini API"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Expert" as const,
    projectDuration: "3 weeks",
    metrics: {
      performance: "<2s response time",
      users: 75
    },
    learnings: ["Gemini API integration patterns", "Streaming response handling", "AI prompt engineering"]
  },
  {
    slug: "weather-app",
    title: "Live Weather Dashboard.",
    tagline: "A real-time weather dashboard that auto-detects your location and displays current weather information.",
    year: 2025,
    image: "/weather.png",
    stack: ["React", "Framer Motion", "Tailwind CSS", "OpenWeatherMap API", "Geolocation API", "API Integration"],
    problem: "I was frustrated that most weather apps require manual city input or are overloaded with ads and features that break the user experience, so I built something cleaner.",
    role: "Front-end Developer",
    impact: ["I implemented auto-detect geolocation with ~100m accuracy for instant results without any user input", "I delivered real-time weather data (temperature, humidity, wind, feels-like) via OpenWeatherMap API", "I created a modern, minimalist dashboard that balances clarity, speed, and purposeful animation"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Mid" as const,
    projectDuration: "1 week",
    metrics: {
      performance: "100m location accuracy",
      users: 30
    },
    learnings: ["Geolocation API optimization", "Real-time data handling", "Minimalist UI design principles"]
  },
  {
    slug: "portfolio",
    title: "Personal Resume Website.",
    tagline: "A modern, responsive resume website with an AI-powered Resume Q&A Chatbot.",
    year: 2025,
    image: "/portfolio.png",
    stack: ["React", "Framer Motion", "Tailwind CSS", "AI", "Gemini API", "API Integration", "AI Chatbot"],
    problem: "I wanted my portfolio to stand out from standard portfolios that lack interactivity or real-world innovation, so I integrated AI-driven features to make it memorable.",
    role: "Full-stack Developer",
    impact: ["I built a modern, interactive online resume with full-page snap scrolling, responsive design, and an integrated AI chatbot that can answer questions about my experience"],
    demoLink: "",
    githubLink: "",
    featured: true,
    experienceLevel: "Senior" as const,
    projectDuration: "2 weeks",
    metrics: {
      performance: "95+ Lighthouse score",
      users: 200
    },
    learnings: ["Full-page scroll animations", "AI chatbot integration", "Modern portfolio design patterns"]
  },
  {
    slug: "school-site",
    title: "School Website.",
    tagline: "A full-stack institutional website for a technical school.",
    year: 2025,
    image: "/school.png",
    stack: ["React", "Framer Motion", "FastAPI", "Python", "SQLAlchemy", "MySQL"],
    problem: "The school needed a modern, secure, and responsive full-stack solution to handle both current users and future expansion like teachers directory and admin dashboard.",
    role: "Software Engineer / Full-Stack Developer",
    impact: ["I built the site with a responsive, scalable full-stack architecture using React + FastAPI + SQLAlchemy", "I implemented a security-first backend with validation, rate limiting, and protection against common exploits", "I prepared the architecture for future extensibility: teacher directory, admin dashboard, and CMS-like management for non-technical staff"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Senior" as const,
    projectDuration: "6 weeks",
    metrics: {
      performance: "Sub-second load times",
      users: 500
    },
    learnings: ["FastAPI production patterns", "Security-first development", "Scalable architecture design"]
  },
  {
    slug: "mac",
    title: "MacOS Terminal",
    tagline: "A react component that simulates a macOS-style terminal with a typewriter effect.",
    year: 2025,
    image: "/mac.png",
    stack: ["React", "Framer Motion"],
    problem: "I was frustrated that existing terminal/typing libraries often require heavy setup, npm installs, or lack flexibility, so I built my own lightweight solution.",
    role: "Front-end Developer",
    impact: ["I built a plug-and-play React component that's copy-paste ready with zero external dependencies", "I delivered a macOS-style terminal UI with smooth typewriter and deleting animations", "I supported multiple themes for easy customization in personal sites and portfolios"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Mid" as const,
    projectDuration: "3 days",
    metrics: {
      performance: "Zero dependencies",
      users: 15
    },
    learnings: ["Custom animation libraries", "Zero-dependency development", "Reusable component design"]
  },
  {
    slug: "chess",
    title: "Real-Time Chess Game.",
    tagline: "Lightweight real-time chess.",
    year: 2025,
    image: "/chess.png",
    stack: ["React", "Socket.IO", "Express.js", "Node.js"],
    problem: "I wanted to challenge myself with building a lightweight real-time game that requires handling synchronization, validation, and latency - chess seemed perfect for this.",
    role: "Full-Stack Developer",
    impact: ["I developed a real-time multiplayer chess app using Socket.IO + Express", "I achieved low-latency sync (<200ms globally) with proper move validation and error handling", "I implemented room-based sessions so multiple games can run in parallel without interference"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Senior" as const,
    projectDuration: "4 weeks",
    metrics: {
      performance: "<200ms latency",
      users: 80
    },
    learnings: ["Real-time synchronization", "Socket.IO optimization", "Game state management"]
  },
  {
    slug: "freelance",
    title: "Freelance E-commerce Website.",
    tagline: "Freelance E-commerce Website for my sister.",
    year: 2025,
    image: "/freelance.png",
    stack: ["Next.js", "Framer Motion", "TailwindCSS", "Next-Auth", "TypeScript", "MongoDB", "Zustand"],
    problem: "My sister needed an online presence to showcase and sell her products but had no website. This was a personal project that meant a lot to me.",
    role: "Full-Stack Developer",
    impact: ["I built a custom e-commerce website to help expand her visibility and attract more customers", "I delivered product listings, contact flow, and modern design specifically tailored to her business needs", "I helped increase her reach and visibility beyond just local buyers, opening new opportunities"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Senior" as const,
    projectDuration: "5 weeks",
    metrics: {
      performance: "E-commerce ready",
      users: 120
    },
    learnings: ["E-commerce architecture", "Payment integration patterns", "Client-focused development"]
  },
  {
    slug: "landing",
    title: "Personal Landing Page.",
    tagline: "Personal Landing Page for me!",
    year: 2025,
    image: "/landing.png",
    stack: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript", "Next-theme"],
    problem: "My domain used to redirect straight to my GitHub profile, dropping recruiters into a noisy environment with repos, commits, and forks but no clear story about who I am or what I do.",
    role: "Front-end Developer",
    impact: ["I built a dedicated personal landing page that clearly positions me as a Software Engineer specializing in JS, Python, and React", "I showcased my top 3 projects with clear taglines, tech stacks, and CTAs to guide visitors", "I improved the recruiter experience by turning my site into a controlled portfolio hub rather than just a code dump"],
    demoLink: "",
    githubLink: "",
    experienceLevel: "Mid" as const,
    projectDuration: "1 week",
    metrics: {
      performance: "Fast loading",
      users: 300
    },
    learnings: ["Landing page optimization", "Professional branding", "Recruiter-focused UX"]
  }
];

export default projects;
