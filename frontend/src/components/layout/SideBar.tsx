import { Bus,User,Route,Calendar,FileText,Bell } from "lucide-react";
import React from "react";

import type { ReactElement } from "react";

interface AdminFunction {
  
  icon: ReactElement;
  name: string;
}
export const SideBar = () => {

  return (
    <aside className="container mx-auto h-full grid grid-rows-10 grid-cols-1">
      <div className="row-span-1 flex justify-center items-center gap-5 border border-b-gray-300">
        <div className="w-12 h-12 bg-blue-700 flex items-center justify-center rounded-xl">
          <Bus size={36} color="#f1f2f3" strokeWidth={1.75} />
        </div>
        <div className="flex flex-col flex-start">
          <h3>Smart Bus System SGU</h3>
          {/* <p className="text-muted-foreground">Admin</p> */}
        </div>
      </div>
      <div className="row-span-8">
        <div className="space-y-1">

        </div>
      </div>
      <div className="row-span-1 bg-gray-600"></div>
    </aside>
  );
};
