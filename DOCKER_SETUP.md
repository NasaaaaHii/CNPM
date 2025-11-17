# 🐳 Docker Setup Guide - Smart Bus System

> **Hướng dẫn chạy toàn bộ hệ thống bao gồm Jenkins với Docker Compose**

---

## 📋 Yêu cầu hệ thống

### Phần mềm cần thiết:

| Phần mềm | Version | Link tải |
|----------|---------|----------|
| Docker Desktop | 20.x+ | [Download](https://www.docker.com/products/docker-desktop/) |
| Docker Compose | 2.x+ | Đi kèm Docker Desktop |

### Kiểm tra cài đặt:

```bash
docker --version
docker compose version
```

---

## 🚀 Cách chạy dự án

### **Phương pháp 1: Chạy Development Mode (Khuyên dùng)**

```bash
# 1. Clone project (nếu chưa có)
git clone https://github.com/NasaaaaHii/CNPM.git
cd CNPM

# 2. Tạo file .env cho backend
cd backend
cp .env.example .env  # Hoặc tạo file .env mới
# Chỉnh sửa .env với thông tin database của bạn
cd ..

# 3. Chạy tất cả services (Jenkins + Backend + Frontend)
docker compose -f docker-compose.dev.yml up -d

# 4. Xem logs
docker compose -f docker-compose.dev.yml logs -f
```

### **Phương pháp 2: Chạy Production Mode**

```bash
docker compose up -d
```

---

## 📦 Services được chạy

| Service | Port | URL | Mô tả |
|---------|------|-----|-------|
| **Jenkins** | 8081 | http://localhost:8081 | CI/CD Server |
| **Backend** | 5000 | http://localhost:5000 | Express API |
| **Frontend** | 3000 | http://localhost:3000 | Next.js App |

---

## 🔐 Lấy mật khẩu Jenkins lần đầu

### **Cách 1: Từ container logs**
```bash
docker logs jenkins_dev 2>&1 | grep -A 5 "Please use the following password"
```

### **Cách 2: Từ file trong container**
```bash
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword
```

### **Cách 3: Lưu vào file**
```bash
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword > jenkins_password.txt
cat jenkins_password.txt
```

---

## ⚙️ Cấu hình Jenkins lần đầu

### **Bước 1: Mở Jenkins**
1. Truy cập: http://localhost:8081
2. Nhập mật khẩu admin (lấy từ bước trên)

### **Bước 2: Cài đặt Plugins**
Chọn **"Install suggested plugins"** hoặc chọn các plugins sau:

- ✅ Git Plugin
- ✅ GitHub Plugin
- ✅ Docker Plugin
- ✅ Docker Pipeline
- ✅ NodeJS Plugin
- ✅ Blue Ocean (Optional - UI đẹp hơn)
- ✅ Pipeline Plugin
- ✅ Workspace Cleanup Plugin

### **Bước 3: Tạo Admin User**
- Username: `admin`
- Password: `admin123` (hoặc password của bạn)
- Email: email của bạn

### **Bước 4: Cấu hình NodeJS**
1. Vào **Manage Jenkins** → **Tools**
2. Tìm **NodeJS installations**
3. Click **Add NodeJS**
   - Name: `NodeJS 22`
   - Version: `NodeJS 22.x.x`
   - Install automatically: ✅

### **Bước 5: Tạo Pipeline Job**
1. Click **New Item**
2. Nhập tên: `smart-bus-system`
3. Chọn **Pipeline**
4. Trong **Pipeline** section:
   - Definition: `Pipeline script from SCM`
   - SCM: `Git`
   - Repository URL: `https://github.com/NasaaaaHii/CNPM.git`
   - Branch: `*/hai` hoặc `*/main`
   - Script Path: `jenkinsfile`
5. Click **Save**

### **Bước 6: Chạy Build đầu tiên**
1. Click **Build Now**
2. Xem logs trong **Console Output**

---

## 🛠️ Các lệnh Docker hữu ích

### **Quản lý containers**

```bash
# Xem tất cả containers đang chạy
docker compose -f docker-compose.dev.yml ps

# Dừng tất cả services
docker compose -f docker-compose.dev.yml down

# Dừng và xóa volumes (CẢNH BÁO: Mất dữ liệu Jenkins)
docker compose -f docker-compose.dev.yml down -v

# Khởi động lại một service cụ thể
docker compose -f docker-compose.dev.yml restart jenkins
docker compose -f docker-compose.dev.yml restart backend
docker compose -f docker-compose.dev.yml restart frontend

# Rebuild và restart
docker compose -f docker-compose.dev.yml up -d --build
```

### **Xem logs**

```bash
# Xem logs tất cả services
docker compose -f docker-compose.dev.yml logs -f

# Xem logs một service cụ thể
docker compose -f docker-compose.dev.yml logs -f jenkins
docker compose -f docker-compose.dev.yml logs -f backend
docker compose -f docker-compose.dev.yml logs -f frontend

# Xem 100 dòng logs cuối
docker compose -f docker-compose.dev.yml logs --tail=100
```

### **Truy cập vào container**

```bash
# Vào Jenkins container
docker exec -it jenkins_dev bash

# Vào Backend container
docker exec -it backend_dev sh

# Vào Frontend container
docker exec -it frontend_dev sh
```

### **Kiểm tra tài nguyên**

```bash
# Xem tài nguyên đang sử dụng
docker stats

# Xem dung lượng Docker
docker system df

# Dọn dẹp Docker
docker system prune -a
```

---

## 🔧 Xử lý sự cố

### **Vấn đề 1: Port đã được sử dụng**

```bash
# Kiểm tra port 8081
sudo lsof -i :8081

# Hoặc trên Windows
netstat -ano | findstr :8081

# Giải pháp: Dừng service đang dùng port hoặc đổi port trong docker-compose.yml
```

### **Vấn đề 2: Jenkins không khởi động**

```bash
# Xem logs
docker logs jenkins_dev -f

# Khởi động lại
docker restart jenkins_dev

# Xóa và tạo lại
docker rm -f jenkins_dev
docker compose -f docker-compose.dev.yml up -d jenkins
```

### **Vấn đề 3: Backend/Frontend không build**

```bash
# Rebuild containers
docker compose -f docker-compose.dev.yml up -d --build backend
docker compose -f docker-compose.dev.yml up -d --build frontend

# Xóa cache và rebuild
docker compose -f docker-compose.dev.yml build --no-cache
```

### **Vấn đề 4: Jenkins không thể chạy Docker commands**

```bash
# Vào Jenkins container
docker exec -it jenkins_dev bash

# Kiểm tra Docker
docker ps

# Nếu lỗi permission, restart container
exit
docker restart jenkins_dev
```

### **Vấn đề 5: Mất mật khẩu Jenkins**

```bash
# Lấy lại mật khẩu
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword

# Hoặc reset Jenkins (MẤT DỮ LIỆU)
docker compose -f docker-compose.dev.yml down -v
docker compose -f docker-compose.dev.yml up -d
```

---

## 🌐 Chạy trên Windows

### **Lưu ý khi chạy trên Windows:**

1. **Cài Docker Desktop cho Windows**
   - Download: https://www.docker.com/products/docker-desktop/
   - Enable WSL 2

2. **Chạy PowerShell hoặc Git Bash as Administrator**

3. **Các lệnh tương tự Linux/Mac**

```powershell
# PowerShell
docker compose -f docker-compose.dev.yml up -d
docker compose -f docker-compose.dev.yml logs -f

# Lấy mật khẩu Jenkins
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword
```

4. **File paths trên Windows**
   - Sử dụng `/` thay vì `\`
   - Hoặc dùng WSL terminal

---

## 📊 Kiểm tra Health Check

```bash
# Kiểm tra Jenkins
curl http://localhost:8081

# Kiểm tra Backend
curl http://localhost:5000/health

# Kiểm tra Frontend
curl http://localhost:3000

# Hoặc dùng script
bash scripts/health-check.sh
```

---

## 🎯 Workflow Development

### **1. Làm việc hàng ngày**

```bash
# Sáng: Khởi động services
docker compose -f docker-compose.dev.yml up -d

# Làm việc với code (hot reload tự động)
# - Backend: Sửa code trong /backend
# - Frontend: Sửa code trong /frontend

# Tối: Dừng services
docker compose -f docker-compose.dev.yml down
```

### **2. Khi có code mới từ Git**

```bash
git pull origin hai
docker compose -f docker-compose.dev.yml up -d --build
```

### **3. Khi thêm dependencies mới**

```bash
# Backend
cd backend
npm install <package-name>

# Frontend
cd frontend
npm install <package-name>

# Rebuild containers
docker compose -f docker-compose.dev.yml up -d --build
```

---

## 📚 Tài liệu tham khảo

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Jenkins Docker Documentation](https://www.jenkins.io/doc/book/installing/docker/)
- [Next.js Docker](https://nextjs.org/docs/deployment#docker-image)

---

## 💡 Tips

1. **Tối ưu Performance**: 
   - Tăng RAM cho Docker Desktop (Settings → Resources)
   - Khuyên dùng: 4GB RAM, 2 CPU

2. **Hot Reload**:
   - Code changes tự động reload
   - Không cần restart containers

3. **Volumes**:
   - Jenkins data được lưu trong volume `jenkins_home_dev`
   - Không mất data khi restart container

4. **Network**:
   - Tất cả services trong cùng network `smartbus-network`
   - Services có thể gọi nhau bằng tên container

---

**Chúc bạn code vui vẻ! 🚀**
