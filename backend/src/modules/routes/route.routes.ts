import { Router } from "express";
import * as routeController from "./route.controller.js";

const router = Router();

router.get("/", routeController.getRoutes);
router.post("/", routeController.addRoute);
router.delete("/:id", routeController.deleteRoute);

export default router;