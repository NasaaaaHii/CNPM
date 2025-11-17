#!/bin/bash

###############################################################################
# Script: Setup toàn bộ dự án CNPM - Smart Bus System
# Mô tả: Tự động setup Jenkins, Backend, Frontend và kiểm tra health
# Hỗ trợ: Linux, macOS, Windows (WSL/Git Bash)
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Emoji support (works on most terminals)
CHECK="✓"
CROSS="✗"
INFO="ℹ"
ROCKET="🚀"

###############################################################################
# Helper Functions
###############################################################################

print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}${CHECK} $1${NC}"
}

print_error() {
    echo -e "${RED}${CROSS} $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}${INFO} $1${NC}"
}

print_info() {
    echo -e "${BLUE}${INFO} $1${NC}"
}

###############################################################################
# Prerequisite Checks
###############################################################################

check_prerequisites() {
    print_header "Kiểm tra môi trường"
    
    local all_ok=true
    
    # Check Docker
    if command -v docker &> /dev/null; then
        DOCKER_VERSION=$(docker --version)
        print_success "Docker: $DOCKER_VERSION"
    else
        print_error "Docker chưa được cài đặt"
        print_warning "Tải tại: https://www.docker.com/products/docker-desktop"
        all_ok=false
    fi
    
    # Check Docker Compose
    if command -v docker compose &> /dev/null; then
        COMPOSE_VERSION=$(docker compose version)
        print_success "Docker Compose: $COMPOSE_VERSION"
    else
        print_error "Docker Compose chưa được cài đặt"
        all_ok=false
    fi
    
    # Check if Docker is running
    if docker info &> /dev/null; then
        print_success "Docker daemon đang chạy"
    else
        print_error "Docker daemon chưa chạy. Hãy khởi động Docker Desktop"
        all_ok=false
    fi
    
    # Check Git
    if command -v git &> /dev/null; then
        GIT_VERSION=$(git --version)
        print_success "Git: $GIT_VERSION"
    else
        print_warning "Git chưa được cài đặt (không bắt buộc nếu đã có code)"
    fi
    
    if [ "$all_ok" = false ]; then
        print_error "Vui lòng cài đặt các phần mềm cần thiết và thử lại"
        exit 1
    fi
    
    echo ""
}

###############################################################################
# Setup Environment Files
###############################################################################

setup_env_files() {
    print_header "Thiết lập Environment Files"
    
    # Check if backend/.env exists
    if [ ! -f "backend/.env" ]; then
        if [ -f "backend/.env.example" ]; then
            print_info "Tạo backend/.env từ .env.example"
            cp backend/.env.example backend/.env
            print_success "Đã tạo backend/.env"
            print_warning "Vui lòng cập nhật thông tin database trong backend/.env"
        else
            print_warning "Không tìm thấy backend/.env.example"
            print_info "Tạo backend/.env mặc định"
            cat > backend/.env << 'EOF'
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=24h
EOF
            print_success "Đã tạo backend/.env mặc định"
            print_warning "VUI LÒNG cập nhật thông tin Supabase trong backend/.env"
        fi
    else
        print_success "backend/.env đã tồn tại"
    fi
    
    echo ""
}

###############################################################################
# Docker Setup
###############################################################################

cleanup_docker() {
    print_header "Dọn dẹp Docker (nếu cần)"
    
    if [ "$(docker compose -f docker-compose.dev.yml ps -q 2>/dev/null | wc -l)" -gt 0 ]; then
        print_info "Dừng các containers cũ..."
        docker compose -f docker-compose.dev.yml down
        print_success "Đã dừng containers"
    else
        print_info "Không có containers nào đang chạy"
    fi
    
    # Clean up .next folder if exists (prevent permission issues)
    if [ -d "frontend/.next" ]; then
        print_info "Xóa thư mục .next cũ để tránh lỗi permission"
        rm -rf frontend/.next
        print_success "Đã xóa frontend/.next"
    fi
    
    echo ""
}

start_docker_services() {
    print_header "Khởi động Docker Services"
    
    print_info "Đang build và khởi động: Jenkins, Backend, Frontend..."
    docker compose -f docker-compose.dev.yml up -d --build
    
    print_success "Đã khởi động tất cả services"
    echo ""
}

###############################################################################
# Install Node.js in Jenkins
###############################################################################

