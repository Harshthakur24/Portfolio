import { NextRequest, NextResponse } from "next/server";
import mongoose, { Document, Model } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

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
} catch (error) {
  Message = mongoose.model<IMessage>("Message", messageSchema);
}

const connectToDatabase = async () => {
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

const handler = async (req: NextRequest) => {
  await connectToDatabase();

  if (req.method === "POST") {
    try {
      const { name, email, message } = await req.json();

      if (!name || !email || !message) {
        return NextResponse.json(
          { message: "Name, email, and message are required" },
          { status: 400 }
        );
      }

      const newMessage = new Message({ name, email, message });
      await newMessage.save();

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
