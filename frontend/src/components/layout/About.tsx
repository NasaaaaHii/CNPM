import React from 'react'

import { Bus } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { MessageCircleMore } from 'lucide-react'
export const About = () => {
  return (
    <div className='container mx-auto px-6'>
        <div className='max-w-4xl mx-auto text-center '>
            <h1 className='mb-6 text-[30px]'>Welcome to Smart Bus System SGU</h1>
            <p>SSB 1.0 mang lại sự an toàn, minh bạch, tiện lợi cho phụ huynh, hỗ trợ tài xế làm việc hiệu quả hơn, đồng thời giúp quản trị viên tối ưu công tác quản lý và giám sát vận hành hệ thống xe bus trường học.</p>
            <div className='grid md:grid-cols-3 gap-8 mt-12'>
                <div className='bg-white p-3 rounded-2xl shadow-xl'>
                    <div className='flex items-center mx-auto mb-4 justify-center'>
                        <div className='p-3 bg-blue-400/80 rounded-full'>
                            <Bus size={36} color="#0b5cad" strokeWidth={1.75} />
                        </div>
                    </div>
                    <h3 className='whitespace-nowrap'>Theo dõi theo thời gian thực</h3>
                    <p className='text-muted-foreground italic'>Theo dõi các địa điểm xe bus và nhận cập nhật trực tiếp trên xe bus của con mình</p>
                </div>

                 <div className='bg-white p-3 rounded-2xl shadow-xl'>
                    <div className='flex items-center mx-auto mb-4 justify-center'>
                        <div className='p-3 bg-green-400/80 rounded-full'>
                           <MapPin size={36} color="#0bad26" strokeWidth={1.75} />
                        </div>
                    </div>
                    <h3 className='whitespace-nowrap'>Tối ưu hóa lịch trình</h3>
                    <p className='text-muted-foreground italic'>Kập kế hoạch lịch trình hiệu quả đảm bảo đưa đón đúng giờ giấc</p>
                </div>

                 <div className='bg-white p-3 rounded-2xl shadow-xl'>
                    <div className='flex items-center mx-auto mb-4 justify-center'>
                        <div className='p-3 bg-pink-400/80 rounded-full'>
                            <MessageCircleMore size={36} color="#ad0b61" strokeWidth={1.75} />
                        </div>
                    </div>
                    <h3 className='whitespace-nowrap'>Thông báo tức thời</h3>
                    <p className='text-muted-foreground italic'>Nhận thông báo về sự chậm trễ, đến và cập nhật thông tin quan trọng</p>
                </div>
            </div>
        </div>
    </div>
  )
}
