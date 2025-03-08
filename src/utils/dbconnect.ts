import mongoose, { Document, Model } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

export default async function connectToDatabase() {
    if (!mongoose.connection.readyState) {
      try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected");
      } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
      }
    }
  };