import { NextRequest, NextResponse } from "next/server";
import mongoose, { Document, Model } from "mongoose";
import nodemailer from "nodemailer";

const MONGODB_URI = process.env.MONGODB_URI || "";
const EMAIL_USER = process.env.EMAIL_USER || "";
const EMAIL_PASS = process.env.EMAIL_PASS || "";

interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const messageSchema = new mongoose.Schema<IMessage>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

messageSchema.index({ email: 1, createdAt: -1 });

let Message: Model<IMessage>;

try {
  Message = mongoose.model<IMessage>("Message");
} catch {
  Message = mongoose.model<IMessage>("Message", messageSchema);
}

const connectToDatabase = async () => {
  if (!mongoose.connection.readyState) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
};

const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `Message from ${name}`,
      text: `From: ${email}\n\nMessage: ${message}`,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const handler = async (req: NextRequest) => {
  await connectToDatabase();

  if (req.method === "POST") {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    try {
      const newMessage = new Message({ name, email, message });
      await newMessage.save();
      sendEmail(name, email, message);
      return NextResponse.json(
        { message: "Message sent successfully", data: { name, message } },
        { status: 201 }
      );
    } catch (error) {
      console.error("MongoDB Error:", error);
      return NextResponse.json(
        { message: "An error occurred. Please try again later." },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
};

export { handler as GET, handler as POST };
