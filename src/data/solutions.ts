export interface SolutionDetail {
  slug: string;
  title: string;
  shortDescription: string;
  badge: string;
  iconName: string;
  heroTitle: string;
  heroSubtitle: string;
  businessProblems: { title: string; desc: string }[];
  ourApproach: { title: string; desc: string }[];
  keyFeatures: { title: string; desc: string }[];
  architectureOverview: string;
  techStack: string[];
  businessImpact: { metric: string; label: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export const solutionsData: SolutionDetail[] = [
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "Modernize legacy operational workflows, eliminate paper bottlenecks, and transition your business into an agile, data-driven enterprise.",
    badge: "Enterprise Strategy",
    iconName: "Sparkles",
    heroTitle: "End-to-End Enterprise Digital Transformation.",
    heroSubtitle:
      "We help traditional enterprises reinvent their operations through cloud modernization, automated data pipelines, custom software, and customer-facing digital portals.",
    businessProblems: [
      {
        title: "Siloed Legacy Systems",
        desc: "Departments run on disconnected software, requiring slow manual spreadsheets and creating duplicate data entries.",
      },
      {
        title: "Slow Customer Touchpoints",
        desc: "Customers expect instant digital interactions, while offline processes cause churn and friction.",
      },
      {
        title: "High Operational Overhead",
        desc: "Repetitive human data entry wastes hours, inflates payroll, and introduces costly calculation errors.",
      },
    ],
    ourApproach: [
      {
        title: "Business Process Audit",
        desc: "We analyze every touchpoint across sales, finance, inventory, and logistics to uncover high-ROI modernization opportunities.",
      },
      {
        title: "Phase-by-Phase Roadmap",
        desc: "Incremental rollout that ensures zero disruption to daily business operations while modernizing core systems.",
      },
      {
        title: "Team Enablement & Training",
        desc: "Hands-on staff training and documentation to ensure 100% internal adoption of newly deployed digital platforms.",
      },
    ],
    keyFeatures: [
      {
        title: "Unified Cloud Architecture",
        desc: "Migrate on-premise databases to secure, high-availability cloud infrastructure with automated backups.",
      },
      {
        title: "Real-Time Executive Dashboards",
        desc: "Instant visibility into company-wide KPIs, cash flow, order pipelines, and department performance.",
      },
      {
        title: "Mobile-First Workforce Portals",
        desc: "Empower field staff and managers with responsive apps that function seamlessly online and offline.",
      },
    ],
    architectureOverview:
      "Event-driven microservices architecture hosted on containerized cloud infrastructure, communicating via secure REST/GraphQL endpoints with enterprise data lake integration.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Docker", "PostgreSQL", "AWS", "Redis"],
    businessImpact: [
      { metric: "65%", label: "Reduction in Processing Turnaround" },
      { metric: "40%", label: "Operational Cost Savings" },
      { metric: "99.9%", label: "System Reliability & Uptime" },
    ],
    deliverables: [
      "Digital Transformation Roadmap & ROI Assessment",
      "Custom Enterprise Cloud Platform",
      "Automated Migration of Historical Data",
      "Executive Analytics & Reporting Hub",
      "Comprehensive Staff Training & SLA Support",
    ],
    faqs: [
      {
        q: "How do we prevent business downtime during transformation?",
        a: "We use parallel deployment and gradual strangler-fig migration patterns, ensuring existing operations remain active while data syncs automatically in the background.",
      },
      {
        q: "How long does enterprise digital transformation take?",
        a: "Initial quick-win modules launch within 6-8 weeks, while full organizational transformation typically follows a 3-6 month phased milestone plan.",
      },
    ],
  },
  {
    slug: "enterprise-software-solutions",
    title: "Enterprise Software Solutions",
    shortDescription:
      "Engineered for high-volume transactions, strict compliance, multi-tenant security, and complex organizational hierarchies.",
    badge: "Scalable Systems",
    iconName: "Building2",
    heroTitle: "Mission-Critical Software for Modern Enterprises.",
    heroSubtitle:
      "Custom enterprise applications engineered with domain-driven design, role-based security, automated compliance logging, and seamless third-party ERP/CRM integration.",
    businessProblems: [
      {
        title: "Complex Multi-Branch Workflows",
        desc: "Managing diverse business units across regional locations with varying pricing, taxation, and approval chains.",
      },
      {
        title: "Security & Regulatory Compliance",
        desc: "Standard SaaS tools often fail to meet strict data sovereignty, GDPR, ISO, and audit trail requirements.",
      },
      {
        title: "High Transaction Volume Scalability",
        desc: "Database deadlocks and server crashes during seasonal peaks or high-frequency automated batch operations.",
      },
    ],
    ourApproach: [
      {
        title: "Domain-Driven Design (DDD)",
        desc: "Structuring clean service boundaries that map directly to your organizational departments and authority levels.",
      },
      {
        title: "Zero-Trust Security Standard",
        desc: "Strict cryptographic authentication, role-based access control (RBAC), and immutable audit logs.",
      },
      {
        title: "Performance Benchmarking",
        desc: "Continuous load testing simulating 10x peak traffic to ensure sub-100ms response times under enterprise load.",
      },
    ],
    keyFeatures: [
      {
        title: "Granular Multi-Level Approvals",
        desc: "Configurable approval matrices for purchase orders, financial disbursements, and contracts.",
      },
      {
        title: "Automated Compliance Auditing",
        desc: "Every edit, export, and authorization is permanently logged with IP, timestamp, and user identity.",
      },
      {
        title: "Seamless Enterprise Connectors",
        desc: "Native bi-directional data synchronization with SAP, Oracle, Salesforce, and banking payment rails.",
      },
    ],
    architectureOverview:
      "Distributed microservices backend utilizing message queues (RabbitMQ/Kafka) and partitioned database clusters for high concurrency and fault tolerance.",
    techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Kafka", "Kubernetes", "AWS"],
    businessImpact: [
      { metric: "10x", label: "Transaction Concurrency Support" },
      { metric: "100%", label: "Audit & Compliance Traceability" },
      { metric: "Zero", label: "Third-Party Per-User Licensing" },
    ],
    deliverables: [
      "Custom Enterprise Software Codebase (Full IP Transfer)",
      "High-Availability Cloud Architecture Blueprint",
      "Automated CI/CD Deployment with Blue/Green Rollouts",
      "Role-Based Access Control & Security Auditing Module",
    ],
    faqs: [
      {
        q: "Who owns the intellectual property and source code?",
        a: "SmartEdge provides 100% intellectual property ownership with full source code, repositories, and documentation upon project handover.",
      },
      {
        q: "Can the system be deployed on our private on-premise servers?",
        a: "Yes. We support hybrid cloud, AWS, Google Cloud, Azure, and secure private on-premises Kubernetes/bare-metal environments.",
      },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortDescription:
      "Eliminate manual bottlenecks, sync cross-platform data automatically, and streamline approvals with intelligent workflow engines.",
    badge: "Process Optimization",
    iconName: "Zap",
    heroTitle: "Automate Repetitive Operations. Accelerate Growth.",
    heroSubtitle:
      "We connect your disparate business tools, email inboxes, spreadsheets, and databases into automated event-driven workflows that operate 24/7 without human intervention.",
    businessProblems: [
      {
        title: "Hours Lost to Manual Data Entry",
        desc: "Employees spend valuable working hours copy-pasting customer details, invoices, and shipping records between software.",
      },
      {
        title: "Delayed Approval Cycles",
        desc: "Critical deals, purchase requests, and shipments stall while waiting for manual email sign-offs.",
      },
      {
        title: "Human Processing Errors",
        desc: "Typographical mistakes in invoices, pricing, and stock updates lead to costly customer disputes.",
      },
    ],
    ourApproach: [
      {
        title: "Workflow Mapping & Friction Audit",
        desc: "We analyze team time expenditures and identify the highest-impact repetitive tasks to automate first.",
      },
      {
        title: "Resilient Webhook & API Pipes",
        desc: "Fault-tolerant queue processors that handle rate limits, retry failed tasks, and alert on exceptions.",
      },
      {
        title: "Human-in-the-Loop Oversight",
        desc: "Configure automated workflows with optional manual confirmation thresholds for high-risk financial amounts.",
      },
    ],
    keyFeatures: [
      {
        title: "Automated Document Processing",
        desc: "Extract text, amounts, and dates from PDFs, invoices, and receipts directly into your database.",
      },
      {
        title: "Instant Multi-Channel Alerts",
        desc: "Trigger real-time WhatsApp, SMS, Slack, and email notifications on key milestone triggers.",
      },
      {
        title: "Bi-Directional Inventory Sync",
        desc: "Synchronize stock levels across physical stores, warehouse ERPs, and e-commerce storefronts in real-time.",
      },
    ],
    architectureOverview:
      "Asynchronous event-driven orchestration leveraging n8n, Node.js queue workers, webhooks, and Redis caching for instant processing.",
    techStack: ["Node.js", "TypeScript", "n8n", "Redis", "BullMQ", "PostgreSQL", "Webhooks"],
    businessImpact: [
      { metric: "80%", label: "Reduction in Manual Data Tasks" },
      { metric: "99.8%", label: "Zero-Error Data Transfer Accuracy" },
      { metric: "24/7", label: "Unattended Automated Processing" },
    ],
    deliverables: [
      "Automated Workflow Orchestration Engine",
      "API & Webhook Integrations for Existing Software",
      "Custom Failure Alerting & Dead-Letter Queues",
      "Workflow Analytics & Performance Dashboard",
    ],
    faqs: [
      {
        q: "What happens if a third-party API goes down?",
        a: "Our automation pipelines include intelligent retry mechanisms with exponential backoff and dead-letter queue alerts so no data is ever lost.",
      },
      {
        q: "Can non-technical managers modify automation triggers?",
        a: "Yes, we build user-friendly administrative dashboards where managers can adjust trigger rules, thresholds, and recipients without writing code.",
      },
    ],
  },
  {
    slug: "ai-powered-solutions",
    title: "AI-Powered Solutions",
    shortDescription:
      "Harness LLMs, Retrieval-Augmented Generation (RAG), and intelligent agents to automate customer queries, summarize contracts, and analyze data.",
    badge: "Next-Gen Intelligence",
    iconName: "Cpu",
    heroTitle: "Practical Enterprise AI That Solves Real Business Problems.",
    heroSubtitle:
      "Move beyond generic chat tools. We engineer private, secure AI solutions tailored to your proprietary documents, customer support workflows, and internal knowledge bases.",
    businessProblems: [
      {
        title: "Knowledge Lost in Huge Documentation",
        desc: "Employees waste hours searching through hundreds of PDFs, policy manuals, and past tickets to find answers.",
      },
      {
        title: "High Customer Support Staffing Costs",
        desc: "24/7 support requires multiple shifts answering the exact same 50 questions repeatedly.",
      },
      {
        title: "Data Privacy & Leak Concerns",
        desc: "Businesses cannot risk sending sensitive company trade secrets or customer data to public AI chatbots.",
      },
    ],
    ourApproach: [
      {
        title: "Private Vector Knowledge Bases",
        desc: "Secure RAG architecture that indexes only your verified company documentation with strict access controls.",
      },
      {
        title: "Structured Agent Workflows",
        desc: "AI agents programmed with guardrails, function calling, and deterministic validation to eliminate hallucinations.",
      },
      {
        title: "Enterprise Security & Privacy",
        desc: "Zero data training on commercial LLM models, private VPC deployments, and encrypted data-at-rest.",
      },
    ],
    keyFeatures: [
      {
        title: "Context-Aware AI Assistants",
        desc: "Intelligent assistants that answer customer questions with exact citations from your knowledge base.",
      },
      {
        title: "Automated Document Summarization",
        desc: "Instantly parse contracts, resumes, RFP proposals, and financial statements into clean structured JSON.",
      },
      {
        title: "Predictive Analytics & Forecasting",
        desc: "Machine learning models predicting customer churn, seasonal demand spikes, and re-order thresholds.",
      },
    ],
    architectureOverview:
      "Secure Retrieval-Augmented Generation (RAG) pipeline utilizing vector embeddings, semantic search, and private LLM inference endpoints.",
    techStack: ["Python", "FastAPI", "OpenAI API", "LangChain", "Pinecone", "Next.js", "Docker"],
    businessImpact: [
      { metric: "75%", label: "Faster First-Response to Customers" },
      { metric: "90%", label: "Staff Time Saved in Document Review" },
      { metric: "100%", label: "Confidentiality & Data Isolation" },
    ],
    deliverables: [
      "Custom Private RAG System with Vector Database",
      "Interactive Web and WhatsApp AI Chat Interfaces",
      "Administrative Knowledge Management Portal",
      "Usage Telemetry, Guardrails & Token Monitoring",
    ],
    faqs: [
      {
        q: "Is our proprietary company data safe?",
        a: "Yes. We use enterprise API agreements that guarantee your data is never used to train external models, and we can deploy open-weight models on your dedicated cloud servers.",
      },
      {
        q: "Can the AI agent perform actual actions in our software?",
        a: "Yes. Through function calling and authenticated APIs, the agent can check order statuses, generate invoice links, and update CRM records.",
      },
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    shortDescription:
      "High-converting headless and multi-channel online commerce platforms engineered for speed, international currencies, and omnichannel inventory.",
    badge: "Digital Commerce",
    iconName: "ShoppingCart",
    heroTitle: "High-Performance E-Commerce Platforms Engineered for Conversion.",
    heroSubtitle:
      "We design and build modern B2B and B2C digital storefronts featuring sub-second page loads, seamless checkout flows, multi-warehouse inventory, and global payment integrations.",
    businessProblems: [
      {
        title: "Slow Cart & High Abandonment",
        desc: "Bloated monolithic themes cause sluggish mobile loading, driving frustrated shoppers to competitors.",
      },
      {
        title: "Multi-Channel Inventory Mismatch",
        desc: "Selling across physical branches, website, and marketplaces without centralized real-time stock sync.",
      },
      {
        title: "Payment Gateway Drop-offs",
        desc: "Limited payment methods, failed local mobile banking transactions, and clunky international checkout steps.",
      },
    ],
    ourApproach: [
      {
        title: "Headless Architecture for Lightning Speed",
        desc: "Decoupled Next.js frontends that load product catalogs instantly and maximize SEO rankings.",
      },
      {
        title: "Frictionless One-Page Checkout",
        desc: "Optimized checkout flows supporting credit cards, bKash, Nagad, Stripe, PayPal, and Cash on Delivery.",
      },
      {
        title: "Automated Logistics Connectors",
        desc: "Instant delivery booking, tracking generation, and shipping label printing with major courier APIs.",
      },
    ],
    keyFeatures: [
      {
        title: "Omnichannel Inventory Management",
        desc: "Unified stock ledger syncing purchases across physical retail POS, web store, and warehouse.",
      },
      {
        title: "Tiered Pricing for B2B & Wholesale",
        desc: "Wholesale portals with volume discounts, customer-specific pricing, and credit line approvals.",
      },
      {
        title: "Automated Abandoned Cart Recovery",
        desc: "Automated WhatsApp and email reminders with dynamic discount codes to recapture lost revenue.",
      },
    ],
    architectureOverview:
      "Headless Next.js edge storefront communicating via GraphQL/REST with high-speed microservices, Redis catalog cache, and PostgreSQL transaction database.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe", "SSLCommerz"],
    businessImpact: [
      { metric: "+45%", label: "Average Checkout Conversion Increase" },
      { metric: "<1.2s", label: "Mobile Product Page Load Time" },
      { metric: "100%", label: "Real-Time Multi-Warehouse Accuracy" },
    ],
    deliverables: [
      "Custom Headless Next.js Storefront",
      "Enterprise Admin Management Portal",
      "Payment & Courier Logistics API Integrations",
      "Full Product Catalog & Customer Migration",
    ],
    faqs: [
      {
        q: "Which payment gateways do you support?",
        a: "We integrate all major global and Bangladeshi payment providers, including Stripe, PayPal, SSLCommerz, bKash, Nagad, and custom merchant bank accounts.",
      },
      {
        q: "Can the platform handle seasonal flash sales?",
        a: "Yes. Our edge-cached architecture and autoscaling infrastructure are stress-tested to effortlessly manage tens of thousands of concurrent shoppers.",
      },
    ],
  },
  {
    slug: "saas-solutions",
    title: "SaaS Solutions",
    shortDescription:
      "Transform your product vision into a scalable, multi-tenant software-as-a-service application ready for global subscribers.",
    badge: "Cloud Software",
    iconName: "Globe",
    heroTitle: "Turn Your Software Vision Into a Global SaaS Platform.",
    heroSubtitle:
      "From MVP launch to enterprise multi-tenancy, SmartEdge engineers scalable cloud architectures, recurring subscription billing, user provisioning, and rich analytics.",
    businessProblems: [
      {
        title: "Multi-Tenancy Security Dilemma",
        desc: "Safely isolating subscriber databases so customer data never leaks across organizational boundaries.",
      },
      {
        title: "Complex Subscription & Tier Management",
        desc: "Handling monthly/annual billing, usage-based metering, seat limits, grace periods, and failed payments.",
      },
      {
        title: "Slow Time-to-Market",
        desc: "Spending months building boilerplate auth and billing instead of validating core product value.",
      },
    ],
    ourApproach: [
      {
        title: "Robust Multi-Tenant Architecture",
        desc: "Schema-per-tenant or row-level security (RLS) ensuring strict isolation, performance, and data protection.",
      },
      {
        title: "Automated Billing & Invoicing Engine",
        desc: "Seamless integration with Stripe Billing, Paddle, or custom invoicing with automatic tax calculation.",
      },
      {
        title: "Enterprise Single Sign-On (SSO)",
        desc: "SAML 2.0 and OAuth2 support enabling enterprise clients to sign in with Okta, Google Workspace, or Azure AD.",
      },
    ],
    keyFeatures: [
      {
        title: "Self-Serve Team Provisioning",
        desc: "Inviting team members, assigning custom permission roles, and setting organizational billing limits.",
      },
      {
        title: "Usage-Based Metering & Telemetry",
        desc: "Track API calls, storage consumed, or seat usage with real-time billing updates.",
      },
      {
        title: "Public Developer API & Webhooks",
        desc: "Empower your subscribers to connect their existing tools directly to your SaaS platform.",
      },
    ],
    architectureOverview:
      "Cloud-native microservices with container orchestration, tenant isolation middleware, and distributed caching for instant dashboard responsiveness.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Docker", "AWS"],
    businessImpact: [
      { metric: "60%", label: "Faster MVP Launch Time" },
      { metric: "99.99%", label: "Target Availability SLA" },
      { metric: "Zero", label: "Cross-Tenant Data Exposure Risk" },
    ],
    deliverables: [
      "Production-Ready Multi-Tenant SaaS Codebase",
      "Stripe/Paddle Subscription Billing Engine",
      "Super-Admin Platform Analytics & Customer Management",
      "Interactive Onboarding Flows & Documentation",
    ],
    faqs: [
      {
        q: "Can we support custom enterprise domain mapping?",
        a: "Yes. We implement automated SSL generation and custom domain routing (e.g. app.clientdomain.com) for white-label enterprise tiers.",
      },
      {
        q: "What database model do you recommend for SaaS multi-tenancy?",
        a: "Depending on your industry and data isolation requirements, we implement PostgreSQL Row-Level Security (RLS) or isolated tenant schemas.",
      },
    ],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    shortDescription:
      "Unified operational backbone managing supply chain, procurement, inventory, sales pipelines, accounting, and HR in a single platform.",
    badge: "Operations Core",
    iconName: "Database",
    heroTitle: "Unified ERP & CRM Engineered for Real-World Operations.",
    heroSubtitle:
      "Eliminate disjointed tools. SmartEdge builds comprehensive, modular enterprise platforms that synchronize your inventory, sales, invoicing, and workforce in real time.",
    businessProblems: [
      {
        title: "Scattered Operational Data",
        desc: "Sales uses one tool, inventory uses another, and finance reconciles in Excel — causing constant discrepancies.",
      },
      {
        title: "Inaccurate Stock Visibility",
        desc: "Items appear in stock on sales orders but are physically unavailable in the warehouse, delaying fulfillment.",
      },
      {
        title: "Costly Per-User Vendor Fees",
        desc: "Off-the-shelf ERPs demand tens of thousands in recurring licensing fees while lacking crucial local workflows.",
      },
    ],
    ourApproach: [
      {
        title: "Modular Architectural Design",
        desc: "Deploy core inventory and finance modules first, then cleanly attach CRM, HR, and manufacturing modules as you scale.",
      },
      {
        title: "Real-Time Ledger Synchronization",
        desc: "Every sale, purchase, and return instantly updates inventory counts and general ledger accounts.",
      },
      {
        title: "Tailored to Your Exact Workflows",
        desc: "Custom pricing tiers, credit controls, tax computations, and local courier/banking formats built right in.",
      },
    ],
    keyFeatures: [
      {
        title: "Live Multi-Warehouse Tracking",
        desc: "Manage bin locations, stock transfers, batch expiration dates, and low-stock re-order thresholds.",
      },
      {
        title: "Sales Pipeline & Lead Attribution",
        desc: "Visual deal boards, automated quote generation, call logs, and customer interaction histories.",
      },
      {
        title: "Comprehensive Financial Reporting",
        desc: "Automated Profit & Loss, Balance Sheets, Cash Flow, Accounts Receivable, and aging reports.",
      },
    ],
    architectureOverview:
      "Enterprise SQL relational engine with strict ACID transaction guarantees, immutable accounting ledgers, and role-based permission tiers.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis"],
    businessImpact: [
      { metric: "100%", label: "Elimination of Per-User License Fees" },
      { metric: "3x", label: "Faster Financial Month-End Close" },
      { metric: "Zero", label: "Stock Discrepancy Between Sales & Warehouse" },
    ],
    deliverables: [
      "Custom ERP & CRM Web Application",
      "Historical Data Migration from Spreadsheets & Legacy Tools",
      "Barcode & Mobile Inventory Scanning Module",
      "Full Accounting, Invoicing, and Tax Module",
    ],
    faqs: [
      {
        q: "Can this replace our expensive commercial ERP?",
        a: "Yes. Many of our clients have successfully replaced expensive annual subscriptions with custom SmartEdge platforms, saving substantial budget while gaining exact operational fit.",
      },
      {
        q: "How secure is our financial data?",
        a: "We implement military-grade encryption (AES-256 for data-at-rest), TLS 1.3 in-transit, role-based access control, and complete immutable audit trails for every financial entry.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    shortDescription:
      "Intelligent event-driven process automation that bridges sales pipelines, customer notifications, billing cycles, and field tasks.",
    badge: "Efficiency Engine",
    iconName: "Workflow",
    heroTitle: "Intelligent Workflow Automation for Rapid Scaling.",
    heroSubtitle:
      "Automate end-to-end business procedures with zero friction. From customer onboarding and automated invoicing to cross-team approvals, we eliminate manual lag.",
    businessProblems: [
      {
        title: "Bottlenecks in Manual Handoffs",
        desc: "Tasks get delayed when one department forgets to notify the next team in the sequence.",
      },
      {
        title: "Inconsistent Customer Communication",
        desc: "Customers receive delayed confirmations or inconsistent status updates due to human oversight.",
      },
      {
        title: "Lack of Process Transparency",
        desc: "Managers cannot easily see where specific orders, contracts, or tickets are stuck in the pipeline.",
      },
    ],
    ourApproach: [
      {
        title: "Visual Process Modeling",
        desc: "Documenting clear condition-action trees for every trigger across your operational ecosystem.",
      },
      {
        title: "Automated Exception Routing",
        desc: "When an edge case occurs, the system automatically routes the item to a manager with full context for quick resolution.",
      },
      {
        title: "Continuous Telemetry",
        desc: "Track execution times, bottleneck stages, and failure rates to continuously refine process speed.",
      },
    ],
    keyFeatures: [
      {
        title: "Instant Multi-Channel Dispatch",
        desc: "Automate transactional SMS, WhatsApp messages, and email updates based on order status changes.",
      },
      {
        title: "Automated Contract & Invoice Dispatch",
        desc: "Generate customized PDFs and send them for electronic signatures the second a deal is closed.",
      },
      {
        title: "Centralized Audit Logs",
        desc: "Review every automated action with exact timestamps, input payloads, and destination responses.",
      },
    ],
    architectureOverview:
      "Microservice workflow orchestrators with persistent state machines, webhook ingestion, and distributed job workers.",
    techStack: ["Node.js", "TypeScript", "n8n", "Redis", "PostgreSQL", "Webhooks"],
    businessImpact: [
      { metric: "95%", label: "Faster Process Execution Speed" },
      { metric: "Zero", label: "Missed Follow-Ups or Deadlines" },
      { metric: "100%", label: "Transparent Operational Visibility" },
    ],
    deliverables: [
      "Custom Workflow Engine & Event Triggers",
      "Automated WhatsApp & Email Gateway Integration",
      "Executive Workflow Monitoring & Health Dashboard",
      "Comprehensive Documentation & Staff Training",
    ],
    faqs: [
      {
        q: "Can workflows be paused or altered by our managers?",
        a: "Yes. Our admin portal provides simple visual toggle switches and threshold settings so operations leads can adjust parameters anytime.",
      },
      {
        q: "What channels can automated messages be dispatched to?",
        a: "We support official WhatsApp Business API, SMS gateways, email, Slack, Microsoft Teams, and custom internal notification banners.",
      },
    ],
  },
];
