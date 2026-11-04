import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJobApplication extends Document {
  fullName: string;
  email: string;
  phone: string;
  positionSlug: string;
  positionTitle: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  resumeFileName?: string;
  resumeContent?: string; // base64 or link
  coverLetter?: string;
  status: "New" | "Reviewed" | "Shortlisted" | "Interview Scheduled" | "Hired" | "Rejected";
  internalNotes?: string;
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const JobApplicationSchema: Schema = new Schema<IJobApplication>(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      maxlength: [100, "Full name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: [30, "Phone cannot exceed 30 characters"],
    },
    positionSlug: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    positionTitle: {
      type: String,
      required: [true, "Position title is required"],
      trim: true,
    },
    portfolioUrl: {
      type: String,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      trim: true,
    },
    resumeFileName: {
      type: String,
      trim: true,
    },
    resumeContent: {
      type: String,
    },
    coverLetter: {
      type: String,
      trim: true,
      maxlength: [4000, "Cover letter cannot exceed 4000 characters"],
    },
    status: {
      type: String,
      enum: ["New", "Reviewed", "Shortlisted", "Interview Scheduled", "Hired", "Rejected"],
      default: "New",
    },
    internalNotes: {
      type: String,
      default: "",
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

JobApplicationSchema.index({ createdAt: -1, positionSlug: 1 });

export const JobApplication: Model<IJobApplication> =
  mongoose.models.JobApplication ||
  mongoose.model<IJobApplication>("JobApplication", JobApplicationSchema);
