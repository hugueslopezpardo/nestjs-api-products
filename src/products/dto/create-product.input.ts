import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsString, IsInt, IsPositive, IsOptional, Length, IsNumber } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'The name of the product' })
  @IsString({ message: 'Name must be a string' })
  @Length(1, 100, { message: 'Name must be between 1 and 100 characters long' })
  name: string;

  @Field(() => String, { description: 'A brief description of the product' })
  @IsString({ message: 'Description must be a string' })
  @Length(1, 500, { message: 'Description must be between 1 and 500 characters long' })
  description: string;

  @Field(() => Float, { description: 'The price of the product in cents' })
  @IsNumber({}, { message: 'Price must be a number' })
  @IsPositive({ message: 'Price must be a positive value' })
  price: number;
}
