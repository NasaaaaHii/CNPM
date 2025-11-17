import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserDialogProps {
  open: boolean;
  mode: "add" | "edit" | "read";
  onOpenChange: (open: boolean) => void;
}

export default function UserDialog({ open, mode, onOpenChange }: UserDialogProps) {
  const isRead = mode === "read";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" && "Thêm người dùng mới"}
            {mode === "edit" && "Chỉnh sửa thông tin người dùng"}
            {mode === "read" && "Xem thông tin người dùng"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <div className="flex flex-col gap-2">
            <Label>Full name</Label>
            <Input name="name" placeholder="full name" disabled={isRead} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input name="email" placeholder="abcd@gmail.com" disabled={isRead} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Phone</Label>
            <Input
              name="phone"
              placeholder="(+84) 019 833 282"
              disabled={isRead}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Role</Label>
            <Select disabled={isRead}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-100 rounded-lg">
                <SelectValue placeholder="Chọn vai trò" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-100 bg-gray-50">
                <SelectItem value="driver">Tài xế</SelectItem>
                <SelectItem value="parent">Phụ huynh</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {!isRead && (
          <div className="flex justify-end mt-4 gap-2">
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-red-500"
            >
              Hủy
            </Button>
            <Button className="bg-green-400">{mode === "add" ? "Thêm" : "Lưu"}</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
