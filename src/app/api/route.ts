import { NextRequest, NextResponse } from "next/server";
import mongoose, { Document, Model } from "mongoose";

// MongoDB connection URI
const MONGODB_URI = "mongodb+srv://thakur2004harsh:kcQRjQhAF2THwk4J@usermessage.8c8i1sq.mongodb.net/?retryWrites=true&w=majority&appName=UserMessage";
///dZyLZXJ1p2byATYb
// Define the interface for the message document
interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Define the schema for the message document
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

// Prevent model overwrite error in Next.js hot reloading
let Message: Model<IMessage>;
try {
  Message = mongoose.model<IMessage>("Message");
} catch {
  Message = mongoose.model<IMessage>("Message", messageSchema);
}

// Connect to MongoDB if not already connected
if (!mongoose.connections[0].readyState) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err:any) => console.error("MongoDB connection error:", err));
}

const handler = async (req: NextRequest) => {
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
      return NextResponse.json(
        { message: "Message sent successfully" },
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
