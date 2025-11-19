import { Router } from "express";
import { getOverview } from "./overview.controller.js";

const router = Router()

router.get("/overview", getOverview)

export default router;