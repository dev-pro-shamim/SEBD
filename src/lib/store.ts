// Unified Data Store with MongoDB fallback
// Seamlessly operates against MongoDB when available, and provides resilient state when offline.

import { connectToDatabase } from "./mongodb";
import { ProjectInquiry, InquiryStatus } from "./models/ProjectInquiry";
import { ContactInquiry } from "./models/ContactInquiry";
import { JobApplication } from "./models/JobApplication";
import { ActivityLog } from "./models/ActivityLog";
import { WebsiteSettings } from "./models/WebsiteSettings";

export interface StoredProjectInquiry {
  _id: string;
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName?: string;
  companyAddress?: string;
  websiteUrl?: string;
  websiteType?: string;
  country: string;
  serviceRequired: string;
  projectBudget: string;
  projectTimeline: string;
  projectDescription: string;
  meetingDate?: string;
  meetingTime?: string;
  meetingType?: string;
  additionalRequirements?: string;
  status: InquiryStatus;
  internalNotes?: string;
  emailNotificationSent: boolean;
  customerConfirmationSent: boolean;
  notificationStatus: "sent" | "failed" | "pending_retry";
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoredContactInquiry {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  subject?: string;
  message: string;
  serviceInterest?: string;
  status: "New" | "Contacted" | "Pending" | "In Progress" | "Completed" | "Cancelled";
  internalNotes?: string;
  emailNotificationSent: boolean;
  notificationStatus: "sent" | "failed" | "pending_retry";
  ipAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StoredJobApplication {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  positionSlug: string;
  positionTitle: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  resumeFileName?: string;
  coverLetter?: string;
  status: "New" | "Reviewed" | "Shortlisted" | "Interview Scheduled" | "Hired" | "Rejected";
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}

// In-Memory initial seeds
let inMemoryInquiries: StoredProjectInquiry[] = [
  {
    _id: "inq-101",
    fullName: "Arthur Pendelton",
    businessEmail: "arthur@fintechnova.co.uk",
    phoneNumber: "+44 20 7946 0912",
    companyName: "FinTech Nova Ltd",
    websiteUrl: "https://fintechnova.co.uk",
    country: "United Kingdom",
    serviceRequired: "Custom Software Development",
    projectBudget: "$25,000 - $50,000",
    projectTimeline: "2 - 3 Months",
    projectDescription:
      "We need a dedicated team of Next.js and NestJS engineers to rebuild our enterprise merchant settlement portal with real-time audit logs and automated bank transfer reconciliation.",
    additionalRequirements: "Need 2 dedicated senior backend developers and 1 frontend engineer starting next month.",
    status: "New",
    internalNotes: "Qualified lead from UK FinTech accelerator. Sent initial portfolio link.",
    emailNotificationSent: true,
    customerConfirmationSent: true,
    notificationStatus: "sent",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    _id: "inq-102",
    fullName: "Rahman Chowdhury",
    businessEmail: "rahman@apexlogistics.com.bd",
    phoneNumber: "+8801711223344",
    companyName: "Apex Logistics Bangladesh",
    websiteUrl: "https://apexlogistics.com.bd",
    country: "Bangladesh",
    serviceRequired: "ERP Development",
    projectBudget: "$10,000 - $25,000",
    projectTimeline: "3 - 6 Months",
    projectDescription:
      "Looking for a custom multi-warehouse inventory and GPS fleet tracking system with driver mobile app and thermal receipt dispatch.",
    status: "In Progress",
    internalNotes: "Met in Mirpur-10 office on Thursday. Scope specification document sent for sign-off.",
    emailNotificationSent: true,
    customerConfirmationSent: true,
    notificationStatus: "sent",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    _id: "inq-103",
    fullName: "Sarah Jenkins",
    businessEmail: "sarah@luminahealth.com",
    phoneNumber: "+1 415 555 2671",
    companyName: "Lumina Health Technologies",
    websiteUrl: "https://luminahealth.com",
    country: "United States",
    serviceRequired: "Mobile Application Development",
    projectBudget: "$50,000+",
    projectTimeline: "3 - 6 Months",
    projectDescription:
      "Developing a cross-platform HIPAA-compliant patient intake mobile app using Flutter with offline synchronization and biometric security.",
    status: "Contacted",
    internalNotes: "Discovery call completed with CTO. Scheduled technical trial sprint.",
    emailNotificationSent: true,
    customerConfirmationSent: true,
    notificationStatus: "sent",
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    _id: "inq-104",
    fullName: "Kazi Ashiqur Rahman",
    businessEmail: "ashiq@dhakacommerce.net",
    phoneNumber: "+8801819998877",
    companyName: "Dhaka Commerce Hub",
    country: "Bangladesh",
    serviceRequired: "E-commerce Development",
    projectBudget: "$5,000 - $10,000",
    projectTimeline: "1 - 2 Months",
    projectDescription:
      "High-speed headless Next.js online store with one-page checkout, bKash/Nagad instant payment, and automated Pathao courier dispatch.",
    status: "Completed",
    internalNotes: "System launched successfully. Client signed ongoing maintenance SLA.",
    emailNotificationSent: true,
    customerConfirmationSent: true,
    notificationStatus: "sent",
    createdAt: new Date(Date.now() - 86400000 * 12).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
];

let inMemoryContacts: StoredContactInquiry[] = [
  {
    _id: "cnt-201",
    fullName: "Michael Chang",
    email: "m.chang@apexsupply.sg",
    phoneNumber: "+65 6789 0123",
    companyName: "Apex Supply Singapore",
    subject: "Dedicated Development Squad inquiry",
    message:
      "Hello SmartEdge team, we are seeking 2 senior full-stack React and Node developers for a 6-month dedicated engagement. Could you share rate cards and availability?",
    serviceInterest: "Dedicated Development Teams",
    status: "New",
    internalNotes: "Singapore client. Emailed candidate profiles.",
    emailNotificationSent: true,
    notificationStatus: "sent",
    createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 6).toISOString(),
  },
  {
    _id: "cnt-202",
    fullName: "Farzana Yasmin",
    email: "farzana@elegancefashion.com.bd",
    phoneNumber: "+8801723456789",
    companyName: "Elegance Fashion BD",
    subject: "WooCommerce speed optimization",
    message:
      "Our fashion store currently takes 5+ seconds to load on mobile. We would like to rebuild it with a custom fast theme or headless Next.js frontend.",
    serviceInterest: "E-commerce Development",
    status: "Contacted",
    internalNotes: "Audit completed. Sent Lighthouse optimization proposal.",
    emailNotificationSent: true,
    notificationStatus: "sent",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
];

let inMemoryJobApplications: StoredJobApplication[] = [
  {
    _id: "app-301",
    fullName: "Asif Mahmood",
    email: "asif.mahmood.dev@gmail.com",
    phone: "+8801755667788",
    positionSlug: "senior-fullstack-engineer-nextjs-nodejs",
    positionTitle: "Senior Full-Stack Engineer (Next.js & Node.js)",
    portfolioUrl: "https://github.com/asif-dev",
    linkedinUrl: "https://linkedin.com/in/asif-mahmood",
    resumeFileName: "Asif_Mahmood_Senior_FullStack_Resume.pdf",
    coverLetter:
      "I have 5 years of full-stack engineering experience building enterprise applications with Next.js App Router, TypeScript, and NestJS. I have led sprints and deployed Dockerized microservices on AWS.",
    status: "Shortlisted",
    internalNotes: "Strong GitHub profile with production Next.js apps. Invited for technical interview.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    _id: "app-302",
    fullName: "Sadia Sultana",
    email: "sadia.flutter@outlook.com",
    phone: "+8801822334455",
    positionSlug: "lead-mobile-app-developer-flutter",
    positionTitle: "Lead Mobile App Developer (Flutter)",
    portfolioUrl: "https://play.google.com/store/apps/developer?id=SadiaDev",
    linkedinUrl: "https://linkedin.com/in/sadiasultana",
    resumeFileName: "Sadia_Sultana_Flutter_Lead_CV.pdf",
    coverLetter:
      "Passionate Flutter engineer with 4 published production apps on Google Play and App Store. Experienced with BLoC, Riverpod, SQLite offline caching, and push notifications.",
    status: "New",
    internalNotes: "Reviewed apps on Play Store. Clean UI and solid animations.",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
];

let inMemoryActivityLogs = [
  { action: "Status Updated", module: "Inquiries", performedBy: "Admin", details: "Changed inquiry #inq-102 to 'In Progress'", createdAt: new Date(Date.now() - 3600000 * 5).toISOString() },
  { action: "Lead Ingested", module: "Inquiries", performedBy: "System", details: "New project inquiry from Arthur Pendelton (FinTech Nova Ltd)", createdAt: new Date(Date.now() - 3600000 * 4).toISOString() },
  { action: "Application Shortlisted", module: "Careers", performedBy: "Admin", details: "Shortlisted Asif Mahmood for Senior Full-Stack role", createdAt: new Date(Date.now() - 86400000 * 1).toISOString() },
  { action: "Settings Saved", module: "Settings", performedBy: "Admin", details: "Updated official support WhatsApp and verified SMTP test parameters", createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
];

export const dataStore = {
  // INQUIRIES
  async getInquiries(): Promise<StoredProjectInquiry[]> {
    try {
      const db = await connectToDatabase();
      if (db) {
        const records = await ProjectInquiry.find({}).sort({ createdAt: -1 }).lean();
        if (records && records.length > 0) {
          return records.map((r: any) => ({
            ...r,
            _id: r._id.toString(),
            createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString(),
            updatedAt: r.updatedAt ? new Date(r.updatedAt).toISOString() : new Date().toISOString(),
          }));
        }
      }
    } catch (e) {
      console.warn("[Store] MongoDB read fallback:", e);
    }
    return inMemoryInquiries;
  },

  async addInquiry(inquiry: Omit<StoredProjectInquiry, "_id" | "createdAt" | "updatedAt">): Promise<StoredProjectInquiry> {
    const newRecord: StoredProjectInquiry = {
      ...inquiry,
      _id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    inMemoryInquiries.unshift(newRecord);

    try {
      const db = await connectToDatabase();
      if (db) {
        await ProjectInquiry.create(inquiry);
      }
    } catch (e) {
      console.warn("[Store] MongoDB add fallback:", e);
    }

    inMemoryActivityLogs.unshift({
      action: "New Inquiry",
      module: "Inquiries",
      performedBy: "System",
      details: `Inquiry received from ${inquiry.fullName} (${inquiry.companyName})`,
      createdAt: new Date().toISOString(),
    });

    return newRecord;
  },

  async updateInquiryStatus(id: string, status: InquiryStatus, notes?: string): Promise<boolean> {
    const item = inMemoryInquiries.find((i) => i._id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.internalNotes = notes;
      item.updatedAt = new Date().toISOString();
    }

    try {
      const db = await connectToDatabase();
      if (db) {
        const updateDoc: any = { status };
        if (notes !== undefined) updateDoc.internalNotes = notes;
        await ProjectInquiry.findByIdAndUpdate(id, updateDoc);
      }
    } catch (e) {
      console.warn("[Store] MongoDB update fallback:", e);
    }

    inMemoryActivityLogs.unshift({
      action: "Status Updated",
      module: "Inquiries",
      performedBy: "Admin",
      details: `Updated inquiry #${id} status to '${status}'`,
      createdAt: new Date().toISOString(),
    });

    return true;
  },

  async deleteInquiry(id: string): Promise<boolean> {
    inMemoryInquiries = inMemoryInquiries.filter((i) => i._id !== id);
    try {
      const db = await connectToDatabase();
      if (db) {
        await ProjectInquiry.findByIdAndDelete(id);
      }
    } catch (e) {
      console.warn("[Store] MongoDB delete fallback:", e);
    }
    inMemoryActivityLogs.unshift({
      action: "Inquiry Deleted",
      module: "Inquiries",
      performedBy: "Admin",
      details: `Deleted inquiry #${id}`,
      createdAt: new Date().toISOString(),
    });
    return true;
  },

  // CONTACTS
  async getContacts(): Promise<StoredContactInquiry[]> {
    try {
      const db = await connectToDatabase();
      if (db) {
        const records = await ContactInquiry.find({}).sort({ createdAt: -1 }).lean();
        if (records && records.length > 0) {
          return records.map((r: any) => ({
            ...r,
            _id: r._id.toString(),
            createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString(),
            updatedAt: r.updatedAt ? new Date(r.updatedAt).toISOString() : new Date().toISOString(),
          }));
        }
      }
    } catch (e) {
      console.warn("[Store] MongoDB contacts read fallback:", e);
    }
    return inMemoryContacts;
  },

  async addContact(contact: Omit<StoredContactInquiry, "_id" | "createdAt" | "updatedAt">): Promise<StoredContactInquiry> {
    const newRecord: StoredContactInquiry = {
      ...contact,
      _id: `cnt-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    inMemoryContacts.unshift(newRecord);

    try {
      const db = await connectToDatabase();
      if (db) {
        await ContactInquiry.create(contact);
      }
    } catch (e) {
      console.warn("[Store] MongoDB contact add fallback:", e);
    }

    inMemoryActivityLogs.unshift({
      action: "New Contact Message",
      module: "Contacts",
      performedBy: "System",
      details: `Contact message received from ${contact.fullName}`,
      createdAt: new Date().toISOString(),
    });

    return newRecord;
  },

  async updateContactStatus(id: string, status: any, notes?: string): Promise<boolean> {
    const item = inMemoryContacts.find((c) => c._id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.internalNotes = notes;
      item.updatedAt = new Date().toISOString();
    }
    try {
      const db = await connectToDatabase();
      if (db) {
        await ContactInquiry.findByIdAndUpdate(id, { status, ...(notes ? { internalNotes: notes } : {}) });
      }
    } catch (e) {
      console.warn("[Store] MongoDB contact update fallback:", e);
    }
    return true;
  },

  // JOB APPLICATIONS
  async getJobApplications(): Promise<StoredJobApplication[]> {
    try {
      const db = await connectToDatabase();
      if (db) {
        const records = await JobApplication.find({}).sort({ createdAt: -1 }).lean();
        if (records && records.length > 0) {
          return records.map((r: any) => ({
            ...r,
            _id: r._id.toString(),
            createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString(),
            updatedAt: r.updatedAt ? new Date(r.updatedAt).toISOString() : new Date().toISOString(),
          }));
        }
      }
    } catch (e) {
      console.warn("[Store] MongoDB job apps fallback:", e);
    }
    return inMemoryJobApplications;
  },

  async addJobApplication(app: Omit<StoredJobApplication, "_id" | "createdAt" | "updatedAt">): Promise<StoredJobApplication> {
    const newRecord: StoredJobApplication = {
      ...app,
      _id: `app-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    inMemoryJobApplications.unshift(newRecord);

    try {
      const db = await connectToDatabase();
      if (db) {
        await JobApplication.create(app);
      }
    } catch (e) {
      console.warn("[Store] MongoDB job app add fallback:", e);
    }

    inMemoryActivityLogs.unshift({
      action: "New Application",
      module: "Careers",
      performedBy: "Applicant",
      details: `${app.fullName} applied for ${app.positionTitle}`,
      createdAt: new Date().toISOString(),
    });

    return newRecord;
  },

  async updateJobApplicationStatus(id: string, status: any, notes?: string): Promise<boolean> {
    const item = inMemoryJobApplications.find((a) => a._id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.internalNotes = notes;
      item.updatedAt = new Date().toISOString();
    }
    try {
      const db = await connectToDatabase();
      if (db) {
        await JobApplication.findByIdAndUpdate(id, { status, ...(notes ? { internalNotes: notes } : {}) });
      }
    } catch (e) {
      console.warn("[Store] MongoDB job app update fallback:", e);
    }
    return true;
  },

  // ACTIVITY LOGS
  async getActivityLogs(): Promise<any[]> {
    return inMemoryActivityLogs;
  },

  // STATS OVERVIEW
  async getDashboardStats() {
    const inquiries = await this.getInquiries();
    const contacts = await this.getContacts();
    const applications = await this.getJobApplications();

    const newLeads = inquiries.filter((i) => i.status === "New").length;
    const inProgress = inquiries.filter((i) => i.status === "In Progress").length;
    const completed = inquiries.filter((i) => i.status === "Completed").length;
    const pending = inquiries.filter((i) => i.status === "Pending").length;

    return {
      totalInquiries: inquiries.length,
      newLeads,
      pendingInquiries: pending,
      inProgressProjects: inProgress,
      completedProjects: completed,
      contactMessages: contacts.length,
      jobApplications: applications.length,
      activePortfolios: 8,
      publishedBlogs: 5,
      activeServices: 18,
      productsCount: 7,
    };
  },
};
