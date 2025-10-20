import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({ tableName: "usuarios", timestamps: false }) // poner todo en minúscula
export class UserModel extends Model<UserModel> 
 {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number; 

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  lastName!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  phone!: string;
}
