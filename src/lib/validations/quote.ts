import { z } from "zod";

export const quoteLeadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  phoneNumber: z
    .string()
    .min(7, "Please enter a valid phone number (at least 7 digits)")
    .max(30, "Phone number cannot exceed 30 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  companyName: z
    .string()
    .max(120, "Company name cannot exceed 120 characters")
    .optional()
    .or(z.literal("")),
  companyAddress: z
    .string()
    .max(250, "Company address cannot exceed 250 characters")
    .optional()
    .or(z.literal("")),
  websiteType: z
    .string()
    .min(2, "Please select the type of website you want")
    .trim(),
  projectDescription: z
    .string()
    .min(10, "Please briefly describe your project (at least 10 characters)")
    .max(5000, "Project description cannot exceed 5000 characters")
    .trim(),
  projectBudget: z
    .string()
    .min(2, "Please select your estimated budget")
    .trim(),
  projectTimeline: z
    .string()
    .min(2, "Please select your expected project timeline")
    .trim(),
  meetingDate: z
    .string()
    .min(1, "Please select a preferred meeting date")
    .trim(),
  meetingTime: z
    .string()
    .min(1, "Please select a preferred meeting time")
    .trim(),
  meetingType: z
    .string()
    .min(2, "Please select your preferred meeting type")
    .trim(),
  // Honeypot field for bot spam detection
  botField: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type QuoteLeadData = z.infer<typeof quoteLeadSchema>;
