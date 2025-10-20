import { Product } from "../domain/product.entity";
import { CreateProductDTO, UpdateProductDTO } from "../domain/product.dto";
import { IProductRepository } from "../domain/product.repository";

export class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async createProduct(data: CreateProductDTO): Promise<Product> {
    return this.productRepository.create(data);
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async updateProduct(id: number, data: UpdateProductDTO): Promise<Product | null> {
    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.productRepository.delete(id);
  }
}
