import { SideBar } from "@/components/layout/SideBar";
import { TopBar } from "@/components/layout/TopBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { SidebarProvider } from "@/components/ui/sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mdl-js">
      <body>
        <div className="grid grid-rows-3 grid-flow-col min-h-screen">
          <ResizablePanelGroup direction="horizontal" className="min-h-screen">
            <ResizablePanel defaultSize={15}>
              <SideBar />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={85}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={10}>
                  <TopBar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={90}>
                  <main>{children}</main>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </body>
    </html>
  );
}
