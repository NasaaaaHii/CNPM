import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectItem, SelectTrigger,SelectContent,SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Send } from "lucide-react";

export default function nofitications() {
  const nofitication_receive = [
    {
      id: 1,
      role: "Driver",
      name_from: "John Smith",
      new: true,
      description: "Tuyến A đã hoàn thành",
      time: "10 phút trước",
      type: false
    },
    {
      id: 2,
      role: "Parent",
      name_from: "Naruto",
      new: true,
      description: "Yêu cầu thay đổi địa điểm đón sasuke",
      time: "20 phút trước",
      type: false,
    },
    {
      id: 3,
      role: "Driver",
      name_from: "IshowSpeed",
      new: false,
      description: "Tuyến B sẽ bị delay do tắc đường",
      time: "1 tiếng trước",
      type: true
    },
    {
      id: 4,
      role: "Parent",
      name_from: "Ronaldo",
      new: true,
      description: "Trẻ em messi hôm nay vắng mặt.Vui lòng xóa khỏi lịch trình",
      time: "2 giờ trước",
      type: false,
    },
  ];

  const changeBgForTypeNofitication = (role: string, type: boolean) => {
        switch(type) {
            case true:
                return "bg-yellow-100 border-l-4 border-l-yellow-500";
            case false:
                if(role === "Driver") {
                    return "bg-green-100 border-l-4 border-l-green-500";
                } else if(role === "Parent") {
                    return "bg-blue-100 border-l-4 border-l-blue-500";
                } else {
                    return "bg-gray-100 border-l-4 border-l-gray-500";
                }
            default:
                return "bg-gray-100 border-l-4 border-l-gray-500"; 
        }
  }

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card className="border-gray-300">
          <CardHeader>
            <CardTitle>Thông báo</CardTitle>
          </CardHeader>

          <CardContent className="flex w-full flex-col gap-6">
            <Tabs defaultValue="receive">
              <TabsList className="bg-gray-300 w-full rounded-3xl h-12 item-center justify-center grid grid-cols-2">
                <TabsTrigger
                  value="receive"
                  className="data-[state=active]:bg-white data-[state=active]:rounded-3xl"
                >
                  Thông báo đến
                </TabsTrigger>
                <TabsTrigger
                  value="send"
                  className="data-[state=active]:bg-gray-200 data-[state=active]:rounded-3xl"
                >
                  Gửi thông báo
                </TabsTrigger>
              </TabsList>
              <TabsContent value="receive" className="mt-10">
                <div className="space-y-5">
                  {nofitication_receive.map((rei) => (
                    <div key={rei.id} className={`flex justify-between w-full p-5 rounded-2xl ${changeBgForTypeNofitication(rei.role,rei.type)}`}>
                      <div className="space-y-2">
                        <div className="flex text-nowrap item-center gap-2">
                          <Bell />
                          <span>
                            Từ {rei.role} - {rei.name_from}
                          </span>
                          <span>
                            {rei.new === true ? (
                              <Badge className="text-white font-bold bg-red-500">
                                new
                              </Badge>
                            ) : (
                              <Badge className="text-white font-bold bg-gray-600">
                                old
                              </Badge>
                            )}
                          </span>
                        </div>
                        <p>{rei.description}</p>
                        <span>{rei.time}</span>
                      </div>
                      <Button className="bg-white border border-gray-200 font-bold cursor-pointer text-black  hover:bg-green-400 hover:text-white hover:border-green-100">Đã xác nhận</Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="send">
                <div className="space-y-5 w-full mt-3">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm">Chọn kiểu gửi</span>
                        <Select>
                          <SelectTrigger className="w-full bg-gray-200 rounded-xl border-none focus:border-none">
                              <SelectValue placeholder ="Chọn người gửi....." />
                          </SelectTrigger>

                          <SelectContent className="rounded-xl bg-gray-200 border-none transition-all duration-200">
                              <SelectItem value="all driver">Tất cả tài xế</SelectItem>
                              <SelectItem value="all parent">Tất cả phụ huynh</SelectItem>
                              <SelectItem value="driver">Tài xế</SelectItem>
                              <SelectItem value="parent">Phụ huynh</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-sm">Tin nhắn</span>
                        <Textarea placeholder="Nhập tin nhắn của bạn....." className="bg-gray-200 border-none focus:border-none" />
                    </div>

                    <Button className="flex justify-center items-center bg-blue-500 w-full rounded-lg text-white text-sm cursor-pointer hover:bg-blue-700">
                      <Send />
                      <span>Gửi tin nhắn</span>
                    </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
