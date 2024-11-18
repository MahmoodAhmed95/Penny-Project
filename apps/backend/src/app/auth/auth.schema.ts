import { Schema, Document } from 'mongoose';

export interface Auth extends Document {
  // username: string;
  email: string;
  password: string;
}

export const AuthSchema = new Schema({
  // username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
