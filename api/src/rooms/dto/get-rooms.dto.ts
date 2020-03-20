import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetRoomsDto {

    @Field(() => ID)
    id: string;

    @Field()
    readonly name: string;
}
