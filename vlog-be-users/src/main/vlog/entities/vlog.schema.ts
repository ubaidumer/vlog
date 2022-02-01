import * as mongoose from 'mongoose';

export const VlogSchema = new mongoose.Schema({
    userId: String,
    vlogTitle: String,
    vlogDescription: String,
    vlogVideo: String
});