import fs from "fs";
import path from "path";
import { servicesData } from "@/data/services";
import { portfolioProjectsData } from "@/data/portfolio";
import { caseStudiesData } from "@/data/cases";
import { blogPostsData } from "@/data/blogs";
import { coreTeamMembers } from "@/data/team";
import { companyInfo } from "@/data/company";
import {
  HomepageCMS,
  CompanyCMS,
  ServiceCMS,
  PortfolioCMS,
  CaseStudyCMS,
  BlogPostCMS,
  TestimonialCMS,
  TeamMemberCMS,
  NavigationItemCMS,
  FooterCMS,
  WebsiteSettingsCMS,
} from "@/dashboard/types";

const STORAGE_DIR = path.join(process.cwd(), "storage");
const CMS_FILE_PATH = path.join(STORAGE_DIR, "cms-data.json");

interface CMSDataStructure {
  homepage: HomepageCMS;
  company: CompanyCMS;
  services: ServiceCMS[];
  portfolio: PortfolioCMS[];
  cases: CaseStudyCMS[];
  blogs: BlogPostCMS[];
  testimonials: TestimonialCMS[];
  team: TeamMemberCMS[];
  navigation: NavigationItemCMS[];
  footer: FooterCMS;
  settings: WebsiteSettingsCMS;
}

const defaultTestimonials: TestimonialCMS[] = [
  {
    id: "test-1",
    clientName: "David Sterling",
    clientRole: "Head of Digital Operations",
    company: "Apex Retail UK",
    content: "SmartEdge delivered our enterprise multi-vendor commerce platform on schedule. Their engineering standards, TypeScript discipline, and daily transparency are world-class.",
    rating: 5,
    projectType: "Enterprise Commerce Engine",
    verified: true,
  },
  {
    id: "test-2",
    clientName: "Syed Tanveer",
    clientRole: "Managing Director",
    company: "MK Shipping Lines",
    content: "The automated launch ticketing system designed by SmartEdge transformed our terminal operations. Zero ticket duplication across peak Eid travel rush handling millions in transactions.",
    rating: 5,
    projectType: "Real-Time Fleet & Ticketing Platform",
    verified: true,
  },
  {
    id: "test-3",
    clientName: "Elena Rostova",
    clientRole: "VP of Product",
    company: "Nordic FinTech Group",
    content: "We hired 3 dedicated senior engineers from SmartEdge Bangladesh. The timezone overlap, fluent communication, and rapid velocity rival any Western European team.",
    rating: 5,
    projectType: "Dedicated Engineering Squad",
    verified: true,
  },
];

const defaultNavigation: NavigationItemCMS[] = [
  {
    id: "nav-services",
    label: "Services",
    href: "/services",
    order: 1,
    children: [
      { id: "sub-custom", label: "Custom Software Development", href: "/services/custom-software-development", description: "Scalable enterprise web applications and portals." },
      { id: "sub-auto", label: "Business Automation", href: "/services/business-automation", description: "Eliminate manual data entry and repetitive workflows." },
      { id: "sub-erp", label: "ERP & CRM Development", href: "/services/erp-crm-development", description: "Custom enterprise inventory, accounts & billing." },
      { id: "sub-ai", label: "AI Integration & Agents", href: "/services/ai-integration", description: "Private RAG pipelines, chatbots, and automation." },
      { id: "sub-mobile", label: "Mobile App Development", href: "/services/mobile-app-development", description: "Cross-platform iOS and Android Flutter systems." },
      { id: "sub-cloud", label: "Cloud & DevOps Architecture", href: "/services/cloud-devops", description: "Zero-downtime CI/CD and AWS/Docker clusters." },
    ],
  },
  {
    id: "nav-products",
    label: "Products",
    href: "/products",
    order: 2,
    children: [
      { id: "prod-hub", label: "SmartEdge Enterprise Hub", href: "/products/smartedge-enterprise-hub", description: "All-in-one business operations platform." },
      { id: "prod-stock", label: "SmartStock Pro", href: "/products/smartstock-pro", description: "Real-time warehouse & multi-branch inventory." },
      { id: "prod-crm", label: "EdgeCRM Growth", href: "/products/edgecrm-growth", description: "High-velocity pipeline and sales CRM." },
      { id: "prod-flow", label: "InvoiceFlow Automated", href: "/products/invoiceflow-automated", description: "Automated billing, invoicing & VAT sync." },
    ],
  },
  {
    id: "nav-portfolio",
    label: "Portfolio",
    href: "/portfolio",
    order: 3,
  },
  {
    id: "nav-company",
    label: "Company",
    href: "/about-us",
    order: 4,
    children: [
      { id: "sub-about", label: "About Us", href: "/about-us", description: "Our engineering story, vision, and leadership." },
      { id: "sub-cases", label: "Case Studies", href: "/case-studies", description: "Production systems, architectures, and client results." },
      { id: "sub-tech", label: "Technologies", href: "/technologies", description: "Languages, databases, and engineering standards." },
      { id: "sub-careers", label: "Careers", href: "/careers", description: "Join our senior engineering squads in Mirpur-10." },
    ],
  },
  {
    id: "nav-blog",
    label: "Insights",
    href: "/blog",
    order: 5,
  },
  {
    id: "nav-contact",
    label: "Contact",
    href: "/contact",
    order: 6,
  },
];

