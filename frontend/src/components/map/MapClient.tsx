"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";



const Map = dynamic(() => import("./MapCore"), {
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center">Đang tải bản đồ....</div>
})

export default function MapClient() {
  const school: [number, number] = useMemo(() => [10.76006, 106.68229], []);
  const home: [number, number] = useMemo(() => [10.76102, 106.63001], []);

  const [busPos, setBusPos] = useState({ lat: home[0], lng: home[1] });
  const stepRef = useRef(0);
  const directionRef = useRef(1);
  const totalSteps = 100;

  useEffect(() => {
    // Logic cập nhật vị trí vẫn an toàn ở đây
    const interval = setInterval(() => {
      stepRef.current += directionRef.current;
      if (stepRef.current >= totalSteps || stepRef.current <= 0) {
        directionRef.current *= -1;
      }

      const lat =
        home[0] + (school[0] - home[0]) * (stepRef.current / totalSteps);
      const lng =
        home[1] + (school[1] - home[1]) * (stepRef.current / totalSteps);

      setBusPos({ lat, lng });
    }, 1000);

    return () => clearInterval(interval);
  }, [home, school]);

  return (
    <div className="w-full h-[800px]">
      {/* Truyền props xuống Map */}
      <Map school={school} home={home} busPos={busPos} />
    </div>
  );
}