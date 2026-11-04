export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  clientType: "Verified Client Delivery" | "Enterprise Demonstration Solution";
  industry: string;
  category: "Digital Commerce" | "Business Automation" | "Operational Platforms" | "Web & Mobile Products" | "AI Solutions";
  summary: string;
  featured: boolean;
  heroImage: string;
  duration: string;
  metrics: { label: string; value: string; change: string }[];
  overview: string;
  challenge: {
    headline: string;
    points: string[];
    details: string;
  };
  solution: {
    headline: string;
    architecture: string;
    highlights: string[];
  };
  processSteps: { title: string; desc: string }[];
  technologies: string[];
  screenshots: { title: string; caption: string; bgGradient: string; image: string }[];
  results: { metric: string; description: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  relatedSlugs: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "mk-shipping-online-ticketing-logistics",
    title: "MK Shipping Multi-Route Maritime Ticketing & Cargo Logistics Engine",
    client: "MK Shipping Lines",
    clientType: "Verified Client Delivery",
    industry: "Logistics & Marine Transportation",
    category: "Operational Platforms",
    summary:
      "Modernized a high-volume passenger vessel ticketing and freight logistics network handling 40,000+ weekly passengers with real-time seat reservation, thermal ticket printing, and offline port sync.",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    duration: "4 Months",
    metrics: [
      { label: "Ticket Issuance Time", value: "3.2s", change: "78% Faster" },
      { label: "Weekly Transactions", value: "40K+", change: "Zero System Crashes" },
      { label: "Revenue Leakage", value: "0%", change: "100% Audit Reconciled" },
    ],
    overview:
      "MK Shipping Lines operates a critical passenger and cargo launch fleet connecting southern riverine hubs with the capital. With seasonal festival surges bringing overwhelming counter crowds, their legacy desktop setup frequently choked, resulting in duplicate ticket sales, manual reconciliation nightmares, and massive revenue discrepancies.",
    challenge: {
      headline: "Overwhelmed Counters, Duplicate Booking Clashes & Rural Connectivity Outages",
      points: [
        "Unreliable edge connectivity at remote river ghats causing traditional cloud ticketing to hang.",
        "Festive peak rushes (Eid travel) causing over 10x traffic spikes that crashed legacy servers.",
        "Manual manifest preparation taking 2 hours per departure, causing vessel departure delays.",
      ],
      details:
        "The client required an omnichannel platform: instant online web and mobile booking for passengers, high-speed POS thermal counter terminals for physical ticket clerks at ghats, and a fault-tolerant offline synchronization engine capable of functioning even when cellular towers dropped.",
    },
    solution: {
      headline: "Distributed Edge-Sync Architecture with Real-Time Seat Locking",
      architecture:
        "Engineered an event-driven microservices architecture using Next.js on the frontend, NestJS with Redis distributed locks for cabin and seat reservations, and an SQLite-backed edge client for ticketing booths with automatic background delta sync.",
      highlights: [
        "Distributed Redis lock prevents double booking across concurrent counters within 10 milliseconds.",
        "Offline-tolerant POS counter client that continues issuing tickets during harbor connectivity blackouts and syncs seamlessly upon reconnection.",
        "Automated digital passenger manifests compliant with maritime regulatory reporting standards.",
      ],
    },
    processSteps: [
      { title: "Harbor & Ghat Field Audit", desc: "Engineers spent a week on-site at major ports documenting counter workflows and network dead-zones." },
      { title: "Distributed Consensus Design", desc: "Architected the transactional state machine to eliminate seat conflict probabilities." },
      { title: "Rapid Counter POS Prototyping", desc: "Created a keyboard-shortcut-only counter UI that prints tickets in 3 keystrokes." },
      { title: "High-Concurrency Stress Testing", desc: "Simulated 50,000 simultaneous seat checkouts during simulated festival traffic." },
      { title: "Gradual Port Cutover", desc: "Deployed terminal-by-terminal with dedicated on-ground engineers ensuring seamless adoption." },
    ],
    technologies: ["Next.js", "TypeScript", "NestJS", "Redis", "PostgreSQL", "Docker", "Tailwind CSS", "SSLCommerz", "bKash API"],
    screenshots: [
      {
        title: "Executive Vessel Fleet Dispatch Dashboard",
        caption: "Live monitoring of vessel occupancy, fuel logs, and real-time revenue across all active harbor routes.",
        bgGradient: "from-blue-900 to-slate-900",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "High-Speed Counter Booking Interface",
        caption: "Optimized for terminal operators with instant seat selection, thermal printer triggers, and barcode verification.",
        bgGradient: "from-indigo-950 to-blue-900",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Passenger Mobile Ticketing Experience",
        caption: "Frictionless mobile booking with instant QR boarding pass delivery via WhatsApp and SMS.",
        bgGradient: "from-slate-900 to-sky-950",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    results: [
      { metric: "78% Faster Checkout", description: "Counter line waiting times dropped from an average of 14 minutes to under 3 minutes per passenger." },
      { metric: "Zero Double-Bookings", description: "100% resolution of seat conflicts across all 8 major vessels during peak festival seasons." },
      { metric: "100% Financial Reconciliation", description: "End-of-day cash and digital payment balancing automated instantly without manual audit logs." },
    ],
    testimonial: {
      quote:
        "SmartEdge replaced our chaotic ticketing problems with an rock-solid platform. During the highest traffic peak of the year, our counters processed tens of thousands of tickets with zero lag.",
      author: "Operational Director",
      role: "Fleet Operations",
      company: "MK Shipping Lines",
    },
    relatedSlugs: ["aurora-enterprise-operations-erp", "esquire-digital-commerce-engine"],
  },
  {
    slug: "aurora-enterprise-operations-erp",
    title: "Aurora Operations: Multi-Plant Manufacturing & Supply Chain ERP",
    client: "Aurora Manufacturing Group",
    clientType: "Verified Client Delivery",
    industry: "Manufacturing & Industrial Export",
    category: "Operational Platforms",
    summary:
      "Enterprise resource planning and supply chain platform coordinating raw materials procurement, bill of materials (BOM), multi-plant inventory, and export compliance for 3 industrial factories.",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    duration: "6 Months",
    metrics: [
      { label: "BOM Cost Accuracy", value: "99.7%", change: "+24% Precision" },
      { label: "Procurement Cycle", value: "4.5 Days", change: "62% Reduction" },
      { label: "Dead Stock Waste", value: "-38%", change: "$180K Annual Savings" },
    ],
    overview:
      "Aurora Manufacturing operates 3 industrial fabrication and apparel production units. Managing over 4,500 active raw material SKUs through spreadsheets and disconnected accounting tools resulted in production line stoppages due to unrecorded material stockouts and inaccurate product cost estimates.",
    challenge: {
      headline: "Multi-Factory Disconnect, Fabric Waste & Delayed Export Shipments",
      points: [
        "Zero real-time visibility into factory floor material consumption versus planned Bill of Materials.",
        "Manual approval delays for chemical and fabric procurement halting assembly lines.",
        "Export documentation errors leading to customs clearance hold-ups at Chattogram Port.",
      ],
      details:
        "The leadership required a single authoritative system linking raw material stores, production tracking, commercial export documentation, and real-time cost accounting.",
    },
    solution: {
      headline: "Unified Manufacturing Execution & Inventory Allocation Engine",
      architecture:
        "Custom web-based ERP engineered with Next.js, TypeScript, PostgreSQL, and Prisma with micro-services for inventory ledger calculations and role-based approval hierarchies.",
      highlights: [
        "Live BOM calculation engine recalculating batch costs in real-time as material prices fluctuate.",
        "Multi-warehouse requisition workflow with barcode scanning for inward, outward, and transfer movements.",
        "Automated export document generator preparing LC, commercial invoices, and packing lists in compliance with customs standards.",
      ],
    },
    processSteps: [
      { title: "Plant Process Mapping", desc: "Mapped raw material entry, cutting, assembly, finishing, and packaging workflows across all 3 plants." },
      { title: "Schema Normalization", desc: "Designed robust relational schemas handling complex multi-unit conversions (meters, kilograms, yards, rolls)." },
      { title: "Module Development", desc: "Engineered procurement, inventory, floor tracking, and finance modules in continuous weekly sprints." },
      { title: "Data Cleanse & Migration", desc: "Migrated 8 years of historical vendor pricing and SKU catalogs into PostgreSQL." },
      { title: "Floor Operator Training", desc: "Conducted bilingual hands-on training sessions with warehouse managers and machine supervisors." },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS", "Redis"],
    screenshots: [
      {
        title: "Supply Chain & Factory Floor Command Center",
        caption: "Real-time production capacity, active orders, and material consumption rates across all 3 factory units.",
        bgGradient: "from-slate-900 to-emerald-950",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Interactive Bill of Materials (BOM) Configurator",
        caption: "Dynamic cost modeling per unit with real-time currency conversion and supplier price fluctuation alerts.",
        bgGradient: "from-blue-950 to-slate-900",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Warehouse Inventory Barcode Tracking",
        caption: "Batch-wise roll and carton tracking with instant bin-location guidance on mobile warehouse scanners.",
        bgGradient: "from-navy-900 to-slate-800",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    results: [
      { metric: "62% Faster Procurement", description: "Purchase order approval and vendor assignment streamlined from 12 days to under 4.5 days." },
      { metric: "38% Reduction in Dead Stock", description: "Automated minimum-order formulas prevented over-purchasing of seasonal raw materials." },
      { metric: "100% On-Time Export Deliveries", description: "Zero shipment delays due to missing paperwork or unfulfilled material inputs." },
    ],
    testimonial: {
      quote:
        "SmartEdge delivered an ERP that our factory supervisors actually enjoy using. We now know our exact manufacturing margins down to the last penny on every single export container.",
      author: "Managing Director",
      role: "Operations & Supply Chain",
      company: "Aurora Manufacturing Group",
    },
    relatedSlugs: ["mk-shipping-online-ticketing-logistics", "esquire-digital-commerce-engine"],
  },
  {
    slug: "esquire-digital-commerce-engine",
    title: "Esquire High-Volume Omnichannel Digital Commerce Platform",
    client: "Esquire Electronics & Retail",
    clientType: "Verified Client Delivery",
    industry: "Consumer Electronics & Retail",
    category: "Digital Commerce",
    summary:
      "Enterprise e-commerce platform and omnichannel showroom inventory bridge processing thousands of daily electronics orders with automated EMI financing and courier dispatch.",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80",
    duration: "3.5 Months",
    metrics: [
      { label: "Mobile Conversion Rate", value: "4.6%", change: "+68% Boost" },
      { label: "Page Speed Score", value: "98/100", change: "Sub-second LCP" },
      { label: "EMI Application Time", value: "60s", change: "Instant Approval" },
    ],
    overview:
      "A premier national electronics retailer with 80+ physical showrooms and high-ticket home appliance sales needed to modernize their web presence to compete with pure-play digital marketplaces while keeping physical showroom stock synchronized.",
    challenge: {
      headline: "High Cart Abandonment on High-Value Items & Fragmented Showroom Stock",
      points: [
        "Complex credit card EMI installments caused 65% of potential appliance buyers to abandon cart.",
        "Store stock not reflecting online, causing customers to order items unavailable in regional fulfillment hubs.",
        "Slow catalog page loading (5s+) during major seasonal promotional campaigns.",
      ],
      details:
        "Selling high-value refrigerators, air conditioners, and TVs requires consumer trust, flexible financing options, accurate showroom pickup coordinates, and instant technical spec comparisons.",
    },
    solution: {
      headline: "Next.js Edge Storefront with Instant Automated Bank EMI Engine",
      architecture:
        "Architected an ultra-fast headless commerce platform using Next.js 14 App Router, Tailwind CSS, Redis caching, and an automated multi-bank EMI installment checkout gateway.",
      highlights: [
        "Instant credit card 0% interest EMI calculation across 18 partner banks directly within checkout.",
        "Store locator with real-time stock lookup enabling customers to check showroom availability nearby.",
        "Automated courier consignment booking with Steadfast and Pathao APIs for nationwide appliance delivery.",
      ],
    },
    processSteps: [
      { title: "Checkout Friction Audit", desc: "Analyzed checkout drop-off points, identifying complex installment options as the primary conversion blocker." },
      { title: "Headless Next.js Engineering", desc: "Engineered a headless frontend delivering instant filter responses and sub-second page transitions." },
      { title: "Bank Gateway Integration", desc: "Built standardized banking API adapters to calculate monthly installment amounts in real-time." },
      { title: "Warehouse ERP Sync", desc: "Connected the online catalog to the central warehouse management system with 30-second interval updates." },
      { title: "Black Friday Launch", desc: "Successfully handled a 400% traffic surge on launch week without a single dropped order." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "SSLCommerz", "AWS CloudFront"],
    screenshots: [
      {
        title: "High-Conversion Appliance Storefront",
        caption: "Blazing fast product filtering, side-by-side spec comparison, and verified warranty badges.",
        bgGradient: "from-blue-900 to-slate-900",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Integrated 0% Bank EMI Checkout",
        caption: "One-click bank installment selector calculating monthly tenure, down payments, and instant processing.",
        bgGradient: "from-slate-950 to-blue-900",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Omnichannel Showroom Inventory Locator",
        caption: "Live stock availability check across 80+ regional showrooms for same-day store pickup.",
        bgGradient: "from-sky-950 to-slate-900",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    results: [
      { metric: "+68% Mobile Conversions", description: "Streamlined single-page checkout and instant bank EMI directly boosted mobile transactions." },
      { metric: "0.7s Average Page Load", description: "Lighthouse performance score jumped from 38 to 98, dramatically boosting organic Google search rankings." },
      { metric: "Automated Dispatch", description: "Over 80% of nationwide orders now dispatch without requiring manual customer call confirmations." },
    ],
    testimonial: {
      quote:
        "SmartEdge gave us an e-commerce platform that matches global retail giants. Our online appliance sales have grown by double digits every month since launch.",
      author: "Head of Digital Marketing",
      role: "E-Commerce Division",
      company: "Esquire Electronics & Retail",
    },
    relatedSlugs: ["skcomart-multi-vendor-marketplace", "aurora-enterprise-operations-erp"],
  },
  {
    slug: "skcomart-multi-vendor-marketplace",
    title: "SKCOMART Multi-Vendor B2B & B2C Marketplace",
    client: "SKCOMART Global",
    clientType: "Enterprise Demonstration Solution",
    industry: "B2B & B2C Multi-Vendor Commerce",
    category: "Digital Commerce",
    summary:
      "Enterprise multi-vendor platform featuring automated seller onboarding, escrow payment split, tiered wholesale pricing, and automated delivery tracking.",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
    duration: "5 Months",
    metrics: [
      { label: "Active Vendors", value: "350+", change: "Self-serve Onboarding" },
      { label: "Monthly Gross Volume", value: "$1.4M+", change: "4.2x Growth" },
      { label: "Commission Payout", value: "Automated", change: "Zero Manual Spreadsheets" },
    ],
    overview:
      "SKCOMART needed a robust enterprise marketplace where independent vendors could upload thousands of products, manage their own fulfillment, and receive automated payout disbursements after deducting platform commissions.",
    challenge: {
      headline: "Complex Vendor Settlement, Disputed Returns & Split Shipping Orders",
      points: [
        "Customers ordering from multiple vendors in a single cart requiring intelligent multi-courier package splitting.",
        "Holding funds in escrow until buyer confirmation to prevent vendor fraud.",
        "Managing product attributes, variations, and catalog approvals across hundreds of unstandardized sellers.",
      ],
      details:
        "Marketplace success relies on vendor trust and buyer protection. The platform needed automated verification workflows, payout thresholds, and dispute mediation dashboards.",
    },
    solution: {
      headline: "Multi-Tenant Vendor Architecture with Automated Commission Settlement",
      architecture:
        "Next.js App Router frontend with a NestJS backend running on PostgreSQL, Redis, and BullMQ queue processing for asynchronous payout ledger reconciliations.",
      highlights: [
        "Automated cart split breaking down orders into vendor-specific fulfillment packages with separate tracking IDs.",
        "Automated vendor commission calculation with configurable tier percentage and escrow clearance periods.",
        "Comprehensive vendor analytics showing revenue velocity, top return reasons, and customer satisfaction scores.",
      ],
    },
    processSteps: [
      { title: "Marketplace Mechanics Architecture", desc: "Designed commission hierarchies, escrow retention rules, and vendor payout workflows." },
      { title: "Vendor Portal Engineering", desc: "Built an intuitive seller dashboard with bulk Excel product upload and barcode generation." },
      { title: "Split-Cart Fulfillment Engine", desc: "Engineered the checkout handler that coordinates multiple shipping origins for a single customer transaction." },
      { title: "Escrow & Banking Gateways", desc: "Integrated payment gateways with automatic vendor wallet credits upon successful delivery receipt." },
      { title: "Beta Launch with 50 Pilot Sellers", desc: "Refined the onboarding pipeline and dispute management processes." },
    ],
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Stripe Connect", "Tailwind CSS", "AWS S3"],
    screenshots: [
      {
        title: "Vendor Operations & Financial Center",
        caption: "Individual seller dashboard for inventory sync, shipment generation, and automated wallet withdrawals.",
        bgGradient: "from-navy-950 to-blue-900",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Multi-Origin Checkout Cart",
        caption: "Splits items by seller with independent shipping rates and estimated delivery windows.",
        bgGradient: "from-slate-900 to-indigo-950",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Super-Admin Marketplace Governance",
        caption: "Global platform overview monitoring GMV, commission revenues, seller verifications, and disputes.",
        bgGradient: "from-blue-950 to-slate-900",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    results: [
      { metric: "350+ Vetted Sellers", description: "Automated KYC onboarding reduced seller activation time from 5 days to 20 minutes." },
      { metric: "100% Automated Escrow", description: "Zero financial disputes regarding commission cuts or courier shipping fee deductions." },
      { metric: "3.2x Platform Growth", description: "Architecture smoothly supported scaling to over 15,000 monthly transactions." },
    ],
    relatedSlugs: ["esquire-digital-commerce-engine", "aurora-enterprise-operations-erp"],
  },
  {
    slug: "ai-enterprise-document-intelligence",
    title: "CognitiveFlow: AI Enterprise Document Intelligence & Extraction",
    client: "FinLease International",
    clientType: "Enterprise Demonstration Solution",
    industry: "Financial Services & Corporate Compliance",
    category: "AI Solutions",
    summary:
      "Intelligent document analysis pipeline using OCR and LLMs to ingest, verify, and cross-reference commercial loan applications, tax returns, and bank statements in under 10 seconds.",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    duration: "3 Months",
    metrics: [
      { label: "Document Processing Time", value: "8.5s", change: "95% Faster" },
      { label: "Verification Accuracy", value: "99.4%", change: "Human-in-the-Loop" },
      { label: "Underwriting Capacity", value: "10x", change: "Zero Extra Staff" },
    ],
    overview:
      "A corporate leasing and financial firm received thousands of multi-page commercial loan applications, including audited financial statements, tax clearance certificates, and trade licenses that previously required teams of credit analysts days to manually review.",
    challenge: {
      headline: "Document Backlogs, Fraud Risks & Inconsistent Underwriting Speed",
      points: [
        "Credit analysts taking 4 to 6 hours to manually re-type balance sheet rows into credit scoring models.",
        "Difficulty detecting tampered PDF figures or inconsistent bank account statement statements.",
        "Loan applicants waiting up to 2 weeks for preliminary credit approvals, driving business to rivals.",
      ],
      details:
        "The client required an automated, privacy-compliant AI ingestion pipeline that extracts tabular figures, flags anomalies, and generates preliminary credit risk summaries without human delay.",
    },
    solution: {
      headline: "Vision-Language OCR & RAG Verification Pipeline",
      architecture:
        "Built a secure Python microservice utilizing vision models, LangChain, pgvector, and FastAPI connected to a Next.js underwriting dashboard.",
      highlights: [
        "Advanced vision OCR capable of parsing non-standard tables, stamps, and low-resolution scans with 99.4% precision.",
        "Automated financial sanity checking cross-referencing declared revenue against bank statement cash flow inflows.",
        "Human-in-the-loop verification portal allowing analysts to verify flagged discrepancies with side-by-side original PDF highlights.",
      ],
    },
    processSteps: [
      { title: "Document Taxonomy Mapping", desc: "Classified 14 critical document types including tax returns, bank statements, and audit reports." },
      { title: "Custom Extraction Prompting", desc: "Engineered structured JSON schemas with zero-shot validation guardrails." },
      { title: "Anomaly Detection Algorithms", desc: "Created deterministic balance verification scripts to verify arithmetic consistency." },
      { title: "Reviewer Portal Development", desc: "Engineered a Next.js UI showing live PDF bounding boxes linked directly to extracted JSON data." },
      { title: "SOC2 Compliance Hardening", desc: "Configured automated file deletion policies and encrypted document storage on AWS S3." },
    ],
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Docker", "Tailwind CSS"],
    screenshots: [
      {
        title: "Credit Analyst Ingestion Portal",
        caption: "Side-by-side interactive PDF viewer with highlighted bounding boxes showing extracted financial values.",
        bgGradient: "from-blue-900 to-slate-900",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Automated Fraud & Anomaly Audit",
        caption: "Cross-checks bank deposits against profit & loss statements to detect discrepancies instantly.",
        bgGradient: "from-indigo-950 to-blue-950",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Executive Underwriting Summary",
        caption: "Instant creditworthiness scoring, debt-service coverage ratio (DSCR), and recommended loan terms.",
        bgGradient: "from-slate-900 to-navy-950",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    results: [
      { metric: "95% Reduction in Review Time", description: "Complete application packet analysis dropped from 6 hours to under 30 seconds." },
      { metric: "10x Underwriting Scalability", description: "Firm scaled loan processing volume by 1,000% without adding headcount." },
      { metric: "Zero Data Leakage", description: "Complied with strict financial data privacy standards using zero-retention enterprise AI endpoints." },
    ],
    relatedSlugs: ["aurora-enterprise-operations-erp", "mk-shipping-online-ticketing-logistics"],
  },
  {
    slug: "fleet-telematics-dispatch-system",
    title: "UrbanTrans Fleet Telematics & Automated Dispatch Engine",
    client: "UrbanTrans Logistics",
    clientType: "Enterprise Demonstration Solution",
    industry: "Logistics & Fleet Operations",
    category: "Operational Platforms",
    summary:
      "Real-time GPS vehicle tracking, automated route dispatching, fuel consumption telemetry, and driver safety scoring for a fleet of 200+ commercial trucks.",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    duration: "4.5 Months",
    metrics: [
      { label: "Fuel Expenses", value: "-18%", change: "Optimized Routes" },
      { label: "On-Time Deliveries", value: "97.8%", change: "+21% Improvement" },
      { label: "Vehicle Downtime", value: "-34%", change: "Predictive Maintenance" },
    ],
    overview:
      "UrbanTrans needed an enterprise logistics platform to track 200+ delivery vehicles across regional highways, eliminate fuel pilferage, and automate delivery route assignments for drivers via mobile tablets.",
    challenge: {
      headline: "Route Inefficiencies, High Fuel Theft & Late Deliveries",
      points: [
        "Drivers taking unauthorized detours and idling engines, leading to astronomical fuel expenditures.",
        "Dispatchers spending hours manually planning delivery stop sequences on paper maps.",
        "Customers constantly calling dispatchers because of zero real-time delivery visibility.",
      ],
      details:
        "Commercial trucking requires live telemetry, geofence breach notifications, and automated route optimization algorithms to minimize kilometer travel per drop.",
    },
    solution: {
      headline: "IoT Telematics Ingestion & Real-Time Leaflet Fleet Map",
      architecture:
        "High-throughput Node.js microservice handling thousands of GPS packets per second, feeding a Next.js live control tower with WebSockets.",
      highlights: [
        "Live interactive fleet map tracking vehicles with sub-3 second updates, speed alerts, and route playback.",
        "Automated route optimization sequencing delivery stops to minimize fuel and driving time.",
        "Driver mobile app providing turn-by-turn stop guidance, digital Proof of Delivery (e-POD), and barcode parcel scans.",
      ],
    },
    processSteps: [
      { title: "IoT Device Integration", desc: "Configured GPS hardware protocols (OBD-II / CAN-bus) for vehicle data streaming." },
      { title: "Telemetry Stream Processor", desc: "Engineered Redis time-series database to handle high-frequency location ping streams." },
      { title: "Control Tower UI Design", desc: "Created an intuitive dispatcher interface with color-coded vehicle statuses and traffic overlays." },
      { title: "Driver App Engineering", desc: "Built an offline-capable React Native mobile app with digital signatures and camera photo proof." },
      { title: "Fleet Pilot Deployment", desc: "Deployed on 25 trucks before rolling out across the entire 200-vehicle fleet." },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Redis", "PostgreSQL", "WebSockets", "Docker", "Tailwind CSS"],
    screenshots: [
      {
        title: "Live Fleet Dispatch & Telemetry Control Tower",
        caption: "Map showing real-time truck locations, current speeds, remaining fuel levels, and geofence alerts.",
        bgGradient: "from-blue-900 to-slate-900",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Automated Route Optimizer",
        caption: "Algorithmically sequences multi-stop delivery drop-offs to cut travel distance and toll fees.",
        bgGradient: "from-slate-950 to-indigo-900",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Driver Digital Proof of Delivery (e-POD)",
        caption: "Mobile interface capturing customer recipient signatures, photos of delivered goods, and timestamped GPS coordinates.",
        bgGradient: "from-navy-950 to-sky-950",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    results: [
      { metric: "18% Fuel Cost Savings", description: "Route optimization and idle-engine alerts cut monthly diesel fuel expenses substantially." },
      { metric: "97.8% On-Time Arrival", description: "Automated routing helped drivers avoid highway congestion and bottlenecks." },
      { metric: "Zero Paper PODs", description: "All delivery confirmations available instantly in the billing system, accelerating customer invoicing." },
    ],
    relatedSlugs: ["mk-shipping-online-ticketing-logistics", "aurora-enterprise-operations-erp"],
  },
];
