import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import AnalyticsCard from "./AnalyticsCard";

export default function ManagerAnalytics() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <Card className="border-gray-300">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-xl">Thống kê tổng quan</CardTitle>
            <Select>
              <SelectTrigger className="w-[150px] border-none bg-gray-200">
                <SelectValue placeholder="Hôm nay" />
              </SelectTrigger>

              <SelectContent className="rounded-lg bg-white border-none">
                <SelectItem value="dayly" >Hôm nay</SelectItem>
                <SelectItem value="monthly">Tháng này</SelectItem>
                <SelectItem value="yearly">Năm này</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>

          <CardContent>
              <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-5">
                  <AnalyticsCard />
              </div>
          </CardContent>
        </Card>

        <Card className="border-gray-300">
          <CardHeader>
            <CardTitle className="text-xl">
              Biểu đồ 
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              Biểu đồ sẽ để ở đây
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
