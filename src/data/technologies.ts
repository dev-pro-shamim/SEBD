export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "CMS & E-commerce" | "Mobile" | "AI & Automation" | "Cloud & DevOps";
  experience: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  badgeColor: string;
}

export const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "CMS & E-commerce",
  "Mobile",
  "AI & Automation",
  "Cloud & DevOps",
] as const;

export const technologiesData: TechItem[] = [
  // FRONTEND
  {
    name: "Next.js",
    category: "Frontend",
    experience: "Production Standard",
    tagline: "The Premier React Framework for Web Production",
    description:
      "We build high-performance web applications and digital commerce experiences using Next.js App Router, React Server Components (RSC), and edge rendering for sub-second page loads and superior SEO.",
    features: ["Server-Side Rendering (SSR)", "Incremental Static Regeneration (ISR)", "Built-in Image & Font Optimization", "Edge Middleware & API Handlers"],
    useCases: ["Enterprise Web Portals", "High-Traffic E-commerce Stores", "SaaS Frontends", "Corporate Digital Platforms"],
    badgeColor: "bg-black text-white",
  },
  {
    name: "React.js",
    category: "Frontend",
    experience: "Primary Core",
    tagline: "Declarative Component-Driven User Interfaces",
    description:
      "React forms the foundational component model for all our interactive dashboards, customer self-service portals, and complex SaaS workspaces.",
    features: ["Component-Driven Architecture", "Rich Ecosystem & Community", "Virtual DOM Performance", "Hooks & State Management"],
    useCases: ["Real-Time Analytics Dashboards", "Interactive Admin Panels", "Complex Multi-Step Calculators", "Dynamic Data Grids"],
    badgeColor: "bg-sky-500/10 text-sky-600 border border-sky-300/40",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    experience: "Standard Mandate",
    tagline: "Strict Type-Safe JavaScript for Enterprise Stability",
    description:
      "We enforce TypeScript across our entire codebase to eliminate runtime errors, document interfaces automatically, and enable smooth cross-engineer collaboration.",
    features: ["Compile-Time Type Checking", "Self-Documenting Code", "Intellisense & Refactoring Safety", "Strict Null Checks"],
    useCases: ["All Enterprise Applications", "Financial Calculations", "Complex Domain Logic", "High-Concurrency APIs"],
    badgeColor: "bg-blue-600/10 text-blue-700 border border-blue-300/40",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    experience: "Primary Styling",
    tagline: "Utility-First CSS Framework for Bespoke Design Systems",
    description:
      "Tailwind allows our engineers to translate custom Figma designs into pixel-perfect, highly responsive interfaces with tiny production CSS bundle sizes.",
    features: ["Utility-First Philosophy", "Purged Minimal CSS Bundles", "Design System Consistency", "Dark Mode & Responsive Breakpoints"],
    useCases: ["Custom Design Systems", "Responsive Mobile-First Interfaces", "Modern Marketing Portals"],
    badgeColor: "bg-cyan-500/10 text-cyan-700 border border-cyan-300/40",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    experience: "Foundational",
    tagline: "Modern Asynchronous Web Execution",
    description:
      "Deep expertise in modern ECMAScript standards, asynchronous promises, event loops, WebSockets, and DOM performance optimization.",
    features: ["Asynchronous Async/Await", "Modern Array & Object APIs", "Dynamic Web Workers", "Native Browser APIs"],
    useCases: ["Client-Side Performance", "Micro-Interactions", "Browser Telemetry"],
    badgeColor: "bg-amber-500/10 text-amber-700 border border-amber-300/40",
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    experience: "Standards-Based",
    tagline: "Accessible Semantic Markup & Modern Styling",
    description:
      "Semantic HTML5 compliant with WCAG 2.1 AA accessibility guidelines, complemented by modern CSS grid, flexbox, and hardware-accelerated animations.",
    features: ["Semantic Document Outlines", "Full Accessibility (a11y)", "Fluid Flexbox & CSS Grid", "CSS Custom Properties"],
    useCases: ["Structured Content", "Screen Reader Compatibility", "SEO Foundations"],
    badgeColor: "bg-orange-500/10 text-orange-700 border border-orange-300/40",
  },

  // BACKEND
  {
    name: "Node.js",
    category: "Backend",
    experience: "Core Runtime",
    tagline: "High-Concurrency Asynchronous Event-Driven Backend",
    description:
      "Powering our microservices and REST/GraphQL APIs with non-blocking I/O capable of handling tens of thousands of concurrent connections effortlessly.",
    features: ["Event-Driven Non-Blocking I/O", "V8 Engine Performance", "Massive npm Ecosystem", "Cross-Platform Execution"],
    useCases: ["High-Throughput APIs", "Real-Time Chat & Telemetry", "Asynchronous Job Workers", "Webhook Receivers"],
    badgeColor: "bg-emerald-600/10 text-emerald-700 border border-emerald-300/40",
  },
  {
    name: "NestJS",
    category: "Backend",
    experience: "Enterprise Architecture",
    tagline: "Progressive Enterprise Node.js Framework",
    description:
      "We utilize NestJS for mission-critical enterprise backends that demand modular dependency injection, strict architectural patterns, and maintainability.",
    features: ["Modular Dependency Injection", "TypeScript-First Design", "Built-in OpenAPI/Swagger Specs", "Microservices & Message Brokers"],
    useCases: ["Enterprise ERP Backends", "Multi-Tenant SaaS Cores", "Complex Financial Services APIs", "Distributed Microservices"],
    badgeColor: "bg-rose-600/10 text-rose-700 border border-rose-300/40",
  },
  {
    name: "Express.js",
    category: "Backend",
    experience: "Lightweight Engine",
    tagline: "Fast, Unopinionated Minimalist Web Framework",
    description:
      "Used for lightweight microservices, integration webhooks, and high-speed API proxies where minimal framework overhead is paramount.",
    features: ["Ultra-Low Latency Overhead", "Flexible Middleware Stack", "battle-tested in Production", "Simple Routing"],
    useCases: ["Microservices", "Webhook Forwarders", "Lightweight REST Endpoints"],
    badgeColor: "bg-slate-600/10 text-slate-700 border border-slate-300/40",
  },
  {
    name: "PHP",
    category: "Backend",
    experience: "Advanced Mastery",
    tagline: "Modern PHP 8+ for High-Performance Platforms",
    description:
      "Leveraging PHP 8.2+ with JIT compilation, strict types, and fibers for enterprise WordPress, custom applications, and legacy system modernization.",
    features: ["PHP 8+ JIT Compilation", "Strict Type Declarations", "Fiber Asynchronous Execution", "Robust Standard Library"],
    useCases: ["Enterprise WordPress Cores", "Custom Business Portals", "Legacy Stack Modernization"],
    badgeColor: "bg-indigo-600/10 text-indigo-700 border border-indigo-300/40",
  },
  {
    name: "Laravel",
    category: "Backend",
    experience: "Full-Stack Framework",
    tagline: "Elegant Web Applications with Rapid Delivery",
    description:
      "When clients prefer a unified PHP ecosystem, Laravel provides a rich suite of tools including Eloquent ORM, queued jobs, and built-in security.",
    features: ["Eloquent ORM & Migrations", "Queue & Background Job System", "Authentication & Authorization Scaffolding", "Blade & Livewire Ecosystem"],
    useCases: ["B2B Management Portals", "Custom CRM Backends", "Subscription Applications"],
    badgeColor: "bg-red-600/10 text-red-700 border border-red-300/40",
  },

  // DATABASE
  {
    name: "PostgreSQL",
    category: "Database",
    experience: "Primary Relational DB",
    tagline: "The World's Most Advanced Open Source Relational Database",
    description:
      "Our default choice for mission-critical transactional data, complex reporting queries, financial ledgers, and ACID-compliant relational schemas.",
    features: ["Full ACID Compliance", "Native JSONB Support & Indexing", "Row-Level Security (RLS)", "pgvector Extension for AI"],
    useCases: ["ERP & Accounting Ledgers", "E-commerce Catalogs & Orders", "Multi-Tenant SaaS Data", "Vector Embeddings"],
    badgeColor: "bg-blue-600/10 text-blue-800 border border-blue-300/40",
  },
  {
    name: "MongoDB",
    category: "Database",
    experience: "NoSQL Standard",
    tagline: "Scalable Document Database for Flexible Data Models",
    description:
      "Ideal for unstructured catalogs, audit logging, content archives, and applications with rapidly evolving schemas requiring horizontal scaling.",
    features: ["JSON Document Modeling", "Horizontal Sharding & Replication", "Aggregation Pipeline Engine", "Flexible Schema Evolution"],
    useCases: ["Inquiry & Contact Portals", "Dynamic Product Catalogs", "Event Logging & Audit Streams", "Content Repositories"],
    badgeColor: "bg-emerald-600/10 text-emerald-800 border border-emerald-300/40",
  },
  {
    name: "MySQL",
    category: "Database",
    experience: "Relational Workhorse",
    tagline: "Proven Relational Database for Web and Commerce",
    description:
      "The underlying backbone for our high-scale WordPress, WooCommerce, and Laravel deployments with battle-tested performance.",
    features: ["InnoDB ACID Storage Engine", "Master-Slave Replication", "High-Volume Read Caching", "Widespread Hosting Compatibility"],
    useCases: ["WordPress / WooCommerce", "High-Traffic Content Sites", "Transactional Web Applications"],
    badgeColor: "bg-amber-600/10 text-amber-800 border border-amber-300/40",
  },
  {
    name: "Redis",
    category: "Database",
    experience: "In-Memory Speed",
    tagline: "Sub-Millisecond In-Memory Key-Value Store",
    description:
      "Used extensively for distributed session storage, database query caching, real-time rate limiting, and BullMQ background task coordination.",
    features: ["Sub-Millisecond Read/Write Latency", "Pub/Sub Messaging Capabilities", "Atomic Counters & Distributed Locks", "In-Memory Caching Strategies"],
    useCases: ["Session Management", "API Rate Limiting", "Cart Reservation Locks", "High-Speed Leaderboards"],
    badgeColor: "bg-rose-600/10 text-rose-800 border border-rose-300/40",
  },

  // CMS & E-COMMERCE
  {
    name: "WordPress",
    category: "CMS & E-commerce",
    experience: "Enterprise Architecture",
    tagline: "Custom-Engineered Clean WordPress Solutions",
    description:
      "We build lightweight, secure, and custom-coded WordPress themes and Gutenberg blocks without the sluggishness of third-party builders.",
    features: ["Custom Theme & Plugin Development", "Headless CMS API Endpoints", "Custom Gutenberg Block Libraries", "Hardened Security Protocols"],
    useCases: ["Corporate Brand Websites", "High-Volume Editorial Publications", "Marketing & Content Hubs"],
    badgeColor: "bg-blue-700/10 text-blue-900 border border-blue-300/40",
  },
  {
    name: "WooCommerce",
    category: "CMS & E-commerce",
    experience: "Scale & Customization",
    tagline: "Customized Open Commerce Platform",
    description:
      "Extending WooCommerce with custom checkout funnels, automated courier booking, local payment gateways, and warehouse inventory sync.",
    features: ["Custom Payment Gateways (bKash/SSL)", "Courier API Automated Dispatch", "Custom Product Add-on Calculators", "High-Concurrency DB Optimization"],
    useCases: ["B2C Direct-to-Consumer Stores", "Custom Ordering Workflows", "Wholesale B2B Portals"],
    badgeColor: "bg-purple-600/10 text-purple-800 border border-purple-300/40",
  },
  {
    name: "Shopify",
    category: "CMS & E-commerce",
    experience: "Liquid & Custom Apps",
    tagline: "Custom Shopify Liquid & Private App Development",
    description:
      "Developing bespoke Shopify Liquid storefronts, private integration apps, and headless Shopify setups using Hydrogen and Next.js.",
    features: ["Custom Liquid Theme Engineering", "Shopify Storefront API Integration", "Private Shopify Apps & Webhooks", "Checkout Extensibility"],
    useCases: ["International DTC Brands", "Multi-Currency Stores", "Custom Shopify Applications"],
    badgeColor: "bg-emerald-600/10 text-emerald-800 border border-emerald-300/40",
  },

  // MOBILE
  {
    name: "Flutter",
    category: "Mobile",
    experience: "Primary Mobile Stack",
    tagline: "Google's UI Toolkit for Multi-Platform Native Compilation",
    description:
      "Our flagship mobile framework delivering authentic 60fps performance on both iOS and Android from a single shared Dart codebase.",
    features: ["Direct Native Machine Code Compilation", "Pixel-Perfect Custom UI Widgets", "Offline-First Database Support", "Hardware Sensor & Bluetooth APIs"],
    useCases: ["Cross-Platform Consumer Apps", "Enterprise Field Worker Portals", "E-commerce & On-Demand Delivery Apps", "Healthcare Solutions"],
    badgeColor: "bg-sky-500/10 text-sky-700 border border-sky-300/40",
  },
  {
    name: "React Native",
    category: "Mobile",
    experience: "Cross-Platform",
    tagline: "Native Mobile Apps Powered by React",
    description:
      "Enables teams with existing React web investments to share business logic, state management, and type definitions between web and mobile apps.",
    features: ["Native UI Component Bridges", "Code Sharing With Next.js Web", "Over-the-Air Updates (OTA)", "Vibrant Native Module Ecosystem"],
    useCases: ["Companion Mobile Apps for SaaS", "Enterprise Inventory Scanners", "FinTech Mobile Banking"],
    badgeColor: "bg-cyan-600/10 text-cyan-800 border border-cyan-300/40",
  },

  // AI & AUTOMATION
  {
    name: "OpenAI API & LLMs",
    category: "AI & Automation",
    experience: "Generative AI",
    tagline: "State-of-the-Art Language Intelligence Integration",
    description:
      "Implementing GPT-4o and advanced embedding models for intelligent document analysis, customer support agents, and automated data structuring.",
    features: ["Deterministic Structured Outputs", "Function & Tool Calling Capabilities", "Vector Embeddings & Semantic Search", "Zero-Data-Retention Enterprise APIs"],
    useCases: ["Intelligent Knowledge Base RAG", "Automated PDF Ingestion", "Smart Customer Support Bots", "Automated Report Summaries"],
    badgeColor: "bg-emerald-600/10 text-emerald-800 border border-emerald-300/40",
  },
  {
    name: "Autonomous AI Agents",
    category: "AI & Automation",
    experience: "Multi-Agent Systems",
    tagline: "Goal-Oriented Autonomous Workflow Execution",
    description:
      "Designing multi-agent systems that autonomously reason, query corporate databases, evaluate inputs, and execute business actions with human oversight.",
    features: ["Multi-Agent Orchestration", "Dynamic Tool & Database Calling", "Memory & Long-Context Retention", "Self-Refining Error Correction"],
    useCases: ["Lead Qualification & Enrichment", "Automated Procurement Verification", "Support Ticket Triage"],
    badgeColor: "bg-indigo-600/10 text-indigo-800 border border-indigo-300/40",
  },
  {
    name: "n8n Workflow Automation",
    category: "AI & Automation",
    experience: "Workflow Engine",
    tagline: "Fair-Code Self-Hosted Integration & Automation Engine",
    description:
      "Connecting dozens of internal and external software tools into resilient automated pipelines hosted securely on private cloud infrastructure.",
    features: ["Self-Hosted Private Execution", "Hundreds of Pre-Built Node Adapters", "Custom JavaScript/Python Nodes", "Webhook & Scheduled Triggering"],
    useCases: ["Multi-App Data Synchronization", "Automated CRM Lead Routing", "Scheduled Report Dispatch"],
    badgeColor: "bg-orange-600/10 text-orange-800 border border-orange-300/40",
  },
  {
    name: "Automation Integrations",
    category: "AI & Automation",
    experience: "Middleware",
    tagline: "Custom Webhook & Event-Driven Bridges",
    description:
      "Bespoke middleware scripts and connectors linking accounting, payment gateways, couriers, WhatsApp Business, and internal ERP systems.",
    features: ["Bi-Directional Data Sync", "Idempotency & Retry Handlers", "Payload Schema Transformation", "Real-Time Telemetry & Error Traps"],
    useCases: ["E-Commerce to ERP Sync", "Courier Tracking Dispatch", "Automated SMS/Email Notifications"],
    badgeColor: "bg-purple-600/10 text-purple-800 border border-purple-300/40",
  },

  // CLOUD & DEVOPS
  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud & DevOps",
    experience: "Cloud Infrastructure",
    tagline: "Global Enterprise Cloud Computing Platform",
    description:
      "Architecting secure, highly available cloud environments utilizing EC2, ECS, RDS, S3, CloudFront, Lambda, and IAM security controls.",
    features: ["Global Multi-Region Availability", "Managed PostgreSQL / MySQL (RDS)", "Auto-Scaling Container Services (ECS)", "CloudWatch Metrics & Alarms"],
    useCases: ["Enterprise Production Hosting", "High-Capacity Storage Buckets", "Secure Database Clusters", "Global CDN Acceleration"],
    badgeColor: "bg-amber-600/10 text-amber-800 border border-amber-300/40",
  },
  {
    name: "Vercel",
    category: "Cloud & DevOps",
    experience: "Frontend Edge Platform",
    tagline: "Global Edge Infrastructure for Modern Web Apps",
    description:
      "Deploying our Next.js frontend applications to Vercel's global edge network for instant automatic deployments, preview branches, and sub-second asset delivery.",
    features: ["Global AnyCast Edge Network", "Automatic Git CI/CD Previews", "Serverless & Edge Functions", "Integrated Web Vitals Analytics"],
    useCases: ["Next.js App Deployments", "Global Headless Storefronts", "Marketing & Enterprise Portals"],
    badgeColor: "bg-black text-white",
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    experience: "Containerization",
    tagline: "Consistent Containerized Application Packaging",
    description:
      "Standardizing development, staging, and production environments into portable Docker containers to guarantee zero environment drift.",
    features: ["Lightweight Container Isolation", "Multi-Stage Dockerfiles for Minimal Size", "Docker Compose Local Dev Stacks", "Kubernetes & ECS Compatibility"],
    useCases: ["Microservice Deployments", "Reproducible Development Environments", "Automated CI/CD Test Runners"],
    badgeColor: "bg-blue-500/10 text-blue-700 border border-blue-300/40",
  },
  {
    name: "Nginx",
    category: "Cloud & DevOps",
    experience: "Web Server & Reverse Proxy",
    tagline: "High-Performance Reverse Proxy & Load Balancer",
    description:
      "Configuring battle-hardened reverse proxies, SSL/TLS termination, rate limiting, and HTTP/2 caching for robust production servers.",
    features: ["High-Concurrency Event Architecture", "SSL/TLS Offloading with A+ Security", "Gzip / Brotli Compression", "Micro-Caching & Reverse Proxying"],
    useCases: ["Load Balancing Node.js Clusters", "Static Asset Serving", "Rate Limiting & DDoS Buffering"],
    badgeColor: "bg-emerald-600/10 text-emerald-800 border border-emerald-300/40",
  },
  {
    name: "Cloudflare",
    category: "Cloud & DevOps",
    experience: "Edge Security & CDN",
    tagline: "Global DNS, DDoS Protection, and Web Application Firewall",
    description:
      "Shielding our client applications with Cloudflare's global anycast network, web application firewall (WAF) rules, and edge page caching.",
    features: ["Sub-Millisecond Anycast DNS", "DDoS Mitigation & Rate Limiting", "Web Application Firewall (WAF)", "Edge Image & Asset Optimization"],
    useCases: ["DNS Routing", "DDoS Protection", "Global Static Asset Acceleration", "Bot Mitigation"],
    badgeColor: "bg-orange-500/10 text-orange-700 border border-orange-300/40",
  },
];
