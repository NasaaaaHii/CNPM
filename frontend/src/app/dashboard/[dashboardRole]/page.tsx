"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import Overview from "./overview/page"
import ManagerDayRoutes from "./dayroutes/page"
import BusGp from "./bus-gps/page"

export default function DashboardPage(){
    const path = usePathname()
    const role = path.split("/")[2]
    return (
        <>
            {role == "admin" && <Overview />}
            {role == "driver" && <ManagerDayRoutes />}
            {role == "parent" && <BusGp />}
            
        </>
    )
}