import { Module } from '@nestjs/common';
import { RoomsResolver } from './rooms.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './room.schema';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
    controllers: [RoomsController],
    providers: [RoomsService, RoomsResolver]
})
export class RoomsModule {
}
