#!/bin/bash

###############################################################################
# Health Check Script for Smart Bus System
# Kiểm tra tất cả services có đang chạy tốt không
###############################################################################

set -e

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Functions
print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if container is running
check_container() {
    local container_name=$1
    local port=$2
    local service_name=$3
    
    echo ""
    print_info "Checking $service_name..."
    
    # Check if container exists and is running
    if docker ps | grep -q "$container_name"; then
        print_success "$service_name container is running"
        
        # Check if port is accessible
        if nc -z localhost "$port" 2>/dev/null; then
            print_success "$service_name is accessible on port $port"
            return 0
        else
            print_warning "$service_name container is running but port $port is not accessible yet"
            return 1
        fi
    else
        print_error "$service_name container is not running"
        return 1
    fi
}

# Check HTTP endpoint
check_http() {
    local url=$1
    local service_name=$2
    
    print_info "Testing $service_name HTTP endpoint..."
    
    if curl -f -s -o /dev/null "$url"; then
        print_success "$service_name HTTP endpoint is healthy: $url"
        return 0
    else
        print_warning "$service_name HTTP endpoint is not ready yet: $url"
        return 1
    fi
}

# Main health check
main() {
    print_header "🏥 Smart Bus System Health Check"
    echo ""
    
    # Check Docker
    print_info "Checking Docker..."
    if command -v docker &> /dev/null; then
        print_success "Docker is installed"
        docker --version
    else
        print_error "Docker is not installed!"
        exit 1
    fi
    
    echo ""
    print_info "Checking Docker Compose..."
    if docker compose version &> /dev/null; then
        print_success "Docker Compose is installed"
        docker compose version
    else
        print_error "Docker Compose is not installed!"
        exit 1
    fi
    
    # Check containers
    echo ""
    print_header "📦 Checking Containers"
    
    jenkins_ok=0
    backend_ok=0
    frontend_ok=0
    
    # Jenkins
    if check_container "jenkins" "8081" "Jenkins"; then
        jenkins_ok=1
    fi
    
    # Backend
    if check_container "backend_dev" "5000" "Backend"; then
        backend_ok=1
    fi
    
    # Frontend
    if check_container "frontend_dev" "3000" "Frontend"; then
        frontend_ok=1
    fi
    
    # Check HTTP endpoints
    echo ""
    print_header "🌐 Checking HTTP Endpoints"
    
    jenkins_http_ok=0
    backend_http_ok=0
    frontend_http_ok=0
    
    # Wait a bit for services to be fully ready
    print_info "Waiting 5 seconds for services to be ready..."
    sleep 5
    
    # Jenkins HTTP
    if check_http "http://localhost:8081" "Jenkins"; then
        jenkins_http_ok=1
    fi
    
    # Backend HTTP
    if check_http "http://localhost:5000" "Backend"; then
        backend_http_ok=1
    fi
    
    # Frontend HTTP
    if check_http "http://localhost:3000" "Frontend"; then
        frontend_http_ok=1
    fi
    
    # Check logs for errors
    echo ""
    print_header "📋 Checking Recent Logs"
    
    print_info "Jenkins logs (last 5 lines):"
    docker logs jenkins_dev --tail 5 2>&1 || print_warning "Cannot read Jenkins logs"
    
    echo ""
    print_info "Backend logs (last 5 lines):"
    docker logs backend_dev --tail 5 2>&1 || print_warning "Cannot read Backend logs"
    
    echo ""
    print_info "Frontend logs (last 5 lines):"
    docker logs frontend_dev --tail 5 2>&1 || print_warning "Cannot read Frontend logs"
    
    # Summary
    echo ""
    print_header "📊 Health Check Summary"
    echo ""
    
    total_checks=6
    passed_checks=0
    
    # Jenkins
    if [ $jenkins_ok -eq 1 ]; then
        print_success "Jenkins Container: Running"
        ((passed_checks++))
    else
        print_error "Jenkins Container: Not Running"
    fi
    
    if [ $jenkins_http_ok -eq 1 ]; then
        print_success "Jenkins HTTP: Accessible"
        ((passed_checks++))
    else
        print_error "Jenkins HTTP: Not Accessible"
    fi
    
    # Backend
    if [ $backend_ok -eq 1 ]; then
        print_success "Backend Container: Running"
        ((passed_checks++))
    else
        print_error "Backend Container: Not Running"
    fi
    
    if [ $backend_http_ok -eq 1 ]; then
        print_success "Backend HTTP: Accessible"
        ((passed_checks++))
    else
        print_error "Backend HTTP: Not Accessible"
    fi
    
    # Frontend
    if [ $frontend_ok -eq 1 ]; then
        print_success "Frontend Container: Running"
        ((passed_checks++))
    else
        print_error "Frontend Container: Not Running"
    fi
    
    if [ $frontend_http_ok -eq 1 ]; then
        print_success "Frontend HTTP: Accessible"
        ((passed_checks++))
    else
        print_error "Frontend HTTP: Not Accessible"
    fi
    
    echo ""
    print_header "🎯 Final Result"
    echo ""
    echo -e "Passed: ${GREEN}$passed_checks${NC}/$total_checks checks"
    
    if [ $passed_checks -eq $total_checks ]; then
        print_success "All services are healthy! 🎉"
        echo ""
        echo "Access URLs:"
        echo "  - Jenkins:  http://localhost:8081"
        echo "  - Backend:  http://localhost:5000"
        echo "  - Frontend: http://localhost:3000"
        echo ""
        exit 0
    elif [ $passed_checks -ge 4 ]; then
        print_warning "Most services are running, but some checks failed"
        echo ""
        echo "Access URLs:"
        echo "  - Jenkins:  http://localhost:8081"
        echo "  - Backend:  http://localhost:5000"
        echo "  - Frontend: http://localhost:3000"
        echo ""
        echo "Run 'docker compose -f docker-compose.dev.yml logs -f' to see detailed logs"
        exit 1
    else
        print_error "Multiple services are not healthy"
        echo ""
        echo "Troubleshooting:"
        echo "  1. Check if containers are running: docker compose -f docker-compose.dev.yml ps"
        echo "  2. Check logs: docker compose -f docker-compose.dev.yml logs -f"
        echo "  3. Restart services: docker compose -f docker-compose.dev.yml restart"
        echo ""
        exit 1
    fi
}

# Run main
main
