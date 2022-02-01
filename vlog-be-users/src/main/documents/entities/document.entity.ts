import * as mongoose from "mongoose";

export const DocumentsSchema = new mongoose.Schema({
  userId: {type:String,unique:false},
  blobId:  String,
  blobTitle: String,
  documentType: Number,
  isDeleted:Boolean, 
}, { timestamps: true })