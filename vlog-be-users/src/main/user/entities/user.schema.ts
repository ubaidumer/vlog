import * as mongoose from 'mongoose';
import CONFIG from 'src/config/config';
const AutoIncrementFactory = require('mongoose-sequence');
const connection = mongoose.createConnection(CONFIG.MONGODB_URL);
const AutoIncrement = AutoIncrementFactory(connection);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const AddressSchema = new mongoose.Schema({
  houseNumber: String,
  street: String,
  postCode: String,
  place: String,
});

export const RoleSchema = {
  id: String,
  name: String,
};

export const UserProfileSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, index: true, unique: true },
    firstName: String,
    lastName: String,
    userId: {
      type: Number,
      index: true,
      unique: true,
    },
    mobileNumber: { type: String, required: true, index: true, unique: true },
    email: { type: String, required: true, index: true, unique: true },
    dateOfBirth: { type: Date, required: false },
    houseNumber: String,
    street: String,
    postCode: String,
    place: String,
    status: Number, /// active or in-active
    profession: String, /// enum
    profilePicturePath: String,
    role: Number, /// enum must be enum type
    profileCompletion: String,
    additionalHouseNumber: String,
    land: String,
    companyName: String,
    shortDescription: String,
    landlinePhone: String,
    isDeleted: String,
    deActiveDate: Date,
    createdById: String,

    updatedById: String,
    createdBy: String,
    updatedBy: String,
    isDeActivated: Boolean,
  },
  { timestamps: true },
);

UserProfileSchema.plugin(AutoIncrement, { inc_field: 'userId' });