const defaultFooter: FooterCMS = {
  aboutText:
    "SmartEdge Bangladesh is an engineering-first software development agency headquartered in Dhaka. We build custom ERPs, high-converting digital commerce engines, enterprise SaaS platforms, and dedicated offshore squads.",
  address: "1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216",
  phone: "+8801743589784",
  email: "info@smartedgebangladesh.com",
  copyright: `© ${new Date().getFullYear()} SmartEdge Bangladesh. All rights reserved.`,
  socialLinks: {
    facebook: "https://www.facebook.com/share/18S97Y338Z/",
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
    github: "https://github.com/smartedge-bangladesh",
    twitter: "https://twitter.com/smartedgebd",
  },
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Custom Software", href: "/services/custom-software-development" },
        { label: "Business Automation", href: "/services/business-automation" },
        { label: "ERP & CRM Systems", href: "/services/erp-crm-development" },
        { label: "AI Integration & RAG", href: "/services/ai-integration" },
        { label: "Mobile Apps (Flutter)", href: "/services/mobile-app-development" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Technologies", href: "/technologies" },
        { label: "Careers (We're Hiring)", href: "/careers" },
        { label: "Hire Developers", href: "/hire-developers" },
      ],
    },
    {
      title: "Resources & Legal",
      links: [
        { label: "Technical Insights", href: "/blog" },
        { label: "Start a Project", href: "/get-a-quote" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-conditions" },
      ],
    },
  ],
};

const defaultSettings: WebsiteSettingsCMS = {
  siteName: "SmartEdge Bangladesh",
  tagline: "Software Development & Enterprise Engineering",
  logoUrl: "/smartedge-logo.png",
  faviconUrl: "/favicon.ico",
  primaryColor: "#0047ff",
  fontFamily: "Poppins",
  seoTitle: "SmartEdge Bangladesh | Enterprise Software Development & AI Solutions",
  seoDescription:
    "Leading software development and business automation partner in Dhaka, Bangladesh. We build high-performing ERP systems, custom web apps, and dedicated developer teams.",
  adminEmail: "admin@smartedgebangladesh.com",
};

const defaultHomepage: HomepageCMS = {
  hero: {
    badgeText: "PREMIUM SOFTWARE DEVELOPMENT COMPANY IN BANGLADESH",
    headline: "We Engineer Custom Software Solutions That",
    highlightText: "Scale Your Business.",
    subtitle:
      "From bespoke ERP architectures and high-throughput commerce engines to dedicated offshore development teams. We engineer robust, enterprise-grade digital systems built for reliability.",
    primaryBtnText: "Start a Project",
    primaryBtnUrl: "/get-a-quote",
    secondaryBtnText: "View Case Studies",
    secondaryBtnUrl: "/case-studies",
    floatingBadge1: { title: "Zero Downtime", subtitle: "99.98% SLA Guarantee" },
    floatingBadge2: { title: "Enterprise AI Ready", subtitle: "Private LLM & RAG Pipelines" },
  },
  stats: [
    { value: "120+", label: "Software Systems Delivered", subtext: "Across 8 global markets" },
    { value: "99.98%", label: "Platform Uptime SLA", subtext: "Zero-downtime deployments" },
    { value: "90%+", label: "Client Retention Rate", subtext: "Long-term tech partnership" },
    { value: "< 24h", label: "Consultant Response SLA", subtext: "Direct engineering contact" },
  ],
  processHeadline: "Our Predictable Engineering Lifecycle",
  processSubtitle: "Transparent, milestone-based execution with weekly demo sprints and continuous deployment.",
};

