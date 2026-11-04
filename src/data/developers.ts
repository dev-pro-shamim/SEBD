export interface DeveloperRole {
  id: string;
  title: string;
  shortDesc: string;
  category: "Frontend" | "Backend" | "Full-Stack" | "Mobile" | "CMS" | "Design & QA";
  experienceLevels: string[];
  primarySkills: string[];
  secondarySkills: string[];
  deliverables: string[];
  availability: "Available for Dedicated Engagement" | "Immediate Team Matching";
  idealFor: string;
}

export interface EngagementModel {
  id: string;
  title: string;
  badge: string;
  duration: string;
  commitment: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export const developerRoles: DeveloperRole[] = [
  {
    id: "dedicated-teams",
    title: "Dedicated Development Teams",
    shortDesc:
      "A complete, self-managed cross-functional engineering squad (Tech Lead, Senior Engineers, UI/UX, QA) dedicated exclusively to your product roadmap.",
    category: "Full-Stack",
    experienceLevels: ["Lead", "Senior", "Mid-Level"],
    primarySkills: ["System Architecture", "Next.js", "Node.js", "NestJS", "PostgreSQL", "AWS"],
    secondarySkills: ["Agile/Scrum", "CI/CD", "Automated QA", "Docker", "Kubernetes"],
    deliverables: [
      "Direct daily standups and sprint planning in your time zone",
      "Full Git repository ownership and daily code commits",
      "Dedicated Project Manager / Scrum Master reporting",
      "Scalable engineering capacity without local recruitment overhead",
    ],
    availability: "Immediate Team Matching",
    idealFor: "Startups scaling from seed to Series A, or enterprises building new digital products.",
  },
  {
    id: "frontend-developers",
    title: "Hire Frontend Developers",
    shortDesc:
      "Pixel-perfect UI engineers specializing in responsive, accessible, high-performance web applications using modern React and TypeScript.",
    category: "Frontend",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    secondarySkills: ["Framer Motion", "GraphQL", "Redux Toolkit", "Zustand", "Jest/RTL"],
    deliverables: [
      "Pixel-perfect translation of Figma/Adobe XD designs",
      "Sub-second load times and 95+ Core Web Vitals",
      "Responsive, cross-browser compatibility across mobile & desktop",
      "Clean modular component architecture with TypeScript safety",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "SaaS dashboards, enterprise portals, and consumer-facing web applications.",
  },
  {
    id: "backend-developers",
    title: "Hire Backend Developers",
    shortDesc:
      "Distributed systems engineers architecting secure, high-throughput REST and GraphQL APIs, microservices, and reliable database layers.",
    category: "Backend",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
    secondarySkills: ["Docker", "RabbitMQ", "Kafka", "AWS", "Prisma", "REST / GraphQL"],
    deliverables: [
      "Robust RESTful and GraphQL API specifications",
      "ACID-compliant relational database modeling & indexing",
      "Background job queues and event-driven microservices",
      "OWASP-compliant data security and role-based access control",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "High-traffic transaction platforms, fintech, ERPs, and cloud SaaS backends.",
  },
  {
    id: "fullstack-developers",
    title: "Hire Full-Stack Developers",
    shortDesc:
      "Versatile software engineers capable of taking product features from database schema design through backend APIs to responsive frontends.",
    category: "Full-Stack",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Next.js", "React.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind"],
    secondarySkills: ["Docker", "Redis", "REST APIs", "Git", "Cloud Infrastructure"],
    deliverables: [
      "Rapid end-to-end feature delivery within agile sprints",
      "Reduced coordination friction between frontend and backend",
      "Optimized full-stack performance and database queries",
      "Full-stack automated unit and integration tests",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "Fast-moving product squads and agile startup environments.",
  },
  {
    id: "react-developers",
    title: "Hire React Developers",
    shortDesc:
      "Specialized React engineers experienced in state management, component lifecycles, real-time WebSockets, and complex interactive web interfaces.",
    category: "Frontend",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["React.js", "JavaScript (ES6+)", "TypeScript", "Redux / Zustand", "Tailwind"],
    secondarySkills: ["TanStack Query", "Socket.io", "Chart.js", "Vite", "Webpack"],
    deliverables: [
      "Dynamic interactive single-page applications (SPAs)",
      "Reusable component design systems matching brand standards",
      "Real-time WebSocket data visualization dashboards",
      "Optimized client-side rendering performance and state caches",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "Complex web applications, interactive dashboards, and client portals.",
  },
  {
    id: "nextjs-developers",
    title: "Hire Next.js Developers",
    shortDesc:
      "Experts in Next.js App Router, Server-Side Rendering (SSR), Static Site Generation (SSG), Server Actions, and SEO performance optimization.",
    category: "Frontend",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Next.js 14+", "React.js", "TypeScript", "Tailwind CSS", "Server Actions"],
    secondarySkills: ["Vercel Deployment", "SEO Metadata", "Node.js", "Edge Caching"],
    deliverables: [
      "Ultra-fast Server-Side Rendered (SSR) web applications",
      "Comprehensive SEO structured data (Schema.org) and Open Graph",
      "Edge-cached dynamic pages with minimal client JavaScript",
      "Secure Server Action data mutations and API route handlers",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "E-commerce storefronts, public web platforms, and modern B2B SaaS.",
  },
  {
    id: "nodejs-developers",
    title: "Hire Node.js Developers",
    shortDesc:
      "Asynchronous backend engineers building event-driven APIs, microservices, payment gateways, and real-time message workers.",
    category: "Backend",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Node.js", "Express.js", "NestJS", "TypeScript", "MongoDB", "PostgreSQL"],
    secondarySkills: ["BullMQ", "Redis", "JWT Auth", "Docker", "Socket.io", "AWS Lambda"],
    deliverables: [
      "Non-blocking, event-driven API endpoints capable of 10k+ req/sec",
      "Secure authentication engines (OAuth2, JWT, Multi-Factor)",
      "Scalable payment gateway and third-party API integrations",
      "Automated queue workers handling email, PDF, and image tasks",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "High-concurrency web services, API gateways, and streaming platforms.",
  },
  {
    id: "laravel-developers",
    title: "Hire Laravel Developers",
    shortDesc:
      "Senior PHP/Laravel craftsmen building clean MVC enterprise architectures, custom ERP/CRM backends, and multi-tenant business systems.",
    category: "Backend",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["PHP 8+", "Laravel 10/11", "MySQL", "PostgreSQL", "REST APIs"],
    secondarySkills: ["Livewire", "Alpine.js", "Redis", "Queues", "Docker", "Tailwind CSS"],
    deliverables: [
      "Clean, maintainable Laravel MVC codebases following PSR standards",
      "Eloquent ORM optimizations, migrations, and database seeders",
      "Modular admin dashboards with Nova, Filament, or custom Blade/React",
      "Robust background jobs, cron scheduling, and payment webhooks",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "Enterprise ERPs, custom business systems, and established PHP platforms.",
  },
  {
    id: "flutter-developers",
    title: "Hire Flutter Developers",
    shortDesc:
      "Cross-platform mobile engineers delivering silky-smooth native 60fps iOS and Android applications from a single unified Dart codebase.",
    category: "Mobile",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Flutter", "Dart", "BLoC / Riverpod", "REST APIs", "Firebase"],
    secondarySkills: ["App Store Submission", "Google Play Release", "Push Notifications", "SQLite"],
    deliverables: [
      "Unified iOS & Android builds from a single clean Dart repository",
      "Fluid 60fps animations, native gesture handling, and responsive layouts",
      "Offline SQLite / Hive local database storage and background sync",
      "Full deployment assistance to Apple App Store and Google Play Store",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "Consumer apps, on-demand delivery, mobile banking, and field workforce tools.",
  },
  {
    id: "wordpress-developers",
    title: "Hire WordPress Developers",
    shortDesc:
      "Custom WordPress and WooCommerce specialists creating lightweight bespoke themes, custom plugins, and headless CMS implementations.",
    category: "CMS",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["WordPress", "WooCommerce", "PHP", "JavaScript", "Custom Gutenberg Blocks"],
    secondarySkills: ["ACF Pro", "WPGraphQL", "REST API", "Speed Optimization", "Security Hardening"],
    deliverables: [
      "100% custom lightweight themes (zero heavy pre-made builders)",
      "Bespoke WordPress plugins tailored to custom business workflows",
      "High-speed WooCommerce checkout optimizations",
      "Enterprise security hardening, daily cloud backups, and malware protection",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "Corporate websites, media publications, and WooCommerce online stores.",
  },
  {
    id: "ui-ux-designers",
    title: "Hire UI/UX Designers",
    shortDesc:
      "Product designers creating human-centered design systems, high-fidelity Figma prototypes, and research-backed user journeys.",
    category: "Design & QA",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Figma", "Design Systems", "Wireframing", "User Research", "Prototyping"],
    secondarySkills: ["Information Architecture", "Usability Testing", "Micro-Interactions", "Mobile UI"],
    deliverables: [
      "Complete design system with color tokens, typography, and reusable components",
      "Interactive clickable prototypes for user testing and stakeholder buy-in",
      "Comprehensive developer handoff specifications and asset exports",
      "Intuitive UX flows minimizing user clicks and cognitive load",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "SaaS interfaces, mobile app design, and complex enterprise software UX.",
  },
  {
    id: "qa-engineers",
    title: "Hire QA Engineers",
    shortDesc:
      "Quality assurance and test automation specialists ensuring zero regressions, rigorous security, and peak performance under load.",
    category: "Design & QA",
    experienceLevels: ["Senior (5+ yrs)", "Mid-Level (3+ yrs)"],
    primarySkills: ["Playwright", "Cypress", "Selenium", "Postman", "Jest", "Manual QA"],
    secondarySkills: ["JMeter", "Load Testing", "CI/CD Test Pipelines", "Security Auditing"],
    deliverables: [
      "End-to-end automated test suites integrated into CI/CD pipelines",
      "Comprehensive test matrices covering edge cases and regression scenarios",
      "Detailed bug reports with reproduction steps, video logs, and network traces",
      "Stress and load testing reports evaluating server performance thresholds",
    ],
    availability: "Available for Dedicated Engagement",
    idealFor: "Continuous delivery teams, financial platforms, and mission-critical applications.",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    id: "dedicated-team",
    title: "Dedicated Development Squad",
    badge: "Most Popular for Scale",
    duration: "6+ Months Contract",
    commitment: "Full-Time (160 hrs/month per engineer)",
    description:
      "A complete team of vetted engineers, UI/UX designers, and QA working exclusively on your product under your direct technical direction or managed by our Scrum Master.",
    features: [
      "100% dedicated resources committed exclusively to your projects",
      "Direct daily communication via Slack, Teams, and GitHub",
      "Daily standups aligned with US, UK, Australia, or EU business hours",
      "Free 2-week risk-free trial period to evaluate engineering quality",
      "Seamless scaling: add or swap developers with 2 weeks notice",
    ],
    recommendedFor: "Startups with product roadmaps, scaleups, and companies modernizing core software.",
  },
  {
    id: "full-time-engineer",
    title: "Full-Time Staff Augmentation",
    badge: "Direct Team Extension",
    duration: "3+ Months Contract",
    commitment: "160 Hours / Month (40 hrs/week)",
    description:
      "Augment your internal technical team with senior SmartEdge developers who integrate directly into your Jira, Git workflows, and sprint ceremonies.",
    features: [
      "Pre-vetted senior or mid-level software engineers",
      "You interview and select candidate developers directly",
      "Direct task assignment in your Jira, Linear, or GitHub",
      "Zero recruitment fees, equipment costs, or local HR liability",
      "Replacement guarantee within 5 business days if fit isn't optimal",
    ],
    recommendedFor: "Engineering leaders needing immediate senior technical capacity without recruitment delays.",
  },
  {
    id: "part-time-engineer",
    title: "Part-Time Dedicated Support",
    badge: "Flexible Bandwidth",
    duration: "Monthly Retainer",
    commitment: "80 Hours / Month (20 hrs/week)",
    description:
      "A cost-effective model providing consistent weekly engineering attention for feature iterations, maintenance, refactoring, and code reviews.",
    features: [
      "Dedicated senior developer committed for 20 hours each week",
      "Guaranteed weekly sprint deliverables and code reviews",
      "Flexible rollover of unused hours into subsequent weeks",
      "Monthly architectural consultation included",
    ],
    recommendedFor: "Businesses with steady feature updates, post-launch maintenance, and smaller roadmaps.",
  },
  {
    id: "project-based",
    title: "Fixed-Scope Project Delivery",
    badge: "Milestone-Driven",
    duration: "Defined Scope & Milestones",
    commitment: "Sprint Deliverables",
    description:
      "Ideal for well-defined MVPs, specific module developments, or third-party integrations with fixed scope, clear milestone gates, and defined pricing.",
    features: [
      "Fixed scope, timeline, and milestone payment schedule",
      "Full requirement analysis and system architecture blueprint upfront",
      "Comprehensive QA, staging preview, and user acceptance sign-off",
      "30-day post-launch warranty with bug fixes included",
    ],
    recommendedFor: "New product MVPs, standalone mobile apps, and discrete software modules.",
  },
];

export const hiringProcessSteps = [
  {
    step: "01",
    title: "Share Your Technical Requirements",
    desc: "Tell us about your tech stack, required seniority, team size, and project goals through our inquiry form or an exploratory discovery call.",
  },
  {
    step: "02",
    title: "Curated Candidate Profiles in 48h",
    desc: "We match and present vetted developer profiles complete with GitHub repositories, code samples, and past enterprise project histories.",
  },
  {
    step: "03",
    title: "Direct Technical Interview & Code Review",
    desc: "Interview candidate engineers directly. Test their algorithmic problem solving, architectural mindset, and cultural communication fit.",
  },
  {
    step: "04",
    title: "2-Week Risk-Free Trial & Sprint 1",
    desc: "Start with a 2-week trial period. If you are not completely satisfied with the engineer's output, you pay nothing and we provide an alternate engineer.",
  },
];

export const hireFaqs = [
  {
    q: "How fast can dedicated developers start on our project?",
    a: "Our typical onboarding timeline is 3 to 7 business days from initial interview to first sprint kickoff.",
  },
  {
    q: "How do we communicate with the developers during sprints?",
    a: "Developers communicate directly through your preferred channels: Slack, Microsoft Teams, Discord, Zoom, or Google Meet, and participate in your daily standups.",
  },
  {
    q: "Can developers work in our specific time zone?",
    a: "Yes. Our engineers regularly accommodate overlapping business hours with clients in the United States (EST/PST), United Kingdom (GMT/BST), Australia (AEST), Europe (CET), and the Middle East.",
  },
  {
    q: "Who owns the code written by SmartEdge developers?",
    a: "You retain 100% intellectual property (IP) and copyright ownership. All code is committed directly to your private GitHub or GitLab repositories.",
  },
  {
    q: "What is your developer vetting and hiring standard?",
    a: "Only the top 3% of applicants pass SmartEdge's technical evaluation, which includes live coding sessions, distributed systems architecture tests, and English fluency interviews.",
  },
];
