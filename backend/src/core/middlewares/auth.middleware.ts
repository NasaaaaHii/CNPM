import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

interface JWTPayload {
  userId: number;
  username: string;
  accountType: string;
}

/**
 * Middleware xác thực JWT token
 */
export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Lấy token từ header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy token xác thực",
      });
    }

    // Verify token
    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token không hợp lệ hoặc đã hết hạn",
        });
      }

      // Lưu thông tin user vào request
      (req as any).user = decoded as JWTPayload;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi xác thực",
    });
  }
}

/**
 * Middleware kiểm tra role
 */
export function authorizeRoles(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Không xác thực",
      });
    }

    if (!allowedRoles.includes(user.accountType)) {
      return res.status(403).json({
        success: false,
        message: "Bạn không có quyền truy cập",
      });
    }

    next();
  };
}
