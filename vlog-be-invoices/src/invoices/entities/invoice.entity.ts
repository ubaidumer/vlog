import * as mongoose from 'mongoose';

export const InvoicesSchema = new mongoose.Schema({
  invoiceNumber: String,
  ownerID: String,
  ownerEmail:String,
  renterID: String,

  houseID: String,

  invoicesType: Number,

  amount: Number,
  applicationId: String,

  transactionID: String,
  transactionStatus:String,
  paymentGateway: String,
  renterName: String,
  ownerName: String,

  date: Date,
  createdById: String,
  updatedById: String,
  createdBy: String,
  updatedBy: String,
}, { timestamps: true });
///timestamps provide createAt and updateAt