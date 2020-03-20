import { Controller, Get } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './interfaces/room.interface';

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomsService: RoomsService) {}

    @Get()
    getRooms(): Promise<Room[]> {
        return this.roomsService.getAll();
    }
}
