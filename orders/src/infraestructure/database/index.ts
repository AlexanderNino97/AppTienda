import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { UsuarioModel } from "../models/usuario.model";
import { ProductModel } from "../models/product.model";
import { PedidoModel } from "../models/pedido.model";
import { DetallePedidoModel } from "../models/detallepedido.model";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "1234",
  database: process.env.DB_NAME || "tienda",
  models: [PedidoModel, DetallePedidoModel, UsuarioModel, ProductModel],
  logging: false
});

export default sequelize;
