import supabase from "../../config/supabaseClient.js";

async function overviewService() {
  //Hiển thị dữ liệu trên card:
  try {
    const [buses, drivers, routes, students] = await Promise.all([
      supabase.from("bus").select("*", { head: true, count: "exact" }),
      supabase
        .from("account")
        .select("*", { head: true, count: "exact" })
        .eq("type_account_id", 2),
      supabase.from("students").select("*", { head: true, count: "exact" }),
      supabase.from("routes").select("*", { head: true, count: "exact" }),
    ]);

    return {
      total_buses: buses.count ?? 0,
      total_drivers: drivers.count ?? 0,
      total_routes: routes.count ?? 0,
      total_students: students.count ?? 0,
    };
  } catch (err) {
    console.log("overview service error: ", err);
    return {
      total_buses: 0,
      total_drivers: 0,
      total_routes: 0,
      total_students: 0,
    };
  }
}

export default overviewService;
