"use client"

import UnifiedLogin from "@/components/auth/UnifiedLogin";
import React from "react";
import { UserRole } from "@/types/auth";
interface LoginRolePage {
  params: Promise<{loginRole: string}>;
}

export default async function LoginRolePage({ params }: LoginRolePage) {
  const {loginRole} = await params
  return <UnifiedLogin role={loginRole as UserRole} />;
}
