export interface HomepageCMS {
  hero: {
    badgeText: string;
    headline: string;
    highlightText: string;
    subtitle: string;
    primaryBtnText: string;
    primaryBtnUrl: string;
    secondaryBtnText: string;
    secondaryBtnUrl: string;
    floatingBadge1: { title: string; subtitle: string };
    floatingBadge2: { title: string; subtitle: string };
  };
  stats: Array<{
    value: string;
    label: string;
    subtext?: string;
  }>;
  processHeadline: string;
  processSubtitle: string;
}

export interface CompanyCMS {
  name: string;
  tagline: string;
  aboutText: string;
  mission: string;
  vision: string;
  email: string;
  phone: string;
  whatsappLink: string;
  address: string;
  addressShort: string;
  foundedYear: string;
  headquarters: string;
  stats: Array<{ value: string; label: string }>;
  globalMarkets: Array<{ country: string; code: string; role: string }>;
}

export interface SEOConfig {
  title?: string;
  description?: string;
  focusKeyword?: string;
  secondaryKeywords?: string[];
  canonicalUrl?: string;
  metaRobots?: "index, follow" | "noindex, follow" | "index, nofollow" | "noindex, nofollow";
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  imageAlt?: string;
  schemaType?: "Article" | "Service" | "WebPage" | "Organization";
}

export interface ServiceCMS {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  icon: string;
  iconName?: string;
  badge?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  technologies: string[];
  deliverables: string[];
  features?: Array<{ title: string; desc: string }>;
  faqs?: Array<{ q: string; a: string }>;
  order?: number;
  seo?: SEOConfig;
}

export interface PortfolioCMS {
  id: string;
  slug: string;
  title: string;
  client?: string;
  clientType: string;
  industry: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  architecture: string;
  image: string;
  gallery: Array<{ title: string; caption: string; image: string }>;
  technologies: string[];
  metrics: Array<{ label: string; value: string }>;
  features: string[];
  keyOutcomes: string[];
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  seo?: SEOConfig;
}

export interface CaseStudyCMS {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientType?: string;
  category?: string;
  industry: string;
  duration: string;
  heroImage: string;
  overview: string;
  summary?: string;
  relatedSlugs?: string[];
  featured?: boolean;
  challenge: string | { headline: string; points: string[]; details: string };
  solution: string | { headline: string; architecture: string; highlights: string[] };
  results: Array<{ metric: string; description: string }>;
  technologies: string[];
  metrics: Array<{ label: string; value: string; change: string }>;
  screenshots: Array<{ title: string; caption: string; image: string }>;
  processSteps: Array<{ title: string; desc: string }>;
  testimonial?: { quote: string; author: string; role: string; company?: string };
  seo?: SEOConfig;
}

export interface BlogPostCMS {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  featured: boolean;
  status: "published" | "draft";
  tags: string[];
  content: string[];
  keyTakeaways: string[];
  seo?: SEOConfig;
}

export interface TestimonialCMS {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  projectType: string;
  verified: boolean;
}

export interface TeamMemberCMS {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  initials: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  image?: string;
  avatarUrl?: string;
  featured?: boolean;
}

export interface NavChildItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavigationItemCMS {
  id: string;
  label: string;
  href: string;
  order: number;
  isButton?: boolean;
  highlight?: boolean;
  children?: NavChildItem[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumnCMS {
  title: string;
  links: FooterLinkItem[];
}

export interface FooterCMS {
  aboutText: string;
  address: string;
  phone: string;
  email: string;
  copyright: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  columns: FooterColumnCMS[];
}

export interface WebsiteSettingsCMS {
  siteName: string;
  tagline: string;
  logoUrl?: string;
  faviconUrl?: string;
  primaryColor?: string;
  fontFamily?: string;
  seoTitle?: string;
  seoDescription?: string;
  focusKeywords?: string;
  defaultOgImage?: string;
  defaultMetaRobots?: string;
  googleSearchConsoleVerification?: string;
  bingWebmasterVerification?: string;
  googleTagManagerId?: string;
  analyticsId?: string;
  googleAnalyticsId?: string;
  pixelId?: string;
  metaPixelId?: string;
  adminEmail?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface MediaItemCMS {
  id: string;
  fileName: string;
  url: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: string;
}
