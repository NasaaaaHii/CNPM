import { Router } from "express";
import {
  login,
  getCurrentUser,
  register,
  logout,
} from "./auth.controller.js";
import {
  authenticateToken,
  authorizeRoles,
} from "../../core/middlewares/auth.middleware.js";

const router = Router();

/**
 * @route   POST /api/auth/login
 * @desc    Đăng nhập
 * @access  Public
 */
router.post("/login", login);

/**
 * @route   POST /api/auth/register
 * @desc    Đăng ký tài khoản mới (chỉ admin)
 * @access  Private (Admin only)
 */
router.post("/register", authenticateToken, authorizeRoles("admin"), register);

/**
 * @route   GET /api/auth/me
 * @desc    Lấy thông tin user hiện tại
 * @access  Private
 */
router.get("/me", authenticateToken, getCurrentUser);

/**
 * @route   POST /api/auth/logout
 * @desc    Đăng xuất
 * @access  Private
 */
router.post("/logout", authenticateToken, logout);

export default router;
