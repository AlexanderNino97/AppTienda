// services/user.services.ts
import { User } from "../types/user";
import { UserRepository } from "../repositories/user.repositories";

export class UserService {
  private repo = new UserRepository();

  async createUser(data: Omit<User, "id">): Promise<User> {
    return this.repo.create(data);
  }

  async getUserById(id: number): Promise<User | null> {
    return this.repo.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.repo.findAll();
  }

  // elimina usuario por id
  async deleteUser(id: number): Promise<boolean> {
    return this.repo.delete(id);
  }

  // valida credenciales (email + password)
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.repo.findByEmail(email);
    if (!user) return null;

    // comparación en texto plano (para el taller). En producción usar bcrypt.compare().
    if (user.password === password) return user;
    return null;
  }
}
