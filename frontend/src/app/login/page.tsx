'use client'

import LoginForm from "@/components/form/login-form"

export default function loginPage() {
    return (
        <div className="bg-muted flex justify-center items-center flex-col p-6 md:p-10 min-h-svh">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm />
            </div>
        </div>
    )
}