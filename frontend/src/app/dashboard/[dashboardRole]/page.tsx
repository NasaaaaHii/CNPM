"use client"
export default function DashboardPage({
    params
}: {params: {dasboardRole: string}}){
    const {dasboardRole} = params
    return (
        <h1>Hello {dasboardRole}</h1>
    )
}