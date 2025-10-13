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
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

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
    <aside className="container mx-auto h-full grid grid-rows-10 grid-cols-1">
      <div className="row-span-1 flex justify-center items-center gap-5 border border-b-gray-300">
        <div className="w-12 h-12 bg-blue-700 flex items-center justify-center rounded-xl">
          <UserCheck size={36} color="#f1f2f3" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col flex-start">
          <h3>Smart Bus System SGU</h3>
          <p className="text-muted-foreground">{role.toLocaleUpperCase()}</p>
        </div>
      </div>
      <div className="row-span-8">
        <div className="space-y-1 mx-2 my-2 flex flex-col">
          {items.map((item) => {
            const active = rolenInPath === item.path;
            return (
              <Button
                key={item.path}
                asChild
                variant={active ? "secondary" : "ghost"}
                className={`flex justify-start gap-4 w-full${
                  active ? "bg-blue-100 text-blue-700 hover:bg-blue-200" : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                <Link href={item.path}>
                  <i>{item.icon}</i >
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="row-span-1 bg-gray-600"></div>
    </aside>
  );
};
