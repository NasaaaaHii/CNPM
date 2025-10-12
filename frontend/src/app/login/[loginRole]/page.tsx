import UnifiedLogin from "@/components/auth/UnifiedLogin";
import React from "react";
import { UserRole } from "@/types/auth";

interface LoginRolePageProps {
  params: { loginRole: string }; 
}

export default function LoginRolePage({ params }: LoginRolePageProps) {
  const { loginRole } = params;
  return <UnifiedLogin role={loginRole as UserRole} />;
}
