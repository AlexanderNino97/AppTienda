// src/domain/order.dto.ts
export interface CreateDetallePedidoDTO {
  id_pedido: number;
  id_producto: number;
}

export interface CreatePedidoDTO {
  id_usuario: number;
  total: number;
  fecha: Date;
  detalles: { id_producto: number }[];
}

export interface UpdatePedidoDTO {
  total?: number;
  fecha?: Date;
  detalles?: { id_producto: number }[];
}
