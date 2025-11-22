import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; 
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
interface MapCoreProps {
  // Định nghĩa props cần thiết
  school: [number, number];
  home: [number, number];
  busPos: { lat: number; lng: number };
}

export default function MapCore({ school, home, busPos }: MapCoreProps) {
  const routes = [home, school];
  const busPosition: [number, number] = [busPos.lat, busPos.lng];

  return (
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
      {/* route tu home -> sgu */}
      <Polyline positions={routes} color="blue" />
      <Marker position={busPosition}>
        <Popup>Bus Position</Popup>
      </Marker>

    </MapContainer>
  );
}
