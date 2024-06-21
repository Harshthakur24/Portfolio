import { NextRequest, NextResponse } from "next/server";
import mongoose, { Document, Model } from "mongoose";
import { message } from "antd";


const MONGODB_URI = "mongodb+srv://thakur2004harsh:ZH7bsYIopVvPxEy7@cluster0.nrlnf26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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




let Message: Model<IMessage>;
try {
  Message = mongoose.model<IMessage>("Message");
} catch {
  Message = mongoose.model<IMessage>("Message", messageSchema);
}




const handler = async (req: NextRequest) => {
  if (!mongoose.connections[0].readyState) {
    mongoose
      .connect(MONGODB_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((err:any) => console.error("MongoDB connection error:", err));
  }

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
        { message: "Message sent successfully", data: {name, message} },
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
