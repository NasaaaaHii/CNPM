import { Navigation, Clock, Bus } from "lucide-react";

export default function BusGp() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-full min-h-full p-[30px] bg-[#f9fafb] gap-5">
      {/* Select Child ----------------------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-5 p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-lg">
          <p>Select Child</p>
        </div>

        <div className="w-full flex flex-row">
        </div>

        <div className="w-full flex flex-row justify-start items-center gap-3">
          <div className="w-fit bg-green-600 px-3 py-1 rounded-lg border border-green-600">
            <div className="text-white text-xs font-medium">In Transit</div>
          </div>
          <div className="w-fit bg-white px-3 py-1 rounded-lg border border-[#f0b100]">
            <div className="text-[#a66200] text-xs font-medium">ETA: 3 minutes</div>
          </div>
        </div>
      </div>



      {/* Active Trip ----------------------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-5 p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5] border-l-4 border-l-[#155dfc]">
        <div className="text-lg">
          <p>Active Trip - Emma Johnson</p>
        </div>

        <div className="w-full flex flex-row">
          <div className="w-[50%] flex flex-col justify-between gap-2.5">
            <div className="">
              <div className="text-sm text-gray-500">Student</div>
              <div className="text-base">Emma Johnson</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Class</div>
              <div className="text-base">Grade 5, Section A</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Bus Details</div>
              <div className="text-base">BUS001 - Route A</div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-between gap-2.5">
            <div className="">
              <div className="text-sm text-gray-500">Driver</div>
              <div className="text-base">John Smith</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">License Number</div>
              <div className="text-base">DL-12345</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Vehicle Number</div>
              <div className="text-base">ABC-1234</div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-start items-center gap-3">
          <div className="w-fit bg-green-600 px-3 py-1 rounded-lg border border-green-600">
            <div className="text-white text-xs font-medium">In Transit</div>
          </div>
          <div className="w-fit bg-white px-3 py-1 rounded-lg border border-[#f0b100]">
            <div className="text-[#a66200] text-xs font-medium">ETA: 3 minutes</div>
          </div>
        </div>
      </div>

      {/* Live Bus Tracking ----------------------------------------------------------------------------- */}
      <div className="w-full p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">Live Bus Tracking</div>
        <div className="mt-[50px] rounded-xl border border-dashed border-[#9e9d9d] bg-[#eff7fe]">
          <div className="flex flex-col justify-center items-center gap-[20px] w-full h-full p-[40px_20px]">
            <div className="">
              <Navigation size="50px" className="text-[#1b61fc]" />
            </div>
            <div className="text-base text-muted-foreground">
              Real-Time GPS Tracking
            </div>
            <div className="text-sm text-muted-foreground max-w-[40%] text-center">
              Track your child's bus location in real-time. The map shows
              current position, route path, and estimated arrival time.
            </div>
            <div className="p-[15px_15px] bg-[#ffffff] flex flex-col gap-[5px] rounded-lg shadow-[rgba(0, 0, 0, 0.24)] shadow-md">
              <div className="flex items-center gap-[12px]">
                <div className="w-[13px] h-[13px] bg-[#1b61fc] rounded-[100%]">
                  <br />
                </div>
                <div className="text-sm">Current Location: 456 Main Street</div>
              </div>
              <div className="flex items-center gap-[10px]">
                <Clock color="#1b61fc" className="w-[15px] h-[15px]" />
                <div className="text-sm text-muted-foreground">
                  Estimated arrival: 5 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Trip Status ----------------------------------------------------------------------------- */}
      <div className="w-full p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">Current Trip Status</div>
        <div className="flex flex-col gap-[10px] mt-[50px]">
          {/* Trip 1 -------------------------------- */}
          <div className="rounded-lg border border-[#9e9d9d] bg-[#eff7fe] p-[15px] flex justify-between items-center gap-[15px]">
            <div className="flex justify-center items-center gap-[15px]">
              <div className="flex justify-center items-center">
                <Bus
                  strokeWidth={1.5}
                  className="text-[#ffffff] rounded-full bg-blue-600 w-[45px] h-[45px] p-[8px]"
                />
              </div>
              <div className="">
                <div className="text-base">
                  Morning Route - Pickup to School
                </div>
                <div className="text-muted-foreground text-sm">
                  Driver: John Smith
                </div>
              </div>
            </div>
            <div className="min-w-[150px]">
              <div className="">
                <div className="text-sm">Next Stop</div>
                <div className="text-muted-foreground text-sm">
                  Oak Street (Your stop)
                </div>
              </div>
            </div>
          </div>

          {/* Trip 2 -------------------------------- */}
          <div className="rounded-lg border border-[#9e9d9d] bg-[#eff7fe] p-[15px] flex justify-between items-center gap-[15px]">
            <div className="flex justify-center items-center gap-[15px]">
              <div className="flex justify-center items-center">
                <Bus
                  strokeWidth={1.5}
                  className="text-[#ffffff] rounded-full bg-blue-600 w-[45px] h-[45px] p-[8px]"
                />
              </div>
              <div className="">
                <div className="text-base">
                  Morning Route - Pickup to School
                </div>
                <div className="text-muted-foreground text-sm">
                  Driver: John Smith
                </div>
              </div>
            </div>
            <div className="min-w-[150px]">
              <div className="">
                <div className="text-sm">Next Stop</div>
                <div className="text-muted-foreground text-sm">
                  Oak Street (Your stop)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
