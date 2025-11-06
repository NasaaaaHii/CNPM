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

export default function RouteDialog({ open, mode, onOpenChange }) {
  const isRead = mode === "read";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" && "Thêm Tuyến mới"}
            {mode === "edit" && "Chỉnh sửa thông tin tuyến"}
            {mode === "read" && "Xem thông tin tuyến"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <div className="flex flex-col gap-2">
            <Label>Route name</Label>
            <Input name="route name" placeholder="Route..." disabled={isRead} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>stop</Label>
            <Input name="stop" placeholder="12" disabled={isRead} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>students</Label>
            <Input placeholder="42" disabled={isRead} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>driver</Label>
            <Select disabled={isRead}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-100 rounded-lg">
                <SelectValue placeholder="Chọn tài xế" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-100 bg-gray-50">
               
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Bus</Label>
            <Select disabled={isRead}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-100 rounded-lg">
                <SelectValue placeholder="Chọn loại xe bus" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-100 bg-gray-50">
                
              </SelectContent>
            </Select>
          </div>
           <div className="flex flex-col gap-2">
            <Label>Status </Label>
            <Select disabled={isRead}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-100 rounded-lg">
                <SelectValue placeholder="Chọn trạng thái" />
              </SelectTrigger>
              <SelectContent className="rounded-lg border-gray-100 bg-gray-50">
                <SelectItem value="active">Hoạt động</SelectItem>
                <SelectItem value="inactive">Không hoạt động</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {!isRead && (
          <div className="flex justify-end mt-4 gap-2">
            <Button onClick={() => onOpenChange(false)} className="bg-red-500">
              Hủy
            </Button>
            <Button className="bg-green-400">
              {mode === "add" ? "Thêm" : "Lưu"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
