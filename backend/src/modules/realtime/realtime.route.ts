import { Router } from "express";
import { createTracking,getCurrentPositionHandler,getAllCurrentPositionsHandler, getStudentInRouteHandler } from "./realtime.controller.js";

const router = Router()

router.put("/realtime",createTracking)

router.get("/realtime/:busId/current", getCurrentPositionHandler)

router.get("/realtime/all", getAllCurrentPositionsHandler)

router.get("/realtime/:busId/students", getStudentInRouteHandler)


export default router;