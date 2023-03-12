import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default model('User', userSchema);
