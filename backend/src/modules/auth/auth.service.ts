import supabase from "../../config/supabaseClient.js";

// Types cho authentication
export interface LoginRequest {
  username: string; // Changed from email to username
  password: string;
  accountType: "admin" | "driver" | "parent";
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    user: any;
    token?: string;
    accountType: string;
  };
}

/**
 * Mapping account type names
 */
const ACCOUNT_TYPE_MAP: { [key: string]: string } = {
  admin: "AdminAccount",
  driver: "DriverAccount",
  parent: "ParentAccount",
};

/**
 * Xác thực người dùng dựa trên username, password và loại tài khoản
 */
export async function authenticateUser(
  loginRequest: LoginRequest
): Promise<LoginResponse> {
  try {
    const { username, password, accountType } = loginRequest;

    // 1. Kiểm tra input
    if (!username || !password || !accountType) {
      return {
        success: false,
        message: "Username, password và loại tài khoản là bắt buộc",
      };
    }

    // 2. Map account type to database value
    const dbAccountType = ACCOUNT_TYPE_MAP[accountType];
    if (!dbAccountType) {
      return {
        success: false,
        message: "Loại tài khoản không hợp lệ",
      };
    }

    // 3. Lấy thông tin loại tài khoản
    const { data: accountTypeData, error: accountTypeError } = await supabase
      .from("type_account")
      .select("type_account_id, type_account_name")
      .eq("type_account_name", dbAccountType)
      .single();

    if (accountTypeError || !accountTypeData) {
      return {
        success: false,
        message: "Loại tài khoản không hợp lệ",
      };
    }

    // 4. Tìm user với username và account type từ bảng account
    const { data: userData, error: userError } = await supabase
      .from("account")
      .select(
        `
        user_id,
        user_name,
        password,
        type_account_id,
        type_account (
          type_account_name
        )
      `
      )
      .eq("user_name", username)
      .eq("type_account_id", accountTypeData.type_account_id)
      .single();

    if (userError || !userData) {
      return {
        success: false,
        message: "Username hoặc mật khẩu không chính xác",
      };
    }

    // 5. Kiểm tra password (plain text comparison - SHOULD USE BCRYPT IN PRODUCTION!)
    // NOTE: Database hiện tại lưu password plain text
    if (userData.password !== password) {
      return {
        success: false,
        message: "Username hoặc mật khẩu không chính xác",
      };
    }

    // 6. Lấy thông tin chi tiết dựa trên loại tài khoản
    let detailedUserInfo = {};

    if (accountType === "parent") {
      // Lấy thông tin học sinh của phụ huynh
      const { data: studentData } = await supabase
        .from("students")
        .select("*")
        .eq("parent_id", userData.user_id);

      detailedUserInfo = {
        students: studentData || [],
      };
    } else if (accountType === "driver") {
      // Lấy thông tin xe và lịch trình của tài xế
      const { data: scheduleData } = await supabase
        .from("schedule")
        .select(
          `
          *,
          bus (
            bus_id,
            license_plate_number,
            number_of_seats
          ),
          routes (
            route_id,
            route_name
          )
        `
        )
        .eq("driver_id", userData.user_id);

      detailedUserInfo = {
        schedules: scheduleData || [],
      };
    }

    // 7. Xóa password khỏi response
    const { password: _, ...userWithoutPassword } = userData;

    // 8. Trả về kết quả thành công
    return {
      success: true,
      message: "Đăng nhập thành công",
      data: {
        user: {
          ...userWithoutPassword,
          ...detailedUserInfo,
        },
        accountType: accountType,
      },
    };
  } catch (error: any) {
    console.error("Authentication error:", error);
    return {
      success: false,
      message: "Đã xảy ra lỗi trong quá trình đăng nhập",
    };
  }
}

/**
 * Lấy thông tin user theo ID
 */
export async function getUserById(
  userId: number,
  accountType: string
): Promise<any> {
  try {
    const dbAccountType = ACCOUNT_TYPE_MAP[accountType];

    const { data: userData, error } = await supabase
      .from("account")
      .select(
        `
        user_id,
        user_name,
        type_account_id,
        type_account (
          type_account_name
        )
      `
      )
      .eq("user_id", userId)
      .single();

    if (error || !userData) {
      return null;
    }

    // Lấy thông tin chi tiết dựa trên loại tài khoản
    let detailedInfo = {};

    if (accountType === "parent") {
      const { data: studentData } = await supabase
        .from("students")
        .select("*")
        .eq("parent_id", userId);

      detailedInfo = {
        students: studentData || [],
      };
    } else if (accountType === "driver") {
      const { data: scheduleData } = await supabase
        .from("schedule")
        .select(
          `
          *,
          bus (*),
          routes (*)
        `
        )
        .eq("driver_id", userId);

      detailedInfo = {
        schedules: scheduleData || [],
      };
    }

    return {
      ...userData,
      ...detailedInfo,
    };
  } catch (error) {
    console.error("Get user error:", error);
    return null;
  }
}
