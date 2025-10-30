"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { LoginProps } from "@/types/loginAuth";
import { roleConfig } from "@/config/roleConfig";
import { validateLoginForm } from "@/help/validForm";
import { GeometricBackground } from "@/utils/GeometricBackground";
import { LoginForm } from "@/components/form/LoginForm";

export default function UnifiedLogin({ role }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const { login, loading } = useAuth();
  const router = useRouter();

  const config = roleConfig[role];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear field error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
        general: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors: validErrors } = validateLoginForm(formData);
    if (!isValid) {
      setErrors(validErrors);
      return;
    }

    setErrors({ email: "", password: "", general: "" });

    try {
      const success = await login(formData.email, formData.password, role);

      if (success) {
        if(role === "admin") router.push("/dashboard/admin/overview")
        if(role === "driver") router.push("/dashboard/driver/myschedule")
        if(role === "parent") router.push("/dashboard/parent/bus-gps")
      } else {
        setErrors({
          email: "",
          password: "",
          general: "Invalid email or password. Please try again.",
        });
      }
    } catch (error) {
      setErrors({
        email: "",
        password: "",
        general: "Login failed. Please try again later.",
      });
      console.log("Errors: ", error);
    }
  };

  const getBackHref = () => {
    return role === "admin" ? "/" : "/login";
  };

  if (config) {
    return (
      <div
        className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${config.bgGradient}`}
      >
        <GeometricBackground />

        {/* Content with glassmorphism effect */}
        <div className="relative z-10 flex items-center justify-center p-4 min-h-screen">
          <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
            {/* Back Navigation */}
            <Link
              href={getBackHref()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {role === "admin" ? "Back to Home" : "Back to Role Selection"}
            </Link>

            {/* Header */}
            <div className="text-center mb-8">
              <div
                className={`w-16 h-16 ${config.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <div className={config.iconColor}>{config.icon}</div>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600 mb-4">{config.description}</p>

              {/* Role Indicator */}
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-lg p-3 flex items-center justify-between">
                <span className="text-sm text-gray-700">
                  Logging in as:{" "}
                  <strong className="text-gray-800">
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </strong>
                </span>
                {role !== "admin" && (
                  <Link
                    href="/login"
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Change
                  </Link>
                )}
              </div>
            </div>

            {/* Form */}
            <LoginForm
              formData={formData}
              errors={errors}
              loading={loading}
              showPassword={showPassword}
              config={config}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              setShowPassword={setShowPassword}
            />

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">Smart Bus System</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
