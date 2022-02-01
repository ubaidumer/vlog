import * as mongoose from 'mongoose';

export const TransactionLogSchema = new mongoose.Schema({


    ownerID: String,
    renterID: String,
    houseID: String, 
    applicationId: String,
    transactionID: String,
    renterName: String,
    ownerName: String,
    invoicesType: Number,
    amount: Number,
    status:String,
    errorCode:String,
    transcript:String,
    date: Date,
    // 1_id
   // 1ownerID
   // 1ownerName
   // 1applicationId
   // 1renterName
  //  1renterID
  //  1houseID
  //  1invoicesType
   // amount
  //  1transactionID
  //  status (mollie transaction status)
  //  errorCode (mollie error code)
  //  transcript (error logs, full json)
}, { timestamps: true });
///timestamps provide createAt and updateAt