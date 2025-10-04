import React from 'react'
import { Bus } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
export const Navbar = () => {
  return (
        <div className='bg-white border-b border-gray-200 sticky top-0 z-100 shadow-sm'>
            <div className='container mx-auto px-6 py-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 bg-blue-700 flex items-center justify-center rounded-xl'>
                            <Bus size={36} color="#f1f2f3" strokeWidth={1.75} />
                        </div>
                        <div>
                            <h1 className='text-gray-900'>Smart Bus System SGU</h1>
                            <p className='text-xs text-muted-foreground'>Version 1.0</p>
                        </div>
                    </div>
                    <nav className='flex items-center gap-8'>
                        <a href="#home" className='text-xm'>Home</a>
                        <a href="#about" className='text-xm'>About</a>
                        <a href="#contact" className='text-xm'>Contact</a>
                        <Button variant='secondary' className='bg-blue-600 text-xm text-white font-bold hover:bg-blue-400 hover:font-extrabold'>
                            <Link href={"/login"}>Login</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </div>
  )
}
