import mongoose, { Schema, Document, Model } from "mongoose";

export type InquiryStatus =
  | "New"
  | "Contacted"
  | "Pending"
  | "In Progress"
  | "Completed"
  | "Cancelled";

export interface IProjectInquiry extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const ProjectInquirySchema: Schema = new Schema<IProjectInquiry>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [100, "Full name cannot exceed 100 characters"],
    },
    businessEmail: {
      type: String,
      required: [true, "Business email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid business email address"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: [30, "Phone number cannot exceed 30 characters"],
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: [120, "Company name cannot exceed 120 characters"],
      default: "",
    },
    companyAddress: {
      type: String,
      trim: true,
      maxlength: [250, "Company address cannot exceed 250 characters"],
      default: "",
    },
    websiteType: {
      type: String,
      trim: true,
    },
    meetingDate: {
      type: String,
      trim: true,
    },
    meetingTime: {
      type: String,
      trim: true,
    },
    meetingType: {
      type: String,
      trim: true,
    },
    websiteUrl: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    serviceRequired: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    projectBudget: {
      type: String,
      required: [true, "Project budget is required"],
      trim: true,
    },
    projectTimeline: {
      type: String,
      required: [true, "Project timeline is required"],
      trim: true,
    },
    projectDescription: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
      minlength: [20, "Description must be at least 20 characters"],
      maxlength: [5000, "Description cannot exceed 5000 characters"],
    },
    additionalRequirements: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Pending", "In Progress", "Completed", "Cancelled"],
      default: "New",
    },
    internalNotes: {
      type: String,
      default: "",
    },
    emailNotificationSent: {
      type: Boolean,
      default: false,
    },
    customerConfirmationSent: {
      type: Boolean,
      default: false,
    },
    notificationStatus: {
      type: String,
      enum: ["sent", "failed", "pending_retry"],
      default: "pending_retry",
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Helpful index for admin queries
ProjectInquirySchema.index({ createdAt: -1, status: 1 });
ProjectInquirySchema.index({ businessEmail: 1 });

export const ProjectInquiry: Model<IProjectInquiry> =
  mongoose.models.ProjectInquiry ||
  mongoose.model<IProjectInquiry>("ProjectInquiry", ProjectInquirySchema);
