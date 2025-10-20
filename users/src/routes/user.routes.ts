// routes/user.routes.ts
import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

// Crear usuario
router.post("/", UserController.create);

// Validar usuario (login) - colocar ANTES de "/:id"
router.post("/validate", UserController.validate);

// Obtener todos
router.get("/", UserController.getAll);

// Obtener por id
router.get("/:id", UserController.getById);

// Eliminar usuario
router.delete("/:id", UserController.delete);

export default router;
