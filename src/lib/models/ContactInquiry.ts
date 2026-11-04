import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContactInquiry extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const ContactInquirySchema: Schema = new Schema<IContactInquiry>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      maxlength: [30, "Phone number cannot exceed 30 characters"],
    },
    companyName: {
      type: String,
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [150, "Subject cannot exceed 150 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
      maxlength: [3000, "Message cannot exceed 3000 characters"],
    },
    serviceInterest: {
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

ContactInquirySchema.index({ createdAt: -1, status: 1 });

export const ContactInquiry: Model<IContactInquiry> =
  mongoose.models.ContactInquiry ||
  mongoose.model<IContactInquiry>("ContactInquiry", ContactInquirySchema);
