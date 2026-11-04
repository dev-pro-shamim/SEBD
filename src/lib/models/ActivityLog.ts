import mongoose, { Schema, Document, Model } from "mongoose";

export interface IActivityLog extends Document {
  action: string;
  module: "Inquiries" | "Contacts" | "Careers" | "Settings" | "Auth" | "Content";
  performedBy: string;
  details: string;
  ipAddress?: string;
  createdAt: Date;
}

const ActivityLogSchema: Schema = new Schema<IActivityLog>(
  {
    action: { type: String, required: true },
    module: {
      type: String,
      enum: ["Inquiries", "Contacts", "Careers", "Settings", "Auth", "Content"],
      required: true,
    },
    performedBy: { type: String, default: "Admin" },
    details: { type: String, required: true },
    ipAddress: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

ActivityLogSchema.index({ createdAt: -1 });

export const ActivityLog: Model<IActivityLog> =
  mongoose.models.ActivityLog ||
  mongoose.model<IActivityLog>("ActivityLog", ActivityLogSchema);
