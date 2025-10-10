import React from 'react'
import { Bus, FileText, Users, Route, LogOut, Bell, Settings } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className='m-0 p-0 box-border'>
      <div className='bg-[#ffffff] w-[20%] top-0 bottom-0 left-0 fixed'>


        <div className="flex justify-start items-center p-[20px] gap-[10px] border-b-[1px] border-[#edeef1]">
          <Bus size={50} color="#f1f2f3" strokeWidth={1.75} className="bg-[#144bea] p-[7px] rounded-lg"/>
          <div className="">
            <p className="text-[16px] font-semibold text-gray-800">Smart Bus System SGU</p>
            <p className="text-[13px] text-gray-500">Administrator Portal</p>
          </div>
        </div>


        <div className="">
          <div className="flex justify-start items-center gap-[10px] bg-[#eff6ff] p-[8px_20px] m-[10px_15px_0px_15px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd]">
            <FileText size={15} color="#2857e8" strokeWidth={1.75}/>
            <p className="text-[14px] font-medium text-[#2857e8] ">Overview</p>
          </div>
          <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[8px_20px] m-[10px_15px_0px_15px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
            <Users size={15} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            <p className="text-[14px] font-medium text-[#000000] group-hover:text-[#2857e8]">Manage Users</p>
          </div>
          <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[8px_20px] m-[10px_15px_0px_15px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
            <Bus size={15} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            <p className="text-[14px] font-medium text-[#000000] group-hover:text-[#2857e8]">Manage Buses</p>
          </div>
          <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[8px_20px] m-[10px_15px_0px_15px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
            <Route size={15} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            <p className="text-[14px] font-medium text-[#000000] group-hover:text-[#2857e8]">Manage Routes</p>
          </div>
          <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[8px_20px] m-[10px_15px_0px_15px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
            <FileText size={15} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            <p className="text-[14px] font-medium text-[#000000] group-hover:text-[#2857e8]">View Reports</p>
          </div>
        </div>


        <div className="absolute bottom-0 w-[100%] border-t-[1px] border-[#edeef1]">
          <div className="flex justify-start items-center p-[20px] gap-[10px]">
            <div className="flex justify-center items-center bg-[#144bea] font-semibold text-[#ffffff] w-[40px] h-[40px] rounded-full border-[2px] border-[#edeef1]">A</div>
            <div className="">
              <p className="text-[16px] font-semibold text-gray-800">Admin User</p>
              <p className="text-[13px] text-gray-500">Administrator</p>
            </div>
          </div>
          
          <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[8px_20px] m-[0px_15px_15px_15px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
            <LogOut size={15} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            <p className="text-[14px] font-medium text-[#000000] group-hover:text-[#2857e8]">Logout</p>
          </div>
        </div>


      </div>


      <div className='bg-[#ffffff] w-[80%] top-0 right-0 absolute border-l-[1px] border-[#edeef1]'>
        <div className="flex justify-between items-center bg-[#ffffff] w-fill sticky top-0 p-[15px_20px] border-b-[1px] border-[#edeef1]">
          <div className="">
            <p className="text-[16px] font-semibold text-gray-800">Admin Dashboard</p>
            <p className="text-[13px] text-gray-500">Welcome back, Admin User</p>
          </div>
          <div className="flex justify-center items-center gap-[10px]">
            <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[10px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
              <Bell size={17} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            </div>
            <div className="flex justify-start items-center gap-[10px] bg-[#ffffff] p-[10px] rounded-lg cursor-pointer hover:bg-[#dbeafe] active:bg-[#c7defd] group">
              <Settings size={17} strokeWidth={1.75} className='text-[#000000] group-hover:text-[#2857e8]'/>
            </div>
            <div className="flex justify-center items-center bg-[#144bea] font-semibold text-[#ffffff] w-[40px] h-[40px] rounded-full border-[2px] border-[#edeef1]">A</div>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolore dolorem iure laboriosam rerum ducimus sed! Consectetur inventore minus impedit aliquam necessitatibus a, eaque sint molestiae modi harum eum voluptatem.</p>
      </div>
    </div>
  )
}
