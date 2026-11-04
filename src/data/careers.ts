export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  department: "Engineering" | "Design" | "Quality Assurance" | "Product Management";
  location: string;
  type: "Full-Time" | "Remote / Hybrid" | "On-Site (Banani, Dhaka)";
  experience: string;
  salaryRange: string;
  shortDesc: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  status: "Open" | "Interviewing" | "Closed";
  postedDate: string;
}

export const companyPerks = [
  {
    title: "Competitive Compensation & Growth",
    desc: "Market-leading salaries, bi-annual performance evaluations, and milestone-based bonuses aligned with company success.",
    icon: "TrendingUp",
  },
  {
    title: "Continuous Learning & Certifications",
    desc: "Full sponsorship for AWS, Google Cloud, and software architecture certifications, plus access to top technical courses.",
    icon: "GraduationCap",
  },
  {
    title: "Flexible Hybrid Work Culture",
    desc: "Empowering work environment balancing collaborative Mirpur-10 engineering hub days with focused work-from-home flexibility.",
    icon: "Home",
  },
  {
    title: "Modern Hardware & Workspace",
    desc: "High-spec Apple MacBook Pro or multi-monitor workstation setups, ergonomic seating, and premium developer tooling.",
    icon: "Laptop",
  },
  {
    title: "Health & Wellness Coverage",
    desc: "Comprehensive outpatient and hospitalization insurance coverage for team members and their direct dependents.",
    icon: "Heart",
  },
  {
    title: "Collaborative Engineering Retreats",
    desc: "Annual team tours, hackathons, celebratory dinner outings, and regular knowledge-sharing tech talks.",
    icon: "Coffee",
  },
];

