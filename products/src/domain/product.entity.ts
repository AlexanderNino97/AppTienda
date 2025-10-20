export class Product {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number,
    public cantidad: number,
    public estado: string,
    public id_cat: number
  ) {}

  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      cantidad: this.cantidad,
      estado: this.estado,
      id_cat: this.id_cat,
    };
  }
}
