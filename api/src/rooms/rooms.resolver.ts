import { Query, Resolver } from '@nestjs/graphql';
import { RoomsService } from './rooms.service';
import { GetRoomsDto } from './dto/get-rooms.dto';

@Resolver( )
export class RoomsResolver {
    constructor(
        private readonly roomsService: RoomsService
    ) {}

    @Query(() => String)
    async hello(){
        return 'hello'
    }

    @Query(() => [GetRoomsDto])
    async rooms(){
        return this.roomsService.getAll();
    }
}
