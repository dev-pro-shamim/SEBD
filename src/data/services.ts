export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  iconName: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  technologies: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metrics: { label: string; value: string }[];
}

const baseServices: ServiceDetail[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Tailor-made software solutions engineered specifically for your complex business logic, operational workflows, and enterprise scale.",
    category: "Enterprise Engineering",
    iconName: "Code2",
    badge: "Core Engineering",
    heroTitle: "Bespoke Enterprise Software Engineered Around Your Business Logic.",
    heroSubtitle:
      "Off-the-shelf software often forces your operations into rigid boxes. SmartEdge builds robust, scalable, and secure custom platforms designed from the ground up for your unique operational requirements.",
    challenges: [
      {
        title: "Rigid Commercial Software Limitations",
        desc: "SaaS products charge per seat and don't adapt to non-standard business workflows, leading to costly workarounds.",
      },
      {
        title: "Disjointed Internal Tools & Spreadsheets",
        desc: "Fragmented spreadsheets create data silos, duplicated manual effort, and human calculation errors.",
      },
      {
        title: "Performance & Scaling Bottlenecks",
        desc: "Existing legacy systems struggle to handle growing transactions, concurrent users, and high-frequency reporting.",
      },
    ],
    solutions: [
      {
        title: "Domain-Driven Custom Architecture",
        desc: "We analyze your exact workflows and model database structures and backend microservices directly around your operational flow.",
      },
      {
        title: "High-Throughput Distributed Backends",
        desc: "Scalable Node.js, NestJS, and Go microservices capable of processing millions of requests with sub-100ms latency.",
      },
      {
        title: "Centralized Real-Time Dashboards",
        desc: "Unified interactive portals offering instant executive visibility into inventory, finances, orders, and KPI metrics.",
      },
    ],
    features: [
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Granular permissions, multi-tenant hierarchy, audit logs, and security controls for strict regulatory compliance.",
      },
      {
        title: "API-First Architecture",
        desc: "Modular REST and GraphQL APIs for seamless synchronization with payment gateways, CRMs, logistics, and ERPs.",
      },
      {
        title: "Automated Data Pipelines",
        desc: "Scheduled background workers and queue systems (BullMQ, Redis) handling heavy computations without blocking UI.",
      },
      {
        title: "Enterprise Grade Encryption",
        desc: "AES-256 data-at-rest encryption, TLS 1.3 in-transit, secure key management, and OWASP Top 10 mitigation.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    deliverables: [
      "Full source code ownership with Git repositories",
      "Comprehensive system architecture documentation & API specs",
      "Automated CI/CD deployment pipelines on AWS/Cloud",
      "Quality assurance test suites (Unit, Integration, E2E)",
    ],
    process: [
      { step: "01", title: "Discovery & Requirements", desc: "Deep technical workshops to map workflows, edge cases, and architectural specifications." },
      { step: "02", title: "System Architecture & UI/UX", desc: "Interactive Figma wireframes, database schemas, and microservice topologies." },
      { step: "03", title: "Agile Sprint Development", desc: "Bi-weekly sprint iterations with functional live staging previews for stakeholders." },
      { step: "04", title: "Automated QA & Security", desc: "Load testing, penetration testing, cross-browser validation, and security auditing." },
      { step: "05", title: "Production Deployment", desc: "Zero-downtime containerized deployment with automated backups and telemetry." },
      { step: "06", title: "SLA Support & Scaling", desc: "24/7 technical monitoring, performance optimizations, and feature enhancements." },
    ],
    benefits: [
      { title: "Zero Recurring Seat Licenses", desc: "You own the software completely with unlimited internal users and zero vendor lock-in." },
      { title: "Exact Operational Fit", desc: "Eliminate repetitive manual manual workarounds and streamline inter-department operations." },
      { title: "Infinite Scalability", desc: "Built to expand seamlessly as your transaction volume and branch network grow." },
    ],
    faqs: [
      {
        q: "Who owns the intellectual property (IP) and source code?",
        a: "SmartEdge transfers 100% intellectual property ownership, Git repository access, and deployment credentials to your business upon project sign-off.",
      },
      {
        q: "How long does a typical custom software project take?",
        a: "MVPs and core platforms generally take 6 to 12 weeks, with bi-weekly milestone demos. Larger enterprise systems are delivered in modular agile releases.",
      },
      {
        q: "Can you integrate with our existing third-party systems?",
        a: "Yes. We regularly build bi-directional connectors for SAP, Oracle, Stripe, bKash, SSLCommerz, Salesforce, HubSpot, and custom legacy APIs.",
      },
    ],
    metrics: [
      { label: "Operational Speed", value: "+300%" },
      { label: "System Uptime", value: "99.98%" },
      { label: "Software Ownership", value: "100% IP" },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation & Workflows",
    shortDescription:
      "Automate manual, repetitive tasks across billing, inventory, HR, and customer service to eliminate errors and multiply workforce productivity.",
    category: "Operational Efficiency",
    iconName: "Zap",
    badge: "Productivity",
    heroTitle: "Eliminate Operational Friction With Intelligent Workflow Automation.",
    heroSubtitle:
      "Transform labor-intensive manual operations into automated, self-executing digital workflows. We connect your disconnected apps, databases, and teams into high-efficiency automated pipelines.",
    challenges: [
      {
        title: "Repetitive Data Entry & Human Error",
        desc: "Employees spending hours re-typing order details, invoices, and shipping records between multiple disconnected software tools.",
      },
      {
        title: "Slow Approval Bottlenecks",
        desc: "Document approvals and procurement requests getting stuck in email threads, causing customer-facing delays.",
      },
      {
        title: "Lack of Real-time Sync Across Tools",
        desc: "Inventory in warehouse systems failing to sync with sales channels, resulting in out-of-stock cancellations.",
      },
    ],
    solutions: [
      {
        title: "End-to-End Orchestrated Pipelines",
        desc: "Event-driven workflow engines that trigger automated actions the moment an order, ticket, or transaction occurs.",
      },
      {
        title: "Custom Webhook & API Middleware",
        desc: "Bridging modern apps with legacy ERPs and regional platforms (accounting, payment gateways, courier APIs).",
      },
      {
        title: "Automated Document & Invoice Generation",
        desc: "Automatic PDF invoicing, receipt dispatch, digital signatures, and accounting reconciliations without human intervention.",
      },
    ],
    features: [
      {
        title: "Event-Driven Triggers",
        desc: "Instant webhooks that react in real-time to customer events, payment confirmations, and status transitions.",
      },
      {
        title: "Multi-Platform Middleware",
        desc: "Centralized orchestrator using n8n, Node.js, and queue workers for resilient fail-safe transaction processing.",
      },
      {
        title: "Automated Error Alerting",
        desc: "Instant Slack, WhatsApp, and email alerts with automatic self-healing retries whenever a third-party endpoint fails.",
      },
      {
        title: "Audit Trails & Reporting",
        desc: "Full execution histories and analytics visualizing how much time and operational capital is saved daily.",
      },
    ],
    technologies: ["Node.js", "TypeScript", "n8n", "Redis", "BullMQ", "PostgreSQL", "Docker", "AWS SQS", "Webhooks"],
    deliverables: [
      "Custom automation middleware & connector scripts",
      "Real-time event logging and monitoring dashboard",
      "Integration testing documentation across all endpoints",
      "Staff onboarding walkthrough & operational handbook",
    ],
    process: [
      { step: "01", title: "Workflow Audit", desc: "Mapping every manual touchpoint, data handoff, and latency bottleneck in your organization." },
      { step: "02", title: "Automation Blueprint", desc: "Architecting event triggers, failover fallbacks, and schema transformation rules." },
      { step: "03", title: "Engine Engineering", desc: "Building webhook receivers, queue processors, and third-party API adapters." },
      { step: "04", title: "Sandbox Testing", desc: "Stress-testing with mock payload bursts and boundary conditions to ensure zero missed data." },
      { step: "05", title: "Live Switchover", desc: "Phased rollout with active telemetry to guarantee flawless operational continuation." },
      { step: "06", title: "Ongoing Tuning", desc: "Continuous monitoring, SLA assurance, and automation expansion as processes evolve." },
    ],
    benefits: [
      { title: "90% Reduction in Manual Tasks", desc: "Free your team from repetitive data entry to focus on high-value revenue activities." },
      { title: "Zero Transcription Errors", desc: "Automated machine-to-machine validation prevents costly discrepancies and invoice mix-ups." },
      { title: "Instant 24/7 Operations", desc: "Processes execute immediately day and night without waiting for office hours." },
    ],
    faqs: [
      {
        q: "What systems can SmartEdge automate?",
        a: "We automate CRM systems (HubSpot, Salesforce), ERPs (SAP, custom), accounting (QuickBooks, Xero), courier & logistics APIs (Steadfast, Pathao, RedX, DHL), payment gateways, WhatsApp Business, and custom SQL databases.",
      },
      {
        q: "What happens if a third-party service goes offline?",
        a: "Our queues use exponential backoff retries and dead-letter queues, ensuring no transaction is ever dropped or lost.",
      },
    ],
    metrics: [
      { label: "Manual Effort Cut", value: "85%" },
      { label: "Processing Speed", value: "Sub-Second" },
      { label: "Data Accuracy", value: "99.99%" },
    ],
  },
  {
    slug: "erp-crm-development",
    title: "ERP & CRM Development",
    shortDescription:
      "Enterprise Resource Planning and Customer Relationship Management platforms customized for manufacturing, trading, retail, and corporate operations.",
    category: "Enterprise Systems",
    iconName: "Database",
    badge: "Enterprise",
    heroTitle: "Unified Enterprise ERP & CRM Platforms Engineered for Total Operational Control.",
    heroSubtitle:
      "Consolidate inventory, procurement, multi-branch sales, human resources, accounting, and client lifecycles into a single authoritative source of truth tailored to your business rules.",
    challenges: [
      {
        title: "Information Fragmentation",
        desc: "Sales, inventory, and accounting operating in disparate silos, making real-time profit and stock visibility impossible.",
      },
      {
        title: "Excessive Foreign Software Licensing",
        desc: "International ERPs charging astronomical annual maintenance fees with minimal local support or localization.",
      },
      {
        title: "Multi-Branch Reconciliation Delays",
        desc: "Branches taking days to reconcile inventory transfers and physical counts, leading to stock leakages.",
      },
    ],
    solutions: [
      {
        title: "Integrated Central Ledger",
        desc: "Double-entry bookkeeping, automated tax calculations (VAT/Tax compliance), and real-time trial balances.",
      },
      {
        title: "Live Multi-Warehouse Inventory",
        desc: "Batch tracking, barcode/QR scanning, minimum stock alerts, and automated reorder purchase requisitions.",
      },
      {
        title: "Customer Lifecycle Pipeline",
        desc: "360-degree customer view, lead scoring, quotation generator, and automated follow-up sequences.",
      },
    ],
    features: [
      {
        title: "Multi-Branch & Warehouse Support",
        desc: "Manage multiple retail outlets, factories, and bonded warehouses from a single centralized dashboard.",
      },
      {
        title: "Automated Financial Statements",
        desc: "Instant P&L, balance sheets, cash flow projections, and accounts receivable/payable aging reports.",
      },
      {
        title: "HR & Payroll Processing",
        desc: "Employee attendance, biometric integration, leave tracking, salary disbursement, and payslip generation.",
      },
      {
        title: "Executive BI Analytics",
        desc: "Visual charts depicting profit margins per SKU, sales team conversion velocity, and customer retention metrics.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS"],
    deliverables: [
      "Custom ERP/CRM web platform and mobile executive app",
      "Database schema and data migration from legacy spreadsheets",
      "Role-based permission architecture and audit log engine",
      "Executive and staff hands-on training sessions",
    ],
    process: [
      { step: "01", title: "Enterprise Discovery", desc: "Detailed department-by-department workflow audits with finance, supply chain, and sales leaders." },
      { step: "02", title: "Data Model Architecture", desc: "Designing relational database schemas optimized for high ACID-compliance and reporting speed." },
      { step: "03", title: "Core Module Engineering", desc: "Developing inventory, sales, procurement, and accounting modules in test-driven iterations." },
      { step: "04", title: "Legacy Data Migration", desc: "Cleaning, transforming, and validating historic transactional data into the new system." },
      { step: "05", title: "User Acceptance Testing (UAT)", desc: "Departmental pilot runs and edge-case validation to ensure operational readiness." },
      { step: "06", title: "Full Go-Live & SLA", desc: "Parallel-run deployment, cutover execution, and dedicated on-call technical engineers." },
    ],
    benefits: [
      { title: "Single Source of Truth", desc: "Instantaneous clarity on inventory valuations, receivables, and operating margins." },
      { title: "Complete System Customization", desc: "Every formula, approval hierarchy, and print invoice format matches your business exactly." },
      { title: "Massive Cost Savings", desc: "Say goodbye to recurring per-seat fees of legacy foreign enterprise systems." },
    ],
    faqs: [
      {
        q: "Can the ERP system work with offline branches?",
        a: "Yes! We can implement local caching or lightweight edge synchronization so POS and branch billing continue even during internet outages.",
      },
      {
        q: "How secure is financial and payroll data?",
        a: "We implement column-level database encryption, stringent role-based access control, session timeouts, and IP whitelisting.",
      },
    ],
    metrics: [
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Closing Time", value: "70% Faster" },
      { label: "TCO Reduction", value: "60%" },
    ],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    shortDescription:
      "Modern, lightning-fast web applications built with Next.js, React, and TypeScript for world-class user experiences and conversion.",
    category: "Digital Products",
    iconName: "Globe",
    badge: "Web Engineering",
    heroTitle: "High-Performance Modern Web Applications Engineered for Scale.",
    heroSubtitle:
      "Deliver fluid, responsive, and SEO-optimized digital experiences. We engineer cloud-native web applications using Next.js and React that load instantly, convert visitors, and scale reliably under high traffic.",
    challenges: [
      {
        title: "Slow Page Speeds & Poor Core Web Vitals",
        desc: "Heavy legacy frameworks causing high bounce rates and ranking penalties on Google Search.",
      },
      {
        title: "Unresponsive & Clunky Mobile UX",
        desc: "Web interfaces that break on tablets and smartphones, turning mobile buyers away.",
      },
      {
        title: "Spaghetti Codebases & High Maintenance",
        desc: "Fragile frontends where changing one button breaks features across three other pages.",
      },
    ],
    solutions: [
      {
        title: "Next.js App Router Architecture",
        desc: "Server-side rendering (SSR), incremental static regeneration (ISR), and dynamic code-splitting for blazing sub-second load times.",
      },
      {
        title: "Pixel-Perfect Responsive UI",
        desc: "Modern Tailwind CSS design systems tested across 320px mobile up to 4K ultra-wide displays.",
      },
      {
        title: "Enterprise TypeScript Strictness",
        desc: "Type-safe architectures guaranteeing zero undefined runtime errors and seamless team collaboration.",
      },
    ],
    features: [
      {
        title: "Core Web Vitals 95+ Score",
        desc: "Optimized Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).",
      },
      {
        title: "Search Engine Optimization (SEO)",
        desc: "Server-rendered metadata, OpenGraph tags, canonical links, XML sitemaps, and Schema.org structured data.",
      },
      {
        title: "Smooth Micro-Interactions",
        desc: "Subtle, hardware-accelerated animations using Framer Motion that make the application feel modern and premium.",
      },
      {
        title: "PWA (Progressive Web App) Capabilities",
        desc: "Offline asset caching, service workers, and install-to-homescreen capabilities for app-like usability.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel", "Cloudflare"],
    deliverables: [
      "Production-grade Next.js App Router codebase",
      "Reusable UI component design system",
      "SEO and accessibility compliance audit report",
      "Deployment pipeline on Vercel or AWS with edge caching",
    ],
    process: [
      { step: "01", title: "UX Research & Wireframing", desc: "User journey mapping, information architecture, and low-fidelity prototypes." },
      { step: "02", title: "High-Fidelity UI Design", desc: "Modern visual interface design in Figma with responsive component states." },
      { step: "03", title: "Frontend Engineering", desc: "Component-driven development using React, Next.js, and strict TypeScript." },
      { step: "04", title: "API Integration & State", desc: "Connecting REST/GraphQL backends with optimistic UI updates and data caching." },
      { step: "05", title: "Cross-Device QA & Audits", desc: "Rigorous testing on Chrome, Safari, iOS, and Android devices." },
      { step: "06", title: "Edge Deployment & Monitoring", desc: "CDN distribution, Core Web Vitals telemetry, and ongoing enhancements." },
    ],
    benefits: [
      { title: "Sub-Second Page Loads", desc: "Delight users and rank higher on Google search results." },
      { title: "Higher Conversion Rates", desc: "Intuitive user journeys and friction-free forms drive measurable sales growth." },
      { title: "Future-Proof Foundation", desc: "Clean TypeScript modularity makes adding new features effortless." },
    ],
    faqs: [
      {
        q: "Why do you recommend Next.js over traditional single-page apps?",
        a: "Next.js offers the best of both worlds: pre-rendered HTML for instant search engine indexing and sub-second page loads, combined with dynamic React client interactivity.",
      },
      {
        q: "Will the website work seamlessly on slow mobile networks?",
        a: "Yes. We optimize bundle sizes, implement WebP/AVIF images, and use edge caching to ensure quick rendering even on 3G connections.",
      },
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "95+" },
      { label: "Page Load Time", value: "< 0.8s" },
      { label: "Mobile Bounce Reduction", value: "-42%" },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortDescription:
      "Native-grade iOS and Android mobile applications built using Flutter and React Native with offline sync, biometric security, and push notifications.",
    category: "Mobile Engineering",
    iconName: "Smartphone",
    badge: "iOS & Android",
    heroTitle: "Intuitive, High-Performance Mobile Apps for iOS and Android.",
    heroSubtitle:
      "Engage your customers and mobilize your workforce with beautifully crafted mobile apps. We engineer cross-platform mobile solutions delivering native 60fps performance, offline resilience, and delightful UX.",
    challenges: [
      {
        title: "High Cost of Separate Native Codebases",
        desc: "Maintaining separate Swift (iOS) and Kotlin (Android) engineering teams doubles development and maintenance budgets.",
      },
      {
        title: "Spotty Network Connectivity",
        desc: "Apps crashing or freezing when users enter elevators, underground basements, or areas with weak cellular coverage.",
      },
      {
        title: "App Store Rejections & Review Delays",
        desc: "Failing strict Apple App Store and Google Play guidelines on permissions, security, and interface guidelines.",
      },
    ],
    solutions: [
      {
        title: "Cross-Platform Frameworks (Flutter / React Native)",
        desc: "Single codebase delivering authentic native look, feel, and hardware performance on both iOS and Android.",
      },
      {
        title: "Offline-First Data Synchronization",
        desc: "Local SQLite/Hive databases storing transactions locally and syncing seamlessly once internet connection resumes.",
      },
      {
        title: "Flawless Store Submission Guarantee",
        desc: "End-to-end management of iOS Apple Developer and Google Play Console certificates, compliance, and launches.",
      },
    ],
    features: [
      {
        title: "Hardware Hardware Integration",
        desc: "Camera, GPS geolocation, QR/barcode scanning, Bluetooth thermal printers, and biometric FaceID/fingerprint.",
      },
      {
        title: "Real-Time Push Notifications",
        desc: "Firebase Cloud Messaging (FCM) and OneSignal integration for targeted transactional and promotional alerts.",
      },
      {
        title: "In-App Payment Gateways",
        desc: "Secure checkout integrating Apple Pay, Google Pay, Stripe, bKash, and local credit card providers.",
      },
      {
        title: "Real-Time Crash Telemetry",
        desc: "Sentry and Firebase Crashlytics monitoring for instant crash reproduction and bug fixes.",
      },
    ],
    technologies: ["Flutter", "Dart", "React Native", "Firebase", "SQLite", "Node.js", "REST APIs", "App Store Connect"],
    deliverables: [
      "Complete cross-platform Flutter/React Native source code",
      "Published production builds on Apple App Store & Google Play Store",
      "API backend and push notification dispatch portal",
      "Store listing graphics, screenshots, and privacy policies",
    ],
    process: [
      { step: "01", title: "Mobile UX Prototyping", desc: "Interactive mobile wireframes adhering to iOS Human Interface and Material Design standards." },
      { step: "02", title: "Architecture & State Planning", desc: "Setting up clean BLoC / Riverpod state architecture and offline-first database layers." },
      { step: "03", title: "App Engineering Sprints", desc: "Building screens, hardware connectors, API handlers, and unit tests." },
      { step: "04", title: "Real Device Testing", desc: "Beta distributions via TestFlight and Google Play Internal Testing tracks across dozens of device models." },
      { step: "05", title: "Store Submission & Launch", desc: "Managing store approval, metadata optimization, and production release." },
      { step: "06", title: "Post-Launch Updates", desc: "OS compatibility patches, analytics monitoring, and continuous feature rollouts." },
    ],
    benefits: [
      { title: "50% Savings in Development Cost", desc: "Single codebase cuts development, testing, and maintenance costs in half." },
      { title: "Consistent User Experience", desc: "Unified branding and flawless functionality across both iPhone and Android users." },
      { title: "Direct Customer Engagement", desc: "Push notifications boast 7x higher open rates than conventional email marketing." },
    ],
    faqs: [
      {
        q: "Do you publish the app under our company's developer accounts?",
        a: "Yes. We set up and publish the application directly under your own Apple Developer and Google Play Console accounts, ensuring 100% brand ownership.",
      },
      {
        q: "Can the app work offline?",
        a: "Absolutely. We engineer local databases that store critical data so users can create orders or inspect data even without an active connection.",
      },
    ],
    metrics: [
      { label: "App Store Rating", value: "4.8★ Avg" },
      { label: "Frame Rate", value: "60 FPS Native" },
      { label: "Code Reusability", value: "95%" },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce & Multi-Vendor Marketplaces",
    shortDescription:
      "High-converting online stores, multi-vendor marketplaces, and headless digital commerce platforms with seamless payment and courier integrations.",
    category: "Digital Commerce",
    iconName: "ShoppingCart",
    badge: "Commerce",
    heroTitle: "High-Conversion E-Commerce & Multi-Vendor Marketplaces.",
    heroSubtitle:
      "Scale your digital commerce revenue. SmartEdge engineers high-volume B2C storefronts, multi-vendor seller portals, and custom B2B wholesale platforms equipped with automated checkout, payment gateways, and courier logistics.",
    challenges: [
      {
        title: "Cart Abandonment at Checkout",
        desc: "Complex, multi-step checkout processes causing over 70% of potential buyers to leave without purchasing.",
      },
      {
        title: "Inventory Overselling & Sync Failures",
        desc: "Orders coming in for products that are out of stock in physical stores or warehouses, resulting in negative reviews.",
      },
      {
        title: "Complex Multi-Vendor Commission Splitting",
        desc: "Manual calculation of vendor payouts, returns, platform commissions, and courier delivery deductions.",
      },
    ],
    solutions: [
      {
        title: "One-Page Frictionless Checkout",
        desc: "Optimized single-page checkout supporting guest purchases, OTP verification, and saved delivery addresses.",
      },
      {
        title: "Multi-Channel Real-Time Inventory Sync",
        desc: "Instant stock reservation during checkout with automated warehouse inventory decrements.",
      },
      {
        title: "Automated Marketplace Ledger",
        desc: "Automated vendor balance calculation, commission deductions, automated invoice generation, and seller payout request systems.",
      },
    ],
    features: [
      {
        title: "Multi-Gateway Payment Integration",
        desc: "Support for bKash, Nagad, Rocket, SSLCommerz, Stripe, PayPal, Apple Pay, and Cash on Delivery (COD).",
      },
      {
        title: "Courier API Automated Booking",
        desc: "Direct integration with Steadfast, Pathao, RedX, and eCourier for automated parcel generation and live tracking.",
      },
      {
        title: "Smart Discount & Coupon Engine",
        desc: "Tiered discounts, buy-one-get-one, referral codes, flash sales, and customer group wholesale pricing.",
      },
      {
        title: "Vendor Portal & Analytics",
        desc: "Dedicated merchant dashboards for product uploads, order processing, shipping labels, and payout requests.",
      },
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Stripe", "SSLCommerz", "Tailwind CSS", "AWS S3"],
    deliverables: [
      "Customer storefront web application + Mobile PWA",
      "Merchant / Vendor management portal",
      "Executive super-admin back-office",
      "Courier and payment gateway integration configurations",
    ],
    process: [
      { step: "01", title: "Commerce Strategy", desc: "Catalog architecture, category taxonomy, shipping rules, and payment gateways." },
      { step: "02", title: "High-Conversion UX", desc: "Design focused on conversion: intuitive filters, instant search, and streamlined cart." },
      { step: "03", title: "Storefront & Engine Engineering", desc: "Building the fast Next.js frontend and robust order management backend." },
      { step: "04", title: "Logistics & Gateways Integration", desc: "Configuring payment webhooks and shipping courier API integrations." },
      { step: "05", title: "Load & Security Testing", desc: "Simulating flash sales with 10,000+ concurrent users to ensure zero server crashes." },
      { step: "06", title: "Launch & Growth Support", desc: "Production launch, conversion tracking setup, and ongoing technical maintenance." },
    ],
    benefits: [
      { title: "Up to 35% Higher Checkout Conversion", desc: "Fast, frictionless checkout directly drives higher finished transactions." },
      { title: "Zero Manual Courier Paperwork", desc: "Automated parcel creation saves warehouse personnel hours every day." },
      { title: "Flash-Sale Scalability", desc: "Handles traffic spikes without slowing down or showing database timeout errors." },
    ],
    faqs: [
      {
        q: "Can you migrate our existing store from WooCommerce or Shopify to a custom Next.js stack?",
        a: "Yes. We execute seamless data migrations including past customer accounts, order history, products, images, and SEO URLs.",
      },
      {
        q: "Does the system support Cash on Delivery (COD) with fraud prevention?",
        a: "Yes. We implement SMS OTP mobile verification and delivery success rate scoring to minimize fraudulent COD orders.",
      },
    ],
    metrics: [
      { label: "Checkout Speed", value: "3x Faster" },
      { label: "Cart Abandonment", value: "-28%" },
      { label: "Order Throughput", value: "10k+ / hour" },
    ],
  },
  {
    slug: "wordpress-development",
    title: "WordPress & Headless CMS Development",
    shortDescription:
      "Enterprise WordPress, custom plugin development, WooCommerce customizations, and Headless WordPress solutions with high security and speed.",
    category: "Content Management",
    iconName: "FileCode",
    badge: "CMS Engineering",
    heroTitle: "Enterprise WordPress & Headless CMS Engineered for Speed & Security.",
    heroSubtitle:
      "Move beyond slow, bloated themes. SmartEdge builds lightweight, custom-coded WordPress themes, high-performance headless architectures with Next.js, and bespoke plugins that deliver uncompromised security and speed.",
    challenges: [
      {
        title: "Bloated Themes & Plugin Conflicts",
        desc: "Over-reliance on heavy visual builders causing slow load times (5s+), broken layouts, and plugin incompatibility.",
      },
      {
        title: "Frequent Security Vulnerabilities",
        desc: "Outdated third-party plugins leading to malware infections, spam injections, and website blacklisting.",
      },
      {
        title: "Clunky Content Editing Experience",
        desc: "Marketing teams struggling to update landing pages without accidentally breaking the visual layout.",
      },
    ],
    solutions: [
      {
        title: "Bespoke Clean-Coded Themes",
        desc: "Zero bloated theme frameworks. Handcrafted PHP and Tailwind themes built precisely for your brand.",
      },
      {
        title: "Headless WordPress with Next.js",
        desc: "WordPress as a headless content API connected to a blazing-fast Next.js frontend for unhackable speed and security.",
      },
      {
        title: "Custom Gutenberg Block Libraries",
        desc: "Custom native block components empowering non-technical editors to create consistent pages safely.",
      },
    ],
    features: [
      {
        title: "Custom WordPress Plugins",
        desc: "Tailor-made plugins for unique business calculators, customer portals, and proprietary third-party integrations.",
      },
      {
        title: "Hardened Security Configuration",
        desc: "Database prefix masking, two-factor authentication, WP-Admin IP restrictions, and Cloudflare WAF protection.",
      },
      {
        title: "Advanced Caching & CDN",
        desc: "Redis object caching, OPcache, and full-page edge caching delivering sub-second TTFB globally.",
      },
      {
        title: "WooCommerce Optimization",
        desc: "High-volume WooCommerce scaling, checkout optimizations, and custom payment gateway integration.",
      },
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Next.js", "GraphQL", "Tailwind CSS", "Redis", "Cloudflare"],
    deliverables: [
      "Custom-coded WordPress theme & child theme",
      "Custom Gutenberg block suite for marketing teams",
      "Security hardening checklist and firewall configuration",
      "Automated off-site backup workflow to AWS S3",
    ],
    process: [
      { step: "01", title: "CMS Architecture", desc: "Content modeling, taxonomy definition, and editor role permissions planning." },
      { step: "02", title: "Custom Theme Engineering", desc: "Clean, accessible HTML5/CSS3/PHP development following WordPress VIP coding standards." },
      { step: "03", title: "Block Library Creation", desc: "Building modular Gutenberg blocks matching Figma brand guidelines." },
      { step: "04", title: "Performance & Security Hardening", desc: "Object cache tuning, image compression, database query optimization, and firewall setup." },
      { step: "05", title: "Content Migration", desc: "Migrating articles, media libraries, and redirect mappings with zero SEO loss." },
      { step: "06", title: "Training & SLA Support", desc: "Staff training and ongoing WordPress core/plugin update management." },
    ],
    benefits: [
      { title: "Lightning Fast Speed", desc: "Sub-second load times without reliance on heavy page builders." },
      { title: "Bank-Grade Security", desc: "Hardened setup immune to common automated WordPress vulnerability exploits." },
      { title: "Effortless Marketing Agility", desc: "Your content team can publish landing pages in minutes using custom blocks." },
    ],
    faqs: [
      {
        q: "What is Headless WordPress?",
        a: "Headless WordPress decouples the WordPress admin backend from the public frontend. Content editors still use the familiar WordPress dashboard, while visitors experience a super-fast, modern Next.js frontend.",
      },
      {
        q: "Do you keep WordPress updated safely?",
        a: "Yes. Our maintenance packages test all core and plugin updates in a staging environment before pushing to production.",
      },
    ],
    metrics: [
      { label: "Page Load Speed", value: "< 1.0s" },
      { label: "Security Incidents", value: "0 reported" },
      { label: "Editor Productivity", value: "3x Faster" },
    ],
  },
  {
    slug: "dedicated-development-teams",
    title: "Dedicated Development Teams",
    shortDescription:
      "Scale your engineering capacity with vetted, full-time senior software engineers, tech leads, and QA specialists working directly with your team.",
    category: "Team Augmentation",
    iconName: "Users",
    badge: "Staff Augmentation",
    heroTitle: "Scale Your Technical Capacity With Dedicated Senior Engineers.",
    heroSubtitle:
      "Skip months of expensive local recruiting. SmartEdge provides pre-vetted, English-fluent senior software engineers, frontend specialists, backend architects, and QA engineers dedicated 100% exclusively to your product roadmap.",
    challenges: [
      {
        title: "Prohibitive Local Hiring Costs & Scarcity",
        desc: "Finding senior software engineers in North America and Europe takes months and costs over $150k+ per engineer in overhead.",
      },
      {
        title: "Unreliable Freelancer Turnovers",
        desc: "Freelancers disappearing midway through critical releases, leaving undocumented spaghetti code behind.",
      },
      {
        title: "Timezone & Communication Misalignment",
        desc: "Offshore agencies with poor communication, lack of product ownership, and missed delivery deadlines.",
      },
    ],
    solutions: [
      {
        title: "Vetted Senior Engineering Talent",
        desc: "Top 3% engineers with 5+ years of verified production experience across modern tech stacks.",
      },
      {
        title: "Seamless Team Integration",
        desc: "Engineers join your Slack, Jira, GitHub, and daily standups, operating as an organic extension of your in-house team.",
      },
      {
        title: "Practical Timezone Overlap",
        desc: "Guaranteed 4 to 6 hours of daily working overlap with your business hours in USA, UK, Europe, or Australia.",
      },
    ],
    features: [
      {
        title: "Full-Time Dedicated Allocation",
        desc: "Your assigned engineers work exclusively for your company. Zero split-attention across other projects.",
      },
      {
        title: "Flexible Scaling Up & Down",
        desc: "Easily scale your team from 2 to 10+ engineers as your development milestones require, without long-term severance liabilities.",
      },
      {
        title: "Technical Lead Oversight",
        desc: "Every dedicated pod is supported by a SmartEdge Principal Architect conducting regular code reviews and technical guidance.",
      },
      {
        title: "Complete IP & Code Protection",
        desc: "Standard international NDAs and proprietary IP transfer agreements ensuring your intellectual property is 100% secure.",
      },
    ],
    technologies: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "Python", "Flutter", "PostgreSQL", "AWS", "Docker"],
    deliverables: [
      "Dedicated full-time software engineers working in your tools",
      "Daily asynchronous check-ins and sprint demo participation",
      "Weekly velocity reports and code contribution commits",
      "On-demand senior architect architectural reviews",
    ],
    process: [
      { step: "01", title: "Talent Discovery", desc: "Analyzing your required tech stack, seniority requirements, and sprint methodologies." },
      { step: "02", title: "Candidate Shortlisting", desc: "Reviewing vetted candidate resumes and conducting technical video interviews with your leads." },
      { step: "03", title: "2-Week Risk-Free Trial", desc: "Onboarding the selected engineer to your codebase with a 14-day satisfaction guarantee." },
      { step: "04", title: "Agile Sprint Delivery", desc: "Engineers participate in your daily standups, Jira tickets, and GitHub pull requests." },
      { step: "05", title: "Quarterly Performance Reviews", desc: "Ongoing engineering check-ins and performance management by our engineering directors." },
      { step: "06", title: "Long-Term Retention", desc: "Comprehensive benefits and professional growth ensuring industry-low engineer turnover." },
    ],
    benefits: [
      { title: "60% Reduction in Engineering Costs", desc: "Access world-class senior engineering talent at a fraction of domestic agency rates." },
      { title: "Rapid 1-Week Onboarding", desc: "Have qualified engineers contributing commits to your repository within 5 to 7 business days." },
      { title: "Zero HR & Payroll Headaches", desc: "SmartEdge handles workstations, healthcare, taxes, equipment, and office facilities." },
    ],
    faqs: [
      {
        q: "How does communication and task management work?",
        a: "Your dedicated engineers join your existing collaboration stack: Slack/Teams, Jira/Linear, GitHub/GitLab, and join your daily video standups.",
      },
      {
        q: "What if an engineer is not the right fit?",
        a: "We offer a 14-day risk-free replacement guarantee. If a candidate does not meet your expectations, we provide an immediate senior replacement at no additional cost.",
      },
    ],
    metrics: [
      { label: "Cost Savings", value: "Up to 60%" },
      { label: "Onboarding Time", value: "< 7 Days" },
      { label: "Retention Rate", value: "96%" },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Product Engineering",
    shortDescription:
      "End-to-end multi-tenant Software-as-a-Service (SaaS) architecture, subscription billing, tenant isolation, and scalable cloud infrastructure.",
    category: "Cloud Products",
    iconName: "Cloud",
    badge: "SaaS Scale",
    heroTitle: "End-to-End SaaS Product Engineering From MVP to Enterprise Scale.",
    heroSubtitle:
      "Turn your software idea into a profitable recurring revenue business. SmartEdge architects multi-tenant SaaS platforms with secure data isolation, Stripe recurring subscription billing, user tiering, and microservices scalability.",
    challenges: [
      {
        title: "Multi-Tenant Data Leak Risks",
        desc: "Poor architectural design risking cross-tenant data contamination between competing enterprise subscribers.",
      },
      {
        title: "Complex Subscription Billing Cycles",
        desc: "Handling plan upgrades, prorations, usage-based metering, failed payments, and automated churn recovery.",
      },
      {
        title: "Spiking Cloud Costs at Scale",
        desc: "Unoptimized serverless queries and database connections driving infrastructure bills through the roof.",
      },
    ],
    solutions: [
      {
        title: "Tenant-Isolated Schema Architecture",
        desc: "Row-level security (RLS) and schema isolation ensuring zero risk of unauthorized cross-tenant data leakage.",
      },
      {
        title: "Stripe Billing & Customer Portal",
        desc: "Fully automated recurring subscriptions, trial periods, seat add-ons, invoice generation, and dunning workflows.",
      },
      {
        title: "Cost-Optimized Cloud Infrastructure",
        desc: "Containerized auto-scaling microservices on AWS and Vercel keeping cloud costs tightly proportional to revenue.",
      },
    ],
    features: [
      {
        title: "Multi-Tier Subscription Model",
        desc: "Configurable feature flags for Free, Pro, and Enterprise tiers with automated feature gating.",
      },
      {
        title: "Team Workspaces & Invitations",
        desc: "Multi-user organization accounts with admin, manager, and member role privileges.",
      },
      {
        title: "REST & Webhook Developer APIs",
        desc: "Public API key generation and webhook dispatch for enterprise customers looking to build integrations.",
      },
      {
        title: "Audit Logging & SOC2 Preparedness",
        desc: "Immutable activity logs, data export compliance, and encryption standards required by enterprise procurement.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Stripe", "Redis", "Docker", "AWS"],
    deliverables: [
      "Production-ready multi-tenant SaaS platform",
      "Stripe Billing integration with webhook handling",
      "Admin super-portal for tenant management and revenue metrics",
      "Comprehensive API documentation using Swagger / OpenAPI",
    ],
    process: [
      { step: "01", title: "Product Discovery & Scope", desc: "Defining core user personas, value proposition, and MVP feature boundaries." },
      { step: "02", title: "SaaS Architecture Design", desc: "Modeling tenancy isolation, billing lifecycle, and database schemas." },
      { step: "03", title: "Interactive UI/UX Prototyping", desc: "Designing intuitive onboarding funnels and clean analytics dashboards in Figma." },
      { step: "04", title: "Agile MVP Development", desc: "Building the core functional loops, authentication, and billing infrastructure." },
      { step: "05", title: "Beta Launch & Feedback", desc: "Private customer cohort testing, telemetry collection, and bug polishing." },
      { step: "06", title: "Enterprise Scaling", desc: "Adding advanced team permissions, SSO, and international localization." },
    ],
    benefits: [
      { title: "Rapid Time-to-Market", desc: "Launch a production-ready SaaS MVP in 8 to 12 weeks to validate demand and attract capital." },
      { title: "Enterprise Procurement Ready", desc: "Built with security, audit logs, and data isolation that enterprise enterprise buyers demand." },
      { title: "High Retention UX", desc: "Intuitive self-serve onboarding minimizes customer churn and support ticket overhead." },
    ],
    faqs: [
      {
        q: "How do you handle multi-tenancy in the database?",
        a: "Depending on your industry compliance requirements, we implement either shared-database with Row-Level Security (RLS) or separate database-per-tenant schemas for high-compliance enterprise clients.",
      },
      {
        q: "Can you implement Single Sign-On (SSO) for corporate clients?",
        a: "Yes. We support SAML 2.0, Okta, Azure AD, and Google Workspace SSO integration for enterprise accounts.",
      },
    ],
    metrics: [
      { label: "MVP Launch Time", value: "8-10 Weeks" },
      { label: "Tenant Isolation", value: "100% Secure" },
      { label: "Billing Automation", value: "Zero Touch" },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Integration & Intelligent Automation",
    shortDescription:
      "Empower your business with custom LLM integrations, AI agents, automated document extraction, and smart conversational assistants.",
    category: "Emerging Tech",
    iconName: "Cpu",
    badge: "AI Powered",
    heroTitle: "Supercharge Your Operations With Custom AI Agents & Integrations.",
    heroSubtitle:
      "Harness the power of generative AI and machine learning. SmartEdge builds enterprise AI agents, Retrieval-Augmented Generation (RAG) knowledge bases, and automated document analysis pipelines tailored to your proprietary data.",
    challenges: [
      {
        title: "Generic Public AI Hallucinations",
        desc: "Public ChatGPT models making up facts because they don't understand your company's proprietary documents and internal data.",
      },
      {
        title: "Manual Document Analysis Overhead",
        desc: "Staff spending hundreds of hours reading PDF contracts, invoices, and resumes to extract key figures.",
      },
      {
        title: "Customer Support Delays & Staff Costs",
        desc: "Support teams overwhelmed with repetitive inquiries outside business hours, leading to frustrated customers.",
      },
    ],
    solutions: [
      {
        title: "Enterprise RAG Systems",
        desc: "Retrieval-Augmented Generation linking OpenAI / Claude models directly with your private PDFs, databases, and knowledge bases.",
      },
      {
        title: "Automated OCR & Vision Extraction",
        desc: "Machine learning vision models extracting structured data from scanned invoices, receipts, and identity documents in seconds.",
      },
      {
        title: "Intelligent AI Customer Agents",
        desc: "Conversational agents that answer complex product queries, check order statuses, and take bookings 24/7 on WhatsApp and web.",
      },
    ],
    features: [
      {
        title: "Proprietary Data Privacy",
        desc: "Zero data leakage. Enterprise API connections where your proprietary data is never used to train public foundational models.",
      },
      {
        title: "Multi-Model Flexibility",
        desc: "Intelligently routing tasks across OpenAI GPT-4o, Anthropic Claude, and local open-source models (Llama 3) for maximum cost-performance.",
      },
      {
        title: "Autonomous Action Execution",
        desc: "AI agents that can autonomously query your SQL database, trigger webhooks, draft emails, and update CRM records.",
      },
      {
        title: "Human-in-the-Loop Review",
        desc: "Verification workflows flagging low-confidence extractions for human approval before finalizing transactions.",
      },
    ],
    technologies: ["OpenAI API", "LangChain", "LlamaIndex", "Python", "FastAPI", "Pinecone", "pgvector", "Next.js", "Docker"],
    deliverables: [
      "Custom AI agent backend & vector search database",
      "Interactive conversational web widget / WhatsApp integration",
      "Internal knowledge base indexing and document ingestion pipeline",
      "Latency, token cost, and accuracy monitoring dashboard",
    ],
    process: [
      { step: "01", title: "AI Feasibility Audit", desc: "Identifying high-ROI workflows where AI can save hours and reduce errors." },
      { step: "02", title: "Data Preparation & Vectorization", desc: "Cleaning, chunking, and embedding internal documentation into high-speed vector stores." },
      { step: "03", title: "Prompt Engineering & RAG Pipeline", desc: "Crafting system prompts, guardrails, and deterministic tool-calling logic." },
      { step: "04", title: "Benchmark Evaluation", desc: "Testing agent responses against hundreds of historical customer interactions to ensure accuracy." },
      { step: "05", title: "System Integration", desc: "Connecting the AI engine with your ERP, CRM, WhatsApp Business, and customer portals." },
      { step: "06", title: "Continuous Fine-Tuning", desc: "Monitoring token usage, hallucination metrics, and updating the knowledge index." },
    ],
    benefits: [
      { title: "24/7 Instantaneous Responses", desc: "Resolve over 65% of customer inquiries immediately without human agent intervention." },
      { title: "Zero Manual Data Entry", desc: "Extract invoices and contracts into your ERP in 2 seconds with 99%+ accuracy." },
      { title: "Strict Data Governance", desc: "Your intellectual property remains strictly confidential and protected by enterprise NDAs." },
    ],
    faqs: [
      {
        q: "Will our company data be used to train AI models?",
        a: "No. We utilize commercial enterprise API endpoints with zero-data-retention guarantees, ensuring your proprietary business data is never ingested for model training.",
      },
      {
        q: "Can the AI agent take real actions like cancelling orders or updating databases?",
        a: "Yes! Using secure function calling and API middleware with strict authorization checks, our AI agents can safely query and update your systems.",
      },
    ],
    metrics: [
      { label: "Support Resolution", value: "65% Automated" },
      { label: "Document Processing", value: "2 Seconds" },
      { label: "Extraction Accuracy", value: "99.2%" },
    ],
  },
  {
    slug: "software-modernization",
    title: "Software Modernization",
    shortDescription:
      "Transform legacy, monolithic, and obsolete codebases into modern cloud-native architectures with zero downtime and improved security.",
    category: "Modernization",
    iconName: "RefreshCw",
    badge: "Transformation",
    heroTitle: "Modernize Legacy Software Without Operational Disruption.",
    heroSubtitle:
      "Don't let aging tech stacks hold your business back. SmartEdge refactors legacy PHP, monolithic architectures, and slow desktop software into high-performance, cloud-native web and mobile solutions with zero data loss.",
    challenges: [
      {
        title: "High Maintenance Costs of Legacy Stacks",
        desc: "Outdated frameworks like PHP 5, AngularJS, or legacy ASP that no modern developer wants to maintain.",
      },
      {
        title: "Severe Security Vulnerabilities",
        desc: "End-of-life dependencies and unpatched server stacks vulnerable to cyberattacks and compliance failures.",
      },
      {
        title: "Inability to Integrate Modern Tools",
        desc: "Old monolithic databases that cannot interface with modern payment gateways, mobile apps, or cloud analytics.",
      },
    ],
    solutions: [
      {
        title: "Strangler Fig Migration Strategy",
        desc: "Incrementally replacing legacy modules one-by-one with modern Next.js/Node microservices to eliminate big-bang failure risk.",
      },
      {
        title: "Cloud Infrastructure Re-Platforming",
        desc: "Moving old physical servers to containerized AWS/Cloud infrastructure with auto-scaling and automated backups.",
      },
      {
        title: "Database Refactoring & Normalization",
        desc: "Transforming slow legacy schemas into optimized PostgreSQL/MongoDB structures with fast indexing.",
      },
    ],
    features: [
      {
        title: "Zero Downtime Cutover",
        desc: "Dual-write synchronization pipelines ensuring continuous 24/7 business operations during the transition.",
      },
      {
        title: "API Layer Wrapping",
        desc: "Creating modern REST and GraphQL APIs around existing legacy databases before rewriting the user interfaces.",
      },
      {
        title: "Automated Regression Testing",
        desc: "Comprehensive test suites ensuring new code outputs the exact same business results as the legacy system.",
      },
      {
        title: "Modern UI/UX Overhaul",
        desc: "Upgrading dated visual interfaces to clean, responsive, and mobile-friendly enterprise design standards.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Docker", "PostgreSQL", "AWS", "Nginx"],
    deliverables: [
      "Modernized cloud-native codebase with clean documentation",
      "Historical data migration scripts and verification audit logs",
      "Containerized Docker setup with automated CI/CD pipelines",
      "Rollback safeguards and monitoring telemetry",
    ],
    process: [
      { step: "01", title: "Codebase & Architecture Audit", desc: "Analyzing legacy code, dependencies, database queries, and security vulnerabilities." },
      { step: "02", title: "Modernization Roadmap", desc: "Designing an incremental phase-by-phase migration plan that minimizes operational risk." },
      { step: "03", title: "API Gateway Facade", desc: "Wrapping the legacy backend with modern RESTful endpoints for immediate modernization." },
      { step: "04", title: "Module-by-Module Rewrites", desc: "Rebuilding high-priority modules into modern TypeScript and Next.js components." },
      { step: "05", title: "Parallel Testing & Data Sync", desc: "Running new and legacy systems side-by-side to verify financial and transactional accuracy." },
      { step: "06", title: "Decommissioning & Celebration", desc: "Safely shutting down legacy servers, slashing maintenance costs permanently." },
    ],
    benefits: [
      { title: "Slashing Maintenance Overhead", desc: "Eliminate expensive emergency bug fixes and aging on-premise hardware upkeep." },
      { title: "10x Faster Feature Delivery", desc: "Modern CI/CD pipelines allow your team to deploy new features in hours rather than months." },
      { title: "Air-Tight Enterprise Security", desc: "Current supported libraries and automated vulnerability scanning protect your business reputation." },
    ],
    faqs: [
      {
        q: "Will our daily business operations stop during the modernization?",
        a: "No. We specialize in incremental migration strategies (such as the Strangler Fig pattern) that run alongside your existing software, ensuring zero downtime for customers.",
      },
      {
        q: "How do you verify historical data is not lost or corrupted?",
        a: "We run automated checksum verification and row-by-row comparative reconciliation algorithms before and after migration.",
      },
    ],
    metrics: [
      { label: "Performance Gain", value: "4x Faster" },
      { label: "Infrastructure Cost", value: "-45%" },
      { label: "Downtime During Cutover", value: "0 Minutes" },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Website Maintenance & Support",
    shortDescription:
      "SLA-backed 24/7 technical monitoring, security audits, database backups, performance optimization, and bug fixing to keep your systems running flawlessly.",
    category: "Reliability & SRE",
    iconName: "ShieldCheck",
    badge: "24/7 Support",
    heroTitle: "SLA-Backed 24/7 Software Maintenance & Site Reliability.",
    heroSubtitle:
      "Never worry about website crashes, security vulnerabilities, or database corruption again. SmartEdge provides proactive 24/7 monitoring, security patching, uptime guarantees, and on-demand engineering support.",
    challenges: [
      {
        title: "Unexpected Midnight Server Downtime",
        desc: "Websites and APIs crashing during off-hours, remaining offline for hours before anyone notices, costing thousands in lost revenue.",
      },
      {
        title: "Security Exploits & Malware Injections",
        desc: "Outdated CMS plugins and server packages getting hacked, leading to customer data breaches and Google search penalties.",
      },
      {
        title: "Slowly Degrading Database Performance",
        desc: "Databases accumulating unindexed records, causing search queries and checkouts to crawl to a halt over time.",
      },
    ],
    solutions: [
      {
        title: "Proactive 24/7 Automated Telemetry",
        desc: "Continuous health checks monitoring API responses, CPU spikes, and memory leaks with automated emergency engineer alerts.",
      },
      {
        title: "Continuous Security Audits & Patching",
        desc: "Regular vulnerability scans, SSL certificate renewals, firewall updates, and zero-day dependency remediation.",
      },
      {
        title: "Automated Multi-Region Backups",
        desc: "Hourly snapshots stored in geo-redundant AWS S3 buckets with verified point-in-time recovery guarantees.",
      },
    ],
    features: [
      {
        title: "Guaranteed Response Time SLAs",
        desc: "Under 15-minute response times for critical P1 emergencies and dedicated Slack/WhatsApp support channels.",
      },
      {
        title: "Monthly Performance Tuning",
        desc: "Ongoing database query optimization, Redis cache tuning, and image asset compression to maintain 95+ Core Web Vitals.",
      },
      {
        title: "Dedicated Monthly Engineering Hours",
        desc: "Use your included monthly hours for small feature additions, UI tweaks, promotional banners, or new payment gateways.",
      },
      {
        title: "Comprehensive Health Reports",
        desc: "Transparent monthly executive summaries detailing uptime metrics, security incidents blocked, and work completed.",
      },
    ],
    technologies: ["AWS CloudWatch", "Datadog", "Sentry", "Cloudflare", "Docker", "Linux", "PostgreSQL", "Redis"],
    deliverables: [
      "24/7 uptime monitoring setup with automated alerting",
      "Geo-redundant encrypted automated database backup system",
      "Priority ticketing access and direct engineer WhatsApp hotline",
      "Monthly executive technical health & performance report",
    ],
    process: [
      { step: "01", title: "Infrastructure Onboarding", desc: "Access review, environment baseline audit, and monitoring sensor deployment." },
      { step: "02", title: "Security & Backup Hardening", desc: "Setting up automated offsite backups and patching any immediate vulnerabilities." },
      { step: "03", title: "24/7 Active Monitoring", desc: "Automated probes checking your endpoints every 60 seconds from multiple global nodes." },
      { step: "04", title: "Incident Remediation", desc: "Instant engineer response upon any anomaly, restoring service before users notice." },
      { step: "05", title: "Monthly Proactive Maintenance", desc: "Applying package updates, cleaning database bloat, and optimizing cache hit ratios." },
      { step: "06", title: "Monthly Health Review", desc: "Delivering detailed transparency reports and reviewing next month's product roadmap." },
    ],
    benefits: [
      { title: "99.98% Guaranteed Uptime", desc: "Peace of mind knowing senior engineers are monitoring your digital systems around the clock." },
      { title: "Zero Disaster Anxiety", desc: "Verified automated backups mean your database can be restored within minutes in any catastrophic event." },
      { title: "Predictable Operational Costs", desc: "Fixed monthly retainer replaces costly ad-hoc emergency contractor bills." },
    ],
    faqs: [
      {
        q: "What is your emergency response time?",
        a: "For Critical Priority 1 issues (such as total site outage or payment failure), our guaranteed engineer response time is under 15 minutes 24/7/365.",
      },
      {
        q: "Can unused monthly hours roll over?",
        a: "Yes! Unused development support hours roll over to the following month, giving you maximum flexibility for larger upcoming feature releases.",
      },
    ],
    metrics: [
      { label: "SLA Uptime", value: "99.98%" },
      { label: "Emergency Response", value: "< 15 Mins" },
      { label: "Backup Frequency", value: "Hourly" },
    ],
  },
  {
    slug: "woocommerce-development",
    title: "WooCommerce Development",
    shortDescription:
      "Bespoke high-performance WooCommerce online stores, custom payment gateway plugins, multi-currency checkout, and ERP synchronization.",
    category: "E-Commerce Engineering",
    iconName: "ShoppingCart",
    badge: "WordPress Commerce",
    heroTitle: "High-Converting Custom WooCommerce Stores Built for Scale.",
    heroSubtitle:
      "Transform WordPress into an enterprise e-commerce powerhub. We build ultra-fast, tailored WooCommerce storefronts with custom checkout funnels, bKash/Nagad/Stripe integrations, and automated inventory sync.",
    challenges: [
      {
        title: "Slow Checkout & Database Bloat",
        desc: "Heavy plugins and unindexed SQL tables slow down cart pages, driving mobile shoppers away.",
      },
      {
        title: "Multi-Channel Stock Discrepancies",
        desc: "Managing inventory between physical retail branches and WooCommerce manually leads to overselling.",
      },
      {
        title: "Limited Local Payment & Courier Connectors",
        desc: "Generic themes lack reliable native integrations with Bangladeshi mobile wallets and couriers.",
      },
    ],
    solutions: [
      {
        title: "Custom High-Speed Architecture",
        desc: "High-performance object caching with Redis, dedicated WooCommerce tables, and streamlined code.",
      },
      {
        title: "One-Page Checkout & Payment Switch",
        desc: "Seamless checkout integrating bKash, Nagad, Rocket, SSLCommerz, and Stripe with instant verification.",
      },
      {
        title: "Automated Courier Logistics Sync",
        desc: "One-click consignment booking with Pathao, Steadfast, and RedX with automated SMS tracking alerts.",
      },
    ],
    features: [
      {
        title: "Custom Payment Plugins",
        desc: "Bespoke payment gateway extensions with automated instant IPN transaction verification.",
      },
      {
        title: "Dynamic Pricing & Bulk Tier Rules",
        desc: "B2B wholesale pricing tiers, role-based discounts, and volume-based price breaks.",
      },
      {
        title: "ERP & Inventory Synchronization",
        desc: "Real-time stock ledger sync between physical POS systems and the WooCommerce web store.",
      },
      {
        title: "Abandoned Cart Recovery Automation",
        desc: "Automated WhatsApp and email reminders with unique coupon codes to recover abandoned checkouts.",
      },
    ],
    technologies: ["WooCommerce", "WordPress", "PHP 8+", "MySQL", "Redis", "JavaScript", "REST API", "Tailwind CSS"],
    deliverables: [
      "Custom WooCommerce theme engineered for 95+ Core Web Vitals",
      "Local payment gateway and automated courier API integrations",
      "Complete product catalog import and variable attributes setup",
      "Comprehensive training for store managers on order fulfillment",
    ],
    process: [
      { step: "01", title: "Store Strategy & UX", desc: "Mapping customer purchase funnels and mobile-first checkout flows." },
      { step: "02", title: "Theme Engineering", desc: "Coding a clean, lightweight custom theme with zero bloatware." },
      { step: "03", title: "Payment & Shipping Integration", desc: "Connecting bKash, Nagad, cards, and automated courier APIs." },
      { step: "04", title: "Speed & Database Tuning", desc: "Configuring Redis cache, MySQL indexes, and WebP image optimization." },
      { step: "05", title: "Live Launch & Handoff", desc: "Deploying to high-speed cloud hosting with SSL and daily automated backups." },
      { step: "06", title: "Conversion Monitoring", desc: "Tracking cart analytics and optimizing conversion checkpoints." },
    ],
    benefits: [
      { title: "Zero Monthly Platform Fees", desc: "You own the store 100% on open-source WooCommerce without recurring percentage revenue cuts." },
      { title: "Sub-Second Mobile Load Times", desc: "Fast responsive pages that maximize Google rankings and reduce bounce rates." },
      { title: "Infinite Customization", desc: "Total freedom to build any custom checkout flow, subscription tier, or wholesale portal." },
    ],
    faqs: [
      {
        q: "Can WooCommerce handle 10,000+ products and heavy traffic?",
        a: "Yes. When properly architected with Redis object caching, optimized database indexes, and cloud hosting, WooCommerce effortlessly scales to tens of thousands of SKUs and millions in monthly sales.",
      },
      {
        q: "Do you integrate local Bangladeshi payment gateways?",
        a: "Yes, we integrate SSLCommerz, bKash merchant gateway, Nagad, Rocket, Aamarpay, Shurjopay, and cash-on-delivery options.",
      },
    ],
    metrics: [
      { label: "Checkout Speed", value: "< 2 Seconds" },
      { label: "Cart Abandonment Drop", value: "-35%" },
      { label: "Platform Ownership", value: "100% Open Source" },
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortDescription:
      "Enterprise Shopify Plus store setup, bespoke Liquid themes, custom public/private Shopify Apps, and headless Hydrogen storefronts.",
    category: "E-Commerce Engineering",
    iconName: "ShoppingCart",
    badge: "Shopify Partner",
    heroTitle: "World-Class Shopify & Shopify Plus E-Commerce Engineering.",
    heroSubtitle:
      "Scale your direct-to-consumer (D2C) brand globally. We build custom Shopify themes, bespoke private apps, checkout extensions, and international multi-currency stores.",
    challenges: [
      {
        title: "Cookie-Cutter Pre-Made Themes",
        desc: "Generic store templates fail to express unique brand identity and contain unused scripts that ruin mobile speed.",
      },
      {
        title: "Complex B2B & Wholesale Requirements",
        desc: "Standard Shopify lacks flexible custom wholesale rules, tiered pricing, and localized payment rails.",
      },
      {
        title: "Integration With Local Courier Services",
        desc: "Connecting Shopify fulfillment orders directly to local delivery partners requires custom app development.",
      },
    ],
    solutions: [
      {
        title: "Bespoke Shopify Theme 2.0",
        desc: "Tailored Liquid themes built with modern CSS and modular sections for effortless marketing customization.",
      },
      {
        title: "Custom Shopify App Development",
        desc: "Node.js and Remix apps to extend Shopify admin, sync inventory with external ERPs, and automate fulfillment.",
      },
      {
        title: "Shopify Plus B2B Portals",
        desc: "Wholesale catalogs, company profiles, net-30 payment terms, and custom checkout validations.",
      },
    ],
    features: [
      {
        title: "Shopify Theme 2.0 Architecture",
        desc: "Section-everywhere flexibility giving non-technical marketers drag-and-drop landing page control.",
      },
      {
        title: "Custom Checkout Extensibility",
        desc: "Branded checkout upsells, post-purchase offers, and custom validation rules on Shopify Plus.",
      },
      {
        title: "Automated Third-Party Logistics (3PL)",
        desc: "Real-time webhooks dispatching orders to fulfillment warehouses and pulling back tracking numbers.",
      },
      {
        title: "Multi-Currency & Regional Markets",
        desc: "Shopify Markets setup with automatic localized pricing, currency conversion, and international duties.",
      },
    ],
    technologies: ["Shopify Liquid", "Remix", "Node.js", "GraphQL Admin API", "TypeScript", "Tailwind CSS", "Shopify CLI"],
    deliverables: [
      "Custom responsive Shopify Theme 2.0 with modular sections",
      "Private Shopify App for ERP or courier API synchronization",
      "Shopify Markets internationalization and currency configuration",
      "App store audit removing redundant apps to maximize load speed",
    ],
    process: [
      { step: "01", title: "Discovery & UX Wireframes", desc: "Designing high-converting mobile product and collection layouts." },
      { step: "02", title: "Custom Liquid Coding", desc: "Developing clean, lightweight Theme 2.0 components using Shopify CLI." },
      { step: "03", title: "App Engineering & Integration", desc: "Building custom API connectors for inventory and courier fulfillment." },
      { step: "04", title: "Performance & QA Audit", desc: "Rigorous testing across iOS, Android, Safari, and Chrome for 90+ speed scores." },
      { step: "05", title: "Domain & DNS Launch", desc: "Seamless DNS cutover with zero downtime and verified analytics tracking." },
      { step: "06", title: "Conversion Optimization", desc: "Post-launch A/B testing and checkout funnel enhancements." },
    ],
    benefits: [
      { title: "Ultra-Reliable 99.99% Hosting", desc: "Shopify handles server maintenance, PCI-DSS Level 1 compliance, and flash-sale scaling." },
      { title: "Effortless Marketing Management", desc: "Your team can build promotional landing pages and banner changes in minutes." },
      { title: "Global Cross-Border Sales", desc: "Sell smoothly in USD, GBP, EUR, and BDT with automated local tax calculations." },
    ],
    faqs: [
      {
        q: "Can you migrate our store from WooCommerce or Magento to Shopify?",
        a: "Yes! We handle 100% data migration including product catalogs, images, customer accounts, order history, and SEO 301 URL redirects.",
      },
      {
        q: "Do you develop custom private Shopify apps?",
        a: "Yes, we develop custom private and public Shopify apps using Node.js, Remix, and the Shopify GraphQL Admin API.",
      },
    ],
    metrics: [
      { label: "Mobile Speed Score", value: "95+" },
      { label: "Checkout Conversion", value: "+28%" },
      { label: "Platform Uptime", value: "99.99%" },
    ],
  },
  {
    slug: "laravel-development",
    title: "Laravel Development",
    shortDescription:
      "Enterprise PHP & Laravel web applications, multi-tenant SaaS platforms, robust RESTful APIs, and custom ERP/CRM backends.",
    category: "Enterprise Engineering",
    iconName: "Code2",
    badge: "PHP Enterprise",
    heroTitle: "Bespoke Enterprise Software Engineered with Modern Laravel.",
    heroSubtitle:
      "Leverage the elegance and power of Laravel. SmartEdge engineers clean, maintainable MVC architectures, high-throughput financial backends, and multi-tenant portals using PHP 8+.",
    challenges: [
      {
        title: "Spaghetti Legacy PHP Codebases",
        desc: "Unstructured procedural PHP applications that are impossible to maintain, test, or safely expand.",
      },
      {
        title: "Database Performance Bottlenecks",
        desc: "Unoptimized ORM queries causing high CPU load, server timeouts, and database deadlocks.",
      },
      {
        title: "Scalability Under High Concurrency",
        desc: "Single-server setups that struggle during concurrent batch processing and large report generation.",
      },
    ],
    solutions: [
      {
        title: "Clean Domain-Driven Architecture",
        desc: "Modular service-repository layers, strict type safety in PHP 8+, and automated PHPUnit test suites.",
      },
      {
        title: "High-Speed Redis & Queue Workers",
        desc: "Background job processing (Laravel Horizon) offloading heavy emails, PDFs, and data syncs.",
      },
      {
        title: "Modern Full-Stack Combos",
        desc: "Pairing Laravel with Next.js, Inertia.js, or Livewire for reactive, app-like frontend user experiences.",
      },
    ],
    features: [
      {
        title: "Multi-Tenant SaaS Foundation",
        desc: "Isolated tenant databases or tenant scoping for secure white-labeled software products.",
      },
      {
        title: "Enterprise Role-Based Access Control",
        desc: "Granular permissions, permission inheritance, and complete security audit trail logs.",
      },
      {
        title: "RESTful & GraphQL API Specifications",
        desc: "Standardized OpenAPI/Swagger documented endpoints powering mobile apps and integrations.",
      },
      {
        title: "Automated Data Migrations & Seeders",
        desc: "Reproducible database schema migrations and automated test dataset seeders.",
      },
    ],
    technologies: ["PHP 8.3", "Laravel 11", "PostgreSQL", "MySQL", "Redis", "Docker", "Tailwind CSS", "Inertia.js"],
    deliverables: [
      "Clean, well-documented Laravel application source code (100% IP transfer)",
      "Database schema architecture diagram and migration scripts",
      "Automated unit and feature test suites (PHPUnit / Pest)",
      "Dockerized deployment setup with CI/CD GitHub Actions pipelines",
    ],
    process: [
      { step: "01", title: "Domain & Entity Modeling", desc: "Mapping business entities, relational keys, and service boundaries." },
      { step: "02", title: "API & Architecture Setup", desc: "Setting up Laravel 11, authentication, Redis queues, and base repositories." },
      { step: "03", title: "Sprint Feature Delivery", desc: "Two-week agile sprints with working staging builds for stakeholder review." },
      { step: "04", title: "Security & Load Auditing", desc: "OWASP penetration checks, query profiling, and Redis caching optimization." },
      { step: "05", title: "Production Deployment", desc: "Zero-downtime deployment using Docker on AWS or DigitalOcean." },
      { step: "06", title: "Ongoing Maintenance & SLA", desc: "Proactive version upgrades, security patches, and 24/7 telemetry." },
    ],
    benefits: [
      { title: "Rapid Development Velocity", desc: "Laravel's mature ecosystem enables shipping complex business logic 40% faster." },
      { title: "Rock-Solid Security", desc: "Built-in protection against CSRF, SQL injection, XSS, and secure password hashing." },
      { title: "Long-Term Maintainability", desc: "Strict PSR standards and architectural patterns make future team expansion seamless." },
    ],
    faqs: [
      {
        q: "Why choose Laravel over Node.js or Python?",
        a: "Laravel offers the industry's most elegant, productive, and mature ecosystem for complex relational business logic, database migrations, queue management, and enterprise administrative portals.",
      },
      {
        q: "Can Laravel be paired with a Next.js frontend?",
        a: "Yes! We frequently build decoupled architectures where Laravel acts as a high-speed, secure headless API while Next.js powers a blazing-fast user interface.",
      },
    ],
    metrics: [
      { label: "Code Quality Score", value: "A+ PSR" },
      { label: "Development Speed", value: "+40%" },
      { label: "API Response Time", value: "< 60ms" },
    ],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    shortDescription:
      "Custom Enterprise Resource Planning platforms integrating procurement, multi-warehouse inventory, accounting, and HR with zero recurring user license fees.",
    category: "Enterprise Systems",
    iconName: "Database",
    badge: "Core Enterprise",
    heroTitle: "Bespoke Enterprise ERP Platforms Built for Operational Mastery.",
    heroSubtitle:
      "Ditch generic foreign software that forces your team into rigid workflows. SmartEdge builds custom ERP systems designed directly around your manufacturing, trading, and supply chain operations.",
    challenges: [
      {
        title: "Disjointed Department Spreadsheets",
        desc: "Sales, inventory, procurement, and accounts operate on separate spreadsheets, causing discrepancies.",
      },
      {
        title: "Exorbitant Recurring Per-Seat Fees",
        desc: "Commercial ERPs charge thousands of dollars per user every year while lacking crucial local workflows.",
      },
      {
        title: "Inaccurate Real-Time Stock Visibility",
        desc: "Lack of barcode scanning and multi-branch inventory tracking leads to stockouts and shipping delays.",
      },
    ],
    solutions: [
      {
        title: "Unified Central Ledger Architecture",
        desc: "Every purchase order, invoice, and stock movement instantly updates accounting balances and stock ledgers.",
      },
      {
        title: "Multi-Warehouse Barcode Scanning",
        desc: "Mobile barcode and QR scanning for fast receiving, bin location picking, and inter-branch transfers.",
      },
      {
        title: "Automated VAT & Financial Statements",
        desc: "Generate balance sheets, profit & loss, accounts receivable, and localized tax reports in one click.",
      },
    ],
    features: [
      {
        title: "Procurement & Vendor Management",
        desc: "Purchase requisitions, vendor quotation comparisons, PO approvals, and goods received notes (GRN).",
      },
      {
        title: "Multi-Tier Inventory Ledger",
        desc: "Track items by warehouse, aisle, batch number, and expiration date with automated safety re-order triggers.",
      },
      {
        title: "HR & Biometric Attendance Sync",
        desc: "Synchronize biometric device logs, calculate overtime, deductions, and generate automated bank salary advice.",
      },
      {
        title: "Role-Based Executive Dashboards",
        desc: "Custom KPI dashboards for directors, branch managers, and accountants with real-time analytics.",
      },
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    deliverables: [
      "Custom Enterprise ERP Web Platform with 100% source code ownership",
      "Historical data migration from legacy spreadsheets and databases",
      "Barcode scanning and mobile warehouse operator interface",
      "Comprehensive staff training workshops and operational user guides",
    ],
    process: [
      { step: "01", title: "Workflow & Audit Workshop", desc: "Mapping exact organizational processes, authority matrices, and reports." },
      { step: "02", title: "Database & UI Architecture", desc: "Designing relational database schemas, audit trails, and Figma UI wireframes." },
      { step: "03", title: "Core Ledger & Inventory Sprint", desc: "Developing foundational accounting, inventory, and procurement modules." },
      { step: "04", title: "Data Migration & Pilot Testing", desc: "Importing historical data and running parallel testing with departmental leads." },
      { step: "05", title: "Company-Wide Rollout", desc: "Deploying system live, training staff, and establishing 24/7 SLA monitoring." },
      { step: "06", title: "Iterative Expansion", desc: "Adding advanced analytics, machine learning forecasts, and custom integrations." },
    ],
    benefits: [
      { title: "Zero Per-Seat License Fees", desc: "Deploy to 50 or 5,000 employees without paying a single dollar in additional license fees." },
      { title: "100% Operational Alignment", desc: "The software fits your company's exact operational flow rather than forcing you to change." },
      { title: "Total Data Sovereignty", desc: "Your sensitive financial and client data remains strictly on your private, secure servers." },
    ],
    faqs: [
      {
        q: "How does a custom ERP compare to SAP or Oracle?",
        a: "A custom SmartEdge ERP provides your exact required operational features without the massive overhead, multi-year rollout delays, and exorbitant recurring seat licensing of foreign platforms.",
      },
      {
        q: "Can our existing spreadsheet data be migrated safely?",
        a: "Yes. We develop automated data cleaning and migration scripts that validate and import all your historical accounts, customer records, and inventory balances.",
      },
    ],
    metrics: [
      { label: "Annual Licensing Savings", value: "100%" },
      { label: "Month-End Close Speed", value: "3x Faster" },
      { label: "Inventory Accuracy", value: "99.9%" },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    shortDescription:
      "Custom Customer Relationship Management systems with visual deal pipelines, WhatsApp/email conversation sync, quote generation, and lead attribution.",
    category: "Enterprise Systems",
    iconName: "Users",
    badge: "Sales Acceleration",
    heroTitle: "Custom CRM Platforms Engineered to Accelerate Deal Velocity.",
    heroSubtitle:
      "Never lose track of a qualified lead. SmartEdge crafts tailored CRM platforms connecting your marketing funnels, WhatsApp chats, email threads, and sales pipelines in a single unified dashboard.",
    challenges: [
      {
        title: "Lost Leads Across Inboxes & WhatsApp",
        desc: "Customer inquiries scattered across personal sales reps' phones and personal email inboxes without central tracking.",
      },
      {
        title: "Lack of Sales Accountability",
        desc: "Management has zero visibility into agent follow-up response times, call notes, or stalled deal stages.",
      },
      {
        title: "Slow, Manual Quotation Drafting",
        desc: "Sales agents spending hours preparing PDF quotations in Word instead of actively closing deals.",
      },
    ],
    solutions: [
      {
        title: "Omnichannel Lead Ingestion",
        desc: "Capture inquiries automatically from website forms, WhatsApp Business, Facebook ads, and phone calls.",
      },
      {
        title: "Visual Kanban Deal Pipelines",
        desc: "Track opportunities through stages with automated reminder triggers and expected revenue projections.",
      },
      {
        title: "One-Click PDF Quotation Generator",
        desc: "Generate professional branded PDF quotes with line items, tax, and terms in under 30 seconds.",
      },
    ],
    features: [
      {
        title: "Automated Lead Assignment",
        desc: "Distribute incoming leads round-robin or by geography and product specialization automatically.",
      },
      {
        title: "WhatsApp & Email Communication Logs",
        desc: "Unified customer activity timeline showing all previous calls, emails, quotes, and meeting notes.",
      },
      {
        title: "Sales Rep Performance Metrics",
        desc: "Track conversion rates, average response times, deal size, and quota attainment per representative.",
      },
      {
        title: "Automated Drip Follow-Ups",
        desc: "Trigger email and WhatsApp nurturing sequences when leads remain inactive for specified intervals.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    deliverables: [
      "Custom CRM Web Application with responsive mobile access",
      "Omnichannel lead capture integrations (Web, WhatsApp, Email, Ads)",
      "Automated quotation and invoice generation engine",
      "Executive sales forecasting and team performance reports",
    ],
    process: [
      { step: "01", title: "Sales Funnel Mapping", desc: "Analyzing customer journey stages, objection points, and quote requirements." },
      { step: "02", title: "Pipeline & Data Architecture", desc: "Designing lead schemas, activity logs, and intuitive Kanban board UI." },
      { step: "03", title: "Channel Integration", desc: "Connecting official WhatsApp Business API, corporate email, and webhooks." },
      { step: "04", title: "Quotation & Automation Engine", desc: "Building the branded PDF quote creator and automated follow-up sequences." },
      { step: "05", title: "Team Onboarding & Go-Live", desc: "Training sales agents, configuring permissions, and launching production." },
      { step: "06", title: "Conversion Optimization", desc: "Analyzing stage drop-offs and refining automated nurturing rules." },
    ],
    benefits: [
      { title: "Zero Stalled Deals", desc: "Automated alerts guarantee that no sales inquiry goes without prompt follow-up." },
      { title: "3x Faster Quotation Turnaround", desc: "Arm sales agents with instant quote generation tools right during customer calls." },
      { title: "Complete Customer History", desc: "Instant institutional memory for every client relationship regardless of staff turnover." },
    ],
    faqs: [
      {
        q: "Can the CRM integrate with our official WhatsApp Business number?",
        a: "Yes! We integrate official Meta WhatsApp Business Cloud API allowing your team to send and receive WhatsApp messages directly inside customer CRM profiles.",
      },
      {
        q: "Can we set different access permissions for sales reps and managers?",
        a: "Yes. Our CRM features granular permissions where sales reps only see their assigned leads, while managers have full department oversight and forecasting access.",
      },
    ],
    metrics: [
      { label: "Lead Response Time", value: "< 5 Mins" },
      { label: "Quote Conversion", value: "+32%" },
      { label: "Pipeline Visibility", value: "100%" },
    ],
  },
  {
    slug: "api-development-integration",
    title: "API Development & Integration",
    shortDescription:
      "Enterprise RESTful and GraphQL API engineering, secure payment gateway integrations, microservices communication, and third-party SaaS connectors.",
    category: "Backend Engineering",
    iconName: "Zap",
    badge: "Connected Systems",
    heroTitle: "High-Throughput APIs & Seamless Third-Party Integrations.",
    heroSubtitle:
      "Connect your digital ecosystem effortlessly. SmartEdge designs, develops, and documents high-speed RESTful and GraphQL APIs capable of handling millions of requests with sub-100ms latency.",
    challenges: [
      {
        title: "Disjointed Systems & Data Silos",
        desc: "Different software tools across your business unable to communicate or share real-time transaction data.",
      },
      {
        title: "Brittle, Unreliable Third-Party Connections",
        desc: "Third-party API downtime causing data loss, transaction failures, and customer frustration.",
      },
      {
        title: "Lack of API Documentation & Security",
        desc: "Unversioned, undocumented endpoints exposing sensitive customer data and creating security vulnerabilities.",
      },
    ],
    solutions: [
      {
        title: "Standardized OpenAPI / Swagger Specs",
        desc: "Fully documented, version-controlled endpoints with automated request and response schema validation.",
      },
      {
        title: "Resilient Queue & Webhook Processors",
        desc: "Idempotent event consumers with exponential retry logic, dead-letter queues, and failure alerting.",
      },
      {
        title: "Bank-Grade API Security Standards",
        desc: "OAuth 2.0, JWT authentication, rate limiting, request signing, and IP whitelisting.",
      },
    ],
    features: [
      {
        title: "High-Speed Caching Layer",
        desc: "Redis cache integration providing sub-50ms responses for high-frequency catalog and pricing endpoints.",
      },
      {
        title: "Webhook Ingestion & Dispatch",
        desc: "Scalable event publishers notifying external partner software of key order, payment, and status changes.",
      },
      {
        title: "Payment Gateway Connectors",
        desc: "Pre-built connectors for Stripe, PayPal, SSLCommerz, bKash, Nagad, and international merchant banks.",
      },
      {
        title: "Comprehensive Rate Limiting & Telemetry",
        desc: "Token-bucket rate limiters preventing API abuse with real-time error tracking and latency metrics.",
      },
    ],
    technologies: ["Node.js", "NestJS", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "Docker", "AWS API Gateway"],
    deliverables: [
      "Production-ready API codebase with full test coverage",
      "Interactive Swagger / Postman API documentation collections",
      "Automated CI/CD deployment with zero-downtime rolling updates",
      "API monitoring, rate limiting, and alerting dashboard setup",
    ],
    process: [
      { step: "01", title: "API Contract & Schema Design", desc: "Specifying data contracts, error payloads, and REST/GraphQL schemas." },
      { step: "02", title: "Core Endpoint Engineering", desc: "Writing type-safe endpoint logic, database transactions, and middleware." },
      { step: "03", title: "Security & Authentication Layer", desc: "Implementing OAuth2/JWT tokens, cryptographic validation, and rate limits." },
      { step: "04", title: "Load & Concurrency Testing", desc: "Benchmarking endpoints with simulated bursts of 10,000+ simultaneous requests." },
      { step: "05", title: "Documentation & Sandbox", desc: "Publishing interactive developer documentation and staging sandbox environments." },
      { step: "06", title: "Production Deployment", desc: "Deploying behind AWS API Gateway / Cloudflare with active latency telemetry." },
    ],
    benefits: [
      { title: "Sub-100ms Response Times", desc: "Engineered for speed to ensure snappy mobile and web user experiences." },
      { title: "Zero Data Loss Guarantee", desc: "Idempotent queue workers ensure that even if third-party services fail, events are retried safely." },
      { title: "Effortless Partner Integration", desc: "Comprehensive documentation makes it easy for internal teams and partners to integrate in hours." },
    ],
    faqs: [
      {
        q: "Do you support GraphQL or REST?",
        a: "We support both! We often recommend REST for standardized resource operations and third-party public APIs, and GraphQL for complex frontend data requirements with nested relations.",
      },
      {
        q: "How do you handle API rate limits from third parties?",
        a: "We build intelligent token-bucket queue workers (BullMQ/Redis) that pace outgoing requests precisely within third-party provider limits.",
      },
    ],
    metrics: [
      { label: "API Latency", value: "< 80ms" },
      { label: "Uptime Reliability", value: "99.99%" },
      { label: "Documentation Coverage", value: "100% Swagger" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription:
      "Human-centered digital product design, interactive Figma prototypes, design systems, usability research, and conversion-focused UX architecture.",
    category: "Product Design",
    iconName: "Layers",
    badge: "Design Excellence",
    heroTitle: "Human-Centered UI/UX Design That Drives Conversion.",
    heroSubtitle:
      "Great software starts with great design. SmartEdge creates intuitive, accessible, and visually stunning digital products that delight users and accelerate business growth.",
    challenges: [
      {
        title: "Confusing Navigation & High Drop-Offs",
        desc: "Over-complicated interfaces that confuse users, resulting in abandoned signups and high bounce rates.",
      },
      {
        title: "Inconsistent Design Patterns",
        desc: "Different screens looking disjointed due to lack of a unified design system and typography tokens.",
      },
      {
        title: "Slow Developer Handoffs",
        desc: "Vague wireframes without component states and spacing rules causing endless developer back-and-forth.",
      },
    ],
    solutions: [
      {
        title: "Research-Backed User Journeys",
        desc: "In-depth user research, wireframing, and persona mapping to eliminate cognitive friction.",
      },
      {
        title: "Comprehensive Figma Design Systems",
        desc: "Scalable component libraries with auto-layout, design tokens, color modes, and interactive states.",
      },
      {
        title: "Pixel-Perfect Developer Specs",
        desc: "Complete developer handoff files with responsive break-points, animation timing, and SVG assets.",
      },
    ],
    features: [
      {
        title: "Clickable High-Fidelity Prototypes",
        desc: "Interactive prototypes for user testing and stakeholder buy-in before writing a single line of code.",
      },
      {
        title: "WCAG Accessibility Compliance",
        desc: "Rigorous color contrast, readable typography scales, and keyboard-friendly navigation patterns.",
      },
      {
        title: "Responsive Multi-Device Layouts",
        desc: "Tailored visual experiences optimized for mobile phones, tablets, laptops, and ultra-wide desktop screens.",
      },
      {
        title: "Micro-Interactions & Motion Design",
        desc: "Subtle hover states, page transitions, and feedback animations that make applications feel alive.",
      },
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Wireframing", "User Research", "Tailwind CSS"],
    deliverables: [
      "Complete Figma design system with components, typography, and color tokens",
      "Interactive clickable prototypes for mobile, tablet, and desktop viewports",
      "Developer handoff documentation and exported production SVG assets",
      "Usability testing report with actionable conversion recommendations",
    ],
    process: [
      { step: "01", title: "User & Competitor Research", desc: "Analyzing user pain points, competitor benchmarks, and product goals." },
      { step: "02", title: "Information Architecture", desc: "Mapping user flows, sitemaps, and low-fidelity wireframe structures." },
      { step: "03", title: "Design System & UI Concepts", desc: "Creating mood boards, typography scales, color palettes, and component styles." },
      { step: "04", title: "High-Fidelity Screen Design", desc: "Designing every screen state (empty, loading, success, error) with auto-layout." },
      { step: "05", title: "Interactive Prototyping", desc: "Linking screens with smooth micro-interactions for realistic user validation." },
      { step: "06", title: "Developer Handoff & QA", desc: "Reviewing frontend staging builds to guarantee 100% design fidelity." },
    ],
    benefits: [
      { title: "Higher User Engagement", desc: "Intuitive flows minimize onboarding friction and increase user session duration." },
      { title: "50% Faster Development", desc: "Clear design systems and standardized components allow developers to build features faster." },
      { title: "Enhanced Brand Credibility", desc: "A modern, polished visual presentation establishes immediate enterprise trust." },
    ],
    faqs: [
      {
        q: "What tools do you use for design?",
        a: "We work primarily in Figma, taking full advantage of auto-layout, component variants, design tokens, and interactive prototyping.",
      },
      {
        q: "Do you design for both web and mobile apps?",
        a: "Yes! We specialize in responsive web applications, SaaS dashboards, and native iOS and Android mobile app interfaces.",
      },
    ],
    metrics: [
      { label: "Conversion Lift", value: "+45%" },
      { label: "Handoff Efficiency", value: "2x Faster" },
      { label: "Accessibility Score", value: "WCAG AA" },
    ],
  },
  {
    slug: "software-testing-qa",
    title: "Software Testing & QA",
    shortDescription:
      "End-to-end automated testing, regression suites, API validation, performance stress testing, and rigorous security auditing.",
    category: "Quality Engineering",
    iconName: "ShieldCheck",
    badge: "Zero Defect",
    heroTitle: "Enterprise Software Quality Assurance & Test Automation.",
    heroSubtitle:
      "Ship software with complete confidence. SmartEdge implements automated test suites, continuous integration testing gates, and stress tests to ensure flawless software releases.",
    challenges: [
      {
        title: "Regressive Bugs in Production",
        desc: "New feature releases unintentionally breaking existing payment or checkout functionality.",
      },
      {
        title: "Slow, Expensive Manual Testing",
        desc: "Release cycles delayed for weeks while QA teams manually test hundreds of repetitive test scenarios.",
      },
      {
        title: "Server Collapses Under Peak Load",
        desc: "Applications crashing during high-traffic marketing campaigns due to untested concurrency limits.",
      },
    ],
    solutions: [
      {
        title: "Automated End-to-End Test Pipelines",
        desc: "Playwright and Cypress automation scripts running on every pull request to catch bugs instantly.",
      },
      {
        title: "API & Data Integrity Validation",
        desc: "Automated Postman and Jest test suites validating database state, status codes, and JSON schemas.",
      },
      {
        title: "High-Concurrency Stress Testing",
        desc: "Simulating tens of thousands of simultaneous users using k6 and JMeter to identify bottlenecks.",
      },
    ],
    features: [
      {
        title: "CI/CD Test Gate Integration",
        desc: "Automated GitHub Actions pipelines that block broken code from ever reaching staging or production.",
      },
      {
        title: "Cross-Browser & Cross-Device Matrix",
        desc: "Validating user flows across Chrome, Safari, Firefox, iOS, and Android screen sizes.",
      },
      {
        title: "OWASP Top 10 Security Audits",
        desc: "Automated and manual penetration testing checking for SQL injection, XSS, and authorization bypasses.",
      },
      {
        title: "Visual Regression Testing",
        desc: "Pixel-by-pixel automated screenshot comparisons ensuring CSS updates never break existing layouts.",
      },
    ],
    technologies: ["Playwright", "Cypress", "Postman", "Jest", "k6", "JMeter", "GitHub Actions"],
    deliverables: [
      "Automated End-to-End (E2E) test repository integrated into CI/CD",
      "Automated API testing collection with environment variables",
      "Load and stress testing performance benchmark report",
      "Security vulnerability assessment and remediation checklist",
    ],
    process: [
      { step: "01", title: "Test Strategy & Matrix", desc: "Identifying critical business flows, edge cases, and high-risk modules." },
      { step: "02", title: "Automated Suite Architecture", desc: "Setting up test frameworks (Playwright/Jest) with mock data factories." },
      { step: "03", title: "E2E & API Test Scripting", desc: "Writing resilient, non-flaky test scripts for all primary user journeys." },
      { step: "04", title: "CI/CD Integration", desc: "Hooking test runners into GitHub Actions to execute automatically on PRs." },
      { step: "05", title: "Load & Security Auditing", desc: "Simulating heavy traffic spikes and running vulnerability scans." },
      { step: "06", title: "Continuous Monitoring", desc: "Reviewing daily test reports and expanding coverage with every sprint." },
    ],
    benefits: [
      { title: "Zero Production Regressions", desc: "Catch bugs before they ever reach real customers, protecting your brand reputation." },
      { title: "10x Faster Release Cycles", desc: "Automated suites execute in minutes, enabling your team to deploy updates daily." },
      { title: "Stress-Tested Stability", desc: "Know your exact server thresholds before launching major marketing campaigns." },
    ],
    faqs: [
      {
        q: "What testing frameworks do you specialize in?",
        a: "We specialize in modern, reliable frameworks including Playwright, Cypress, Jest, Postman/Newman, and k6 for performance testing.",
      },
      {
        q: "Can you audit and add automated tests to our existing codebase?",
        a: "Yes! We regularly audit legacy applications, construct test matrices for core business paths, and integrate automated test gates into existing repositories.",
      },
    ],
    metrics: [
      { label: "Test Automation Coverage", value: "85%+" },
      { label: "Bug Detection in Staging", value: "99%" },
      { label: "Release Velocity", value: "3x Faster" },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Cloud architecture, Kubernetes container orchestration, CI/CD automated deployment pipelines, infrastructure as code (IaC), and 24/7 site reliability.",
    category: "Cloud Engineering",
    iconName: "Cloud",
    badge: "Cloud Native",
    heroTitle: "Scalable Cloud Architecture & Automated DevOps Pipelines.",
    heroSubtitle:
      "Accelerate deployment velocity and eliminate downtime. SmartEdge architects robust AWS, Google Cloud, and containerized infrastructures with automated CI/CD and self-healing systems.",
    challenges: [
      {
        title: "Manual, Error-Prone Deployments",
        desc: "Deploying code via manual FTP or SSH commands, resulting in accidental outages and missing environment variables.",
      },
      {
        title: "Spiraling Cloud Bills",
        desc: "Unoptimized cloud servers, unattached storage volumes, and over-provisioned instances wasting thousands each month.",
      },
      {
        title: "Slow Disaster Recovery",
        desc: "Lack of automated off-site backups and disaster recovery protocols leaving business data vulnerable.",
      },
    ],
    solutions: [
      {
        title: "Zero-Downtime CI/CD Pipelines",
        desc: "Automated GitHub Actions pipelines with blue/green or rolling deployments that update code without dropping connections.",
      },
      {
        title: "Containerization with Docker & Kubernetes",
        desc: "Standardized container environments ensuring code runs identically in local development, staging, and production.",
      },
      {
        title: "Infrastructure as Code (Terraform)",
        desc: "Version-controlled cloud provisioning allowing complete infrastructure recreation in minutes.",
      },
    ],
    features: [
      {
        title: "Autoscaling & Load Balancing",
        desc: "Elastic server scaling that adds instances dynamically during peak traffic and scales down to save costs.",
      },
      {
        title: "Multi-Region Automated Backups",
        desc: "Encrypted daily and hourly database backups mirrored across independent geographic cloud zones.",
      },
      {
        title: "24/7 Monitoring & Alerting",
        desc: "Real-time telemetry using Datadog, Prometheus, Grafana, and Sentry with instant WhatsApp/Slack alerts.",
      },
      {
        title: "Cloud Cost Optimization (FinOps)",
        desc: "Comprehensive cloud audits reducing AWS and Google Cloud monthly expenditure by 30-50%.",
      },
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Cloudflare", "PostgreSQL"],
    deliverables: [
      "Containerized Docker setup with automated CI/CD GitHub Actions pipelines",
      "Terraform Infrastructure as Code (IaC) configuration files",
      "Automated encrypted backup scripts with disaster recovery blueprint",
      "Production telemetry, logging, and incident alerting dashboard",
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Evaluating current architecture, cloud spending, security risks, and bottlenecks." },
      { step: "02", title: "Architecture Blueprint", desc: "Designing high-availability VPC topology, load balancers, and container clusters." },
      { step: "03", title: "Containerization & IaC", desc: "Writing Dockerfiles, docker-compose, and Terraform infrastructure code." },
      { step: "04", title: "CI/CD Pipeline Setup", desc: "Configuring automated test gates, container builds, and zero-downtime deployment." },
      { step: "05", title: "Telemetry & Backup Setup", desc: "Deploying monitoring probes, log aggregators, and automated off-site backups." },
      { step: "06", title: "Production Migration & Handoff", desc: "Executing seamless DNS cutover with zero downtime and delivering runbooks." },
    ],
    benefits: [
      { title: "Zero Downtime Deployments", desc: "Deploy code multiple times a day without interrupting active user transactions." },
      { title: "30-50% Cloud Cost Savings", desc: "Right-sizing instances, implementing autoscaling, and eliminating idle cloud resources." },
      { title: "Instant Disaster Recovery", desc: "Rebuild your entire production environment in under 15 minutes with Infrastructure as Code." },
    ],
    faqs: [
      {
        q: "Which cloud providers do you support?",
        a: "We support AWS, Google Cloud Platform (GCP), Microsoft Azure, DigitalOcean, and dedicated bare-metal Linux servers.",
      },
      {
        q: "Can you help reduce our existing AWS monthly bill?",
        a: "Yes! Our FinOps cloud audits typically identify 30% to 50% in immediate monthly savings by eliminating zombie resources and implementing reserved/savings plans.",
      },
    ],
    metrics: [
      { label: "Deployment Downtime", value: "0 Seconds" },
      { label: "Average Cloud Savings", value: "35%" },
      { label: "Deployment Frequency", value: "Daily" },
    ],
  },
];

export const servicesData: ServiceDetail[] = [
  ...baseServices,
  // Exact slug aliases matching prompt specifications
  {
    ...baseServices.find((s) => s.slug === "web-development")!,
    slug: "web-application-development",
    title: "Web Application Development",
    heroTitle: "High-Performance Modern Web Applications Engineered for Scale.",
  },
  {
    ...baseServices.find((s) => s.slug === "ai-automation")!,
    slug: "ai-development-integration",
    title: "AI Development & Integration",
    heroTitle: "Enterprise AI Development, Agents & Intelligent System Integration.",
  },
  {
    ...baseServices.find((s) => s.slug === "business-automation")!,
    slug: "business-process-automation",
    title: "Business Process Automation",
    heroTitle: "End-to-End Business Process Automation & Workflow Optimization.",
  },
  {
    ...baseServices.find((s) => s.slug === "maintenance-support")!,
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    heroTitle: "SLA-Backed 24/7 Website Maintenance & System Reliability.",
  },
];

