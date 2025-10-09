import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Bus, User, Shield } from "lucide-react";
import Link from "next/link";

interface RoleOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  bgColor: string;
  iconColor: string;
}

export default function RoleSelection() {
  const roles: RoleOption[] = [
    {
      id: "parent",
      title: "Parent",
      description: "Track your child's bus",
      icon: <User size={24} />,
      href: "/login/parent",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "driver",
      title: "Driver",
      description: "View schedules and routes",
      icon: <Bus size={24} />,
      href: "/login/driver",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
          {/* Back to home */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Bus size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Login to Smart Bus System</p>
          </div>

          {/* Role Selection */}
          <div className="space-y-4 mb-6">
            <h2 className="text-center text-gray-700 font-medium">
              Select your role to continue:
            </h2>

            {roles.map((role) => (
              <Link key={role.id} href={role.href}>
                <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/40 bg-white/60 backdrop-blur-sm hover:bg-white/80">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${role.bgColor} rounded-xl flex items-center justify-center shadow-md`}
                      >
                        <div className={role.iconColor}>{role.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {role.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {role.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Admin Access( nếu muốn click thay vì điều hướng theo kiểu gõ đường dẫn ) */}
          {/* <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Administrator access?</p>
            <Link
              href="/login/admin"
              className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Admin Login
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
