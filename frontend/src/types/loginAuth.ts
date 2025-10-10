import { UserRole } from "./auth";
import { ReactNode,FormEvent } from "react";

export interface LoginProps {
  role: UserRole;
}

export interface loginRoleConfig {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
  iconColor: string;
  buttonColor: string;
  bgGradient: string;
}

export interface loginFormProps {
  formData: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
    general: string;
  }
  loading: boolean;
  showPassword: boolean;
  config: {
    buttonColor: string;
  };
  handleSubmit: (e: FormEvent) => void;
  handleInputChange: (field: string, value: string) => void;
  setShowPassword: (show: boolean) => void;
}
