import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phoneNumber: z
    .string()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  companyName: z
    .string()
    .max(120, "Company name is too long")
    .optional()
    .or(z.literal("")),
  serviceInterest: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .max(150, "Subject is too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(3000, "Message cannot exceed 3000 characters")
    .trim(),
  // Honeypot field for bot detection
  botField: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const projectInquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  businessEmail: z
    .string()
    .email("Please enter a valid business email address")
    .trim()
    .toLowerCase(),
  phoneNumber: z
    .string()
    .min(7, "Phone number must be at least 7 characters")
    .max(30, "Phone number cannot exceed 30 characters")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Please enter a valid phone number format")
    .trim(),
  companyName: z
    .string()
    .min(2, "Company or organization name is required")
    .max(120, "Company name cannot exceed 120 characters")
    .trim(),
  websiteUrl: z
    .string()
    .url("Please enter a valid URL (e.g. https://example.com)")
    .optional()
    .or(z.literal("")),
  country: z
    .string()
    .min(2, "Please select or enter your country")
    .max(80, "Country name is too long")
    .trim(),
  serviceRequired: z
    .string()
    .min(2, "Please select the primary service required")
    .trim(),
  projectBudget: z
    .string()
    .min(2, "Please select your estimated budget range")
    .trim(),
  projectTimeline: z
    .string()
    .min(2, "Please select your expected launch timeline")
    .trim(),
  projectDescription: z
    .string()
    .min(20, "Please describe your project in at least 20 characters")
    .max(5000, "Project description cannot exceed 5000 characters")
    .trim(),
  additionalRequirements: z
    .string()
    .max(3000, "Additional requirements cannot exceed 3000 characters")
    .optional()
    .or(z.literal("")),
  // Honeypot field for bot detection
  botField: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address").trim().toLowerCase(),
});
