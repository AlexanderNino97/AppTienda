import { Request, Response } from "express";
import { ProductService } from "../../application/product.service";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  create = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product.toJSON());
    } catch (error) {
      res.status(500).json({ message: "Error creating product", error });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id!;
      const product = await this.productService.getProductById(Number(id));
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product.toJSON());
    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error });
    }
  };

  getAll = async (_req: Request, res: Response) => {
    try {
      const products = await this.productService.getAllProducts();
      res.json(products.map(p => p.toJSON()));
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id!;
      const updated = await this.productService.updateProduct(Number(id), req.body);
      if (!updated) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(updated.toJSON());

    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id!;
      const deleted = await this.productService.deleteProduct(Number(id));
      if (!deleted) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting product", error });
    }
  };
}
