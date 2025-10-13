import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { User, UserRoundPen, Trash } from "lucide-react";

export default function ManagerUsers() {
  const users = [
    {
      id: 1,
      name: "Nguyễn Hoàng Anh",
      role: "Driver",
      email: "Nasaaaa@ssb.com",
      status: true,
    },
    {
      id: 2,
      name: "Huỳnh Thanh Hải",
      role: "Parent",
      email: "hai@ssb.com",
      status: true,
    },
    {
      id: 3,
      name: "Nguyễn Thanh Nhàn",
      role: "Driver",
      email: "nhan@ssb.com",
      status: false,
    },
    {
      id: 4,
      name: "Nguyễn Âu Gia Bảo",
      role: "Parent",
      email: "bao@ssb.com",
      status: false,
    },
    {
      id: 5,
      name: "Lê Mạnh Cường",
      role: "Parent",
      email: "cuong@ssb.com",
      status: true,
    },
  ];
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>User</CardTitle>
              <Button
                variant={"secondary"}
                className="bg-blue-500 hover:text-white hover:bg-blue-700 hover:shadow-xl"
              >
                <User /> Add new User
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Họ tên</TableHead>
                  <TableHead>Chức vụ</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Hành Động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                        <Badge variant={"secondary"} className={user.status ? "bg-green-400":"bg-gray-400"}>{user.status ? "Active": "Inactive"}</Badge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button variant={"secondary"} className="hover:bg-orange-300">
                        <UserRoundPen />
                      </Button>
                      <Button variant={"secondary"} className="hover:bg-red-500">
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
