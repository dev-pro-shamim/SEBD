export interface ProductDetail {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge: "Production Ready" | "Enterprise Demo" | "Concept Product";
  description: string;
  heroHeadline: string;
  overview: string;
  features: { title: string; desc: string; icon: string }[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  targetAudience: string[];
  demoUrl?: string;
  inquirySlug: string;
}

export const productsData: ProductDetail[] = [
  {
    slug: "smartedge-enterprise-hub",
    name: "SmartEdge Enterprise Hub",
    tagline: "Centralized Business Operations & Resource Orchestration Platform",
    category: "Business Management Software",
    badge: "Production Ready",
    description:
      "All-in-one business management platform connecting department tasks, asset management, document workflows, and executive reporting in a unified real-time portal.",
    heroHeadline: "Complete Operational Clarity for Growing Enterprises.",
    overview:
      "Designed specifically for mid-sized and growing companies that need to replace scattered spreadsheets and uncoordinated software with a single command center. Enterprise Hub synchronizes company tasks, employee schedules, branch assets, and management KPIs.",
    features: [
      {
        title: "Multi-Branch Asset Tracking",
        desc: "Monitor physical and digital company assets, service logs, depreciation, and allocation across branches.",
        icon: "Building",
      },
      {
        title: "Department Task & Project Boards",
        desc: "Kanban and Gantt views for cross-functional initiatives with automated deadline notifications.",
        icon: "CheckSquare",
      },
      {
        title: "Secure Document Repository",
        desc: "Version-controlled cloud storage for legal contracts, trade licenses, audits, and HR policies.",
        icon: "FileText",
      },
      {
        title: "Executive KPI Dashboard",
        desc: "Live visual indicators of project milestones, department productivity, and operating costs.",
        icon: "BarChart3",
      },
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    metrics: [
      { label: "Internal Task Velocity", value: "+40%" },
      { label: "Deployment Timeline", value: "2 Weeks" },
      { label: "User Adoption Rate", value: "97%" },
    ],
    targetAudience: [
      "Mid-Sized Enterprises",
      "Corporate Group of Companies",
      "Multi-Branch Retailers",
      "Professional Services Firms",
    ],
    demoUrl: "/discuss-your-project?product=smartedge-enterprise-hub",
    inquirySlug: "smartedge-enterprise-hub",
  },
  {
    slug: "smartstock-pro",
    name: "SmartStock Pro",
    tagline: "Intelligent Multi-Warehouse Inventory & Supply Chain Engine",
    category: "Inventory Management",
    badge: "Production Ready",
    description:
      "High-throughput inventory control system with barcode scanning, automated re-ordering thresholds, batch/expiry tracking, and multi-warehouse synchronization.",
    heroHeadline: "Zero Stockouts. Zero Blindspots. Total Inventory Control.",
    overview:
      "SmartStock Pro eliminates manual stock discrepancies across warehouses, transit fleets, and retail outlets. With instant barcode/QR scanning, purchase order automation, and supplier performance metrics, you always know exact quantities and shelf locations.",
    features: [
      {
        title: "Multi-Warehouse & Bin Locations",
        desc: "Organize inventory by warehouse, aisle, shelf, and bin with instant visual location mapping.",
        icon: "Warehouse",
      },
      {
        title: "Barcode & QR Code Scanning",
        desc: "High-speed camera-based and handheld laser scanning for receiving, packing, and dispatch.",
        icon: "QrCode",
      },
      {
        title: "Automated Re-Order Triggers",
        desc: "Automatic PO drafting when stock hits safety thresholds based on seasonal sales velocity.",
        icon: "RefreshCw",
      },
      {
        title: "Batch & Expiration Management",
        desc: "FEFO (First Expired, First Out) and FIFO picking strategies ensuring zero inventory spoilage.",
        icon: "Clock",
      },
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Stock Accuracy", value: "99.9%" },
      { label: "Pick & Pack Speed", value: "3x Faster" },
      { label: "Dead Stock Reduction", value: "-60%" },
    ],
    targetAudience: [
      "Wholesale Distributors",
      "FMCG Companies",
      "E-commerce Fulfillment Centers",
      "Pharmaceutical Distributors",
    ],
    demoUrl: "/discuss-your-project?product=smartstock-pro",
    inquirySlug: "smartstock-pro",
  },
  {
    slug: "edgecrm-growth",
    name: "EdgeCRM Growth",
    tagline: "Pipeline Acceleration & Customer Relationship Intelligence",
    category: "CRM Systems",
    badge: "Enterprise Demo",
    description:
      "Streamlined B2B and B2C sales CRM with interactive deal pipelines, WhatsApp/email conversation sync, quote generation, and lead conversion analytics.",
    heroHeadline: "Turn Inquiries Into High-Value Closed Contracts.",
    overview:
      "EdgeCRM provides sales leaders and account executives with complete visibility over lead lifecycles. Track inbound inquiries from your website, WhatsApp, and phone calls, assign leads automatically to top agents, and generate branded quotations in seconds.",
    features: [
      {
        title: "Visual Kanban Deal Pipelines",
        desc: "Drag-and-drop opportunity cards through customizable deal stages with real-time revenue forecasting.",
        icon: "Kanban",
      },
      {
        title: "WhatsApp & Email Omnichannel Sync",
        desc: "Log conversations, follow-up reminders, and call notes directly inside customer profiles.",
        icon: "MessageSquare",
      },
      {
        title: "Instant PDF Quote Generator",
        desc: "Create professional, branded PDF quotations and invoices and send them to clients with one click.",
        icon: "FileCheck",
      },
      {
        title: "Sales Agent Performance Tracking",
        desc: "Monitor conversion rates, response times, and target quotas across sales team members.",
        icon: "TrendingUp",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    metrics: [
      { label: "Lead Response Time", value: "<5 Mins" },
      { label: "Quote-to-Close Rate", value: "+32%" },
      { label: "Sales Team Productivity", value: "+45%" },
    ],
    targetAudience: [
      "B2B Agencies & Consultancies",
      "Real Estate Developers",
      "Tech Startups & SaaS Teams",
      "Corporate Sales Teams",
    ],
    demoUrl: "/discuss-your-project?product=edgecrm-growth",
    inquirySlug: "edgecrm-growth",
  },
  {
    slug: "omnierp-core",
    name: "OmniERP Core",
    tagline: "Modular Enterprise Resource Planning for Manufacturing & Trading",
    category: "ERP Systems",
    badge: "Enterprise Demo",
    description:
      "Comprehensive enterprise backbone integrating procurement, double-entry general ledger, bill of materials (BOM), payroll, and multi-currency billing.",
    heroHeadline: "The Engine Powering Resilient Enterprise Operations.",
    overview:
      "OmniERP Core is built for enterprises that have outgrown fragmented commercial software and want zero per-user licensing fees. Modular design allows you to run accounting, inventory, supply chain, and human resources under a unified, audited database.",
    features: [
      {
        title: "Double-Entry General Ledger",
        desc: "Real-time chart of accounts, journal entries, balance sheets, and automated tax compliance reports.",
        icon: "CreditCard",
      },
      {
        title: "Bill of Materials & Work Orders",
        desc: "Track raw material consumption, machine runtimes, and labor costs across manufacturing batches.",
        icon: "Layers",
      },
      {
        title: "Automated Payroll & Attendance",
        desc: "Biometric attendance sync, overtime calculations, tax deductions, and bank disbursement files.",
        icon: "Users",
      },
      {
        title: "Multi-Currency & Regional Taxes",
        desc: "Automatic currency conversion and compliant VAT/tax calculations for international trade.",
        icon: "Globe",
      },
    ],
    techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    metrics: [
      { label: "Month-End Close Time", value: "2 Days" },
      { label: "Software License Savings", value: "100%" },
      { label: "Audit Traceability", value: "100%" },
    ],
    targetAudience: [
      "Manufacturing Plants",
      "Import / Export Firms",
      "Garments & Textile Mills",
      "Conglomerate Enterprises",
    ],
    demoUrl: "/discuss-your-project?product=omnierp-core",
    inquirySlug: "omnierp-core",
  },
  {
    slug: "cloudsync-engine",
    name: "CloudSync Engine",
    tagline: "Multi-Tenant SaaS Foundation & Subscription Infrastructure",
    category: "SaaS Platforms",
    badge: "Production Ready",
    description:
      "Turnkey SaaS boilerplatform with enterprise multi-tenancy, Stripe/Paddle subscription billing, organization roles, and API key provisioning.",
    heroHeadline: "Launch Your Cloud SaaS in Weeks, Not Quarters.",
    overview:
      "CloudSync Engine provides the complete foundational scaffolding for modern software companies. We have engineered all the complex requirements — tenant isolation, team invitations, webhook dispatchers, seat quotas, and recurring billing — so you can focus 100% on your unique value proposition.",
    features: [
      {
        title: "Isolated Tenant Architecture",
        desc: "Row-Level Security (RLS) ensuring strict isolation so customer data never touches other accounts.",
        icon: "Shield",
      },
      {
        title: "Stripe & Paddle Billing Engine",
        desc: "Pre-configured monthly, annual, per-seat, and usage-based tiers with automated customer invoices.",
        icon: "DollarSign",
      },
      {
        title: "Developer API & Webhook Portal",
        desc: "Self-service API keys, rate limiters, documentation, and webhook delivery logs for your customers.",
        icon: "Code",
      },
      {
        title: "Super-Admin Telemetry Portal",
        desc: "Real-time MRR, churn rate, active daily users, and system health metrics in an intuitive UI.",
        icon: "Activity",
      },
    ],
    techStack: ["Next.js 14 App Router", "TypeScript", "PostgreSQL", "Prisma/Drizzle", "Stripe", "AWS"],
    metrics: [
      { label: "Time-to-Market", value: "3 Weeks" },
      { label: "Development Effort Saved", value: "500+ Hours" },
      { label: "Enterprise Security", value: "SOC2 Ready" },
    ],
    targetAudience: [
      "SaaS Founders",
      "Venture-Backed Startups",
      "Product Studios",
      "Enterprise Spin-offs",
    ],
    demoUrl: "/discuss-your-project?product=cloudsync-engine",
    inquirySlug: "cloudsync-engine",
  },
  {
    slug: "apexcommerce-suite",
    name: "ApexCommerce Suite",
    tagline: "Headless High-Speed Digital Storefront & Order Management",
    category: "E-commerce Platforms",
    badge: "Production Ready",
    description:
      "Modern decoupled e-commerce platform boasting sub-second page loads, conversion-optimized one-page checkout, and omnichannel POS synchronization.",
    heroHeadline: "Next-Generation Headless Commerce Built for Scale.",
    overview:
      "Engineered for high-volume retail brands demanding blistering mobile page loads and flexible promotions. Decoupled Next.js frontend delivers 95+ Google Lighthouse scores, while the resilient backend handles flash-sale surges without dropping a single order.",
    features: [
      {
        title: "Sub-Second Mobile Load Times",
        desc: "Server-side rendering and edge caching ensure instant product browsing and zero bounce friction.",
        icon: "Zap",
      },
      {
        title: "Single-Page Conversion Checkout",
        desc: "One-step checkout with instant address autocomplete, coupon validation, and local mobile wallets.",
        icon: "ShoppingCart",
      },
      {
        title: "Live Logistics Booking",
        desc: "Automated shipment dispatch, tracking SMS alerts, and reverse logistics return management.",
        icon: "Truck",
      },
      {
        title: "Omnichannel Retail POS Mode",
        desc: "Cashier mode for in-store tablet checkout syncing inventory with online orders instantaneously.",
        icon: "Store",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Stripe", "bKash"],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Concurrency Tested", value: "25k Users" },
    ],
    targetAudience: [
      "Fashion & Apparel Brands",
      "Consumer Electronics",
      "Direct-to-Consumer (D2C) Retailers",
      "Omnichannel Retail Chains",
    ],
    demoUrl: "/discuss-your-project?product=apexcommerce-suite",
    inquirySlug: "apexcommerce-suite",
  },
  {
    slug: "docuintelligence-ai",
    name: "DocuIntelligence AI",
    tagline: "Private Enterprise Knowledge Retrieval & Automated OCR Engine",
    category: "AI-Powered Business Tools",
    badge: "Concept Product",
    description:
      "Confidential enterprise document intelligence platform that parses PDFs, contracts, and financial spreadsheets into actionable data using secure private LLMs.",
    heroHeadline: "Unlock the Knowledge Hidden Inside Your Enterprise Documents.",
    overview:
      "Empower your operations, legal, and finance teams to ask natural-language questions and receive instant answers with verified page citations across tens of thousands of corporate documents, PDFs, and invoices.",
    features: [
      {
        title: "Semantic Vector Search & Citations",
        desc: "Queries return precise answers with clickable citations linking directly to exact document paragraphs.",
        icon: "Search",
      },
      {
        title: "Automated OCR & Data Extraction",
        desc: "Extract vendor names, invoice lines, tax IDs, and totals into clean JSON ready for ERP ingestion.",
        icon: "FileCheck2",
      },
      {
        title: "Strict On-Prem / VPC Privacy",
        desc: "Zero customer data sent to public model training; fully isolated vector embeddings.",
        icon: "Lock",
      },
      {
        title: "Multi-Format Ingestion",
        desc: "Native support for PDF, Word, Excel, scanned images, and HTML web documentation.",
        icon: "FileStack",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenAI / Claude API", "LangChain", "Pinecone", "Next.js"],
    metrics: [
      { label: "Document Review Time", value: "-85%" },
      { label: "Data Extraction Accuracy", value: "99.4%" },
      { label: "Zero Data Leak Guarantee", value: "100%" },
    ],
    targetAudience: [
      "Legal & Compliance Firms",
      "Audit & Accounting Offices",
      "Commercial Banks & Insurance",
      "Enterprise Logistics",
    ],
    demoUrl: "/discuss-your-project?product=docuintelligence-ai",
    inquirySlug: "docuintelligence-ai",
  },
];
