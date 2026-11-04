import mongoose, { Schema, Document, Model } from "mongoose";

export interface INewsletterSubscriber extends Document {
  email: string;
  source?: string;
  active: boolean;
  subscribedAt: Date;
}

const NewsletterSubscriberSchema: Schema = new Schema<INewsletterSubscriber>(
  {
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    source: {
      type: String,
      default: "footer",
    },
    active: {
      type: Boolean,
      default: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const NewsletterSubscriber: Model<INewsletterSubscriber> =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model<INewsletterSubscriber>("NewsletterSubscriber", NewsletterSubscriberSchema);
