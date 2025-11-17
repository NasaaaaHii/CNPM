import { Navigation, Clock, Phone, Send, CircleX } from "lucide-react";


export default function ManagerChildrenStatus() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-full min-h-full p-[30px] bg-[#f9fafb] gap-5">
      {/* Child 1 ----------------------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-5 p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="flex flex-row justify-between">
          <p className="text-lg">Emma Johnson</p>
          <div className="w-fit bg-blue-600 px-3 py-1 rounded-lg border border-blue-600">
            <div className="text-white text-xs font-medium">Active</div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center">
          <div className="rounded-full bg-blue-50">
            <div className="w-25 h-25 flex justify-center items-center text-blue-600">Emma</div>
          </div>
        </div>

        <div className="w-full flex flex-row">
          <div className="w-[50%] flex flex-col justify-between gap-2.5">
            <div className="">
              <div className="text-sm text-gray-500">Grade</div>
              <div className="text-base">Grade 5</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Bus Number</div>
              <div className="text-base">BUS001</div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-between gap-2.5">
            <div className="">
              <div className="text-sm text-gray-500">Section</div>
              <div className="text-base">A</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Route</div>
              <div className="text-base">Route A</div>
            </div>
          </div>
        </div>
      </div>
            {/* Child 2 ----------------------------------------------------------------------------- */}
      <div className="w-full flex flex-col gap-5 p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="flex flex-row justify-between">
          <p className="text-lg">Oliver Johnson</p>
          <div className="w-fit bg-blue-600 px-3 py-1 rounded-lg border border-blue-600">
            <div className="text-white text-xs font-medium">Active</div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center">
          <div className="rounded-full bg-blue-50">
            <div className="w-25 h-25 flex justify-center items-center text-blue-600">Oliver</div>
          </div>
        </div>

        <div className="w-full flex flex-row">
          <div className="w-[50%] flex flex-col justify-between gap-2.5">
            <div className="">
              <div className="text-sm text-gray-500">Grade</div>
              <div className="text-base">Grade 3</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Bus Number</div>
              <div className="text-base">BUS002</div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-between gap-2.5">
            <div className="">
              <div className="text-sm text-gray-500">Section</div>
              <div className="text-base">B</div>
            </div>
            <div className="">
              <div className="text-sm text-gray-500">Route</div>
              <div className="text-base">Route B</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};
