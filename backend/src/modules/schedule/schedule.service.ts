import { scheduler } from "node:timers/promises";
import supabase from "../../config/supabaseClient.js";
import { builtinModules } from "node:module";
// lấy danh sách driver (để admin chọn)
export async function getAllDrivers() {
  const { data: driver, error: driver_error } = await supabase
    .from("account")
    .select(`user_id , user_name , type_account (type_account_name)`)
    .eq("type_account_id", 2);
  if (driver_error) {
    throw new Error("Lỗi driver" + driver_error);
  }
  if (!driver) {
    return [];
  }
  return driver;
}

// Lấy danh sách buses (để admin chọn)
export async function getAllRoutes() {
  const { data: routes, error: router_error } = await supabase
    .from("routes")
    .select("*")
    .order("route_id", { ascending: false });
  if (router_error) {
    throw new Error("Lỗi Route" + router_error);
  }
  if (!routes) {
    return [];
  }
  return routes;
}

//Tạo schedule mới
export async function createSchedule(data: {
  bus_id: number;
  driver_id: number;
  route_id: number;
  schedule_date: string;
}) {
  if (
    !data.bus_id ||
    !data.driver_id ||
    !data.route_id ||
    !data.schedule_date
  ) {
    throw new Error("Thiếu dữ liệu trong create");
  }
  const { data: exits } = await supabase
    .from("schedule")
    .select("*")
    .eq("driver_id", data.driver_id)
    .eq("route_id", data.route_id)
    .eq("schedule_date", data.schedule_date)
    .single();
  if (exits) {
    throw new Error("Đã tồn tại dữ liệu này");
  }
  const { data: newSchedule, error: newSchedule_error } = await supabase
    .from("schedule")
    .insert([
      {
        driver_id: data.driver_id,
        bus_id: data.bus_id,
        scheduler_date: data.schedule_date,
        route_id: data.route_id,
      },
    ])
    .select()
    .single();
  if (newSchedule_error) {
    throw new Error("Lỗi không thể insert new Schedule vào bảng");
  }
  if (!newSchedule) {
    return [];
  }
  return newSchedule;
}

//Lấy tất cả schedules
function formatTime(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "N/A";
  }
}
export async function getAllSchedule(filter?: {
  date: string;
  driver_id: number;
  bus_id: number;
  route_id: number;
}) {
  let q = supabase
    .from("schedule")
    .select(
      `* bus (
        bus_id,
        license_plate_number
      ),
      routes (
        route_id,
        route_name
      ),
      account:driver_id (
        user_id,
        user_name
      )`
    )
    .order("schedule_date", { ascending: false });
  if (filter?.date) {
    q = q.eq("schedule_date", filter.date);
  }
  if (filter?.driver_id) {
    q = q.eq("driver_id", filter.driver_id);
  }
  if (filter?.bus_id) {
    q = q.eq("bus_id", filter.bus_id);
  }
  if (filter?.route_id) {
    q = q.eq("route_id", filter.route_id);
  }
  const { data, error } = await q;
  if (error) throw new Error(error.message);

  const scheduleWithStatus = await Promise.all(
    (data || []).map(async (schedule: any) => {
      const status = await calculateStatus(
        schedule.bus_id,
        schedule.schedule_date
      );

      const { data: trackingData } = await supabase
        .from("tracking_realtime")
        .select("timestamp")
        .eq("bus_id", schedule.bus_id)
        .gte("timestamp", `${schedule.schedule_date}T00:00:00`)
        .order("timestamp", { ascending: true })
        .limit(1);
      const firstTracking = trackingData?.[0];
      return {
        schedule_key: `${schedule.driver_id}-${schedule.bus_id}-${schedule.route_id}-${schedule.schedule_date}`,
        driver_id: schedule.driver_id,
        driver_name: schedule.account?.user_name || "Unknown",
        bus_id: schedule.bus_id,
        bus_number: schedule.bus?.license_plate_number || "Unknown",
        route_id: schedule.route_id,
        route_name: schedule.routes?.route_name || "Unknown",
        schedule_date: schedule.schedule_date,
        time: firstTracking?.timestamp
          ? formatTime(firstTracking.timestamp)
          : "N/A",
        status: status,
        is_active: status === "in_progress",
      };
    })
  );
  return scheduleWithStatus;
}
