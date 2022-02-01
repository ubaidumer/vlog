import { InputType, Int, Field, ObjectType, Extensions } from '@nestjs/graphql';

@ObjectType()
export class TopHouses {
    @Field({ nullable: true })
    houseId: string;
    @Field({nullable:true})
    city:string
    @Field({nullable:true})
    streetNo:string
    @Field({nullable:true})
    vlogPurchase:number
    @Field({nullable:true})
    updatedAt:string;


}


