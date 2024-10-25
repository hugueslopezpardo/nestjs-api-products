import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String, { description: 'Unique identifier for the product' })
  id: string;

  @Field(() => String, { description: 'Name of the product' })
  name: string;

  @Field(() => Float, { description: 'Price of the product in cents' })
  price: number;

  @Field(() => String, { nullable: true, description: 'Description of the product' })
  description?: string;
}
