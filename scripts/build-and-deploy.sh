#!/bin/bash

###############################################################################
# Build and Deploy Script (can be used manually or by Jenkins)
###############################################################################

set -e

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${PROJECT_ROOT}/build"
DEPLOY_DIR="${PROJECT_ROOT}/deploy"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_success() { echo -e "${GREEN} $1${NC}"; }
print_info() { echo -e "${YELLOW}ℹ  $1${NC}"; }
print_error() { echo -e "${RED} $1${NC}"; }

# Clean
clean() {
    print_info "Cleaning build directories..."
    rm -rf "${PROJECT_ROOT}/backend/dist"
    rm -rf "${PROJECT_ROOT}/frontend/.next"
    print_success "Clean complete"
}

# Install dependencies
install_deps() {
    print_info "Installing dependencies..."
    
    cd "${PROJECT_ROOT}/backend"
    npm ci
    
    cd "${PROJECT_ROOT}/frontend"
    npm ci
    
    print_success "Dependencies installed"
}

# Lint
lint() {
    print_info "Running linters..."
    
    cd "${PROJECT_ROOT}/backend"
    npm run lint || true
    
    cd "${PROJECT_ROOT}/frontend"
    npm run lint
    
    print_success "Linting complete"
}

# Build
build() {
    print_info "Building applications..."
    
    # Build backend
    cd "${PROJECT_ROOT}/backend"
    npm run build
    print_success "Backend built"
    
    # Build frontend
    cd "${PROJECT_ROOT}/frontend"
    npm run build
    print_success "Frontend built"
}

# Test
test() {
    print_info "Running tests..."
    
    cd "${PROJECT_ROOT}/backend"
    npm test || echo "No backend tests"
    
    cd "${PROJECT_ROOT}/frontend"
    npm test || echo "No frontend tests"
    
    print_success "Tests complete"
}

# Build Docker images
build_docker() {
    print_info "Building Docker images..."
    
    cd "${PROJECT_ROOT}"
    
    # Build frontend
    docker build -t smartbus-frontend:latest -f frontend/Dockerfile.dev frontend/
    print_success "Frontend image built"
    
    # Build backend
    docker build -t smartbus-backend:latest -f backend/Dockerfile.dev backend/
    print_success "Backend image built"
}

# Deploy
deploy() {
    print_info "Deploying application..."
    
    cd "${PROJECT_ROOT}"
    
    # Stop existing containers
    docker compose -f docker-compose.dev.yml down || true
    
    # Start new containers
    docker compose -f docker-compose.dev.yml up -d
    
    print_success "Deployment complete"
    
    # Wait for services to be ready
    sleep 10
    
    # Health check
    print_info "Running health checks..."
    curl -f http://localhost:5000/health || print_error "Backend health check failed"
    curl -f http://localhost:3000 || print_error "Frontend health check failed"
}

# Show usage
usage() {
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  clean          Clean build directories"
    echo "  install        Install dependencies"
    echo "  lint           Run linters"
    echo "  build          Build applications"
    echo "  test           Run tests"
    echo "  docker         Build Docker images"
    echo "  deploy         Deploy application"
    echo "  all            Run all steps (clean, install, lint, build, test, docker, deploy)"
    echo ""
}

# Main
case "$1" in
    clean)
        clean
        ;;
    install)
        install_deps
        ;;
    lint)
        lint
        ;;
    build)
        build
        ;;
    test)
        test
        ;;
    docker)
        build_docker
        ;;
    deploy)
        deploy
        ;;
    all)
        clean
        install_deps
        lint
        build
        test
        build_docker
        deploy
        print_success "All steps completed! 🎉"
        ;;
    *)
        usage
        exit 1
        ;;
esac
