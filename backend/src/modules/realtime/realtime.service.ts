import {
  handleTracking,
  getCurrrentPosition,
  getAllCurrentPos,
  getStudentWithPosition
} from "../tracking/tracking.service.js";

export async function createTrackingRecord(payload: {
  bus_id: number;
  latitude: number;
  longitude: number;
}) {
    await handleTracking(payload)
    return true;
}

export async function fetchCurrentPosition(busdId: number) {
    return await getCurrrentPosition(busdId)
}

export async function fetchAllCurrentPositions() {
    return await getAllCurrentPos();
}

export async function fetchAllStudentInRoute(busId: number) {
  return await getStudentWithPosition(busId)
}
