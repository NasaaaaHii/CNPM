"use client";
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserDialog from "./UserDialog";
import { useState } from "react";

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

  const [dialog, setDialog] = useState({ open: false, mode: "add" });
  const handleOpen = (mode: string) => {
    setDialog({ open: true, mode });
  };
  const handleClose = (open) => {
    setDialog((prev) => ({ ...prev, open }));
  };
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center-safe">
                <CardTitle>User</CardTitle>
                <InputGroup className="border-gray-300 ">
                  <InputGroupInput
                    placeholder="Tìm kiếm theo...."
                    className="focus:outline-none focus:border-none w-96"
                  />
                  <InputGroupAddon align={"inline-end"}>
                    <InputGroupButton
                      variant={"secondary"}
                      className="bg-gray-300"
                    >
                      tìm kiếm
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>

                <div>
                  <Select>
                    <SelectTrigger className="w-[180px] bg-gray-50 border-gray-100 rounded-lg shadow-sm transition-all duration-200 hover:border-gray-200">
                      <SelectValue placeholder="Chọn vai trò" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg shadow-xl border-gray-100 bg-gray-50">
                      <SelectItem value="all">Chọn vai trò</SelectItem>
                      <SelectItem value="driver">Tài xế</SelectItem>
                      <SelectItem value="parent">Phụ huynh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                variant={"secondary"}
                className="bg-blue-500 hover:text-white hover:bg-blue-700 hover:shadow-xl"
                onClick={() => handleOpen("add")}
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
                      <Badge
                        variant={"secondary"}
                        className={user.status ? "bg-green-400" : "bg-gray-400"}
                      >
                        {user.status ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        variant={"secondary"}
                        className="hover:bg-orange-300 border border-gray-300"
                        onClick={() => handleOpen("edit")}
                      >
                        <UserRoundPen />
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

      {/* Dialog */}
      <UserDialog open={dialog.open} mode={dialog.mode} onOpenChange={handleClose} />
    </div>
  );
}
