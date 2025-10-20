// src/infrastructure/routes/order.routes.ts
import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import { OrderService } from "../../application/order.service";
import { OrderRepository } from "../repositories/order.repository";

const router = Router();
const repository = new OrderRepository();
const service = new OrderService(repository);
const controller = new OrderController(service);

router.post("/", controller.create);
router.get("/:id", controller.getById);
router.get("/user/:userId", controller.getAllByUser);
router.get("/details/:id", controller.getDetalleByPedidoId);
router.delete("/:id", controller.delete);

export default router;  // ✅ export default para que funcione tu import
