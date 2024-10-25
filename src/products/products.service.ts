import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  /**
   * Constructor for the ProductsService class
   * @param productModel - The product model
   */
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  /**
   * Create a new product
   * @param createProductInput - The input for creating a product
   * @returns - The created product
   */
  create(createProductInput: CreateProductInput): Promise<Product> {
    const createdProduct = new this.productModel(createProductInput);
    return createdProduct.save();
  }

  /**
   * Find all products
   * @returns - A list of products
   */
  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  /**
   * Find a product by id
   * @param id - The id of the product
   * @returns - The product
   */
  findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  /**
   * Update a product
   * @param id - The id of the product
   * @param updateProductInput - The input for updating a product
   * @returns - The updated product
   */
  update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductInput).exec();
  }

  /**
   * Remove a product
   * @param id - The id of the product
   * @returns - The removed product
   */
  remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
