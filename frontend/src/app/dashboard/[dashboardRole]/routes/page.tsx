import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Route } from "lucide-react";

export default function ManagerRoutes() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Routes</CardTitle>
              <Button variant={"secondary"} className="bg-blue-500 hover:bg-blue-700 hover:text-white">
                <Route />
                Add new routes</Button>
            </div>
          </CardHeader>
          <CardContent>
            <p>quản lí các tuyến đường từ điểm A đến B.Cho xem tuyến,sửa tuyển ở 2 điểm A,B + bản đồ GPS hiện đường đi từ A đến B</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
