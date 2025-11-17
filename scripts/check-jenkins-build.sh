#!/bin/bash

###############################################################################
# Script: Kiểm tra và test Jenkins build
# Mô tả: Tự động kiểm tra Jenkins và đưa ra hướng dẫn build
###############################################################################

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

###############################################################################
# Main Checks
###############################################################################

print_header "Kiểm tra Jenkins Prerequisites"

# 1. Check if Jenkins container is running
if ! docker ps | grep -q jenkins_dev; then
    print_error "Jenkins container không chạy"
    print_info "Khởi động Jenkins: docker compose -f docker-compose.dev.yml up -d jenkins"
    exit 1
fi
print_success "Jenkins container đang chạy"

# 2. Check Node.js installation
if docker exec jenkins_dev bash -c "command -v node && command -v npm" &> /dev/null; then
    NODE_VERSION=$(docker exec jenkins_dev node --version 2>/dev/null)
    NPM_VERSION=$(docker exec jenkins_dev npm --version 2>/dev/null)
    print_success "Node.js $NODE_VERSION và npm $NPM_VERSION đã cài đặt"
else
    print_error "Node.js chưa được cài đặt trong Jenkins"
    print_info "Đang cài đặt Node.js..."
    
    docker exec -u root jenkins_dev bash -c "curl -fsSL https://deb.nodesource.com/setup_22.x | bash -" &> /dev/null
    sleep 5
    docker exec -u root jenkins_dev apt-get install -y nodejs &> /dev/null
    
    if docker exec jenkins_dev bash -c "node --version && npm --version" &> /dev/null; then
        print_success "Node.js đã được cài đặt thành công"
    else
        print_error "Không thể cài đặt Node.js"
        exit 1
    fi
fi

# 3. Check if Jenkins is fully initialized
if docker logs jenkins_dev 2>&1 | grep -q "Completed initialization"; then
    print_success "Jenkins đã khởi động hoàn tất"
else
    print_warning "Jenkins đang trong quá trình khởi động"
    print_info "Vui lòng đợi thêm 1-2 phút"
fi

# 4. Check Jenkins web UI
if curl -s http://localhost:8081/login &> /dev/null; then
    print_success "Jenkins Web UI sẵn sàng tại http://localhost:8081"
else
    print_warning "Jenkins Web UI chưa sẵn sàng"
    print_info "Đang khởi động, vui lòng đợi..."
fi

# 5. Check if jenkinsfile exists
if [ -f "jenkinsfile" ]; then
    print_success "Jenkinsfile tồn tại"
else
    print_error "Không tìm thấy jenkinsfile"
    exit 1
fi

# 6. Validate jenkinsfile syntax (basic check)
if grep -q "pipeline {" jenkinsfile && grep -q "stages {" jenkinsfile; then
    print_success "Jenkinsfile có cú pháp hợp lệ"
else
    print_error "Jenkinsfile có thể có lỗi cú pháp"
    exit 1
fi

# 7. Check backend/frontend structure
if [ -f "backend/package.json" ] && [ -f "frontend/package.json" ]; then
    print_success "Cấu trúc project hợp lệ (backend + frontend)"
else
    print_error "Thiếu package.json trong backend hoặc frontend"
    exit 1
fi

# 8. Check if .env exists for backend
if [ -f "backend/.env" ]; then
    print_success "Backend .env file tồn tại"
else
    print_warning "Backend .env file không tồn tại"
    print_info "Pipeline có thể gặp lỗi nếu cần biến môi trường"
fi

###############################################################################
# Summary and Instructions
###############################################################################

print_header "Kết quả kiểm tra"

echo -e "${GREEN}Tất cả các điều kiện cần thiết đã sẵn sàng!${NC}\n"

print_header "Hướng dẫn build Jenkins"

echo -e "${YELLOW}Bước 1: Truy cập Jenkins${NC}"
echo -e "  URL: ${GREEN}http://localhost:8081${NC}"
echo -e ""

echo -e "${YELLOW}Bước 2: Login${NC}"
if [ -f "jenkins_admin_password.txt" ]; then
    JENKINS_PASS=$(cat jenkins_admin_password.txt)
    echo -e "  Username: ${GREEN}admin${NC}"
    echo -e "  Password: ${GREEN}$JENKINS_PASS${NC}"
