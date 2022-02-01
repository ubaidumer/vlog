
export interface Documents extends Document{
    _id: string;
    userId: string;
    blobId: string;
    documentType: number,
    isDeleted:Boolean, 
}