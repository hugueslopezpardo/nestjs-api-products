import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Create a new product
   * @param createProductInput - The product to create
   * @returns The created product
   */
  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  /**
   * Get all products
   * @returns All products
   */
  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  /**
   * Get a product by ID
   * @param id - The ID of the product to get
   * @returns The product with the specified ID
   */
  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.productsService.findOne(id);
  }

  /**
   * Update a product
   * @param updateProductInput - The product to update
   * @returns The updated product
   */
  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productsService.update(updateProductInput.id, updateProductInput);
  }

  /**
   * Remove a product
   * @param id - The ID of the product to remove
   * @returns The removed product
   */
  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.productsService.remove(id);
  }
}
