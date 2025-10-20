import { PedidoModel } from "../models/pedido.model";
import { DetallePedidoModel } from "../models/detallepedido.model";
import { IOrderRepository } from "../../domain/order.repository";
import { Pedido, DetallePedido } from "../../domain/order.entity";
import { CreatePedidoDTO, CreateDetallePedidoDTO, UpdatePedidoDTO } from "../../domain/order.dto";

export class OrderRepository implements IOrderRepository {
  async create(data: CreatePedidoDTO): Promise<Pedido> {
    const pedido = await PedidoModel.create({
      id_usuario: data.id_usuario,
      total: data.total,
      fecha: data.fecha
    } as any);

    for (const det of data.detalles) {
      const detalleData: CreateDetallePedidoDTO = {
        id_pedido: pedido.id,
        id_producto: det.id_producto
      };
      await DetallePedidoModel.create(detalleData as any);
    }

    return new Pedido(pedido.id, pedido.id_usuario, pedido.total, pedido.fecha);
  }

  async findById(id: number): Promise<Pedido | null> {
    const pedido = await PedidoModel.findByPk(id);
    if (!pedido) return null;
    return new Pedido(pedido.id, pedido.id_usuario, pedido.total, pedido.fecha);
  }

  async findAllByUser(userId: number): Promise<Pedido[]> {
    const pedidos = await PedidoModel.findAll({ where: { id_usuario: userId } });
    return pedidos.map(p => new Pedido(p.id, p.id_usuario, p.total, p.fecha));
  }

  async findDetalleById(pedidoId: number): Promise<DetallePedido[]> {
    const detalles = await DetallePedidoModel.findAll({ where: { id_pedido: pedidoId } });
    return detalles.map(d => new DetallePedido(d.id_pedido, d.id_producto));
  }

  async update(id: number, data: UpdatePedidoDTO): Promise<Pedido | null> {
    const pedido = await PedidoModel.findByPk(id);
    if (!pedido) return null;
    await pedido.update(data as any);
    return new Pedido(pedido.id, pedido.id_usuario, pedido.total, pedido.fecha);
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await PedidoModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
