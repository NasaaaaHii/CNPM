import { builtinModules } from "module";
import supabase from "../../config/supabaseClient.js";
import e from "express";

type tracking_realtime = {
  bus_id: number;
  latitude: number;
  longitude: number;
  route_id?: number;
};

async function broadcastPosition(
  busId: number,
  latitude: number,
  longitude: number,
  time: string
) {
  const chanel = supabase.channel(`tracking-bus-${busId}`);
  await chanel.send({
    type: "broadcast",
    event: "position_update",
    payload: {
      bus_id: busId,
      latitude,
      longitude,
      time,
    },
  });
}

export async function handleTracking(data: tracking_realtime) {
  const now = new Date().toISOString();
  await broadcastPosition(data.bus_id, data.latitude, data.longitude, now);
  const threeMinuteAgo = new Date();
  threeMinuteAgo.setMinutes(threeMinuteAgo.getMinutes() - 3);
  const { data: lastRecord } = await supabase
    .from("tracking_realtime")
    .select("timestamp")
    .eq("bus_id", data.bus_id)
    .gte("timestamp", threeMinuteAgo.toISOString())
    .limit(1)
    .single();
  if (!lastRecord) {
    await supabase.from("tracking_realtime").insert([
      {
        bus_id: data.bus_id,
        latitude: data.latitude,
        longitude: data.longitude,
        time: now,
      },
    ]);
  }
}

export async function getCurrrentPosition(busId: number) {
  const { data, error } = await supabase
    .from("tracking_realtime")
    .select("*")
    .eq("bus_id", busId)
    .order("timestamp", { ascending: false })
    .limit(1)
    .single();
  if (error) throw new Error(error.message);
  return data;
}
