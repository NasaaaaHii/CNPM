"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix lỗi icon marker không hiển thị
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string | (() => string) })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapClient() {
  const position: [number, number] = [10.76006, 106.68229];
  const home: [number,number] = [10.76102,106.63001];

  return (
    <div className="w-full h-[800px] rounded-2xl overflow-hidden shadow-md">
      <MapContainer
        center={position}
        zoom={15}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>Vị trí trung tâm (TPHCM)</Popup>
        </Marker>

        <Marker position={home}>
          <Popup>My home</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
