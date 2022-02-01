import * as mongoose from 'mongoose';
export const EmailSubscriberSchema = new mongoose.Schema({
  userId: String,
  email: String,
  city: String,
  subscriptionType: String,
  status: Boolean,
},{ timestamps: true });