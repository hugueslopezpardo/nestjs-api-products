import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

/**
 * The resolver for the products module that contains the GraphQL queries and mutations.
 */
@Resolver(() => Product)
export class ProductsResolver {
  /**
   * The constructor of the ProductsResolver
   * @param productsService - The products service
   */
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Create a new product
   * @param createProductInput - The product to create
   * @returns The created product
   */
  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return await this.productsService.create(createProductInput);
  }

  /**
   * Get all products
   * @returns All products
   */
  @Query(() => [Product], { name: 'products' })
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  /**
   * Get a product by ID
   * @param id - The ID of the product to get
   * @returns The product with the specified ID
   */
  @Query(() => Product, { name: 'product' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<Product | null> {
    return await this.productsService.findOne(id);
  }

  /**
   * Update a product
   * @param updateProductInput - The product to update
   * @returns The updated product
   */
  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product | null> {
    return await this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  /**
   * Remove a product
   * @param id - The ID of the product to remove
   * @returns The removed product
   */
  @Mutation(() => Product)
  async removeProduct(@Args('id', { type: () => String }) id: string): Promise<Product | null> {
    return await this.productsService.remove(id);
  }
}
