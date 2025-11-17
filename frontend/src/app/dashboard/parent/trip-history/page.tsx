export default function TripHistory() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-full min-h-full p-[30px] bg-[#f9fafb] gap-5">
      {/* Select Child ----------------------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-5 p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-lg">
          <p>Select Child</p>
        </div>

        <div className="w-full flex flex-row gap-5 flex-wrap">
          <div className="flex flex-col bg-blue-600 rounded-xl min-w-[200px] py-3 justify-center items-center cursor-pointer hover:bg-blue-500">
            <div className="">
              <p className="text-white text-sm">Emma Johnson</p>
              <p className="text-gray-300 text-xs">Grade 5</p>
            </div>
          </div>
          <div className="flex flex-col bg-white border border-gray-300 rounded-xl min-w-[200px] py-3 justify-center items-center cursor-pointer hover:bg-green-500 group">
            <div className="">
              <p className="text-black text-sm group-hover:text-white">
                Oliver Johnson
              </p>
              <p className="text-gray-600 text-xs group-hover:text-gray-300">
                Grade 3
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trip History ----------------------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-5 p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-lg">Trip History - Emma Johnson</div>
        <div className="rounded-xl flex flex-col">
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
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">
              Completed
            </div>
          </div>
          {/* Row grid 2 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-02</div>
            <div className="">Morning</div>
            <div className="">07:16 AM</div>
            <div className="">08:07 AM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">
              Completed
            </div>
          </div>
          {/* Row grid 3 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-02</div>
            <div className="">Afternoon</div>
            <div className="">02:00 PM</div>
            <div className="">02:48 PM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">
              Completed
            </div>
          </div>
          {/* Row grid 4 ----------------------------- */}
          <div className="grid grid-cols-5 text-sm gap-x-10 hover:bg-[#f5f5f7] p-2 items-center border-t border-t-[#e5e5e5]">
            <div className="">2025-10-01</div>
            <div className="">Morning</div>
            <div className="">07:14 AM</div>
            <div className="">08:04 AM</div>
            <div className="text-[#ffffff] font-semibold rounded-lg bg-green-600 w-fit p-[5px]">
              Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
