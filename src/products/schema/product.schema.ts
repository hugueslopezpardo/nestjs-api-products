import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Represents a product document
 */
export type ProductDocument = Product & Document;

/**
 * The Product schema class that represents a product for the MongoDB database.
 */
@Schema()
export class Product {
  /**
   * Unique identifier for the product.
   */
  id: string;

  /**
   * Name of the product.
   */
  @Prop({ required: true })
  name: string;

  /**
   * Price of the product in cents.
   */
  @Prop({ required: true })
  price: number;

  /**
   * Description of the product.
   */
  @Prop({ required: true })
  description: string;
}

/**
 * The Product schema that represents a product for the MongoDB database.
 */
export const ProductSchema = SchemaFactory.createForClass(Product);
