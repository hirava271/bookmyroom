import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { RoomsModule } from './rooms/rooms.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql'
        }),
        MongooseModule.forRoot(
            'mongodb+srv://book-my-room-a2:admin@cluster0-91cnb.mongodb.net/test?retryWrites=true&w=majority'
        ),
        RoomsModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
