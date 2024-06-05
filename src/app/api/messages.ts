// pages/api/messages.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ message: 'Name, email, and message are required' });
      return;
    }

    try {
      // Connect to MongoDB
      const client = new MongoClient('mongodb+srv://thakur2004harsh:Jamthakurharsh2004@cluster0.okp1ife.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      });
      await client.connect();

      // Insert the message into the database
      const db = client.db();
      const collection = db.collection('messages');
      await collection.insertOne({ name, email, message, createdAt: new Date() });

      // Close the MongoDB connection
      await client.close();

      // Send a success response
      res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('MongoDB Error:', error);
      res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
