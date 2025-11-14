#!/bin/bash

###############################################################################
# Jenkins Setup Script for Smart Bus System (with sudo support)
# This script automates Jenkins installation and configuration
###############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
print_success() {
    echo -e "${GREEN} $1${NC}"
}

print_error() {
    echo -e "${RED} $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}  $1${NC}"
}

print_info() {
    echo -e "${YELLOW}  $1${NC}"
}

# Check prerequisites
check_prerequisites() {
    print_info "Checking prerequisites..."
    
    # Check Docker
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        echo "Visit: https://docs.docker.com/get-docker/"
        exit 1
    else
        print_success "Docker is installed"
    fi
    
    # Check Git
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    else
        print_success "Git is installed"
    fi
    
    # Check if port 8080 is available
    if sudo lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1; then
        print_warning "Port 8080 is already in use"
        read -p "Do you want to use port 8081 instead? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            JENKINS_PORT=8081
        else
            exit 1
        fi
    else
        JENKINS_PORT=8080
    fi
}

# Install Jenkins with Docker
install_jenkins() {
    print_info "Installing Jenkins..."
    
    # Stop and remove existing Jenkins container if exists
    if sudo docker ps -a | grep -q jenkins; then
        print_info "Removing existing Jenkins container..."
        sudo docker stop jenkins 2>/dev/null || true
        sudo docker rm jenkins 2>/dev/null || true
    fi
    
    # Create volume
    print_info "Creating Jenkins volume..."
    sudo docker volume create jenkins_home 2>/dev/null || true
    
    # Run Jenkins container
    print_info "Starting Jenkins container..."
    sudo docker run -d \
        --name jenkins \
        --restart=unless-stopped \
        -p ${JENKINS_PORT}:8080 \
        -p 50000:50000 \
        -v jenkins_home:/var/jenkins_home \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -u root \
        jenkins/jenkins:lts
    
    print_success "Jenkins container started"
    
    # Wait for Jenkins to start
    print_info "Waiting for Jenkins to start (this may take 1-2 minutes)..."
    sleep 60
    
    # Install Docker inside Jenkins
    print_info "Installing Docker inside Jenkins container..."
    sudo docker exec -u root jenkins bash -c "
        apt-get update && \
        apt-get install -y docker.io && \
        usermod -aG docker jenkins
    " 2>/dev/null || print_warning "Docker installation inside Jenkins may have issues"
    
    # Restart Jenkins
    print_info "Restarting Jenkins..."
    sudo docker restart jenkins
    sleep 30
    
    print_success "Jenkins installed successfully"
}

# Get initial admin password
get_admin_password() {
    print_info "Retrieving initial admin password..."
    
    ADMIN_PASSWORD=$(sudo docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword)
    
    echo ""
    echo "=========================================="
    echo "JENKINS INITIAL ADMIN PASSWORD"
    echo "=========================================="
    echo "${ADMIN_PASSWORD}"
    echo "=========================================="
    echo ""
    
    # Save to file
    echo "${ADMIN_PASSWORD}" > jenkins_admin_password.txt
    print_success "Password saved to jenkins_admin_password.txt"
}

# Print next steps
print_next_steps() {
    echo ""
    echo "=========================================="
    echo "NEXT STEPS"
    echo "=========================================="
    echo ""
    echo "1. Open Jenkins in your browser:"
    echo "   http://localhost:${JENKINS_PORT}"
    echo ""
    echo "2. Unlock Jenkins with the password above"
    echo ""
    echo "3. Install suggested plugins"
    echo ""
    echo "4. Create your admin user"
    echo ""
    echo "5. Install additional plugins:"
    echo "   - NodeJS Plugin"
    echo "   - Docker Plugin"
    echo "   - Docker Pipeline"
    echo "   - Blue Ocean"
    echo ""
    echo "6. Configure tools (Manage Jenkins → Tools):"
    echo "   - NodeJS: 22.14.0"
    echo "   - Docker: latest"
    echo ""
    echo "7. Add credentials (Manage Jenkins → Credentials):"
    echo "   - GitHub credentials"
    echo "   - Docker Hub credentials"
    echo ""
    echo "8. Create pipeline job"
    echo ""
    echo "9. Set up GitHub webhook"
    echo ""
    echo "=========================================="
    echo ""
    echo "Useful commands:"
    echo "  - View logs: sudo docker logs jenkins -f"
    echo "  - Stop Jenkins: sudo docker stop jenkins"
    echo "  - Start Jenkins: sudo docker start jenkins"
    echo "  - Restart Jenkins: sudo docker restart jenkins"
    echo "  - Remove Jenkins: sudo docker rm -f jenkins"
    echo ""
    echo "For detailed setup guide, see README.md in scripts folder"
    echo "=========================================="
}

# Main installation process
main() {
    echo ""
    echo "=========================================="
    echo "Jenkins Setup for Smart Bus System"
    echo "=========================================="
    echo ""
    
    check_prerequisites
    
    # Confirm installation
    read -p "Do you want to proceed with Jenkins installation? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Installation cancelled"
        exit 0
    fi
    
    install_jenkins
    get_admin_password
    print_next_steps
    
    print_success "Installation complete! "
    
    # Open browser automatically
    print_info "Opening Jenkins in browser..."
    xdg-open http://localhost:${JENKINS_PORT} 2>/dev/null || print_warning "Please open http://localhost:${JENKINS_PORT} manually"
}

# Run main function
main