const defaultCompany: CompanyCMS = {
  name: "SmartEdge Bangladesh",
  tagline: "Engineering Digital Products. Building Long-Term Partnerships.",
  aboutText:
    "SmartEdge Bangladesh is an engineering-first software development agency headquartered in Dhaka. Founded by senior software engineers, we build mission-critical enterprise systems, multi-branch ERPs, and cloud-native digital platforms for ambitious businesses across 8 global markets.",
  mission: "To eliminate manual operational friction through bulletproof, scalable, and beautifully designed custom software.",
  vision: "To be the most reliable, respected, and technically proficient software partner in South Asia.",
  email: "info@smartedgebangladesh.com",
  phone: "+8801743589784",
  whatsappLink: "https://wa.me/8801743589784?text=Hello%20SmartEdge%20team",
  address: "1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216",
  addressShort: "1294 Rokeya Sharani, Mirpur-10, Dhaka-1216",
  foundedYear: "2018",
  headquarters: "Mirpur-10, Dhaka, Bangladesh",
  stats: companyInfo.stats,
  globalMarkets: companyInfo.globalMarkets,
};

function getInitialCMSData(): CMSDataStructure {
  return {
    homepage: defaultHomepage,
    company: defaultCompany,
    services: servicesData.map((s) => ({
      id: (s as any).id || s.slug,
      slug: s.slug,
      title: s.title,
      shortDescription: s.shortDescription,
      fullDescription: (s as any).fullDescription || s.shortDescription,
      category: s.category,
      icon: (s as any).icon || s.iconName,
      iconName: s.iconName,
      badge: s.badge,
      heroTitle: s.heroTitle,
      heroSubtitle: s.heroSubtitle,
      technologies: s.technologies,
      deliverables: s.deliverables,
      features: s.features,
      faqs: s.faqs,
    })),
    portfolio: portfolioProjectsData.map((p) => ({
      id: (p as any).id || p.slug,
      slug: p.slug,
      title: p.title,
      client: p.client,
      clientType: p.clientType,
      industry: p.industry,
      category: p.category,
      shortDescription: p.shortDescription,
      fullDescription: (p as any).fullDescription || p.shortDescription,
      architecture: (p as any).architecture || "",
      image: (p as any).image || (p as any).heroImage || "/portfolio/mk-shipping.jpg",
      gallery: (p as any).gallery || [],
      technologies: p.technologies,
      metrics: p.metrics,
      features: p.features,
      keyOutcomes: p.keyOutcomes,
      demoUrl: p.demoUrl,
      liveUrl: p.demoUrl || (p as any).liveUrl,
      githubUrl: p.githubUrl,
    })),
    cases: caseStudiesData.map((c) => ({
      id: (c as any).id || c.slug,
      slug: c.slug,
      title: c.title,
      client: c.client,
      clientType: c.clientType,
      category: c.category,
      industry: c.industry,
      duration: c.duration,
      heroImage: c.heroImage,
      overview: c.overview,
      summary: c.summary,
      relatedSlugs: c.relatedSlugs,
      featured: c.featured,
      challenge: c.challenge,
      solution: c.solution,
      results: c.results,
      technologies: c.technologies,
      metrics: c.metrics,
      screenshots: c.screenshots,
      processSteps: c.processSteps,
      testimonial: c.testimonial,
    })),
    blogs: blogPostsData.map((b) => ({
      id: (b as any).id || b.slug,
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      category: b.category,
      date: b.date,
      readTime: b.readTime,
      author: b.author,
      featured: b.featured,
      status: "published" as const,
      tags: b.tags,
      content: b.content,
      keyTakeaways: b.keyTakeaways,
    })),
    testimonials: defaultTestimonials,
    team: coreTeamMembers.map((m, idx) => ({
      id: `team-${idx + 1}`,
      name: m.name,
      role: m.role,
      department: m.department,
      bio: m.bio,
      initials: m.initials,
      skills: m.skills,
      linkedin: m.linkedin,
      github: m.github,
    })),
    navigation: defaultNavigation,
    footer: defaultFooter,
    settings: defaultSettings,
  };
}

