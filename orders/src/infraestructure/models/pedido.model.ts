import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey } from "sequelize-typescript";
import { UsuarioModel } from "./usuario.model";

@Table({ tableName: "pedidos", timestamps: false })
export class PedidoModel extends Model<PedidoModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @ForeignKey(() => UsuarioModel)
  @Column(DataType.INTEGER)
  id_usuario!: number;

  @Column(DataType.DECIMAL(10,2))
  total!: number;

  @Column(DataType.DATE)
  fecha!: Date;
}
