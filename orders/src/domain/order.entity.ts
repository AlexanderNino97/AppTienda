// src/domain/order.entity.ts
export class Pedido {
  constructor(
    public id: number,
    public id_usuario: number,
    public total: number,
    public fecha: Date
  ) {}
}

export class DetallePedido {
  constructor(
    public id_pedido: number,
    public id_producto: number
  ) {}
}
