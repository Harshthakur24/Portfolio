import ContactModel from "../models/contactModel.js";
import asyncHandler from "express-async-handler"

const contactController = asyncHandler(async (req, res) => {
    const { name, email, message} = req.body;
    if (!name || !email || !message) {
        return res
          .status(400)
          .json({ message: "Atleast Name, Email, Message required" });
    }
    const mssg = new ContactModel({
        name,
        email,
        message,
    });
  const createdMessage = await mssg.save();
  return res.status(201).json(createdMessage.message);
});

export default contactController;