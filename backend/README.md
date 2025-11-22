# Smart Bus System - Backend Documentation

## Tổng Quan

Backend của hệ thống Smart Bus System được xây dựng với Node.js, TypeScript, Express và Supabase (PostgreSQL). Hệ thống quản lý việc vận hành xe buýt học đường, theo dõi học sinh và giao tiếp giữa tài xế, phụ huynh và quản trị viên.

---

## XEM DỮ LIỆU DATABASE

### Cách nhanh nhất

```bash
# Cập nhật dữ liệu mới nhất từ database
npm run db:fetch

# Sau đó mở file DATABASE_DATA.md để xem dữ liệu
```

File `DATABASE_DATA.md` chứa:

- Dữ liệu thực tế từ tất cả các bảng
- Hướng dẫn fetch dữ liệu thủ công trên terminal
- Tự động cập nhật timestamp

---

## Database Schema & Models

### 1. **type_account** - Loại Tài Khoản

Quản lý các loại tài khoản trong hệ thống.

```typescript
interface TypeAccount {
  type_account_id: number; // Primary Key
  type_account_name: string; // 'AdminAccount' | 'DriverAccount' | 'ParentAccount'
}
```

**Mục đích:** Phân loại người dùng để phân quyền truy cập.

---

### 2. **account** - Tài Khoản Người Dùng

Lưu thông tin đăng nhập và liên kết với loại tài khoản.

```typescript
interface Account {
  user_id: number; // Primary Key
  user_name: string; // Username cho đăng nhập
  password: string; // Mật khẩu (plain text - cần hash trong production)
  type_account_id: number; // Foreign Key -> type_account
  type_account?: TypeAccount; // Relation
}
```

**Mục đích:** Quản lý xác thực và phân quyền người dùng.

** Lưu ý:** Password hiện đang lưu plain text, cần implement bcrypt/hashing trong production.

---

### 3. **users** - Thông Tin Người Dùng

Lưu thông tin cá nhân chi tiết của người dùng.

```typescript
interface User {
  user_id: number; // Primary Key, Foreign Key -> account
  full_name: string; // Họ và tên
  email?: string; // Email liên hệ
  phone?: string; // Số điện thoại
  address?: string; // Địa chỉ
  created_at?: Date; // Ngày tạo
  updated_at?: Date; // Ngày cập nhật
}
```

**Mục đích:** Lưu trữ thông tin chi tiết về người dùng (admin, driver, parent).

---

### 4. **students** - Học Sinh

Quản lý thông tin học sinh được đưa đón bằng xe buýt.

```typescript
interface Student {
  student_id: number; // Primary Key
  student_name: string; // Tên học sinh
  parent_id: number; // Foreign Key -> users (parent)
  grade?: string; // Lớp học
  date_of_birth?: Date; // Ngày sinh
  address?: string; // Địa chỉ nhà
  pickup_address?: string; // Địa chỉ đón
  dropoff_address?: string; // Địa chỉ trả
  photo_url?: string; // Ảnh học sinh
  created_at?: Date;
}
```

**Mục đích:** Quản lý danh sách học sinh và liên kết với phụ huynh.

---

### 5. **parents** - Phụ Huynh

Thông tin chi tiết về phụ huynh (mở rộng từ users).

```typescript
interface Parent {
  parent_id: number; // Primary Key, Foreign Key -> users
  emergency_contact?: string; // Số điện thoại khẩn cấp
  relationship?: string; // Quan hệ với học sinh
  notification_enabled?: boolean; // Bật/tắt thông báo
}
```

**Mục đích:** Lưu thông tin bổ sung của phụ huynh.

---

### 6. **drivers** - Tài Xế

Thông tin chi tiết về tài xế xe buýt.

```typescript
interface Driver {
  driver_id: number; // Primary Key, Foreign Key -> users
  license_number: string; // Số bằng lái xe
  license_expiry?: Date; // Ngày hết hạn bằng lái
  years_of_experience?: number; // Số năm kinh nghiệm
  status?: string; // 'active' | 'inactive' | 'on_leave'
}
```

