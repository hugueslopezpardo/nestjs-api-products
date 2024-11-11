import { CreateProductInput } from './create-product.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

/**
 * Represents the input to update a product
 */
@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  /**
   * The ID of the product to be updated
   */
  @Field(() => String, { description: 'The ID of the product to be updated' })
  id: string;
}
