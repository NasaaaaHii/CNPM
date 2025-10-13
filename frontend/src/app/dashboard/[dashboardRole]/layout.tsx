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
      <div className="max-h-screen">
        <ResizablePanelGroup direction="horizontal" className="min-h-screen">
          <ResizablePanel defaultSize={15} maxSize={20} minSize={15}>
            <SideBar role={role} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={85}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={8} maxSize={10} minSize={8}>
                <TopBar role={role} />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={92}>
                <main className="h-full overflow-auto bg-gray-50">{children}</main>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  }
