import { Bus, User, Shield } from "lucide-react";
import { loginRoleConfig, LoginProps } from "@/types/loginAuth";

export const roleConfig: Record<string , loginRoleConfig> = {
  parent: {
    title: "Parent Portal",
    description: "Track your child's bus journey",
    icon: <User size={24} />,
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconColor: "text-white",
    buttonColor: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    bgGradient: "from-blue-50 via-blue-50 to-indigo-50",
  },
  driver: {
    title: "Driver Dashboard",
    description: "Manage routes and schedules",
    icon: <Bus size={24} />,
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    iconColor: "text-white",
    buttonColor: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    bgGradient: "from-green-50 via-emerald-50 to-teal-50",
  },
  admin: {
    title: "Admin Panel",
    description: "System administration access",
    icon: <Shield size={24} />,
    bgColor: "bg-gradient-to-br from-red-500 to-red-600",
    iconColor: "text-white",
    buttonColor: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    bgGradient: "from-red-50 via-rose-50 to-pink-50",
  },
};
