export type UserRole = "parent" | "driver" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

export interface RoleOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  bgColor: string;
  iconColor: string;
}
