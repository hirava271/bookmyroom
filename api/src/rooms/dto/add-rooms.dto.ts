import { Field } from '@nestjs/graphql';
import { InputType } from 'type-graphql';

@InputType()
export class AddRoomsDto {

    @Field()
    readonly name: string;
}
