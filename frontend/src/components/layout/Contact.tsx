import React from "react";
import { Phone, Mail, MapPinned } from "lucide-react";
import { Button } from "../ui/button";
export const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-bold">Smart Bus System</h3>
          <p className="text-muted-foreground">
            Đảm bảo vận chuyển trường học an toàn và đáng tin cậy cho con bạn.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Contact Info</h3>
          <div className="flex flex-col gap-5 mt-3">
            <div className="flex gap-4 items-center">
              <Phone size={25} color="#fafafa" strokeWidth={0.75} />
              <span>0123456789</span>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={25} color="#fafafa" strokeWidth={0.75} />
              <span>abcd@gmail.com</span>
            </div>
            <div className="flex gap-4 items-center">
              <MapPinned size={25} color="#fafafa" strokeWidth={0.75} />
              <span>SGU,Tp.HCM,VN</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick link</h3>
          <div className="space-y-2">
            <a href="#home" className="block text-gray-400 hover:text-white transition-colors">home</a>
            <a href="#about" className="block text-gray-400 hover:text-white transition-colors">about</a>
            <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
