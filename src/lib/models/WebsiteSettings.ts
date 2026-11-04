import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWebsiteSettings extends Document {
  siteName: string;
  officialEmail: string;
  officialPhone: string;
  whatsappNumber: string;
  officeAddress: string;
  smtpConfigured: boolean;
  maintenanceMode: boolean;
  analyticsActive: boolean;
  updatedBy?: string;
  updatedAt: Date;
}

const WebsiteSettingsSchema: Schema = new Schema<IWebsiteSettings>(
  {
    siteName: { type: String, default: "SmartEdge Bangladesh" },
    officialEmail: { type: String, default: "info@smartedgebangladesh.com" },
    officialPhone: { type: String, default: "+8801743589784" },
    whatsappNumber: { type: String, default: "+8801743589784" },
    officeAddress: { type: String, default: "1294 Rokeya Sharani, Mirpur-10, Dhaka-1216, Next to Metro Pillar No. 267, Dhaka, Bangladesh 1216." },
    smtpConfigured: { type: Boolean, default: false },
    maintenanceMode: { type: Boolean, default: false },
    analyticsActive: { type: Boolean, default: true },
    updatedBy: { type: String, default: "Admin" },
  },
  { timestamps: true }
);

export const WebsiteSettings: Model<IWebsiteSettings> =
  mongoose.models.WebsiteSettings ||
  mongoose.model<IWebsiteSettings>("WebsiteSettings", WebsiteSettingsSchema);
