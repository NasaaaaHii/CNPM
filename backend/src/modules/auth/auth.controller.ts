import type { Request, Response } from "express";
import {
  authenticateUser,
  getUserById,
  type LoginRequest,
} from "./auth.service.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";
const JWT_EXPIRES_IN = "7d";

/**
 * POST /api/auth/login
 * Đăng nhập với username, password và loại tài khoản
 */
export async function login(req: Request, res: Response) {
  try {
    const loginRequest: LoginRequest = req.body;

    // Xác thực người dùng
    const result = await authenticateUser(loginRequest);

    if (!result.success) {
      return res.status(401).json({
        success: false,
        message: result.message,
      });
    }

    // Tạo JWT token
    const token = jwt.sign(
      {
        userId: result.data!.user.user_id,
        username: result.data!.user.user_name,
        accountType: result.data!.accountType,
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      }
    );

    // Trả về response với token
    return res.status(200).json({
      success: true,
      message: result.message,
      data: {
        user: result.data!.user,
        token: token,
        accountType: result.data!.accountType,
      },
    });
  } catch (error: any) {
    console.error("Login controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
}

/**
 * GET /api/auth/me
 * Lấy thông tin user hiện tại (requires authentication)
 */
export async function getCurrentUser(req: Request, res: Response) {
  try {
    // Lấy user từ request (đã được set bởi middleware)
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Không xác thực",
      });
    }

    // Lấy thông tin đầy đủ của user
    const userData = await getUserById(user.userId, user.accountType);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy người dùng",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        user: userData,
      },
    });
  } catch (error: any) {
    console.error("Get current user error:", error);
    return res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
}

/**
 * POST /api/auth/register
 * Đăng ký tài khoản mới (admin only) - Coming soon
 */
export async function register(req: Request, res: Response) {
  return res.status(501).json({
    success: false,
    message: "Chức năng đăng ký chưa được triển khai",
  });
}

/**
 * POST /api/auth/logout
 * Đăng xuất (client-side xóa token)
 */
export async function logout(req: Request, res: Response) {
  return res.status(200).json({
    success: true,
    message: "Đăng xuất thành công",
  });
}
