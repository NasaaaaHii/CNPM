// User Model - Defines user data structure
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "driver" | "parent" | "student";
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateInput {
  email: string;
  password: string;
  name: string;
  role: "admin" | "driver" | "parent" | "student";
  phone?: string;
}

export interface UserLoginInput {
  email: string;
  password: string;
}