**Mục đích:** Quản lý thông tin tài xế và giấy phép lái xe.

---

### 7. **buses** - Xe Buýt

Quản lý danh sách xe buýt trong hệ thống.

```typescript
interface Bus {
  bus_id: number; // Primary Key
  license_plate_number: string; // Biển số xe (unique)
  number_of_seats: number; // Số ghế
  manufacture_year?: number; // Năm sản xuất
  model?: string; // Model xe
  status?: string; // 'active' | 'maintenance' | 'retired'
  gps_device_id?: string; // ID thiết bị GPS
  created_at?: Date;
}
```

**Mục đích:** Quản lý thông tin xe và thiết bị định vị.

---

### 8. **routes** - Tuyến Đường

Định nghĩa các tuyến đường xe buýt.

```typescript
interface Route {
  route_id: number; // Primary Key
  route_name: string; // Tên tuyến (VD: "Route A - Morning")
  description?: string; // Mô tả tuyến
  distance_km?: number; // Khoảng cách (km)
  estimated_duration?: number; // Thời gian ước tính (phút)
  is_active?: boolean; // Tuyến có đang hoạt động
  created_at?: Date;
}
```

**Mục đích:** Quản lý các tuyến đường xe buýt chạy.

---

### 9. **bus_stops** - Điểm Dừng

Danh sách các điểm dừng xe buýt.

```typescript
interface BusStop {
  stop_id: number; // Primary Key
  stop_name: string; // Tên điểm dừng
  address: string; // Địa chỉ
  latitude: number; // Vĩ độ GPS
  longitude: number; // Kinh độ GPS
  description?: string; // Mô tả thêm
  created_at?: Date;
}
```

**Mục đích:** Lưu trữ vị trí các điểm dừng trên các tuyến.

---

### 10. **route_stops** - Điểm Dừng Trên Tuyến

Liên kết tuyến đường với các điểm dừng và thứ tự.

```typescript
interface RouteStop {
  route_stop_id: number; // Primary Key
  route_id: number; // Foreign Key -> routes
  stop_id: number; // Foreign Key -> bus_stops
  stop_order: number; // Thứ tự điểm dừng (1, 2, 3...)
  estimated_arrival_time?: string; // Thời gian đến dự kiến (HH:MM)
  distance_from_previous?: number; // Khoảng cách từ điểm trước (km)
}
```

**Mục đích:** Xác định trình tự các điểm dừng trên mỗi tuyến.

---

### 11. **schedule** - Lịch Trình

Lịch trình hoạt động của xe buýt.

```typescript
interface Schedule {
  schedule_id: number; // Primary Key
  bus_id: number; // Foreign Key -> buses
  route_id: number; // Foreign Key -> routes
  driver_id: number; // Foreign Key -> drivers/users
  schedule_date: Date; // Ngày chạy
  departure_time: string; // Giờ khởi hành (HH:MM)
  arrival_time?: string; // Giờ đến dự kiến
  status?: string; // 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
  notes?: string; // Ghi chú
  created_at?: Date;
}
```

**Mục đích:** Quản lý lịch trình hàng ngày của xe buýt.

---

### 12. **student_routes** - Học Sinh & Tuyến Đường

Gán học sinh vào các tuyến đường cụ thể.

```typescript
interface StudentRoute {
  student_route_id: number; // Primary Key
  student_id: number; // Foreign Key -> students
  route_id: number; // Foreign Key -> routes
  pickup_stop_id: number; // Foreign Key -> bus_stops (điểm đón)
  dropoff_stop_id: number; // Foreign Key -> bus_stops (điểm trả)
  is_active?: boolean; // Học sinh có đang sử dụng tuyến này
  created_at?: Date;
}
```

**Mục đích:** Liên kết học sinh với tuyến đường và điểm đón/trả.

---

### 13. **tracking** - Theo Dõi Vị Trí

Lưu trữ vị trí GPS real-time của xe buýt.

