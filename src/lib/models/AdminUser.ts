import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAdminUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: "super_admin" | "admin" | "editor";
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema: Schema = new Schema<IAdminUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["super_admin", "admin", "editor"],
      default: "admin",
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const AdminUser: Model<IAdminUser> =
  mongoose.models.AdminUser ||
  mongoose.model<IAdminUser>("AdminUser", AdminUserSchema);
