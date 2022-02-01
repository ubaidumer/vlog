export interface User extends Document {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  dateOfBirth: Date;
  street: string;
  houseNumber: string;
  postCode: string;
  place: string;
  status: number;
  profession: String;
  profilePicture: string;
  role: number;
  profileCompletion: string;
  additionalHouseNumber: string; 
  shortDescription: string;
  land:string;
  isDeleted:string;
  userId?: string;
  address:{
    street: string;
    houseNumber: string;
    postCode: string;
    place: string;
    additionalHouseNumber:string;
      land:string;
  }
}
