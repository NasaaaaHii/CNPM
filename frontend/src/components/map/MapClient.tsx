"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import TrackingTest from "./TrackingTest";

// Fix lỗi icon mặc định của Leaflet
delete (
  L.Icon.Default.prototype as unknown as {
    _getIconUrl?: string | (() => string);
  }
)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapClient() {
  const school: [number, number] = [10.76006, 106.68229];
  const home: [number, number] = [10.76102, 106.63001];
  const routes = useMemo(() => [home, school], [home, school]);

  const [busPos, setBusPos] = useState({ lat: home[0], lng: home[1] });
  const stepRef = useRef(0);
  const directionRef = useRef(1);
  const totalSteps = 100;

  useEffect(() => {
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
    <div className="w-full h-[800px] rounded-2xl overflow-hidden shadow-md">
      <MapContainer center={school} zoom={14} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={home}>
          <Popup>My Home</Popup>
        </Marker>
        <Marker position={school}>
          <Popup>SGU</Popup>
        </Marker>
        <Polyline positions={routes} color="blue" />

        <TrackingTest data={busPos} />
      </MapContainer>
    </div>
  );
}
