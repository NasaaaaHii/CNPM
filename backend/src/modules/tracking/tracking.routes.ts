import { Router } from "express";
import {
  createTracking,
  getCurrentPositionHandler,
  getAllCurrentPositionsHandler,
} from "./tracking.controller.js";
import { authenticateToken } from "../../core/middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   POST /api/tracking
 * @desc    GPS device gửi vị trí
 * @access  Private
 */
router.post("/", createTracking);

/**
 * @route   GET/api/tracking/:busId/current
 * @desc    lấy vị trí hiện tại của bus
 * @access  Private
 */

router.get("/:busId/current", authenticateToken, getCurrentPositionHandler);
/**
 * @route   GET /api/tracking/all
 * @desc    Lấy vị trí tất cả bus (admin only)
 * @access  Private (Admin only)
 */
router.get("/all", authenticateToken, getAllCurrentPositionsHandler);

export default router;
