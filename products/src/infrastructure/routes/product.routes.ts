import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../../application/product.service";
import { SequelizeProductRepository } from "../repositories/product.repository"; 

const router = Router();

// Inyección de dependencias
const repository = new SequelizeProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
