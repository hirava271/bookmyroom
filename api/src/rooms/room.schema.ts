import * as mongoose from 'mongoose';

export const RoomSchema = new mongoose.Schema({
    id: Number,
    name: String,
});
