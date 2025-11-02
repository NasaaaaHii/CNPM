import { Bell } from "lucide-react";

export default function Nofitications() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-[100%] min-h-[100%] p-[30px] bg-[#f9fafb] gap-[20px]">
      {/* Notifications ----------------------------------------------------------------------------- */}
      <div className="w-full p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">Notifications</div>
        {/* Container content */}
        <div className="flex flex-col gap-5 mt-[50px]">
          {/* Content 1 -------------------------------- */}
          <div className="flex flex-col gap-2  bg-blue-50 rounded-lg border-l border-l-4 border-l-blue-500 p-[10px_20px]">
            <div className="flex justify-between">
              <div className="flex jutify-center items-center gap-[10px]">
                <Bell size={20} className="text-blue-600" />
                <div className="text-base">Bus arriving soon</div>
              </div>
              <div className="text-xs text-muted-foreground">2 minutes ago</div>
            </div>
            <div className="text-sm text-muted-foreground ml-[30px]">
              {"Emma's bus will arrive at your stop in approximately 5 minutes"}
            </div>
          </div>
          {/* Content 2 -------------------------------- */}
          <div className="flex flex-col gap-2  bg-green-50 rounded-lg border-l border-l-4 border-l-green-500 p-[10px_20px]">
            <div className="flex justify-between">
              <div className="flex jutify-center items-center gap-[10px]">
                <Bell size={20} className="text-green-600" />
                <div className="text-base">Child picked up</div>
              </div>
              <div className="text-xs text-muted-foreground">1 hour ago</div>
            </div>
            <div className="text-sm text-muted-foreground ml-[30px]">
              Emma has been successfully picked up at 07:15 AM
            </div>
          </div>
          {/* Content 3 -------------------------------- */}
          <div className="flex flex-col gap-2  bg-yellow-50 rounded-lg border-l border-l-4 border-l-yellow-500 p-[10px_20px]">
            <div className="flex justify-between">
              <div className="flex jutify-center items-center gap-[10px]">
                <Bell size={20} className="text-yellow-600" />
                <div className="text-base">Route delay</div>
              </div>
              <div className="text-xs text-muted-foreground">2 hours ago</div>
            </div>
            <div className="text-sm text-muted-foreground ml-[30px]">
              Bus delayed by 8 minutes due to traffic on Main Street
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
