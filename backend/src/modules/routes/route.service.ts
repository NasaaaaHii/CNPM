import { pick } from "zod/mini";
import supabase from "../../config/supabaseClient.js";

export const getAllRoutes = async () => {
    const { data, error } = await supabase
        .from('routes')
        .select(`
            route_id,
            route_name,
            status,
            is_delete,
            routes_detail (
                pickup_point_id,
                pickup_point (
                    students (count)
                )
            ) 
        `)
        .is('is_delete', false)
        .order('route_id', { ascending: true });

    if (error) {
        throw new Error(`Error fetching routes: ${error.message}`);
    }

    const result = (data || []).map((route: any) => {
        const details = route.routes_detail || [];
        const totalPoints = Array.isArray(details) ? details.length : 0;
        const totalStudents = Array.isArray(details)
            ? details.reduce((sum: number, detail: any) => {
                const studentsAgg = detail.pickup_point?.students;
                const count = Array.isArray(studentsAgg)
                    ? (studentsAgg[0]?.count ?? 0)
                    : (typeof studentsAgg === "number" ? studentsAgg : 0);
                return sum + (count || 0);
            }, 0)
            : 0;
        const pickupPointIds = Array.isArray(details) 
            ? details.map((d: any) => d.pickup_point_id) 
            : [];

        return {
            route_id: route.route_id,
            route_name: route.route_name,
            status: route.status,
            total_points: totalPoints,
            total_students: totalStudents,
            pickup_points: pickupPointIds,
        };
    });

    return result;
}

export const addRoute = async (routeData : Partial<{route_name : string, status: string, pickup_points: number[]}>) => {
    const { data: dataRoute, error: errorRoute } = await supabase
        .from('routes')
        .insert([{
            route_name : routeData.route_name,
            status : routeData.status
        }]).select().single();
    if (errorRoute) {
        return {
          success: false,
          message: errorRoute.message,
        };
    }

    routeData.pickup_points?.forEach(async (pickupPointId) => {
        const { data: dataRouteDetail, error: errorRouteDetail } = await supabase
            .from('routes_detail')
            .insert([{
                pickup_point_id: pickupPointId,
                route_id: dataRoute.route_id
            }]).select().single();
        if (errorRouteDetail) {
            return {
            success: false,
            message: errorRouteDetail.message,
            };
        }
    })
    return dataRoute;
}

export const deleteRoute = async (route_id: number) => {
    const {data, error} = await supabase
        .from('routes')
        .update({ is_delete: true})
        .eq('route_id', route_id);
    if (error) {
        throw new Error(`Error deleting route: ${error.message}`);
    }
    return data;
}
