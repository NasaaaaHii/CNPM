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
      console.log("🔐 LOGIN ATTEMPT:", { username, role });

      const response = await axiosClient.post("/api/auth/login", {
        username,
        password,
        accountType: role,
      });

      console.log("📥 RAW RESPONSE:", response);
      console.log("📥 RESPONSE DATA:", response.data);

      const data = response.data;

      // ✅ Kiểm tra nhiều format response
      const isSuccess =
        data.ok === true || data.success === true || response.status === 200;

      if (!isSuccess) {
        console.error("❌ Login failed - server returned:", data);
        return false;
      }

      // ✅ Flexible data extraction
      let userId, userName, token, accountType;

      // Try different response structures
      if (data.data) {
        // Structure: { data: { user: {...}, token: "..." } }
        userId = data.data.user?.user_id || data.data.user?.id;
        userName = data.data.user?.user_name || data.data.user?.username;
        token = data.data.token;
        accountType = data.data.accountType || data.data.user?.accountType;
      } else {
        // Structure: { user: {...}, token: "..." }
        userId = data.user?.user_id || data.user?.id;
        userName = data.user?.user_name || data.user?.username;
        token = data.token;
        accountType = data.accountType || data.user?.accountType;
      }

      console.log("📝 EXTRACTED DATA:", {
        userId,
        userName,
        token,
        accountType,
      });

      // ✅ Validate essential fields
      if (!userId || !userName || !token) {
        console.error("❌ Missing essential data:", {
          userId,
          userName,
          token,
        });
        return false;
      }

      const userData: User = {
        id: userId,
        email: userName,
        name: userName,
        role: accountType || role,
      };

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("authToken", token);

      setUser(userData);
      console.log("✅ LOGIN SUCCESS:", userData);
      return true;
    } catch (error: any) {
      console.error("❌ LOGIN EXCEPTION:", error);

      if (error.response?.status === 401) {
        console.error("Invalid credentials or unauthorized");
      } else if (error.response) {
        console.error("Server error:", error.response.data);
      } else if (error.request) {
        console.error("No response - backend might be down");
      }

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
