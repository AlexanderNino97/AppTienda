// domain/order.repository.ts
import { Pedido, DetallePedido } from "./order.entity";
import { CreatePedidoDTO, UpdatePedidoDTO } from "./order.dto";

export interface IOrderRepository {
  create(data: CreatePedidoDTO): Promise<Pedido>;
  findById(id: number): Promise<Pedido | null>;
  findAllByUser(userId: number): Promise<Pedido[]>;
  findDetalleById(pedidoId: number): Promise<DetallePedido[]>;
  update(id: number, data: UpdatePedidoDTO): Promise<Pedido | null>;
  delete(id: number): Promise<boolean>;
}
