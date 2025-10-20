// repositories/user.repositories.ts
import { User } from "../types/user";
import { UserModel } from "../models/user.model"; // tu modelo Sequelize

export class UserRepository {
 
  async create(user: Omit<User, "id">): Promise<User> {
    const created = await UserModel.create(user as any);
    return created.toJSON() as User;
  }

  
  async findById(id: number): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    return user ? (user.toJSON() as User) : null;
  }


  async findAll(): Promise<User[]> {
    const users = await UserModel.findAll();
    return users.map(u => u.toJSON() as User);
  }

  
  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ where: { email }});
    return user ? (user.toJSON() as User) : null;
  }

  
  async delete(id: number): Promise<boolean> {
    const deletedCount = await UserModel.destroy({ where: { id }});
    return deletedCount > 0;
  }
}
