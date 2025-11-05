"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Eye } from "lucide-react";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/map/MapClient"), {
  ssr: false,
});

const active_bus = [
  {
    bus_id: "BUS001",
    route_name: "Route A",
    driver_name: "John",
  },
  {
    bus_id: "BUS002",
    route_name: "Route B",
    driver_name: "Negav",
  },
  {
    bus_id: "BUS003",
    route_name: "Route C",
    driver_name: "Naruto",
  },
];

export default function RealTimeMap() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card className="border-gray-300">
          <CardHeader>
            <CardTitle className="text-xl">
              Theo dõi xe buýt theo thời gian thực
            </CardTitle>
          </CardHeader>

          <CardContent>
            <MapClient />
          </CardContent>
        </Card>

        <Card className="border-gray-300">
          <CardHeader>
            <CardTitle>Các xe buýt đang hoạt động</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {active_bus.map((item) => (
                <div
                  key={item.bus_id}
                  className="flex justify-between items-center border border-gray-300 w-full p-5 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex gap-4">
                    <div className="bg-blue-200 rounded-lg p-3">
                      <Bus className="text-blue-700 font-bold" />
                    </div>

                    <div>
                      <p className="text-xl">
                        {item.bus_id} - {item.route_name}
                      </p>
                      <span className="text-gray-400 font-bold">
                        Driver: {item.driver_name}
                      </span>
                    </div>
                  </div>

                  <Button className="border border-gray-300 cursor-pointer hover:text-white hover:bg-green-400 transition-all">
                    <Eye />
                    Xem Chi tiết
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