```typescript
interface Tracking {
  tracking_id: number; // Primary Key
  bus_id: number; // Foreign Key -> buses
  schedule_id?: number; // Foreign Key -> schedule
  latitude: number; // Vĩ độ
  longitude: number; // Kinh độ
  speed?: number; // Tốc độ (km/h)
  heading?: number; // Hướng di chuyển (độ)
  timestamp: Date; // Thời điểm ghi nhận
  accuracy?: number; // Độ chính xác GPS (m)
}
```

**Mục đích:** Theo dõi vị trí xe buýt theo thời gian thực.

---

### 14. **attendance** - Điểm Danh

Ghi nhận việc học sinh lên/xuống xe.

```typescript
interface Attendance {
  attendance_id: number; // Primary Key
  student_id: number; // Foreign Key -> students
  schedule_id: number; // Foreign Key -> schedule
  pickup_time?: Date; // Thời gian đón
  dropoff_time?: Date; // Thời gian trả
  status: string; // 'picked_up' | 'dropped_off' | 'absent' | 'late'
  pickup_stop_id?: number; // Foreign Key -> bus_stops
  dropoff_stop_id?: number; // Foreign Key -> bus_stops
  notes?: string; // Ghi chú
  created_at?: Date;
}
```

**Mục đích:** Theo dõi việc đưa đón học sinh và điểm danh.

---

### 15. **notifications** - Thông Báo

Gửi thông báo cho người dùng.

```typescript
interface Notification {
  notification_id: number; // Primary Key
  user_id: number; // Foreign Key -> users (người nhận)
  title: string; // Tiêu đề thông báo
  message: string; // Nội dung
  type: string; // 'info' | 'warning' | 'alert' | 'success'
  is_read: boolean; // Đã đọc chưa
  related_entity_type?: string; // 'student' | 'bus' | 'schedule'
  related_entity_id?: number; // ID của entity liên quan
  created_at: Date; // Thời gian tạo
}
```

**Mục đích:** Hệ thống gửi thông báo tự động cho phụ huynh/tài xế/admin.

---

## Authentication Models

### LoginRequest

```typescript
interface LoginRequest {
  username: string; // Tên đăng nhập
  password: string; // Mật khẩu
  accountType: "admin" | "driver" | "parent"; // Loại tài khoản
}
```

### LoginResponse

```typescript
interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    user: any; // Thông tin user
    token?: string; // JWT token (sẽ implement)
    accountType: string; // Loại tài khoản
  };
}
```

## Cấu Trúc Backend

```
backend/
├── src/
│   ├── config/
│   │   └── supabaseClient.ts      # Khởi tạo Supabase client
│   ├── controllers/
│   │   └── auth.controller.ts     # Controller xử lý authentication
│   ├── services/
│   │   └── auth.service.ts        # Business logic cho auth
│   ├── middlewares/
│   │   └── auth.middleware.ts     # JWT verification, role-based access
│   ├── routes/
│   │   └── auth.routes.ts         # Định nghĩa API endpoints
│   └── server.ts                  # Entry point
├── .env                           # Environment variables
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
└── nodemon.json                   # Development config
```

---

## API Endpoints (Hiện Tại)

### Authentication

#### `POST /api/auth/login`

Đăng nhập người dùng.

**Request Body:**

```json
{
  "username": "admin01",
  "password": "admin123",
  "accountType": "admin"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Đăng nhập thành công",
  "data": {
    "user": {
      "user_id": 1,
      "user_name": "admin01",
      "type_account_id": 1,
      "type_account": {
        "type_account_name": "AdminAccount"
      }
    },
    "accountType": "admin"
  }
}
```

#### `POST /api/auth/validate`

Xác thực token (JWT - sẽ implement).

#### `GET /api/auth/me`

Lấy thông tin user hiện tại (requires authentication).

---

## Account Type Mapping

```typescript
const ACCOUNT_TYPE_MAP = {
  admin: "AdminAccount",
  driver: "DriverAccount",
  parent: "ParentAccount",
};
```

---

---

## Environment Variables

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-publishable-key

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT (planned)
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
```

```
HiveMQ cloud= https://console.hivemq.cloud/clusters/b8c1293f22204f0e896ddf9c00cf9c93
```

## 👨‍💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---
