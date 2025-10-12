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
    <div className="grid grid-rows-3 grid-flow-col max-h-screen">
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
              <main>{children}</main>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
