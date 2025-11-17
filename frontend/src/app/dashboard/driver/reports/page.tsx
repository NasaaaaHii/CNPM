
"use client";
import { Bell, Send } from "lucide-react";
import { useState } from "react";

export default function Reports() {
  const [activeTab, setActiveTab] = useState<"receive" | "send">("receive");
  const reportsData = [
    {
      from: "Admin",
      message: "Route A starts in 30 minutes",
      time: "5 min ago",
      level: "info",
    },
    {
      from: "Admin",
      message: "Weather alert: Light rain expected",
      time: "1 hour ago",
      level: "warning",
    },
  ];
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md">
        <div className="p-6 flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Notification Center</h2>
          <div className="bg-gray-100 grid grid-cols-2 rounded-4xl p-1 gap-1">
            <button
              className={`rounded-2xl py-1.5 transition-all duration-200 ${
                activeTab === "receive"
                  ? "bg-white shadow-sm"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("receive")}
            >
              <p
                className={`text-base font-semibold ${
                  activeTab === "receive" ? "text-gray-900" : "text-gray-600"
                }`}
              >
                Receive from Admin
              </p>
            </button>
            <button
              className={`rounded-2xl py-1.5 transition-all duration-200 ${
                activeTab === "send"
                  ? "bg-white shadow-sm"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("send")}
            >
              <p
                className={`text-base font-semibold ${
                  activeTab === "send" ? "text-gray-900" : "text-gray-600"
                }`}
              >
                Send to Admin
              </p>
            </button>
          </div>

          {activeTab === "receive" && (
            <div className="space-y-6">
              {reportsData.map((report, index) => (
                <div
                  className={`rounded-lg border-l-4 ${
                    report.level === "info"
                      ? "border-l-blue-500 bg-blue-50"
                      : "border-l-yellow-500 bg-yellow-50"
                  } shadow-sm hover:shadow-md transition-shadow duration-200`}
                  key={index}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`${
                              report.level === "info"
                                ? "text-blue-500"
                                : "text-yellow-500"
                            }`}
                          >
                            <Bell size={20} />
                          </div>
                          <p className="text-sm font-medium text-gray-600">
                            From: {report.from}
                          </p>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {report.message}
                        </h3>
                        <p className="text-sm text-gray-500">{report.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "send" && (
            <div className="rounded-lg border border-gray-200 flex flex-col gap-4 p-4">
              <p className="font-semibold text-md">Message To Admin</p>
              <textarea
                className="resize-none border-input placeholder:text-muted-foreground w-full border border-gray-200 bg-gray-100 rounded-lg p-3"
                placeholder="Type your message to admin..."
              ></textarea>
              <button className="bg-green-600 rounded-xl p-2 hover:bg-green-700 transition-colors cursor-pointer">
                <div className="flex flex-row justify-center items-center gap-4">
                  <Send size={18} color="white" />
                  <p className="font-semibold text-lg text-white">
                    Send Notification To Admin
                  </p>
                </div>
              </button>
              <div className="bg-gray-100 rounded-lg p-5">
                <p className="text-md text-gray-500 font-normal">
                  Use this to communicate route updates, student issues, or
                  schedule requests to the admin.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