class CMSStore {
  private data: CMSDataStructure;

  constructor() {
    this.data = this.loadFromDisk();
  }

  private loadFromDisk(): CMSDataStructure {
    try {
      if (!fs.existsSync(STORAGE_DIR)) {
        fs.mkdirSync(STORAGE_DIR, { recursive: true });
      }
      if (fs.existsSync(CMS_FILE_PATH)) {
        const fileContent = fs.readFileSync(CMS_FILE_PATH, "utf8");
        const parsed = JSON.parse(fileContent);
        return {
          ...getInitialCMSData(),
          ...parsed,
        };
      }
    } catch (e) {
      console.warn("[CMS Store] Failed loading disk cache, using defaults:", e);
    }

    const initial = getInitialCMSData();
    this.saveToDisk(initial);
    return initial;
  }

  private saveToDisk(data: CMSDataStructure) {
    try {
      if (!fs.existsSync(STORAGE_DIR)) {
        fs.mkdirSync(STORAGE_DIR, { recursive: true });
      }
      fs.writeFileSync(CMS_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
    } catch (e) {
      console.error("[CMS Store] Failed writing disk cache:", e);
    }
  }

  // HOMEPAGE
  getHomepage(): HomepageCMS {
    return this.data.homepage;
  }
  updateHomepage(patch: Partial<HomepageCMS>): HomepageCMS {
    this.data.homepage = { ...this.data.homepage, ...patch };
    this.saveToDisk(this.data);
    return this.data.homepage;
  }

  // COMPANY / ABOUT
  getCompany(): CompanyCMS {
    return this.data.company;
  }
  updateCompany(patch: Partial<CompanyCMS>): CompanyCMS {
    this.data.company = { ...this.data.company, ...patch };
    this.saveToDisk(this.data);
    return this.data.company;
  }

  // SERVICES
  getServices(): ServiceCMS[] {
    return this.data.services;
  }
  getServiceBySlug(slug: string): ServiceCMS | undefined {
    return this.data.services.find((s) => s.slug === slug || s.id === slug);
  }
  saveService(service: Partial<ServiceCMS> & { title: string }): ServiceCMS {
    const slug =
      service.slug ||
      service.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const existingIdx = this.data.services.findIndex((s) => s.id === service.id || s.slug === slug);

    const fullService: ServiceCMS = {
      id: service.id || `srv-${Date.now()}`,
      slug,
      title: service.title,
      shortDescription: service.shortDescription || "",
      fullDescription: service.fullDescription || "",
      category: service.category || "Enterprise Solutions",
      icon: service.icon || "Layers",
      technologies: service.technologies || ["TypeScript", "Next.js", "PostgreSQL"],
      deliverables: service.deliverables || ["Complete Source Code", "API Documentation", "Deployment Guide"],
      features: service.features || [],
      faqs: service.faqs || [],
      order: service.order || this.data.services.length + 1,
    };

    if (existingIdx >= 0) {
      this.data.services[existingIdx] = { ...this.data.services[existingIdx], ...fullService };
    } else {
      this.data.services.push(fullService);
    }

    this.saveToDisk(this.data);
    return fullService;
  }
  deleteService(id: string): boolean {
    const prevLen = this.data.services.length;
    this.data.services = this.data.services.filter((s) => s.id !== id && s.slug !== id);
    if (this.data.services.length !== prevLen) {
      this.saveToDisk(this.data);
      return true;
    }
    return false;
  }

  // PORTFOLIO
  getPortfolio(): PortfolioCMS[] {
    return this.data.portfolio;
  }
  getPortfolioBySlug(slug: string): PortfolioCMS | undefined {
    return this.data.portfolio.find((p) => p.slug === slug || p.id === slug);
  }
  savePortfolio(project: Partial<PortfolioCMS> & { title: string }): PortfolioCMS {
    const slug =
      project.slug ||
      project.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const existingIdx = this.data.portfolio.findIndex((p) => p.id === project.id || p.slug === slug);

    const fullProject: PortfolioCMS = {
      id: project.id || `port-${Date.now()}`,
      slug,
      title: project.title,
      clientType: project.clientType || "Enterprise Client",
      industry: project.industry || "General Industry",
      category: project.category || "Web Application",
      shortDescription: project.shortDescription || "",
      fullDescription: project.fullDescription || "",
      architecture: project.architecture || "",
      image: project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery: project.gallery || [],
      technologies: project.technologies || ["TypeScript", "Next.js", "Docker"],
      metrics: project.metrics || [],
      features: project.features || [],
      keyOutcomes: project.keyOutcomes || [],
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
    };

    if (existingIdx >= 0) {
      this.data.portfolio[existingIdx] = { ...this.data.portfolio[existingIdx], ...fullProject };
    } else {
      this.data.portfolio.push(fullProject);
    }

    this.saveToDisk(this.data);
    return fullProject;
  }
  deletePortfolio(id: string): boolean {
    const prevLen = this.data.portfolio.length;
    this.data.portfolio = this.data.portfolio.filter((p) => p.id !== id && p.slug !== id);
    if (this.data.portfolio.length !== prevLen) {
      this.saveToDisk(this.data);
      return true;
    }
    return false;
  }

  // CASE STUDIES
  getCases(): CaseStudyCMS[] {
    return this.data.cases;
  }
  getCaseBySlug(slug: string): CaseStudyCMS | undefined {
    return this.data.cases.find((c) => c.slug === slug || c.id === slug);
  }
  saveCase(c: Partial<CaseStudyCMS> & { title: string }): CaseStudyCMS {
    const slug =
      c.slug ||
      c.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const existingIdx = this.data.cases.findIndex((item) => item.id === c.id || item.slug === slug);

    const fullCase: CaseStudyCMS = {
      id: c.id || `case-${Date.now()}`,
      slug,
      title: c.title,
      client: c.client || "Confidential Partner",
      industry: c.industry || "Digital Technology",
      category: c.category || c.industry || "Enterprise Solution",
      duration: c.duration || "3 Months",
      heroImage: c.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      overview: c.overview || "",
      challenge: c.challenge || "",
      solution: c.solution || "",
      results: c.results || [],
      technologies: c.technologies || ["Next.js", "PostgreSQL", "AWS"],
      metrics: c.metrics || [],
      screenshots: c.screenshots || [],
      processSteps: c.processSteps || [],
      testimonial: c.testimonial,
    };

    if (existingIdx >= 0) {
      this.data.cases[existingIdx] = { ...this.data.cases[existingIdx], ...fullCase };
    } else {
      this.data.cases.push(fullCase);
    }

    this.saveToDisk(this.data);
    return fullCase;
  }
  deleteCase(id: string): boolean {
    const prevLen = this.data.cases.length;
    this.data.cases = this.data.cases.filter((c) => c.id !== id && c.slug !== id);
    if (this.data.cases.length !== prevLen) {
      this.saveToDisk(this.data);
      return true;
    }
    return false;
  }

  // BLOGS
  getBlogs(): BlogPostCMS[] {
    return this.data.blogs;
  }
  getBlogBySlug(slug: string): BlogPostCMS | undefined {
    return this.data.blogs.find((b) => b.slug === slug || b.id === slug);
  }
  saveBlog(b: Partial<BlogPostCMS> & { title: string }): BlogPostCMS {
    const slug =
      b.slug ||
      b.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const existingIdx = this.data.blogs.findIndex((item) => item.id === b.id || item.slug === slug);

    const fullBlog: BlogPostCMS = {
      id: b.id || `blog-${Date.now()}`,
      slug,
      title: b.title,
      excerpt: b.excerpt || "",
      category: b.category || "Engineering",
      date: b.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: b.readTime || "5 min read",
      author: b.author || { name: "Nahyan Ahmed", role: "CEO", initials: "NA" },
      featured: b.featured || false,
      status: b.status || "published",
      tags: b.tags || ["Software", "Architecture"],
      content: b.content || [],
      keyTakeaways: b.keyTakeaways || [],
    };

    if (existingIdx >= 0) {
      this.data.blogs[existingIdx] = { ...this.data.blogs[existingIdx], ...fullBlog };
    } else {
      this.data.blogs.unshift(fullBlog);
    }

    this.saveToDisk(this.data);
    return fullBlog;
  }
  deleteBlog(id: string): boolean {
    const prevLen = this.data.blogs.length;
    this.data.blogs = this.data.blogs.filter((b) => b.id !== id && b.slug !== id);
    if (this.data.blogs.length !== prevLen) {
      this.saveToDisk(this.data);
      return true;
    }
    return false;
  }

  // TESTIMONIALS
  getTestimonials(): TestimonialCMS[] {
    return this.data.testimonials;
  }
  saveTestimonial(t: Partial<TestimonialCMS> & { clientName: string; content: string }): TestimonialCMS {
    const existingIdx = this.data.testimonials.findIndex((item) => item.id === t.id);
    const fullTestimonial: TestimonialCMS = {
      id: t.id || `test-${Date.now()}`,
      clientName: t.clientName,
      clientRole: t.clientRole || "Executive",
      company: t.company || "Enterprise Partner",
      content: t.content,
      rating: t.rating || 5,
      avatar: t.avatar,
      projectType: t.projectType || "Custom Software Development",
      verified: t.verified ?? true,
    };

    if (existingIdx >= 0) {
      this.data.testimonials[existingIdx] = { ...this.data.testimonials[existingIdx], ...fullTestimonial };
    } else {
      this.data.testimonials.push(fullTestimonial);
    }

    this.saveToDisk(this.data);
    return fullTestimonial;
  }
  deleteTestimonial(id: string): boolean {
    const prevLen = this.data.testimonials.length;
    this.data.testimonials = this.data.testimonials.filter((t) => t.id !== id);
    if (this.data.testimonials.length !== prevLen) {
      this.saveToDisk(this.data);
      return true;
    }
    return false;
  }

  // TEAM
  getTeam(): TeamMemberCMS[] {
    return this.data.team;
  }
  saveTeamMember(m: Partial<TeamMemberCMS> & { name: string; role: string }): TeamMemberCMS {
    const existingIdx = this.data.team.findIndex((item) => item.id === m.id);
    const initials =
      m.initials ||
      m.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    const fullMember: TeamMemberCMS = {
      id: m.id || `team-${Date.now()}`,
      name: m.name,
      role: m.role,
      department: m.department || "Engineering",
      bio: m.bio || "",
      initials,
      skills: m.skills || ["Software Engineering"],
      linkedin: m.linkedin,
      github: m.github,
      image: m.image,
    };

    if (existingIdx >= 0) {
      this.data.team[existingIdx] = { ...this.data.team[existingIdx], ...fullMember };
    } else {
      this.data.team.push(fullMember);
    }

    this.saveToDisk(this.data);
    return fullMember;
  }
  deleteTeamMember(id: string): boolean {
    const prevLen = this.data.team.length;
    this.data.team = this.data.team.filter((m) => m.id !== id);
    if (this.data.team.length !== prevLen) {
      this.saveToDisk(this.data);
      return true;
    }
    return false;
  }

  // NAVIGATION
  getNavigation(): NavigationItemCMS[] {
    return this.data.navigation;
  }
  updateNavigation(items: NavigationItemCMS[]): NavigationItemCMS[] {
    this.data.navigation = items;
    this.saveToDisk(this.data);
    return this.data.navigation;
  }

  // FOOTER
  getFooter(): FooterCMS {
    return this.data.footer;
  }
  updateFooter(patch: Partial<FooterCMS>): FooterCMS {
    this.data.footer = { ...this.data.footer, ...patch };
    this.saveToDisk(this.data);
    return this.data.footer;
  }

  // SETTINGS
  getSettings(): WebsiteSettingsCMS {
    return this.data.settings;
  }
  updateSettings(patch: Partial<WebsiteSettingsCMS>): WebsiteSettingsCMS {
    this.data.settings = { ...this.data.settings, ...patch };
    this.saveToDisk(this.data);
    return this.data.settings;
  }
}

// Singleton global instance
declare global {
  // eslint-disable-next-line no-var
  var cmsStoreInstance: CMSStore | undefined;
}

export const cmsStore = global.cmsStoreInstance || new CMSStore();

if (!global.cmsStoreInstance) {
  global.cmsStoreInstance = cmsStore;
}
