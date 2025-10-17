"use client";

import { SideBar } from "@/app/dashboard/[dashboardRole]/components/SideBar";
import { TopBar } from "@/app/dashboard/[dashboardRole]/components/TopBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { usePathname } from "next/navigation";
import { UserRole } from "@/types/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathRoleName = usePathname();
  const role = pathRoleName.split("/")[2] as UserRole;
  return (
    <div className="min-h-screen">
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel defaultSize={15}>
          <SideBar role={role} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={85}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={8}>
              <TopBar role={role} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={92}>
              <div className="h-full min-h-0">
                <main className="h-full overflow-y-auto">{children}</main>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
