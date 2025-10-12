"use client"
import { usePathname } from "next/navigation"

export default function DashboardPage(){
    const path = usePathname()
    const role = path.split("/")[2]
    return (
        <h1>Hello {role}</h1>
    )
}