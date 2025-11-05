import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsCard() {
  return (
    <>
        {/*Total trip  */}
      <Card className="border-gray-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Tổng số chuyến đi</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-4xl">156</p>
            <p className="text-gray-500 text-xs">Today</p>
          </div>
        </CardContent>
      </Card>

        {/* On time */}
       <Card className="border-gray-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Đang hoạt động</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-4xl text-green-500">142</p>
            <p className="text-gray-500 text-xs">90% hoạt động ổn định</p>
          </div>
        </CardContent>
      </Card>

        {/* Delayed */}
       <Card className="border-gray-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Số chuyến bị trì hoãn</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-4xl text-yellow-500">12</p>
            <p className="text-gray-500 text-xs">Thời gian hoãn trung bình: 5 phút</p>
          </div>
        </CardContent>
        {/* Cancelled */}
      </Card>
       <Card className="border-gray-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Số chuyến bị hủy</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-4xl text-red-500">2</p>
            <p className="text-gray-500 text-xs">Tỉ lệ hủy chuyến khoảng: 1,3%</p>
          </div>
        </CardContent>
      </Card>

      {/* Performance */}
       <Card className="border-gray-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Hiệu năng</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-4xl">91.0%</p>
            <p className="text-gray-500 text-xs">Hiệu năng tổng thể</p>
          </div>
        </CardContent>
      </Card>

      {/* Avg delay time */}
       <Card className="border-gray-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Thời gian trễ trung bình</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-4xl">5 phút</p>
            <p className="text-gray-500 text-xs">Khi bị trì hoãn</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
