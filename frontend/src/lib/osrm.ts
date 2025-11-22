// gọi OSRM trực tiếp (router.project-osrm.org)
export async function getRouteFromOSRM(coords: [number, number][]) {
  const coordStr = coords.map(([lat, lng]) => `${lng},${lat}`).join(";");
  
  // gọi public OSRM endpoint trực tiếp
  const url = `https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=full&geometries=geojson`;
  
  try {
    const r = await fetch(url);
    if (!r.ok) {
      console.error("OSRM fetch failed:", r.status, await r.text());
      return null;
    }
    const data = await r.json();
    const route = data.routes?.[0];
    
    if (!route) return null;
    
    // convert [lng,lat] -> [lat,lng]
    return route.geometry.coordinates.map((c: number[]) => [c[1], c[0]] as [number, number]);
  } catch (err) {
    console.error("getRouteFromOSRM error:", err);
    return null;
  }
}