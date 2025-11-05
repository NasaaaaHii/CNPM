import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Trash, PenBoxIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ManagerSchedule() {
  const schedules = [
    {
      id: 1,
      date: "2025-11-03",
      route_name: "Route A",
      driver: "John Smith",
      bus: "BUS001",
      time: "07:00 AM - 08:30 AM",
      status: true,
    },
    {
      id: 2,
      date: "2025-11-03",
      route_name: "Route B",
      driver: "Naruto",
      bus: "BUS003",
      time: "07:30 AM - 09:00 AM",
      status: true,
    },
    {
      id: 3,
      date: "2025-11-05",
      route_name: "Route C",
      driver: "Ronaldo",
      bus: "BUS001",
      time: "07:00 AM - 08:30 AM",
      status: false,
    },
    
  ];
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card className="rounded-xl border border-gray-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Schedules</CardTitle>
              <Button
                variant={"secondary"}
                className="bg-blue-500 hover:bg-blue-700 hover:text-white"
              >
                <Calendar />
                Add new Schedule
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Bus</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {schedules.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>{schedule.date}</TableCell>
                    <TableCell>{schedule.route_name}</TableCell>
                    <TableCell>{schedule.driver}</TableCell>
                    <TableCell>{schedule.bus}</TableCell>
                    <TableCell>{schedule.time}</TableCell>
                    <TableCell>
                      <Badge
                        variant={"secondary"}
                        className={cn(
                          "text-white cursor-pointer",
                          schedule.status
                            ? "bg-green-500 hover:bg-green-400"
                            : "bg-gray-500 hover:bg-gray-400"
                        )}
                      >
                        {schedule.status ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>

                    <TableCell className="flex gap-2">
                      <Button
                        variant={"secondary"}
                        className="hover:bg-orange-400 border border-gray-300"
                      >
                        <PenBoxIcon />
                      </Button>

                      <Button
                        variant={"secondary"}
                        className="hover:bg-red-500 border border-gray-300"
                      >
                        <Trash />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
