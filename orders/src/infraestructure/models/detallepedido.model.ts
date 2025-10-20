import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from "sequelize-typescript";
import { PedidoModel } from "./pedido.model";
import { ProductModel } from "./product.model";

@Table({ tableName: "detalle_pedidos", timestamps: false })
export class DetallePedidoModel extends Model<DetallePedidoModel> {
  @PrimaryKey
  @ForeignKey(() => PedidoModel)
  @Column(DataType.INTEGER)
  id_pedido!: number;

  @PrimaryKey
  @ForeignKey(() => ProductModel)
  @Column(DataType.INTEGER)
  id_producto!: number;
}
