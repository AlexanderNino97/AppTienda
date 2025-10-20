import { Request, Response } from "express";
import { OrderService } from "../../application/order.service";

export class OrderController {
  constructor(private readonly service: OrderService) {}

  create = async (req: Request, res: Response) => {
    try {
      const order = await this.service.createOrder(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ message: "Error creating order", error: err });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const order = await this.service.getOrderById(id);
      if (!order) return res.status(404).json({ message: "Order not found" });
      res.json(order);
    } catch (err) {
      res.status(500).json({ message: "Error fetching order", error: err });
    }
  };

  getAllByUser = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.userId);
      const orders = await this.service.getOrdersByUser(userId);
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: "Error fetching orders", error: err });
    }
  };

  getDetalleByPedidoId = async (req: Request, res: Response) => {
    try {
      const pedidoId = Number(req.params.id);
      const detalles = await this.service.getDetalleByPedidoId(pedidoId);
      res.json(detalles);
    } catch (err) {
      res.status(500).json({ message: "Error fetching order details", error: err });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const deleted = await this.service.deleteOrder(id);
      if (!deleted) return res.status(404).json({ message: "Order not found" });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: "Error deleting order", error: err });
    }
  };
}
