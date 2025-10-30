"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Overview from "./overview/page"
import ManagerDayRoutes from "./dayroutes/page"
import BusGp from "./bus-gps/page"

export default function DashboardPage() {
    const path = usePathname()
    const role = path.split("/")[2]

    useEffect(() => {
        switch(role){
            case "parent": window.location.href = "/dashboard/" + role + "/bus-gps"; break;
            case "driver": window.location.href = "/dashboard/" + role + "/dayroutes"; break;
            case "admin": window.location.href = "/dashboard/" + role + "/overview"; break;
        }
    }, []);

    return (
        <>
        </>
    )
}