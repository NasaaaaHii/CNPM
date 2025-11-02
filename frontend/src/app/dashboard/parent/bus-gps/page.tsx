import { Navigation, Clock, Bus } from 'lucide-react'

export default function BusGp() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-[100%] min-h-[100%] p-[30px] bg-[#f9fafb] gap-[20px]">
      {/* Active Trip ----------------------------------------------------------------------------- */}
      <div className="w-full max-h-[45vh] overflow-y-auto p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5] border-l-4 border-l-[#155dfc]">
        <div className="text-[1.5em]">
          <p>Active Trip</p>
        </div>
        {/* Trip 1 -------------------------------- */}
        <div className="flex justify-between items-start mt-[50px] gap-[10px] p-[20px] rounded-xl border border-[#e5e5e5]">
          <div className="flex-1 flex flex-col justify-between gap-[10px]">
            <div className="">
              <div className="text-sm text-muted-foreground">Student</div>
              <div className="text-[1em]">Emma Johnson</div>
            </div>
            <div className="">
              <div className="text-sm text-muted-foreground">Class</div>
              <div className="text-[1em]">Grade 5, Section A</div>
            </div>
            <div className="">
              <div className="text-sm text-muted-foreground">Bus Details</div>
              <div className="text-[1em]">BUS001 - Route A</div>
            </div>
          </div>
          <div className="w-fit bg-green-600 p-[5px_10px] rounded-lg">
            <div className="text-white text-sm font-semibold">In Transit</div>
          </div>
        </div>
        {/* Trip 2 -------------------------------- */}
        <div className="flex justify-between items-start mt-[50px] gap-[10px] p-[20px] rounded-xl border border-[#e5e5e5]">
          <div className="flex-1 flex flex-col justify-between gap-[10px]">
            <div className="">
              <div className="text-sm text-muted-foreground">Student</div>
              <div className="text-[1em]">Emma Johnson</div>
            </div>
            <div className="">
              <div className="text-sm text-muted-foreground">Class</div>
              <div className="text-[1em]">Grade 5, Section A</div>
            </div>
            <div className="">
              <div className="text-sm text-muted-foreground">Bus Details</div>
              <div className="text-[1em]">BUS001 - Route A</div>
            </div>
          </div>

          <div className="w-fit bg-green-600 p-[5px_10px] rounded-lg">
            <div className="text-white text-sm font-semibold">In Transit</div>
          </div>
        </div>
      </div>

      {/* Live Bus Tracking ----------------------------------------------------------------------------- */}
      <div className="w-full p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">
          Live Bus Tracking
        </div>
        <div className="mt-[50px] rounded-xl border border-dashed border-[#9e9d9d] bg-[#eff7fe]">
          <div className="flex flex-col justify-center items-center gap-[20px] w-full h-full p-[40px_20px]">
            <div className="">
              <Navigation size='50px' className='text-[#1b61fc]' />
            </div>
            <div className="text-base text-muted-foreground">
              Real-Time GPS Tracking
            </div>
            <div className="text-sm text-muted-foreground max-w-[40%] text-center">
              {"Track your child's bus location in real-time. The map shows current position, route path, and estimated arrival time."}
            </div>
            <div className="p-[15px_15px] bg-[#ffffff] flex flex-col gap-[5px] rounded-lg shadow-[rgba(0, 0, 0, 0.24)] shadow-md">
              <div className="flex items-center gap-[12px]">
                <div className="w-[13px] h-[13px] bg-[#1b61fc] rounded-[100%]"><br /></div>
                <div className="text-sm">Current Location: 456 Main Street</div>
              </div>
              <div className="flex items-center gap-[10px]">
                <Clock color='#1b61fc' className='w-[15px] h-[15px]' />
                <div className="text-sm text-muted-foreground">Estimated arrival: 5 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Trip Status ----------------------------------------------------------------------------- */}
      <div className="w-full p-[20px_30px] bg-[#ffffff] rounded-xl border border-solid border-[#e5e5e5]">
        <div className="text-[1.5em]">
          Current Trip Status
        </div>
        <div className="flex flex-col gap-[10px] mt-[50px]">
          {/* Trip 1 -------------------------------- */}
          <div className="rounded-lg border border-[#9e9d9d] bg-[#eff7fe] p-[15px] flex justify-between items-center gap-[15px]">
            <div className="flex justify-center items-center gap-[15px]">
              <div className="flex justify-center items-center">
                <Bus strokeWidth={1.5} className='text-[#ffffff] rounded-full bg-blue-600 w-[45px] h-[45px] p-[8px]' />
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
                <div className="text-sm">
                  Next Stop
                </div>
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
                <Bus strokeWidth={1.5} className='text-[#ffffff] rounded-full bg-blue-600 w-[45px] h-[45px] p-[8px]' />
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
                <div className="text-sm">
                  Next Stop
                </div>
                <div className="text-muted-foreground text-sm">
                  Oak Street (Your stop)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};
