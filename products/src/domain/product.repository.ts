import { Product } from "./product.entity";
import { CreateProductDTO, UpdateProductDTO } from "./product.dto";

export interface IProductRepository {
  create(data: CreateProductDTO): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(id: number, data: UpdateProductDTO): Promise<Product | null>;
  delete(id: number): Promise<boolean>;
}
