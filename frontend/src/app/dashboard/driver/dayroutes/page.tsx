import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
export default function ManagerDayRoutes() {
  const dataRouter = [
    {
      title: "Route A - Morning Pickup",
      stops: 8,
      time: "07:00 AM",
    },
    {
      title: "School Drop-off",
      stops: 1,
      time: "08:30 AM",
    },
    {
      title: "School Pickup",
      stops: 1,
      time: "02:00 PM",
    },
    {
      title: "Route A - Afternoon Drop-off",
      stops: 8,
      time: "03:30 PM",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-6 space-y-6">
        <div className="flex flex-col gap-2 px-4 border border-gray-200 rounded-xl">
          <div className="py-4 ml-5">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              Today's Schedule
            </h2>
          </div>
          <CardContent className="flex flex-col space-y-4">
            {dataRouter.map((item, index) => (
              <div
                className="flex flex-col bg-white p-4 rounded-lg shadow"
                key={index}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-row gap-4">
                    <div className="shadow-md text-blue-600 bg-blue-50 rounded-lg p-4">
                      <Clock />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Stops: {item.stops}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end gap-2">
                    <p className="text-lg mr-3">{item.time}</p>
                    <button className="rounded-xl bg-blue-500 text-white px-4 py-2">
                      Upcoming
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </div>
      </div>
    </div>
  );
}
