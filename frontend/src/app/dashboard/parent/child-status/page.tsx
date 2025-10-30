export default function ManagerChildrenStatus() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-[100%] min-h-[100%] p-[30px] bg-[#f9fafb] gap-[20px]">
      {/* My Children ----------------------------------------------------------------------------- */}
      <div className="w-full max-h-[45vh] overflow-y-auto p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">
          <p>My Children</p>
        </div>
        {/* Trip 1 -------------------------------- */}
        <div className="flex flex-col mt-[50px] gap-[20px] p-[20px] rounded-xl border border-[#e5e5e5]">
          <div className="flex justify-between items-start">
            <div className="flex-1 flex flex-col justify-between gap-[10px]">
              <div className="">
                <div className="text-[1em]">Emma Johnson</div>
                <div className="text-sm text-muted-foreground">Grade 5, Section A</div>
              </div>
            </div>
            <div className="w-fit bg-blue-600 p-[5px_10px] rounded-lg">
              <div className="text-white text-sm font-semibold">Active</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[49%]">
              <div className="text-sm text-muted-foreground">Bus Number</div>
              <div className="text-[1em]">BUS001</div>
            </div>
            <div className="w-[50%]">
              <div className="text-sm text-muted-foreground">Route</div>
              <div className="text-[1em]">Route A</div>
            </div>
          </div>
        </div>
        {/* Trip 2 -------------------------------- */}
        <div className="flex flex-col mt-[50px] gap-[20px] p-[20px] rounded-xl border border-[#e5e5e5]">
          <div className="flex justify-between items-start">
            <div className="flex-1 flex flex-col justify-between gap-[10px]">
              <div className="">
                <div className="text-[1em]">Emma Johnson</div>
                <div className="text-sm text-muted-foreground">Grade 5, Section A</div>
              </div>
            </div>
            <div className="w-fit bg-blue-600 p-[5px_10px] rounded-lg">
              <div className="text-white text-sm font-semibold">Active</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[49%]">
              <div className="text-sm text-muted-foreground">Bus Number</div>
              <div className="text-[1em]">BUS001</div>
            </div>
            <div className="w-[50%]">
              <div className="text-sm text-muted-foreground">Route</div>
              <div className="text-[1em]">Route A</div>
            </div>
          </div>
        </div>
      </div>

      {/* Trip History ----------------------------------------------------------------------------- */}
      <div className="w-full p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">
          Trip History
        </div>
        <div className="mt-[50px] rounded-xl flex flex-col">
          {/* Column grid ----------------------------- */}
          <div className="grid grid-cols-5 font-semibold gap-x-10 hover:bg-[#f5f5f7] p-2 items-center">
            <div className="">Date</div>
            <div className="">Trip Type</div>
            <div className="">Pickup Time</div>
            <div className="">Drop-off Time</div>
            <div className="">Status</div>
          </div>
          {/* Row grid ----------------------------- */}
          {/* Row grid 1 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-03</div>
            <div className="">Morning</div>
            <div className="">07:15 AM</div>
            <div className="">08:05 AM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">Completed</div>
          </div>
          {/* Row grid 2 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-02</div>
            <div className="">Morning</div>
            <div className="">07:16 AM</div>
            <div className="">08:07 AM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">Completed</div>
          </div>
          {/* Row grid 3 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-02</div>
            <div className="">Afternoon</div>
            <div className="">02:00 PM</div>
            <div className="">02:48 PM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">Completed</div>
          </div>
          {/* Row grid 4 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-01</div>
            <div className="">Morning</div>
            <div className="">07:14 AM</div>
            <div className="">08:04 AM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