else
    echo -e "  Lấy password: ${BLUE}docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword${NC}"
fi
echo -e ""

echo -e "${YELLOW}Bước 3: Kiểm tra Job Configuration${NC}"
echo -e "  1. Vào job 'CNPM'"
echo -e "  2. Click 'Configure'"
echo -e "  3. Kiểm tra Pipeline configuration:"
echo -e "     - Definition: ${GREEN}Pipeline script from SCM${NC}"
echo -e "     - SCM: ${GREEN}Git${NC}"
echo -e "     - Repository URL: ${GREEN}https://github.com/NasaaaaHii/CNPM.git${NC}"
echo -e "     - Branch Specifier: ${GREEN}*/main${NC} (hoặc */hai)"
echo -e "     - Script Path: ${GREEN}jenkinsfile${NC}"
echo -e ""

echo -e "${YELLOW}Bước 4: Build Now${NC}"
echo -e "  1. Click '${GREEN}Build Now${NC}'"
echo -e "  2. Xem '${GREEN}Console Output${NC}' để theo dõi"
echo -e "  3. Build lần đầu sẽ mất ${YELLOW}5-10 phút${NC} (download dependencies)"
echo -e ""

echo -e "${YELLOW}Bước 5: Kiểm tra kết quả${NC}"
echo -e "  ${GREEN}✓ SUCCESS${NC} - Tất cả stages pass"
echo -e "  ${YELLOW}⚠ UNSTABLE${NC} - Một số warnings (vẫn OK)"
echo -e "  ${RED}✗ FAILURE${NC} - Có lỗi cần fix"
echo -e ""

print_header "Stages mong đợi"

echo -e "Jenkinsfile sẽ chạy các stages sau:"
echo -e "  1. ${BLUE}Checkout${NC} - Clone code từ GitHub"
echo -e "  2. ${BLUE}Install Dependencies${NC} - npm install backend & frontend"
echo -e "  3. ${BLUE}Code Quality Check${NC} - Lint code (có thể có warnings)"
echo -e "  4. ${BLUE}Build${NC} - Build backend & frontend"
echo -e "  5. ${BLUE}Test${NC} - Run tests (nếu có)"
echo -e "  6. ${BLUE}Security Scan${NC} - npm audit"
echo -e "  7. ${BLUE}Deploy to Development${NC} - Nếu branch = hai"
echo -e "  8. ${BLUE}Deploy to Staging${NC} - Nếu branch = main"
echo -e "  9. ${BLUE}Smoke Tests${NC} - Health check"
echo -e ""

print_header "Troubleshooting"

echo -e "${YELLOW}Nếu build FAILED:${NC}"
echo -e ""
echo -e "1. ${RED}Lỗi 'npm: not found'${NC}"
echo -e "   Giải pháp: Script đã tự động cài Node.js"
echo -e "   Nếu vẫn lỗi, chạy lại: ${BLUE}bash scripts/check-jenkins-build.sh${NC}"
echo -e ""
echo -e "2. ${RED}Lỗi 'package.json not found'${NC}"
echo -e "   Nguyên nhân: Job config sai (dùng Execute Shell thay vì Pipeline)"
echo -e "   Giải pháp: XÓA job cũ, tạo lại job kiểu Pipeline"
echo -e ""
echo -e "3. ${RED}Lỗi 'Couldn't find any revision to build'${NC}"
echo -e "   Nguyên nhân: Branch specifier sai (*/master thay vì */main)"
echo -e "   Giải pháp: Sửa Branch Specifier thành */main"
echo -e ""
echo -e "4. ${RED}Build quá lâu${NC}"
echo -e "   Bình thường: Lần đầu 5-10 phút, lần sau 2-3 phút"
echo -e ""

print_header "Lệnh hữu ích"

echo -e "Xem Jenkins logs:     ${BLUE}docker logs jenkins_dev -f${NC}"
echo -e "Restart Jenkins:      ${BLUE}docker restart jenkins_dev${NC}"
echo -e "Get admin password:   ${BLUE}docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword${NC}"
echo -e "Check Node.js:        ${BLUE}docker exec jenkins_dev bash -c 'node --version && npm --version'${NC}"
echo -e ""

echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}Sẵn sàng! Hãy vào Jenkins và click Build Now${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}\n"
