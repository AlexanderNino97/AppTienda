import { IOrderRepository } from "../domain/order.repository";
import { Pedido, DetallePedido } from "../domain/order.entity";
import { CreatePedidoDTO, UpdatePedidoDTO } from "../domain/order.dto";

export class OrderService {
  constructor(private readonly repository: IOrderRepository) {}

  async createOrder(data: CreatePedidoDTO): Promise<Pedido> {
    return this.repository.create(data);
  }

  async getOrderById(id: number): Promise<Pedido | null> {
    return this.repository.findById(id);
  }

  async getOrdersByUser(userId: number): Promise<Pedido[]> {
    return this.repository.findAllByUser(userId);
  }

  async getDetalleByPedidoId(pedidoId: number): Promise<DetallePedido[]> {
    return this.repository.findDetalleById(pedidoId);
  }

  async updateOrder(id: number, data: UpdatePedidoDTO): Promise<Pedido | null> {
    return this.repository.update(id, data);
  }

  async deleteOrder(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}
