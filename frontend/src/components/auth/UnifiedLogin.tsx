import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Bus, User, Shield, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

interface UnifiedLoginProps {
  role: "parent" | "driver" | "admin";
}

interface RoleConfig {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  buttonColor: string;
  bgGradient: string;
}

export default function UnifiedLogin({ role }: UnifiedLoginProps) {
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

  const roleConfigs: Record<string, RoleConfig> = {
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

  const config = roleConfigs[role];

  const validateForm = () => {
    const newErrors = { email: "", password: "", general: "" };
    let isValid = true;

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

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

    if (!validateForm()) return;

    setErrors({ email: "", password: "", general: "" });

    try {
      const success = await login(formData.email, formData.password, role);

      if (success) {
        // Redirect based on role
        switch (role) {
          case "admin":
            router.push("/admin/dashboard");
            break;
          case "driver":
            router.push("/driver/dashboard");
            break;
          case "parent":
            router.push("/parent/dashboard");
            break;
          default:
            router.push("/dashboard");
        }
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
    }
  };

  const getBackHref = () => {
    return role === "admin" ? "/" : "/login";
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${config.bgGradient}`}
    >
      {/* Geometric Background */}
      <div className="absolute inset-0">
        {/* Large circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-purple-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Medium circles */}
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-25 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>

        {/* Small floating elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-ping"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error Message */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {errors.general}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`h-12 bg-white/80 backdrop-blur-sm ${
                  errors.email ? "border-red-300 focus:border-red-500" : ""
                }`}
                required
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className={`h-12 pr-12 bg-white/80 backdrop-blur-sm ${
                    errors.password ? "border-red-300 focus:border-red-500" : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loading}
              className={`w-full h-12 ${config.buttonColor} text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-offset-2`}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Smart Bus System</p>
          </div>
        </div>
      </div>
    </div>
  );
}
