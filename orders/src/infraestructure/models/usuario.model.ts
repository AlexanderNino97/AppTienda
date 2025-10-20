// src/infrastructure/models/usuario.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";

@Table({ tableName: "usuarios", timestamps: false })
export class UsuarioModel extends Model<UsuarioModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.STRING)
  apellido!: string;

  @Column(DataType.STRING)
  contrasena!: string;
}
