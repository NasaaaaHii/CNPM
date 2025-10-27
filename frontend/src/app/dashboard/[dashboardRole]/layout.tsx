"use client";
import { SideBar } from "@/app/dashboard/[dashboardRole]/components/SideBar";
import { TopBar } from "@/app/dashboard/[dashboardRole]/components/TopBar";
import { usePathname } from "next/navigation";
import { UserRole } from "@/types/auth";
import { useMemo } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathRoleName = usePathname();
  const role = pathRoleName.split("/")[2] as UserRole;

  // Chỉ render lại khi role đổi
  const memoizedSidebar = useMemo(() => <SideBar role={role} />, [role]);
  const memoizedTopbar = useMemo(() => <TopBar role={role} />, [role]);

  return (
    <div className="h-screen w-full flex bg-gray-50">
      {/* Sidebar cố định */}
      <div className="w-[240px] h-full border-r border-gray-200 bg-white">
        {memoizedSidebar}
      </div>

      {/* top + page */}
      <div className="flex flex-col flex-1 h-full">
        {/* Topbar cố định */}
        <div className="h-[80px] w-full border-b border-gray-200 bg-white flex items-center">
          {memoizedTopbar}
        </div>

        {/* Nội dung chính */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
