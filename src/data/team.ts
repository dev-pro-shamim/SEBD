export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  initials: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

export const coreTeamMembers: TeamMember[] = [
  {
    name: "Nahyan Ahmed",
    role: "Chief Executive Officer (CEO)",
    department: "Executive Leadership",
    bio: "Directs technology initiatives, business transformation strategies, and strategic partnerships for enterprise clients and high-growth companies across domestic and global markets.",
    initials: "NA",
    skills: ["Executive Strategy", "Software Delivery", "Client Relations", "Digital Transformation"],
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
  },
  {
    name: "MD Shamim Islam",
    role: "Chief Technology Officer & Senior Software Engineer",
    department: "Engineering Architecture",
    bio: "Senior software engineer and hands-on technology architect directing high-throughput systems, distributed microservices, cloud infrastructure, and enterprise Next.js/NestJS platforms.",
    initials: "SI",
    skills: ["System Architecture", "Senior Software Engineering", "Next.js", "NestJS / Node.js", "Cloud Infrastructure"],
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
    github: "https://github.com/smartedge-bangladesh",
  },
  {
    name: "Farhan Tanvir",
    role: "Head of Software Engineering & Delivery",
    department: "Engineering Delivery",
    bio: "Leads agile squad execution, code review standards, CI/CD automated deployment pipelines, and full-stack software development best practices.",
    initials: "FT",
    skills: ["Agile/Scrum", "Full-Stack TypeScript", "DevOps & CI/CD", "Engineering Management"],
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
    github: "https://github.com/smartedge-bangladesh",
  },
  {
    name: "Nayeem Abdullah",
    role: "Lead Mobile Applications Architect",
    department: "Mobile Engineering",
    bio: "Expert Flutter engineer with 6+ years shipping high-performance cross-platform iOS and Android applications, native plugins, and offline synchronization engines.",
    initials: "NA",
    skills: ["Flutter", "Dart", "iOS / Android Native", "BLoC", "REST / WebSockets"],
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
    github: "https://github.com/smartedge-bangladesh",
  },
  {
    name: "Sabbir Hossain",
    role: "Lead UI/UX & Design Systems Engineer",
    department: "Product Design",
    bio: "Crafts accessible, human-centered digital experiences, comprehensive Figma design systems, and responsive user journeys for complex SaaS products.",
    initials: "SH",
    skills: ["Figma Mastery", "Design Systems", "User Research", "Interaction Design", "Prototyping"],
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
  },
  {
    name: "Rifat Ahmed",
    role: "Senior QA Automation & Security Specialist",
    department: "Quality Assurance",
    bio: "Guarantees enterprise software quality through automated end-to-end regression suites, API load stress testing, and OWASP security auditing.",
    initials: "RA",
    skills: ["Playwright", "Cypress", "Postman", "Load Testing (k6)", "OWASP Auditing"],
    linkedin: "https://www.linkedin.com/company/smartedge-bangladesh/",
    github: "https://github.com/smartedge-bangladesh",
  },
];
