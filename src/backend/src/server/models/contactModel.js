import { model, Schema } from "mongoose";

// Create the schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const ContactModel = model("Contact", ContactSchema);
export default ContactModel;