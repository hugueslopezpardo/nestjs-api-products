import { InputType, Field, Float } from '@nestjs/graphql';
import { IsString, IsPositive, Length, IsNumber } from 'class-validator';

/**
 * Represents the input to create a product
 */
@InputType()
export class CreateProductInput {
  /**
   * The name of the product
   */
  @Field(() => String, { description: 'The name of the product' })
  @IsString({ message: 'Name must be a string' })
  @Length(1, 100, {
    message: 'Name must be between 1 and 100 characters long',
  })
  name: string;

  /**
   * A description of the product
   */
  @Field(() => String, { description: 'A brief description of the product' })
  @IsString({ message: 'Description must be a string' })
  @Length(1, 500, {
    message: 'Description must be between 1 and 500 characters long',
  })
  description: string;

  /**
   * The price of the product in cents
   */
  @Field(() => Float, { description: 'The price of the product in cents' })
  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive({ message: 'Price must be a positive value' })
  price: number;
}
