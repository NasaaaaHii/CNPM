# Scripts - Công Cụ Tự Động Hóa

Thư mục này chứa các script tự động hóa cho việc cài đặt và quản lý Jenkins CI/CD.

## Các Script Có Sẵn

### 1. setup-jenkins.sh

**Mục đích**: Cài đặt và cấu hình Jenkins tự động

**Tính năng**:

- Cài đặt Jenkins với Docker
- Cài đặt plugins tự động
- Tích hợp GitHub
- Cấu hình webhook
- Thiết lập bảo mật ban đầu

**Cách sử dụng**:

```bash
./scripts/setup-jenkins.sh
```

**Sau khi chạy**:

- Jenkins chạy tại: http://localhost:8080
- Mật khẩu admin được lưu trong file `jenkins_admin_password.txt`
- Pipeline tự động được tạo cho dự án

### 2. manage-jenkins.sh

**Mục đích**: Quản lý vòng đời Jenkins

**Tính năng**:

- Start/stop Jenkins container
- Xem logs realtime
- Backup/restore dữ liệu Jenkins
- Kiểm tra trạng thái container
- Khởi động lại khi cần

**Cách sử dụng**:

```bash
./scripts/manage-jenkins.sh [lệnh]

Các lệnh:
  start    - Khởi động Jenkins
  stop     - Dừng Jenkins
  restart  - Khởi động lại Jenkins
  status   - Kiểm tra trạng thái
  logs     - Xem logs
  backup   - Tạo backup
  restore  - Khôi phục từ backup
```

**Ví dụ**:

```bash
# Khởi động Jenkins
./scripts/manage-jenkins.sh start

# Xem logs
./scripts/manage-jenkins.sh logs

# Tạo backup
./scripts/manage-jenkins.sh backup

# Kiểm tra trạng thái
./scripts/manage-jenkins.sh status
```

### 3. build-and-deploy.sh

**Mục đích**: Tự động hóa build và deploy

**Tính năng**:

- Build Docker images cho frontend và backend
- Deploy containers
- Health checks tự động
- Rollback khi gặp lỗi
- Logs chi tiết

**Cách sử dụng**:

```bash
./scripts/build-and-deploy.sh [môi-trường]

Môi trường:
  dev      - Development (Phát triển)
  staging  - Staging (Kiểm thử)
  prod     - Production (Sản xuất)
```

**Ví dụ**:

```bash
# Deploy lên môi trường development
./scripts/build-and-deploy.sh dev

# Deploy lên staging
./scripts/build-and-deploy.sh staging

# Deploy lên production (cần xác nhận)
./scripts/build-and-deploy.sh prod
```

## Hướng Dẫn Sử Dụng Nhanh

### Lần Đầu Tiên Sử Dụng

```bash
# Bước 1: Cấp quyền thực thi cho các scripts
chmod +x scripts/*.sh

# Bước 2: Cài đặt Jenkins
./scripts/setup-jenkins.sh

# Bước 3: Đợi Jenkins khởi động (~2-3 phút)
# Truy cập: http://localhost:8080

# Bước 4: Lấy mật khẩu admin
cat jenkins_admin_password.txt

# Bước 5: Đăng nhập Jenkins và hoàn tất cài đặt
```

### Sử Dụng Hàng Ngày

```bash
# Khởi động Jenkins
./scripts/manage-jenkins.sh start

# Kiểm tra trạng thái
./scripts/manage-jenkins.sh status

# Deploy ứng dụng
./scripts/build-and-deploy.sh dev

# Xem logs nếu có lỗi
./scripts/manage-jenkins.sh logs
```

### Backup và Restore

```bash
# Tạo backup trước khi update
./scripts/manage-jenkins.sh backup

# Restore nếu cần
./scripts/manage-jenkins.sh restore
```

## Chi Tiết Về Jenkins Pipeline

### Jenkinsfile - 13 Stages Tự Động

1. **Checkout** - Lấy code từ GitHub
2. **Environment Info** - Hiển thị thông tin môi trường
3. **Install Dependencies** - Cài đặt packages
4. **Code Linting** - Kiểm tra code quality
5. **Build Frontend** - Build Next.js
6. **Build Backend** - Build Express.js
7. **Run Tests** - Chạy unit tests
8. **Security Scan** - Quét lỗ hổng bảo mật
9. **Build Docker Images** - Tạo Docker images
10. **Deploy** - Deploy containers
11. **Health Check** - Kiểm tra ứng dụng
12. **Smoke Tests** - Tests cơ bản
13. **Notify** - Gửi thông báo (email/Slack)

### Trigger Tự Động

Pipeline tự động chạy khi:

- 🔹 Push code lên GitHub
- 🔹 Tạo Pull Request
- 🔹 Merge vào branch `main` hoặc `hai`
- 🔹 Theo lịch (nếu cấu hình)

## 🔧 Yêu Cầu Hệ Thống

### Phần Mềm Cần Thiết

| Phần mềm       | Version | Kiểm tra                 |
| -------------- | ------- | ------------------------ |
| Docker         | 20.x+   | `docker -v`              |
| Docker Compose | 1.29+   | `docker compose version` |
| Bash           | 4.x+    | `bash --version`         |
| Git            | 2.x+    | `git --version`          |

### Port Sử Dụng

| Service       | Port  | Mô tả                       |
| ------------- | ----- | --------------------------- |
| Jenkins       | 8080  | Jenkins Web UI              |
| Jenkins Agent | 50000 | Jenkins agent communication |
| Frontend      | 3000  | Next.js app                 |
| Backend       | 5000  | Express API                 |

## Xử Lý Sự Cố

### Jenkins Không Khởi Động

```bash
# Kiểm tra logs
docker logs jenkins

# Xóa container cũ và tạo mới
docker rm -f jenkins
./scripts/setup-jenkins.sh
```

### Port Đã Được Sử Dụng

```bash
# Tìm process sử dụng port 8080
sudo lsof -i :8080

# Hoặc thay đổi port trong setup-jenkins.sh
# Sửa dòng: -p 8080:8080 thành -p 8081:8080
```

### Build Thất Bại

```bash
# Kiểm tra logs chi tiết
./scripts/manage-jenkins.sh logs

# Xem logs từ Jenkins UI
http://localhost:8080/job/smart-bus-system/

# Chạy build thủ công để debug
cd frontend && npm run build
cd backend && npm run build
```

### Quên Mật Khẩu Admin

```bash
# Mật khẩu được lưu trong container
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

# Hoặc trong file
cat jenkins_admin_password.txt
```

## Tài Liệu Tham Khảo

- [Jenkins Documentation](https://www.jenkins.io/doc/)
- [Docker Documentation](https://docs.docker.com/)
- [Jenkinsfile Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/)
- [GitHub Webhooks](https://docs.github.com/en/webhooks)

## Tips và Best Practices

### 1. Backup Thường Xuyên

```bash
# Tạo backup hàng tuần
./scripts/manage-jenkins.sh backup
```

### 2. Giữ Jenkins Luôn Cập Nhật

- Vào Jenkins UI > Manage Jenkins > System Configuration
- Kiểm tra updates định kỳ

### 3. Monitor Logs

```bash
# Theo dõi logs realtime
./scripts/manage-jenkins.sh logs
```

### 4. Tối Ưu Build Time

- Cache node_modules trong Docker
- Sử dụng multi-stage builds
- Parallel execution trong Jenkinsfile
