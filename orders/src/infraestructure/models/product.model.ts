// src/infrastructure/models/product.model.ts
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";

@Table({ tableName: "productos", timestamps: false })
export class ProductModel extends Model<ProductModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column(DataType.STRING)
  nombre!: string;

  @Column(DataType.DECIMAL(10, 2))
  precio!: number;

  @Column(DataType.INTEGER)
  cantidad!: number;

  @Column(DataType.STRING)
  estado!: string;

  @Column(DataType.INTEGER)
  id_cat!: number;
}
