import { IProductRepository } from "../../domain/product.repository";
import { Product } from "../../domain/product.entity";
import { ProductModel } from "../models/product.model";
import { CreateProductDTO, UpdateProductDTO } from "../../domain/product.dto";

export class SequelizeProductRepository implements IProductRepository {
  async create(data: CreateProductDTO): Promise<Product> {
    const created = await ProductModel.create(data as any);
    return new Product(
      created.id,
      created.nombre,
      created.precio,
      created.cantidad,
      created.estado,
      created.id_cat
    );
  }

  async findById(id: number): Promise<Product | null> {
    const product = await ProductModel.findByPk(id);
    if (!product) return null;
    return new Product(
      product.id,
      product.nombre,
      product.precio,
      product.cantidad,
      product.estado,
      product.id_cat
    );
  }


  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll();
    return products.map(p => new Product(
      p.id,
      p.nombre,
      p.precio,
      p.cantidad,
      p.estado,
      p.id_cat
    ));
  }

  async update(id: number, data: UpdateProductDTO): Promise<Product | null> {
    const product = await ProductModel.findByPk(id);
    if (!product) return null;
    await product.update(data as any);
    return new Product(
      product.id,
      product.nombre,
      product.precio,
      product.cantidad,
      product.estado,
      product.id_cat
    );
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await ProductModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
