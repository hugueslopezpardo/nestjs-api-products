import { ObjectType, Field, Float } from '@nestjs/graphql';

/**
 * The Product entity class that represents a product for the GraphQL API.
 */
@ObjectType()
export class Product {
  /**
   * Unique identifier for the product.
   */
  @Field(() => String, { description: 'Unique identifier for the product' })
  id: string;

  /**
   * Name of the product.
   */
  @Field(() => String, { description: 'Name of the product' })
  name: string;

  /**
   * Price of the product in cents.
   */
  @Field(() => Float, { description: 'Price of the product in cents' })
  price: number;

  @Field(() => String, { description: 'Description of the product' })
  description: string;
}