export const openPositions: JobPosition[] = [
  {
    id: "eng-001",
    slug: "senior-fullstack-engineer-nextjs-nodejs",
    title: "Senior Full-Stack Engineer (Next.js & Node.js)",
    department: "Engineering",
    location: "Mirpur-10, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "4+ Years of Professional Experience",
    salaryRange: "BDT 90,000 - 150,000 / month (Based on expertise)",
    shortDesc:
      "Architect and ship mission-critical web applications, enterprise dashboards, and distributed APIs for international clients using Next.js 14 and Node.js.",
    overview:
      "We are seeking an exceptional Senior Full-Stack Engineer who takes deep pride in code craftsmanship, clean architecture, and product ownership. You will lead the development of enterprise SaaS platforms, high-concurrency e-commerce backends, and responsive React applications.",
    responsibilities: [
      "Architect scalable, maintainable full-stack systems using Next.js App Router, TypeScript, and Node.js/NestJS.",
      "Design normalized relational database schemas (PostgreSQL) and optimize high-throughput queries and indexes.",
      "Write clean, type-safe APIs, background queue workers (BullMQ/Redis), and third-party webhook integrations.",
      "Lead code reviews, enforce unit and integration test coverage, and mentor mid-level software engineers.",
      "Collaborate directly with product managers and international clients during sprint planning and architecture sessions.",
    ],
    requirements: [
      "4+ years of professional full-stack development experience with React, Next.js, and Node.js.",
      "Deep expertise in TypeScript, React hooks, Server Components, and state management patterns.",
      "Proven proficiency with PostgreSQL, MongoDB, Redis, and schema design principles.",
      "Experience with Docker, CI/CD pipelines (GitHub Actions), and cloud hosting (AWS / Vercel).",
      "Strong spoken and written English communication skills for collaborating with global stakeholders.",
    ],
    niceToHave: [
      "Experience building multi-tenant SaaS applications or ERP systems.",
      "Familiarity with event-driven architectures (RabbitMQ or Kafka).",
      "Open-source contributions or technical blog publications.",
    ],
    benefits: [
      "2 Festival Bonuses per year",
      "Bi-annual salary reviews based on performance",
      "Annual company retreat & weekly team lunches",
      "Full reimbursement for relevant technical certifications",
    ],
    status: "Open",
    postedDate: "2026-10-15",
  },
  {
    id: "eng-002",
    slug: "lead-mobile-app-developer-flutter",
    title: "Lead Mobile App Developer (Flutter)",
    department: "Engineering",
    location: "Mirpur-10, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years in Flutter / Mobile Development",
    salaryRange: "BDT 80,000 - 130,000 / month",
    shortDesc:
      "Lead our mobile engineering efforts delivering silky-smooth, cross-platform iOS and Android applications using Flutter and modern state management.",
    overview:
      "SmartEdge builds high-performance mobile applications for logistics, on-demand services, healthcare, and enterprise commerce. As our Lead Mobile Developer, you will direct mobile architecture, optimize 60fps animations, and ensure flawless App Store releases.",
    responsibilities: [
      "Architect and maintain cross-platform Flutter applications for iOS and Android.",
      "Implement robust state management using BLoC or Riverpod with clean architecture patterns.",
      "Build complex UI components with smooth 60fps custom animations and responsive layouts.",
      "Integrate RESTful APIs, WebSockets, background geolocation tracking, and push notifications.",
      "Oversee automated mobile CI/CD pipelines and manage Apple App Store and Google Play deployments.",
    ],
    requirements: [
      "3+ years of professional Flutter & Dart development experience.",
      "Published at least 3 production apps on Google Play Store and Apple App Store.",
      "Solid understanding of platform-specific native APIs, permissions, and background tasks.",
      "Familiarity with local databases (Hive, Isar, or SQLite) and offline-first synchronization.",
      "Strong debugging, profiling, and memory optimization abilities.",
    ],
    niceToHave: [
      "Native iOS (Swift) or Android (Kotlin) development experience.",
      "Experience with WebRTC video calling or Bluetooth hardware integration.",
    ],
    benefits: [
      "High-performance Mac workstation setup",
      "2 Festival Bonuses",
      "Comprehensive medical coverage",
      "Paid leave policy and flexible hours",
    ],
    status: "Open",
    postedDate: "2026-10-20",
  },
  {
    id: "eng-003",
    slug: "senior-backend-architect-laravel-php",
    title: "Senior Backend Architect (Laravel / PHP)",
    department: "Engineering",
    location: "Mirpur-10, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "5+ Years in PHP / Laravel Development",
    salaryRange: "BDT 85,000 - 140,000 / month",
    shortDesc:
      "Design high-throughput enterprise backends, custom ERP/CRM engines, and complex financial data pipelines using PHP 8+ and Laravel.",
    overview:
      "Join our enterprise solutions division to design and maintain high-volume business systems. You will work on robust accounting modules, multi-tenant inventory backends, and complex third-party API orchestrations.",
    responsibilities: [
      "Architect clean, modular Laravel 10/11 backends adhering strictly to SOLID and DDD principles.",
      "Optimize complex MySQL and PostgreSQL queries, views, indexes, and database migrations.",
      "Build high-concurrency background queues, scheduled cron jobs, and webhook listeners.",
      "Integrate local and international payment gateways (SSLCommerz, bKash, Stripe, PayPal).",
      "Conduct security reviews, vulnerability patches, and performance profiling.",
    ],
    requirements: [
      "5+ years of extensive hands-on experience with PHP and the Laravel ecosystem.",
      "Deep understanding of Eloquent ORM performance, eager loading, and query optimization.",
      "Experience designing RESTful APIs consumed by web and mobile client applications.",
      "Proficiency with Redis caching, queue workers, and horizontal server scaling.",
      "Excellent problem-solving mindset and clear technical documentation skills.",
    ],
    niceToHave: [
      "Experience with Laravel Filament, Nova, or custom admin panel architectures.",
      "Knowledge of Docker containerization and Linux server administration.",
    ],
    benefits: [
      "2 Festival Bonuses",
      "Performance incentives on project milestones",
      "Sponsored technical books and training",
      "Ergonomic work environment",
    ],
    status: "Open",
    postedDate: "2026-10-18",
  },
  {
    id: "des-001",
    slug: "senior-ui-ux-product-designer",
    title: "Senior UI/UX Product Designer",
    department: "Design",
    location: "Mirpur-10, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years in Product UI/UX Design",
    salaryRange: "BDT 65,000 - 110,000 / month",
    shortDesc:
      "Craft modern, enterprise-grade design systems, interactive prototypes, and intuitive user experiences for SaaS platforms and consumer apps.",
    overview:
      "We are looking for a product-minded UI/UX Designer who can translate complex business logic into clean, intuitive, and visually stunning digital experiences. You will lead design sprints, conduct usability research, and build scalable Figma design systems.",
    responsibilities: [
      "Create high-fidelity interactive wireframes, clickable prototypes, and design specs in Figma.",
      "Establish and expand comprehensive design systems with reusable tokens and auto-layout components.",
      "Conduct user research, journey mapping, and usability testing with stakeholders.",
      "Collaborate tightly with frontend developers to ensure pixel-perfect design implementation.",
      "Create captivating illustrations, icons, and marketing assets for client showcases.",
    ],
    requirements: [
      "3+ years of professional UI/UX design experience for SaaS, web apps, or mobile apps.",
      "An outstanding portfolio demonstrating strong typography, visual hierarchy, and usability thinking.",
      "Mastery of Figma (auto-layout, components, variables, interactive prototyping).",
      "Deep understanding of responsive grid systems and mobile-first design principles.",
      "Excellent communication skills to articulate design rationales clearly.",
    ],
    niceToHave: [
      "Basic understanding of HTML, CSS, and Tailwind CSS capabilities.",
      "Experience designing complex B2B dashboards or data-heavy interfaces.",
    ],
    benefits: [
      "Top-tier Apple creative hardware",
      "Figma enterprise license and asset subscriptions",
      "Festival bonuses and medical benefits",
      "Annual team outings",
    ],
    status: "Open",
    postedDate: "2026-10-22",
  },
  {
    id: "qa-001",
    slug: "senior-qa-automation-engineer",
    title: "Senior QA Automation Engineer",
    department: "Quality Assurance",
    location: "Mirpur-10, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years in Software QA & Test Automation",
    salaryRange: "BDT 60,000 - 100,000 / month",
    shortDesc:
      "Establish automated testing suites, API validation pipelines, and performance stress tests to guarantee zero-defect releases.",
    overview:
      "Quality is the bedrock of SmartEdge engineering. As our Senior QA Automation Engineer, you will build end-to-end automated test suites, maintain CI/CD test gates, and lead exploratory testing for enterprise applications.",
    responsibilities: [
      "Develop and maintain automated end-to-end (E2E) test suites using Playwright or Cypress.",
      "Design automated API test collections using Postman, Newman, or Jest.",
      "Execute load and stress testing using JMeter or k6 to identify server bottlenecks.",
      "Conduct thorough manual regression and exploratory testing for critical product releases.",
      "Document detailed bug tickets with steps to reproduce, network logs, and expected outcomes.",
    ],
    requirements: [
      "3+ years of professional software quality assurance and automation experience.",
      "Hands-on scripting proficiency in TypeScript or JavaScript for automation frameworks.",
      "Strong experience testing REST APIs, database state validation, and web applications.",
      "Understanding of continuous integration pipelines (GitHub Actions) for automated testing.",
      "High attention to detail and a passion for finding edge-case vulnerabilities.",
    ],
    niceToHave: [
      "Experience with mobile app automation testing (Appium or Flutter integration test).",
      "Knowledge of OWASP security testing practices.",
    ],
    benefits: [
      "2 Festival Bonuses per year",
      "Bi-annual salary reviews",
      "Health and wellness insurance",
      "Collaborative, supportive team environment",
    ],
    status: "Open",
    postedDate: "2026-10-25",
  },
];
