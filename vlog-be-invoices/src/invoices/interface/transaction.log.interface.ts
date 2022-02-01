
export interface TransactionLogInter extends Document{
    _id?: string;

    ownerID: String;
    renterID: String;
    houseID: String;
    applicationId: String;
    transactionID: String;
    renterName: String;
    ownerName: String;
    invoicesType: Number;
    amount: Number;
    status:String;
    errorCode:String;
    transcript:String;
    date: Date;
}
///timestamps provide createAt and updateAt