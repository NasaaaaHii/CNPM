#!/bin/bash

###############################################################################
# Jenkins Management Script
# Utility commands for managing Jenkins
###############################################################################

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_success() { echo -e "${GREEN} $1${NC}"; }
print_info() { echo -e "${YELLOW}ℹ  $1${NC}"; }

show_menu() {
    echo ""
    echo "=========================================="
    echo "Jenkins Management Menu"
    echo "=========================================="
    echo "1. Start Jenkins"
    echo "2. Stop Jenkins"
    echo "3. Restart Jenkins"
    echo "4. View Jenkins logs"
    echo "5. Check Jenkins status"
    echo "6. Get admin password"
    echo "7. Backup Jenkins"
    echo "8. Restore Jenkins"
    echo "9. Clean Docker images"
    echo "10. Update Jenkins"
    echo "0. Exit"
    echo "=========================================="
}

start_jenkins() {
    print_info "Starting Jenkins..."
    docker start jenkins
    print_success "Jenkins started"
}

stop_jenkins() {
    print_info "Stopping Jenkins..."
    docker stop jenkins
    print_success "Jenkins stopped"
}

restart_jenkins() {
    print_info "Restarting Jenkins..."
    docker restart jenkins
    print_success "Jenkins restarted"
}

view_logs() {
    print_info "Viewing Jenkins logs (Ctrl+C to exit)..."
    docker logs -f jenkins
}

check_status() {
    print_info "Checking Jenkins status..."
    docker ps --filter name=jenkins --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
}

get_password() {
    print_info "Retrieving admin password..."
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
}

backup_jenkins() {
    print_info "Creating backup..."
    BACKUP_FILE="jenkins_backup_$(date +%Y%m%d_%H%M%S).tar.gz"
    docker exec jenkins tar czf /tmp/backup.tar.gz /var/jenkins_home
    docker cp jenkins:/tmp/backup.tar.gz ./${BACKUP_FILE}
    print_success "Backup created: ${BACKUP_FILE}"
}

restore_jenkins() {
    read -p "Enter backup file path: " BACKUP_FILE
    if [ -f "$BACKUP_FILE" ]; then
        print_info "Restoring from backup..."
        docker cp ${BACKUP_FILE} jenkins:/tmp/backup.tar.gz
        docker exec jenkins tar xzf /tmp/backup.tar.gz -C /
        docker restart jenkins
        print_success "Restore complete"
    else
        echo "Backup file not found"
    fi
}

clean_docker() {
    print_info "Cleaning Docker images..."
    docker system prune -a -f
    print_success "Docker cleanup complete"
}

update_jenkins() {
    print_info "Updating Jenkins..."
    docker pull jenkins/jenkins:lts
    docker stop jenkins
    docker rm jenkins
    docker run -d \
        --name jenkins \
        --restart=unless-stopped \
        -p 8080:8080 \
        -p 50000:50000 \
        -v jenkins_home:/var/jenkins_home \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -u root \
        jenkins/jenkins:lts
    print_success "Jenkins updated"
}

# Main loop
while true; do
    show_menu
    read -p "Select option: " choice
    
    case $choice in
        1) start_jenkins ;;
        2) stop_jenkins ;;
        3) restart_jenkins ;;
        4) view_logs ;;
        5) check_status ;;
        6) get_password ;;
        7) backup_jenkins ;;
        8) restore_jenkins ;;
        9) clean_docker ;;
        10) update_jenkins ;;
        0) echo "Goodbye!"; exit 0 ;;
        *) echo "Invalid option" ;;
    esac
    
    read -p "Press Enter to continue..."
done
