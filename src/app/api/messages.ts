import mongoose, { Document, Model } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const MONGODB_URI = 'mongodb+srv://thakur2004harsh:ZH7bsYIopVvPxEy7@cluster0.nrlnf26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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

// Define MongoDB model
const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);

// Connect to MongoDB
mongoose.connect(MONGODB_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ message: 'Name, email, and message are required' });
      return;
    }

    try {
      const newMessage = new Message({ name, email, message });
      await newMessage.save();
      res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('MongoDB Error:', error);
      res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
