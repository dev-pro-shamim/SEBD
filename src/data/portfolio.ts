export interface PortfolioProject {
  slug: string;
  title: string;
  category:
    | "Web Development"
    | "E-commerce"
    | "WordPress"
    | "SaaS Applications"
    | "Business Automation"
    | "Mobile Applications"
    | "UI/UX Design"
    | "AI Solutions";
  shortDescription: string;
  fullDescription: string;
  client: string;
  clientType: "Demonstration Project" | "Commercial Delivery";
  industry: string;
  image: string;
  gallery?: {
    title: string;
    caption: string;
    image: string;
  }[];
  technologies: string[];
  features: string[];
  architecture: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  accentGradient?: string;
  keyOutcomes: string[];
}

export const portfolioCategories = [
  "All",
  "Web Development",
  "E-commerce",
  "WordPress",
  "SaaS Applications",
  "Business Automation",
  "Mobile Applications",
  "UI/UX Design",
  "AI Solutions",
] as const;

export const portfolioProjectsData: PortfolioProject[] = [
  {
    slug: "nexus-enterprise-erp-portal",
    title: "Nexus Enterprise ERP & Operations Suite",
    category: "SaaS Applications",
    shortDescription:
      "Full-stack multi-tenant ERP suite with dynamic double-entry general ledger, multi-warehouse stock allocations, and executive financial telemetry.",
    fullDescription:
      "A flagship demonstration of SmartEdge's enterprise engineering capabilities. Nexus ERP coordinates multi-entity accounting, warehouse replenishment algorithms, purchase approval hierarchies, and role-based staff permissions in an ultra-responsive interface.",
    client: "Nexus Global Enterprises",
    clientType: "Demonstration Project",
    industry: "Industrial Manufacturing & Supply Chain",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Real-Time Warehouse Stock & Allocation Matrix",
        caption: "Multi-warehouse live inventory heatmaps, batch lot tracking, and automated supplier reorder workflows.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Executive Financial Telemetry & General Ledger",
        caption: "Instant multi-entity P&L, balance sheets, and real-time cash flow statements with sub-100ms response times.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker"],
    features: [
      "Dynamic Multi-Entity Double-Entry Accounting Ledger",
      "Interactive Multi-Warehouse Stock Heatmap & Batch Tracking",
      "Automated Reorder Point Requisitions & Supplier RFQs",
      "Granular Role-Based Access Control (RBAC) with Audit Trails",
    ],
    architecture:
      "Clean Hexagonal Architecture separating domain entities from PostgreSQL persistence adapters, backed by Redis caching for sub-100ms dashboard aggregations.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/nexus-enterprise-erp-portal",
    metrics: [
      { label: "Dashboard Query Speed", value: "< 85ms" },
      { label: "Concurrent Transactions", value: "5,000 / sec" },
      { label: "Test Coverage", value: "94%" },
    ],
    accentGradient: "from-blue-600 to-indigo-800",
    keyOutcomes: [
      "Eliminates reliance on fragmented spreadsheets with centralized data truth",
      "Calculates instant P&L and Balance Sheet reports on demand",
      "Optimized for high-volume manufacturing and trading enterprises",
    ],
  },
  {
    slug: "aurora-omnichannel-b2c-storefront",
    title: "ApexCommerce High-Conversion Omnichannel Storefront",
    category: "E-commerce",
    shortDescription:
      "Next.js headless digital commerce platform with 1-page checkout, bKash & SSLCommerz gateway integrations, and real-time courier dispatch.",
    fullDescription:
      "Engineered for high-volume retail brands. ApexCommerce solves cart abandonment with an optimized single-page checkout, dynamic product variant matrices, live courier parcel reservation, and localized payment gateway webhooks.",
    client: "Apex Lifestyle Brands",
    clientType: "Demonstration Project",
    industry: "Fashion & Consumer Lifestyle",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Frictionless Single-Page Checkout & Gateway Webhooks",
        caption: "Streamlined 1-step checkout with instant bKash, Nagad, and SSLCommerz payment reconciliation.",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Automated Courier Booking & Logistics Dispatch",
        caption: "Real-time Pathao and Steadfast parcel creation with automated SMS tracking and webhook delivery alerts.",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "SSLCommerz"],
    features: [
      "Sub-second Full-Text Search with Instant Autocomplete",
      "One-Page Frictionless Checkout with Saved Addresses",
      "Direct API Booking for Steadfast & Pathao Couriers",
      "Real-Time Flash Sale Countdown with Queue Locks",
    ],
    architecture:
      "Static generation with Incremental Static Regeneration (ISR) on Vercel, paired with a Redis queue system handling flash sale stock decrements.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/aurora-omnichannel-b2c-storefront",
    metrics: [
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Checkout Conversion Lift", value: "+32%" },
      { label: "Page Load Time", value: "0.6s" },
    ],
    accentGradient: "from-blue-500 to-cyan-700",
    keyOutcomes: [
      "Pre-renders 10,000+ SKU product pages for instant Google SEO ranking",
      "Zero stock overselling during aggressive flash campaigns",
      "Automated SMS order confirmations and live WhatsApp parcel tracking",
    ],
  },
  {
    slug: "pulseflow-ai-document-intelligence",
    title: "PulseFlow AI Document Parsing & Knowledge Engine",
    category: "AI Solutions",
    shortDescription:
      "Enterprise Retrieval-Augmented Generation (RAG) platform parsing scanned invoices, legal contracts, and corporate PDFs into structured JSON records.",
    fullDescription:
      "Leveraging modern LLMs and computer vision OCR. PulseFlow indexes gigabytes of unstructured company documents into vector embeddings, enabling natural language questions and instantaneous financial data extraction.",
    client: "PulseFlow AI Labs",
    clientType: "Demonstration Project",
    industry: "Corporate Legal & Financial Tech",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Vector Embeddings & Semantic Document Indexing",
        caption: "High-dimensional pgvector cosine similarity search enabling natural-language discovery across unstructured corporate PDFs.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Optical Character Recognition & Automated Schema Extraction",
        caption: "Precision neural OCR isolating tabular data, invoices, and legal covenants into deterministic Zod/Pydantic schemas.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "pgvector", "LangChain", "Next.js", "TypeScript", "Docker"],
    features: [
      "Multi-Page PDF Optical Character Recognition (OCR) with Table Parsing",
      "Deterministic Schema Enforcement with Pydantic and Zod",
      "Interactive Document Inspector with Bounding Box Highlights",
      "Zero-Data-Retention Compliance for Confidential Audits",
    ],
    architecture:
      "FastAPI asynchronous worker pool chunking documents and generating OpenAI text-embedding-3-small embeddings into pgvector for sub-50ms cosine similarity searches.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/pulseflow-ai-document-intelligence",
    metrics: [
      { label: "Extraction Accuracy", value: "99.4%" },
      { label: "Average Page Analysis", value: "1.8s" },
      { label: "Cost Per 100 Pages", value: "< $0.15" },
    ],
    accentGradient: "from-indigo-600 to-purple-800",
    keyOutcomes: [
      "Replaces manual data entry teams with automated machine pipelines",
      "Flags contract discrepancies and expired warranties automatically",
      "Integrates directly with ERP and accounting backends via REST webhooks",
    ],
  },
  {
    slug: "mediconnect-telehealth-mobile-app",
    title: "MediConnect Telehealth & Patient Prescription Suite",
    category: "Mobile Applications",
    shortDescription:
      "Cross-platform Flutter mobile application connecting patients with licensed physicians via encrypted video calls, e-prescriptions, and home medicine dispatch.",
    fullDescription:
      "A complete healthcare mobile ecosystem. Patients book verified specialist appointments, consult via WebRTC encrypted video, receive tamper-proof digital prescriptions with QR codes, and order medications with one tap.",
    client: "MediConnect Health Systems",
    clientType: "Demonstration Project",
    industry: "Digital Health & Telemedicine",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Peer-to-Peer HIPAA-Compliant WebRTC Video Consultations",
        caption: "Low-latency encrypted video connection with real-time vitals monitoring and doctor screen-sharing.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tamper-Proof E-Prescriptions & Pharmacy Dispatch",
        caption: "QR-verified digital prescriptions integrated directly with pharmaceutical dispensary hubs for home delivery.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Flutter", "Dart", "WebRTC", "Firebase", "Node.js", "PostgreSQL", "Agora SDK", "REST APIs"],
    features: [
      "Peer-to-Peer HIPAA-Compliant WebRTC Video Consultations",
      "Doctor E-Prescription Generator with Drug-Interaction Warnings",
      "Integrated Digital Health Record (EHR) & Lab Report Storage",
      "Push Notifications for Medication Schedules and Appointments",
    ],
    architecture:
      "Clean BLoC pattern Flutter codebase interfacing with a scalable Node.js microservices backend hosted on AWS ECS with end-to-end data encryption.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/mediconnect-telehealth-mobile-app",
    metrics: [
      { label: "Native Frame Rate", value: "60 FPS" },
      { label: "Video Call Latency", value: "< 120ms" },
      { label: "Store Review Rating", value: "4.9★" },
    ],
    accentGradient: "from-teal-600 to-emerald-800",
    keyOutcomes: [
      "Reduces hospital OPD congestion by shifting consultations to mobile",
      "Instant digital prescription verification prevents counterfeit refills",
      "Supports low-bandwidth video compression for rural cellular coverage",
    ],
  },
  {
    slug: "autoflow-webhook-orchestration-engine",
    title: "AutoFlow Enterprise Integration & Webhook Middleware",
    category: "Business Automation",
    shortDescription:
      "High-throughput event-driven integration middleware synchronizing Shopify, CRM, ERP, and local delivery fleets without manual data re-entry.",
    fullDescription:
      "Connects disparate corporate software stacks. When an order, customer inquiry, or warehouse receipt is generated anywhere in the organization, AutoFlow transforms the payload and propagates changes across all databases in real-time.",
    client: "AutoFlow Automation",
    clientType: "Demonstration Project",
    industry: "Supply Chain & Multi-Channel Retail",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Visual Node-Based Pipeline Editor",
        caption: "Configurable workflow logic connecting ERPs, Shopify, CRMs, and Slack webhooks with conditional rules.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "High-Throughput Event Streams & Dead-Letter Queues",
        caption: "BullMQ queue management processing 250,000+ daily payload events with exponential backoff auto-retries.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Node.js", "TypeScript", "n8n", "Redis", "BullMQ", "PostgreSQL", "Docker", "AWS SQS"],
    features: [
      "Visual Workflow Engine with Conditional Branching",
      "Dead-Letter Queue with Exponential Backoff Auto-Retries",
      "Real-Time Slack & WhatsApp Alerting on Pipeline Faults",
      "Bi-Directional Synchronizer for Legacy Databases",
    ],
    architecture:
      "Distributed BullMQ worker queues on Redis handling spikes of up to 10,000 webhook events per minute with zero loss and guaranteed idempotency.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/autoflow-webhook-orchestration-engine",
    metrics: [
      { label: "Events Processed Daily", value: "250K+" },
      { label: "Pipeline Reliability", value: "99.999%" },
      { label: "Execution Latency", value: "45ms" },
    ],
    accentGradient: "from-amber-600 to-orange-800",
    keyOutcomes: [
      "Eliminates 100+ weekly hours of manual data copy-pasting",
      "Guarantees data consistency between sales and inventory teams",
      "Provides complete audit visibility into every synchronized transaction",
    ],
  },
  {
    slug: "veritas-corporate-headless-cms",
    title: "Veritas Global Capital Headless Web & CMS Experience",
    category: "Web Development",
    shortDescription:
      "Next.js corporate portal engineered for an international private equity firm with interactive portfolio data visualizations and high-grade security.",
    fullDescription:
      "A sophisticated institutional portal. Features lightning-fast static generation, interactive investment return charts, dynamic press release archives, and ironclad security safeguards for high-net-worth investors.",
    client: "Veritas Global Capital",
    clientType: "Demonstration Project",
    industry: "Private Equity & Financial Services",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Interactive Portfolio Investment Performance Charts",
        caption: "Sub-second client-side Recharts visualizations displaying IRR and capital deployment for LP investors.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Hardened Institutional Investor Portal",
        caption: "Next.js App Router edge architecture with Content Security Policies, biometric session locks, and WCAG AA accessibility.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "Vercel"],
    features: [
      "Interactive Financial Performance Charts & Portfolio Filters",
      "Sub-second Page Transitions Powered by Next.js App Router",
      "WCAG 2.1 AA Accessibility Compliant Navigation",
      "Hardened Content Security Policy (CSP) & Strict Headers",
    ],
    architecture:
      "Edge-rendered React Server Components with optimized WebP asset loading and client-side animated state management via Framer Motion.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/veritas-corporate-headless-cms",
    metrics: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Mobile Usability", value: "100%" },
    ],
    accentGradient: "from-slate-700 to-navy-950",
    keyOutcomes: [
      "Positions the firm as a modern, technology-forward institutional asset manager",
      "Dramatically increases international LP engagement times on portfolio pages",
      "Zero security vulnerabilities detected across quarterly penetration audits",
    ],
  },
  {
    slug: "luxejoinery-custom-wordpress-portal",
    title: "LuxeJoinery Bespoke Architectural WordPress Platform",
    category: "WordPress",
    shortDescription:
      "Custom-coded, lightweight WordPress solution with proprietary 3D project lookbooks, zero page builder bloat, and sub-second load times.",
    fullDescription:
      "Proof that WordPress can be exceptionally fast when coded correctly. Built with custom PHP, custom Gutenberg blocks, and clean Tailwind styling without heavy, vulnerable third-party visual page builders.",
    client: "LuxeJoinery Architectural Fitouts",
    clientType: "Demonstration Project",
    industry: "Luxury Architecture & Commercial Construction",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Custom Gutenberg Architectural Lookbooks",
        caption: "Handcrafted, zero-bloat block components allowing editors to showcase architectural millwork with sub-second page loads.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "High-Resolution WebP Media Pipeline & Redis Caching",
        caption: "Proprietary image pipeline reducing page payloads by 70% while achieving a 96/100 Google PageSpeed score.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["WordPress", "PHP", "Tailwind CSS", "JavaScript", "MySQL", "Redis", "Cloudflare"],
    features: [
      "100% Handcrafted Theme Without Heavy Page Builders",
      "Custom Gutenberg Blocks for Modular Marketing Publishing",
      "Redis Object Caching with 98% Cache Hit Ratio",
      "Automated High-Resolution Image WebP Conversion Pipeline",
    ],
    architecture:
      "Optimized WordPress core running on PHP 8.3 with OPcache, Redis memory caching, and Cloudflare Edge Rules for instant global TTFB.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/luxejoinery-custom-wordpress-portal",
    metrics: [
      { label: "Page Weight", value: "< 450 KB" },
      { label: "Load Time", value: "0.85s" },
      { label: "Google PageSpeed", value: "96 / 100" },
    ],
    accentGradient: "from-stone-700 to-slate-900",
    keyOutcomes: [
      "Marketing team publishes new case studies in minutes without layout bugs",
      "Ranked #1 for commercial joinery keywords in target metropolitan areas",
      "Rock-solid uptime with zero plugin conflict crashes",
    ],
  },
  {
    slug: "fintech-design-system-uiux",
    title: "KitePay Comprehensive B2B FinTech Design System",
    category: "UI/UX Design",
    shortDescription:
      "Enterprise design system featuring 120+ modular Figma components, comprehensive design tokens, and high-fidelity interactive dashboard prototypes.",
    fullDescription:
      "A complete design architecture for a digital banking and corporate treasury platform. Includes semantic color tokens, responsive data tables, dark/light theme definitions, and interactive user micro-interactions.",
    client: "KitePay Digital Banking",
    clientType: "Demonstration Project",
    industry: "Banking & Financial Technology",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      {
        title: "Tokenized UI Component Architecture in Storybook",
        caption: "120+ modular Figma components paired 1:1 with TypeScript React tokens for buttons, inputs, modals, and charts.",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Accessible Financial Data Grid & Dark Mode Experience",
        caption: "High-density data tables passing AAA WCAG contrast standards with keyboard navigation and inline sorting.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook", "TypeScript", "React"],
    features: [
      "Comprehensive Design Token Architecture (Typography, Elevation, Color, Spacing)",
      "High-Density Financial Data Tables with Inline Filtering & Sorting",
      "Accessible Color Contrast Passing AAA WCAG Requirements",
      "Full Interactive Flow Prototypes for User Usability Validation",
    ],
    architecture:
      "Atomic design hierarchy (Atoms, Molecules, Organisms, Templates) mapped 1:1 between Figma component libraries and production React Tailwind components.",
    demoUrl: "https://smartedgebangladesh.com/portfolio/fintech-design-system-uiux",
    metrics: [
      { label: "Component Count", value: "120+ Components" },
      { label: "Developer Handoff Time", value: "-60%" },
      { label: "Accessibility Score", value: "AAA Grade" },
    ],
    accentGradient: "from-blue-700 to-indigo-900",
    keyOutcomes: [
      "Accelerated engineering sprint velocity by providing pre-built tokenized UI components",
      "Consistent branding maintained across mobile apps, web dashboards, and marketing portals",
      "User testing showed 40% reduction in customer confusion during wire transfers",
    ],
  },
];
