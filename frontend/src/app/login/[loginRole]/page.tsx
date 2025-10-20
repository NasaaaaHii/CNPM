import UnifiedLogin from "@/components/auth/UnifiedLogin";
import React from "react";
import { UserRole } from "@/types/auth";

interface LoginRolePageProps {
  params: { loginRole: string }; 
}

export default async function LoginRolePage({ params }: LoginRolePageProps) {
  const { loginRole } = await params;
  return <UnifiedLogin role={loginRole as UserRole} />;
}
