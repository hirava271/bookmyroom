import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './interfaces/room.interface';

@Injectable()
export class RoomsService {
    constructor(@InjectModel('Room') private roomModel: Model<Room>) {}

    async getAll(): Promise<Room[]> {
        return this.roomModel.find().exec();
    }

    async addRoom(beingAddedRoom: Room): Promise<Room> {
        const savedRoom = new this.roomModel(beingAddedRoom);
        return savedRoom.save();
    }
}
