import React, { ReactNode } from "react";
import {
  Bus,
  UserCheck,
  SquareChartGantt,
  User,
  Route,
  CalendarCheck,
  ChartNoAxesCombined,
  MapPin,
  Baby,
  MessageCircle,
  Send,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const SideBar = ({ role }: { role: string }) => {
  const menu: Record<
    string,
    { name: string; path: string; icon: ReactNode }[]
  > = {
    admin: [
      {
        name: "Tổng quan",
        path: `/dashboard/${role}/overview`,
        icon: <SquareChartGantt />,
      },
      {
        name: "Quản lí người dùng",
        path: `/dashboard/${role}/users`,
        icon: <User />,
      }, //driver and parents
      { name: "Quản lí xe Bus", path: `/dashboard/${role}/bus`, icon: <Bus /> },
      {
        name: "Quản lí tuyến đường",
        path: `/dashboard/${role}/routes`,
        icon: <Route />,
      },
      {
        name: "Quản lí lịch trình",
        path: `/dashboard/${role}/schedules`,
        icon: <CalendarCheck />,
      },
      {
        name: "Thống kê",
        path: `/dashboard/${role}/analytics`,
        icon: <ChartNoAxesCombined />,
      },
    ],
    parent: [
      {
        name: "Vị trí xe Bus",
        path: `/dashboard/${role}/bus-gps`,
        icon: <MapPin />,
      },
      {
        name: "Trạng thái con",
        path: `/dashboard/${role}/child-status`,
        icon: <Baby />,
      },
      {
        name: "Thông báo",
        path: `/dashboard/${role}/nofitications`,
        icon: <MessageCircle />,
      },
    ],
    driver: [
      {
        name: "Lịch trình của tôi",
        path: `/dashboard/${role}/myschedule`,
        icon: <CalendarCheck />,
      },
      {
        name: "Tuyến đường hôm nay",
        path: `/dashboard/${role}/dayroutes`,
        icon: <Route />,
      },
      { name: "Báo cáo", path: `/dashboard/${role}/reports`, icon: <Send /> },
    ],
  };
  const rolenInPath = usePathname();
  const items = menu[role] ?? [];
  return (
    <aside className="h-full flex flex-col">
      <div className="h-fit flex justify-center items-center gap-3 border-b border-b-gray-300 p-3">
        <div className="w-12 h-12 bg-blue-700 flex items-center justify-center rounded-xl">
          <UserCheck size={36} color="#f1f2f3" strokeWidth={2} className="p-1"/>
        </div>
        <div className="flex flex-col flex-start">
          <h3 className="text-gray-900 text-sm font-medium">Smart Bus System SGU</h3>
          <p className="text-xs text-gray-500">{role.toLocaleUpperCase()}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between grow">
        <div className="w-full shrink">
          <div className="space-y-1 mx-2 my-2 flex flex-col">
            {items.map((item) => {
              const active = rolenInPath === item.path;
              return (
                <Button
                  key={item.path}
                  asChild
                  variant={active ? "secondary" : "ghost"}
                  className={`flex justify-start gap-4 w-full${active
                    ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    : "hover:bg-gray-100 text-gray-800"
                    }`}
                >
                  <Link href={item.path}>
                    <i>{item.icon}</i>
                    {item.name}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex w-full h-fit flex-wrap gap-2 bg-gray-100 p-3">
          <div className="flex w-full items-center gap-2">
            <Avatar>
              <AvatarImage src={"/avt/admin.png"}></AvatarImage>
              <AvatarFallback>Admin</AvatarFallback>
            </Avatar>
            <div>
              <p>{role.toLocaleUpperCase()} USER</p>
              <p className="text-muted-foreground text-[12px]">
                {role === "admin" ? "Administrator" : "User"}
              </p>
            </div>
          </div>
          <Button
            variant={"default"}
            className="w-full m-1 items-center bg-blue-600 text-white hover:bg-blue-800 h-8"
          >
            <Link href={"/login"} className="w-full flex justify-start">
              <LogOut className="w-4 h-4 mr-2" />
              <span>Logout</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};
