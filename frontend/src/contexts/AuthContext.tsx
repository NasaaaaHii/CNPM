"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { User, UserRole, AuthContextType } from "@/types/auth";
import axiosClient from "@/lib/axiosClient";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("authToken");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        console.log("Errors: ", error);
      }
    }
    setLoading(false);
  }, []);

  const login = async (
    username: string,
    password: string,
    role: UserRole
  ): Promise<boolean> => {
    setLoading(true);

    try {
      // Call real API with accountType parameter
      const response = await axiosClient.post("/api/auth/login", {
        username,
        password,
        accountType: role, // ✅ gửi role tới backend
      });

      const data = response.data; // axios trả thẳng data

      if (data.ok) {
        // ✅ axios không có response.ok
        const userData: User = {
          id: data.data.user.user_id, // sử dụng user_id từ backend
          email: data.data.user.user_name || "", // backend không có email, dùng user_name
          name: data.data.user.user_name,
          role: data.data.accountType, // accountType từ backend
        };

        // Save token and user data
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("authToken", data.data.token);

        setUser(userData);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
