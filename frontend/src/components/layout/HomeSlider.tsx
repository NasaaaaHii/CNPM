"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination , Autoplay} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import Link from "next/link";
export const HomeSlider = () => {
  return (
    <div className="w-full h-[700px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false}}
        navigation
        pagination={{ clickable: true }}
        speed={1500}
        className="h-full"
      >
        <SwiperSlide className="relative w-full h-full">
           <Image src={"/img/bus1.jpg"}
                    alt="Bus 1"
                    fill
                    className="object-fill"/>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-300/20"></div>
            <div className="absolute container mx-auto px-6 top-[30%] left-[10%]">
                <div className="max-w-2xl text-white flex flex-col gap-4">
                    <h1 className="text-[30px] font-semibold">Cập nhật GPS theo thời gian thực</h1>
                    <p className="text-xm italic">Giảm tải công việc quản lý,tăng hiệu quả lập lịch,giám sát trực tiếp hoạt động,xử lý sự cố nhanh hơn</p>
                    <Button variant={"outline"} className="w-[150px] bg-blue-500 text-white">
                          <Link href={"/login"}>Get started</Link>
                    </Button>
                </div>
            </div>
        </SwiperSlide>

         <SwiperSlide className="relative w-full h-full">
           <Image src={"/img/bus2.jpg"}
                    alt="Bus 1"
                    fill
                    className="object-fill"/>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-300/20"></div>
            <div className="absolute container mx-auto px-6 top-[30%] left-[10%]">
                <div className="max-w-2xl text-white flex flex-col gap-4">
                    <h1 className="text-[30px] font-semibold">Đảm bảo mức độ đáng tin cậy</h1>
                    <p className="text-xm italic">Yên tâm hơn khi có thể theo dõi hành trình của con,tiết kiệm thời gian,nắm thông tin kịp thời khi xe trễ</p>
                    <Button variant={"outline"} className="w-[150px] bg-blue-500 text-white">
                         <Link href={"/login"}>Get started</Link>
                    </Button>
                </div>
            </div>
        </SwiperSlide>

         <SwiperSlide className="relative w-full h-full">
           <Image src={"/img/bus3.jpg"}
                    alt="Bus 1"
                    fill
                    className="object-fill"/>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-300/20"></div>
            <div className="absolute container mx-auto px-6 top-[30%] left-[10%]">
                <div className="max-w-2xl text-white flex flex-col gap-4">
                    <h1 className="text-[30px] font-semibold">Đưa đón học sinh đúng giờ giấc</h1>
                    <p className="text-xm italic">Có lịch rõ ràng,được hỗ trợ công cụ báo cáo,giảm nhầm lẫn,nâng cao tính chuyên nghiệp </p>
                    <Button variant={"outline"} className="w-[150px] bg-blue-500 text-white">
                         <Link href={"/login"}>Get started</Link>
                    </Button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
