export interface CreateProductDTO {
  nombre: string;
  precio: number;
  cantidad: number;
  estado: string;
  id_cat: number;
}

export interface UpdateProductDTO {
  nombre?: string;
  precio?: number;
  cantidad?: number;
  estado?: string;
  id_cat?: number;
}
