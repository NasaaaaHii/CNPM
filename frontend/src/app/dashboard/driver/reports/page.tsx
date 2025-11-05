import { Bell } from "lucide-react";

export default function Reports() {
  const reportsData = [
    {
      message: "Route A starts in 30 minutes",
      time: "5 min ago",
      level: "info",
    },
    {
      message: "Weather alert: Light rain expected",
      time: "1 hour ago",
      level: "warning",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-6 space-y-6">
        <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-4">
          <div className="ml-5 pb-2">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              Notifications
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {reportsData.map((report, index) => (
              <div
                className={`rounded-2xl border border-gray-200 ${
                  report.level === "info" ? "bg-blue-500" : "bg-yellow-500"
                }`}
                key={index}
              >
                <div
                  className={`ml-1 rounded-xl ${
                    report.level === "info" ? "bg-blue-50" : "bg-yellow-50"
                  } p-4`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                      <h2 className="text-[19px] font-medium">
                        {report.message}
                      </h2>
                      <Bell className="" />
                    </div>
                    <p className="">{report.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