setup_jenkins_nodejs() {
    print_header "Cài đặt Node.js trong Jenkins Container"
    
    print_info "Đợi Jenkins container khởi động..."
    sleep 10
    
    # Check if Jenkins container is running
    if ! docker ps | grep -q jenkins_dev; then
        print_error "Jenkins container chưa khởi động"
        return 1
    fi
    
    # Check if Node.js is already installed
    if docker exec jenkins_dev bash -c "command -v node" &> /dev/null; then
        NODE_VERSION=$(docker exec jenkins_dev node --version)
        print_success "Node.js đã được cài đặt: $NODE_VERSION"
        return 0
    fi
    
    print_info "Cài đặt Node.js 22..."
    
    # Add NodeSource repository
    docker exec -u root jenkins_dev bash -c "curl -fsSL https://deb.nodesource.com/setup_22.x | bash -" || {
        print_error "Không thể thêm NodeSource repository"
        return 1
    }
    
    # Wait for any pending apt operations
    sleep 5
    
    # Install Node.js
    docker exec -u root jenkins_dev bash -c "apt-get install -y nodejs" || {
        print_error "Không thể cài đặt Node.js"
        return 1
    }
    
    # Verify installation
    if docker exec jenkins_dev bash -c "node --version && npm --version" &> /dev/null; then
        NODE_VERSION=$(docker exec jenkins_dev node --version)
        NPM_VERSION=$(docker exec jenkins_dev npm --version)
        print_success "Node.js $NODE_VERSION và npm $NPM_VERSION đã được cài đặt"
    else
        print_error "Cài đặt Node.js thất bại"
        return 1
    fi
    
    echo ""
}

###############################################################################
# Health Check
###############################################################################

wait_for_services() {
    print_header "Đợi services khởi động"
    
    print_info "Đợi 15 giây để services khởi động hoàn toàn..."
    sleep 15
    
    echo ""
}

health_check() {
    print_header "Kiểm tra Health Services"
    
    # Check Jenkins
    if curl -f http://localhost:8081 &> /dev/null; then
        print_success "Jenkins: http://localhost:8081 - OK"
    else
        print_warning "Jenkins: http://localhost:8081 - Đang khởi động..."
    fi
    
    # Check Backend
    if curl -f http://localhost:5000 &> /dev/null; then
        print_success "Backend: http://localhost:5000 - OK"
    else
        print_warning "Backend: http://localhost:5000 - Đang khởi động..."
    fi
    
    # Check Frontend
    if curl -f http://localhost:3000 &> /dev/null; then
        print_success "Frontend: http://localhost:3000 - OK"
    else
        print_warning "Frontend: http://localhost:3000 - Đang khởi động..."
    fi
    
    echo ""
}

###############################################################################
# Display Information
###############################################################################

display_info() {
    print_header "Thông tin truy cập"
    
    echo -e "${GREEN}Services đã sẵn sàng!${NC}\n"
    
    echo -e "${BLUE}Jenkins CI/CD:${NC}"
    echo -e "  URL: ${GREEN}http://localhost:8081${NC}"
    echo -e "  Lấy mật khẩu: ${YELLOW}docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword${NC}\n"
    
    echo -e "${BLUE}Backend API:${NC}"
    echo -e "  URL: ${GREEN}http://localhost:5000${NC}\n"
    
    echo -e "${BLUE}Frontend App:${NC}"
    echo -e "  URL: ${GREEN}http://localhost:3000${NC}\n"
    
    echo -e "${YELLOW}Lệnh hữu ích:${NC}"
    echo -e "  Xem logs:     ${BLUE}docker compose -f docker-compose.dev.yml logs -f${NC}"
    echo -e "  Dừng all:     ${BLUE}docker compose -f docker-compose.dev.yml down${NC}"
    echo -e "  Restart:      ${BLUE}docker compose -f docker-compose.dev.yml restart${NC}"
    echo -e "  Status:       ${BLUE}docker compose -f docker-compose.dev.yml ps${NC}\n"
    
    echo -e "${GREEN}${ROCKET} Setup hoàn tất! Chúc bạn code vui vẻ!${NC}\n"
}

###############################################################################
# Main Execution
###############################################################################

main() {
    clear
    echo -e "${GREEN}"
    cat << "EOF"
   _____ __  __          _____ _______   ____  _    _  _____ 
  / ____|  \/  |   /\   |  __ \__   __| |  _ \| |  | |/ ____|
 | (___ | \  / |  /  \  | |__) | | |    | |_) | |  | | (___  
  \___ \| |\/| | / /\ \ |  _  /  | |    |  _ <| |  | |\___ \ 
  ____) | |  | |/ ____ \| | \ \  | |    | |_) | |__| |____) |
 |_____/|_|  |_/_/    \_\_|  \_\ |_|    |____/ \____/|_____/ 
                                                               
EOF
    echo -e "${NC}"
    echo -e "${BLUE}Smart Bus System - Automated Setup${NC}\n"
    
    # Run all setup steps
    check_prerequisites
    setup_env_files
    cleanup_docker
    start_docker_services
    setup_jenkins_nodejs
    wait_for_services
    health_check
    display_info
}

# Run main function
main
