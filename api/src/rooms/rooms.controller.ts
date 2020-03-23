import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './interfaces/room.interface';
import { AddRoomsDto } from './dto/add-rooms.dto';

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) {}

    @Get()
    getRooms(): Promise<Room[]> {
        return this.roomsService.getAll();
    }

    @Post()
    addRoom(@Body()beingAddedRoom: AddRoomsDto): Promise<Room> {
        return this.roomsService.addRoom(beingAddedRoom);
    }
};
