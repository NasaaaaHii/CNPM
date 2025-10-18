"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapBoxComponent() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Lấy token từ biến môi trường
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_API_KEY;

    //Tạo bản đồ
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [106.660172, 10.762622],
      zoom: 15,
    });

    new mapboxgl.Marker({ color: "red" })
      .setLngLat([106.68217,10.76010])
      .setPopup(new mapboxgl.Popup().setText("SGU"))
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [MAPBOX_API_KEY]);

  return <div ref={mapContainer} className="w-full h-[800px] rounded-sm" />;
}
