// controllers/user.controller.ts
import { Request, Response } from "express";
import { UserService } from "../services/user.services";

const service = new UserService();

export class UserController {
  // POST /users
  static async create(req: Request, res: Response) {
    try {
      const newUser = await service.createUser(req.body);
      return res.status(201).json(newUser);
    } catch (err: any) {
      return res.status(500).json({ message: "Error creando usuario", error: err.message });
    }
  }

  // GET /users
  static async getAll(_req: Request, res: Response) {
    try {
      const users = await service.getAllUsers();
      return res.json(users);
    } catch (err: any) {
      return res.status(500).json({ message: "Error obteniendo usuarios", error: err.message });
    }
  }

  // GET /users/:id
  static async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await service.getUserById(id);
      if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
      return res.json(user);
    } catch (err: any) {
      return res.status(500).json({ message: "Error obteniendo usuario", error: err.message });
    }
  }

  // POST /users/validate  <-- endpoint de login/validación
  static async validate(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: "Email y password son required" });

      const user = await service.validateUser(email, password);
      if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

      // Opcional: no devolver password en la respuesta
      const { password: _pw, ...userSafe } = user as any;
      return res.json({ message: "Login successful", user: userSafe });
    } catch (err: any) {
      return res.status(500).json({ message: "Error validando usuario", error: err.message });
    }
  }

  // DELETE /users/:id  <-- eliminar usuario
  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const deleted = await service.deleteUser(id);
      if (!deleted) return res.status(404).json({ message: "Usuario no encontrado" });
      return res.status(204).send();
    } catch (err: any) {
      return res.status(500).json({ message: "Error eliminando usuario", error: err.message });
    }
  }
}
