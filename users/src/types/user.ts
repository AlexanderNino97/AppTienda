// types/user.ts
export interface User {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface ReqCreateUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

// DTO para validar credenciales
export interface ValidateUserDTO {
  email: string;
  password: string;
}
