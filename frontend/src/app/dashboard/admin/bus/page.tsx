import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trash, UserRoundPen, Bus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ManagerBus() {
  const buses = [
    {
      id: 1,
      type: "BUS XL",
      numberOfSeats: 50,
      driver: "Nguyễn Văn A",
      status: true,
    },
    {
      id: 2,
      type: "BUS L",
      numberOfSeats: 30,
      driver: "Nguyễn Văn B",
      status: true,
    },
    {
      id: 3,
      type: "BUS M",
      numberOfSeats: 20,
      driver: "Nguyễn Văn C",
      status: false,
    },
    {
      id: 4,
      type: "BUS XL",
      numberOfSeats: 50,
      driver: "Nguyễn Văn D",
      status: false,
    },
    {
      id: 5,
      type: "BUS XXL",
      numberOfSeats: 75,
      driver: "Nguyễn Văn E",
      status: true,
    },
  ];
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-gray-50">
      <div className="space-y-6">
        <Card className="rounded-xl border border-gray-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>List Bus</CardTitle>
              <Button
                variant={"secondary"}
                className="bg-blue-500 hover:bg-blue-700 hover:text-white"
              >
                <Bus />
                Add new Bus
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã Bus</TableHead>
                  <TableHead>Loại</TableHead>
                  <TableHead>Số lượng ghế</TableHead>
                  <TableHead>Tài xế</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Hoạt động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {buses.map((bus) => (
                  <TableRow key={bus.id}>
                    <TableCell>{bus.id}</TableCell>
                    <TableCell>{bus.type}</TableCell>
                    <TableCell className="text-left">
                      {bus.numberOfSeats}
                    </TableCell>
                    <TableCell>{bus.driver}</TableCell>
                    <TableCell>
                      <Badge
                        variant={"secondary"}
                        className={cn(
                          "text-white cursor-pointer",
                          bus.status
                            ? "bg-green-500 hover:bg-green-400"
                            : "bg-gray-500 hover:bg-gray-400"
                        )}
                      >
                        {bus.status ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        variant={"secondary"}
                        className="hover:bg-orange-400"
                      >
                        <UserRoundPen />
                      </Button>
                      <Button
                        variant={"secondary"}
                        className="hover:bg-red-500"
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
