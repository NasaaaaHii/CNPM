import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Baby, Bus, Route, User } from "lucide-react";

export default function Overview() {
  const cardItem = [
    {
      title: "Total Buses",
      value: "28",
      change: "+2 this month",
      icon: <Bus />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Total Drivers",
      value: "32",
      change: "+4 this month",
      icon: <User />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Active Routes",
      value: "15",
      change: "No changes",
      icon: <Route />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Total Students",
      value: "1,247",
      change: "+28 this month",
      icon: <Baby />,
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="space-y-6">
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-6 md:grid-cols-2">
          {cardItem.map((item) => {
            return (
              <Card
                key={item.title}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle className="text-[15px]">{item.title}</CardTitle>
                  <div className={`${item.bg} ${item.color} p-2 rounded-lg`}>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <div className="text-2xl">{item.value}</div>
                    <p className="text-muted-foreground">{item.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div>
          <Card>
            <CardHeader>
                <CardTitle>System Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolorem!
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
