# SmartEdge Bangladesh - Enterprise Software Company Website

Official production-grade enterprise website and administrative portal for **SmartEdge Bangladesh Ltd.** ([smartedgebangladesh.com](https://smartedgebangladesh.com)), engineered to the highest architectural standards with visual language, layout, navigation, and functionality meticulously crafted after global software engineering benchmarks (inspired by **Vivasoft Limited**).

---

## 1. Company Information

- **Company Name:** SmartEdge Bangladesh Ltd.
- **Website:** [https://smartedgebangladesh.com](https://smartedgebangladesh.com)
- **Official Email:** [info@smartedgebangladesh.com](mailto:info@smartedgebangladesh.com)
- **Direct Phone:** `+8801743589784`
- **WhatsApp:** `+8801743589784` ([https://wa.me/8801743589784](https://wa.me/8801743589784))
- **Head Office:** 1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216.
- **Global Markets Served:** Bangladesh, United States, United Kingdom, United Arab Emirates, Australia, Canada, Singapore, Italy

---

## 2. Technology Stack

- **Framework:** Next.js 14+ (App Router with React Server Components)
- **Language:** TypeScript with strict type safety
- **Styling:** Tailwind CSS 3.4 with custom enterprise design tokens
- **Animations & Icons:** Framer Motion & Lucide React (with branded SVG icons)
- **Charts & Dashboards:** Recharts for admin analytics and telemetry
- **Forms & Validation:** React Hook Form + Zod v4 schemas
- **Database & Resilience:** MongoDB via Mongoose ODM + Resilient fallback in-memory state store (zero runtime crashes when offline)
- **Email Delivery:** Nodemailer with official business email SMTP configuration & branded responsive HTML templates
- **SEO & Structured Data:** Semantic HTML5, OpenGraph, Twitter Cards, XML Sitemap (`/sitemap.xml`), `robots.txt`, and Schema.org Organization structured data

---

## 3. Complete Architecture & Route Map

### Public Web Experience
| Route | Description |
| :--- | :--- |
| `/` | **14-Section Enterprise Homepage:** Hero, Company Expertise, Engagement Models, Featured Case Studies, Services, Products & Solutions, Technology Stack, Industries, Why Choose Us, Development Process, Testimonials, Engineering Leadership, FAQ Accordion, Final High-Conversion CTA |
| `/services` | Comprehensive Services Hub covering all 18 engineering specializations |
| `/services/[slug]` | Individual detail pages for all 18 services (e.g. `custom-software-development`, `web-application-development`, `mobile-app-development`, `ai-development-integration`, `business-process-automation`, `erp-crm-development`, `cloud-devops-solutions`, `dedicated-development-teams`, etc.) |
| `/hire-developers` | **Dedicated Developers Hub:** 12 specialized engineering roles (Next.js, Node.js, Flutter, Python AI, DevOps, QA, etc.), 4 engagement models, 2-week risk-free trial, hiring process, and FAQs |
| `/solutions` | Enterprise Solutions Overview covering 8 transformative capabilities |
| `/solutions/[slug]` | Detail pages for all 8 solutions (`digital-transformation`, `enterprise-software-solutions`, `business-automation`, `ai-powered-solutions`, `ecommerce-solutions`, `saas-solutions`, `erp-crm-solutions`, `workflow-automation`) |
| `/products` | Ready-to-deploy enterprise software products and SaaS platforms |
| `/products/[slug]` | Detail pages for all 7 digital products (`smartedge-enterprise-hub`, `smartstock-pro`, `edgecrm-growth`, `omnierp-core`, `cloudsync-engine`, `apexcommerce-suite`, `docuintelligence-ai`) |
| `/cases` / `/case-studies` | Filterable Case Studies showcasing client success metrics and architecture |
| `/cases/[slug]` / `/case-studies/[slug]` | Deep-dive case studies with challenge, solution, and quantified outcomes |
| `/portfolio` | Searchable & filterable engineering portfolio with live links and stack badges |
| `/portfolio/[slug]` | Detail pages for portfolio milestones |
| `/technologies` | Categorized tech stack (Frontend, Backend, Mobile, Cloud/DevOps, Database, AI/ML) |
| `/industries` | 11 Industry Verticals Hub with domain challenges and custom architectures |
| `/industries/[slug]` | Detail pages for Healthcare, Finance, Education, E-commerce, Retail, Logistics, Real Estate, Manufacturing, Travel & Hospitality, SaaS, and Startups |
| `/about-us` | Company story, core values, leadership team, working methodology, and journey |
| `/careers` | Career openings, company culture, employee benefits, and perks |
| `/careers/[slug]` | Job descriptions with interactive application modal & resume upload submission |
| `/blog` / `/insights` | Engineering perspectives, cloud blueprints, and technical whitepapers |
| `/blog/[slug]` | Long-form technical articles with key takeaways and author bios |
| `/contact` | Official contact information, direct phone/WhatsApp links, map, and business inquiry form |
| `/discuss-your-project` | Multi-step enterprise project estimation and scoping wizard |
| `/privacy-policy` | Data protection and enterprise AI governance policy |
| `/terms-conditions` | Intellectual property assignment and SLA terms |
| `/sitemap.xml` | Dynamic Next.js XML sitemap generator indexing all routes |
| `/robots.txt` | Search engine indexing rules |

### Administrative Portal (`/admin`)
| Route | Description |
| :--- | :--- |
| `/admin/login` | Secure session authentication with JWT-compatible cookie sessions |
| `/admin` | Executive dashboard overview with key KPIs, Recharts monthly trend graphs, and live activity audit stream |
| `/admin/inquiries` | Project inquiries manager with 6-stage status workflow (`New`, `Contacted`, `Pending`, `In Progress`, `Completed`, `Cancelled`), internal notes, and direct contact shortcuts |
| `/admin/contacts` | General contact messages inbox with status management |
| `/admin/jobs` | Candidate job application tracking, resume URLs, and hiring pipeline |
| `/admin/products` | Digital software products and demo catalog overview |
| `/admin/services` | Service offering management and pricing tier reference |
| `/admin/settings` | Company details, system parameters, and live SMTP diagnostic health check |
| `/api/admin/export` | On-demand CSV export for project inquiries and CRM syncing |

---

## 4. Default Admin Credentials

For immediate administration access and local verification:

- **Portal URL:** `http://localhost:3000/admin/login`
- **Default Master Admin Email:** `admin@smartedgebangladesh.com`
- **Default Master Password:** `SmartEdge@2026!`

> **Security Note:** You can update the administrator email and credentials inside the administrative portal settings or through the MongoDB `adminusers` collection in production.

---

## 5. Environment Variables Configuration

Create a `.env.local` file in the project root:

```ini
# MongoDB Connection (Optional for local development; app has built-in resilient in-memory fallback)
MONGODB_URI=mongodb://localhost:27017/smartedge_bangladesh

# Official Business Email SMTP Configuration
# Official Company Email: info@smartedgebangladesh.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@smartedgebangladesh.com
SMTP_PASS=your-smtp-app-password
FROM_EMAIL="SmartEdge Bangladesh <info@smartedgebangladesh.com>"
ADMIN_EMAIL=info@smartedgebangladesh.com

# Admin Authentication Session Secret
JWT_SECRET=smartedge_enterprise_jwt_secret_2026_super_secure

# Public URLs & Channels
NEXT_PUBLIC_SITE_URL=https://smartedgebangladesh.com
NEXT_PUBLIC_COMPANY_PHONE=+8801743589784
NEXT_PUBLIC_WHATSAPP_NUMBER=8801743589784
```

---

## 6. Development & Build Commands

All commands can be executed via your terminal:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Compile production build
npm run build

# Start production server
npm run start
```

---

## 7. Key Features & Reference Highlights

1. **Vivasoft-Grade Header & Navigation:**
   - Top utility bar with direct email, WhatsApp, and phone contacts (`+8801743589784`).
   - Rich multi-column mega menus for **Services**, **Solutions**, **Hire Developers**, **Products**, **Technologies**, **Industries**, and **Company**.
   - Automatic hiding on administrative `/admin` pages for a distraction-free management UI.
2. **14 Sequential Homepage Sections:**
   - 100% compliant with the prompt's exact sequence: Hero, Company Expertise, Engagement Models, Featured Case Studies, Services, Products & Solutions, Technology Stack, Industries, Why Choose Us, Development Process, Testimonials, Engineering Leadership, FAQ Accordion, and High-Conversion CTA.
3. **Dedicated Developer Augmentation (`/hire-developers`):**
   - 12 technical profiles, 4 engagement models, 4-step streamlined onboarding, and a 2-week risk-free trial guarantee.
4. **Dual-Layer Resilient Data Store:**
   - Operates natively on MongoDB when connected.
   - Provides seed-initialized, persistent in-memory storage when offline so that API routes and dashboard views never produce 500 errors during local testing or demo presentations.
5. **Floating Actions:**
   - Quick-access WhatsApp chat pill and direct phone dialing widget on every public page.

---

&copy; 2026 SmartEdge Bangladesh Ltd. All rights reserved.
