
export interface InvoicesInter extends Document {
  _id?: string;

  ownerID: string;
  ownerEmail:string;
  ownerName: String,

  renterName: String,

  renterID: string;
  userId: number;

  houseID: string;

  invoicesType: number;

  amount: number;

  applicationId: String,
  
  invoiceNumber: string;
  transactionID: string;
  transactionStatus:string;
  paymentGateway?: string;

  date?: Date;

  createdAt?: Date;

  updatedAt?: Date;

  createdById?: String;

  updatedById?: String;

  createdBy?: String;

  updatedBy?: String;

}
