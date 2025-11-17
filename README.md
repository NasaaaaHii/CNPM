# Cong Nghe Phan Men - Smart Bus System

> Thong tin thanh vien nhom
>
> |    MSSV    |      Ho ten       |
> | :--------: | :---------------: |
> | 3123410007 | Nguyen Hoang Anh  |
> | 3123410091 |  Huynh Thanh Hai  |
> | 3123410239 | Nguyen Thanh Nhan |
> | 3123410025 | Nguyen Au Gia Bao |
> | 3123410039 |   Le Manh Cuong   |

---

## Meeting

[Meeting_nhom2](https://docs.google.com/document/d/1lQykKHJ-ZNztgOThJkBnfzYeF6E_ISaT/edit)

---

## Cau truc project

```bash
CNPM/
├── frontend/              # Frontend (Next.js + Tailwind + TypeScript)
│   ├── src/
│   │   ├── app/          # Pages & Routing
│   │   ├── components/   # UI Components
│   │   ├── contexts/     # React Contexts
│   │   ├── hooks/        # Custom Hooks
│   │   ├── lib/          # Utilities
│   │   ├── styles/       # CSS Styles
│   │   └── types/        # TypeScript Types
│   ├── public/           # Static files
│   ├── Dockerfile.dev    # Docker development
│   └── package.json
│
├── backend/               # Backend (Express + TypeScript)
│   ├── src/
│   │   ├── config/       # Configuration
│   │   ├── controllers/  # Route Controllers
│   │   ├── middlewares/  # Middlewares
│   │   ├── routes/       # API Routes
│   │   └── services/     # Business Logic
│   ├── scripts/          # Utility Scripts
│   ├── Dockerfile.dev    # Docker development
│   └── package.json
│
├── scripts/               # Automation Scripts
│   ├── setup-jenkins.sh  # Jenkins setup
│   ├── manage-jenkins.sh # Jenkins management
│   ├── health-check.sh   # Health check
│   └── README.md         # Scripts documentation
│
├── logs/                  # Application logs
├── docker-compose.dev.yml # Docker Compose configuration
├── jenkinsfile           # Jenkins CI/CD pipeline
└── README.md             # This file
```

---

## Yeu cau moi truong

### Phan mem bat buoc:
- Node.js: v22.14.0
- npm: 10.9.2
- Docker Desktop: 20.x+
- Docker Compose: 2.x+

### Kiem tra version:
```bash
node -v        # v22.14.0
npm -v         # 10.9.2
docker --version
docker compose version
```

---

## Cach chay project

### Phuong phap 1: Chay voi Docker (Khuyen dung)

```bash
# Clone project
git clone https://github.com/NasaaaaHii/CNPM.git
cd CNPM

# Tao file .env cho backend
cd backend
cp .env.example .env  # Chinh sua thong tin database
cd ..

# Chay tat ca services (Jenkins + Backend + Frontend)
docker compose -f docker-compose.dev.yml up -d

# Xem logs
docker compose -f docker-compose.dev.yml logs -f

# Dung services
docker compose -f docker-compose.dev.yml down
```

### Phuong phap 2: Chay thu cong (Development)

#### Backend
```bash
cd backend
npm install
npm run dev     # http://localhost:5000

# Build production
npm run build
npm start
```

#### Frontend
```bash
cd frontend
npm install
npm run dev     # http://localhost:3000
```

---

## Services va Port

| Service  | Port  | URL                      | Mo ta              |
|----------|-------|--------------------------|---------------------|
| Jenkins  | 8081  | http://localhost:8081    | CI/CD Server       |
| Backend  | 5000  | http://localhost:5000    | Express API        |
| Frontend | 3000  | http://localhost:3000    | Next.js App        |

---

## Cau hinh Jenkins lan dau

### 1. Lay mat khau Jenkins

```bash
# Cach 1: Tu logs
docker logs jenkins_dev 2>&1 | grep -A 5 "Please use the following password"

# Cach 2: Tu file trong container
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword

# Cach 3: Luu vao file
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword > jenkins_password.txt
```

### 2. Setup Jenkins

1. Truy cap: http://localhost:8081
2. Nhap mat khau admin (tu buoc tren)
3. Chon "Install suggested plugins"
4. Cai dat them plugins:
   - Git Plugin
   - GitHub Plugin
   - Docker Plugin
   - Docker Pipeline
   - NodeJS Plugin
   - Pipeline Plugin

5. Tao admin user:
   - Username: admin
   - Password: (chon password cua ban)

6. Cau hinh NodeJS:
   - Manage Jenkins -> Tools
   - NodeJS installations -> Add NodeJS
   - Name: NodeJS 22
   - Version: NodeJS 22.x.x
   - Install automatically: (chon)

7. Tao Pipeline Job:
   - New Item -> smart-bus-system
   - Chon Pipeline
   - Pipeline script from SCM
   - SCM: Git
   - Repository URL: https://github.com/NasaaaaHii/CNPM.git
   - Branch: */hai
   - Script Path: jenkinsfile

8. Chay build:
   - Click "Build Now"
   - Xem Console Output

---

## Cac lenh Docker huu ich

### Quan ly containers
```bash
# Xem tat ca containers
docker compose -f docker-compose.dev.yml ps

# Dung tat ca
docker compose -f docker-compose.dev.yml down

# Dung va xoa volumes
docker compose -f docker-compose.dev.yml down -v

# Khoi dong lai mot service
docker compose -f docker-compose.dev.yml restart jenkins
docker compose -f docker-compose.dev.yml restart backend
docker compose -f docker-compose.dev.yml restart frontend

# Rebuild va restart
docker compose -f docker-compose.dev.yml up -d --build
```

### Xem logs
```bash
# Xem logs tat ca
docker compose -f docker-compose.dev.yml logs -f

# Xem logs mot service
docker compose -f docker-compose.dev.yml logs -f jenkins
docker compose -f docker-compose.dev.yml logs -f backend
docker compose -f docker-compose.dev.yml logs -f frontend
```

### Truy cap container
```bash
# Vao Jenkins container
docker exec -it jenkins_dev bash

# Vao Backend container
docker exec -it backend_dev sh

# Vao Frontend container
docker exec -it frontend_dev sh
```

### Kiem tra health
```bash
# Chay script health check
bash scripts/health-check.sh

# Kiem tra thu cong
curl http://localhost:8081  # Jenkins
curl http://localhost:5000  # Backend
curl http://localhost:3000  # Frontend
```

---

## CI/CD Pipeline

### Jenkins Pipeline (13 stages)

1. Checkout - Lay code tu GitHub
2. Install Dependencies - Cai dat packages
3. Code Quality Check - Lint code
4. Build - Build Frontend & Backend
5. Test - Chay unit tests
6. Security Scan - Quet lo hong bao mat
7. Build Docker Images - Tao Docker images
8. Deploy to Development - Deploy len dev
9. Deploy to Staging - Deploy len staging
10. Production Approval - Xac nhan deploy production
11. Deploy to Production - Deploy len production
12. Smoke Tests - Kiem tra co ban
13. Cleanup - Don dep

### Auto trigger

Pipeline tu dong chay khi:
- Push code len GitHub
- Tao Pull Request
- Merge vao branch main hoac hai

---

## Xu ly su co

### Port da duoc su dung
```bash
# Kiem tra port
sudo lsof -i :8081
sudo lsof -i :5000
sudo lsof -i :3000

# Dung service hoac doi port trong docker-compose.dev.yml
```

### Jenkins khong khoi dong
```bash
# Xem logs
docker logs jenkins_dev -f

# Restart
docker restart jenkins_dev

# Rebuild
docker compose -f docker-compose.dev.yml up -d --build jenkins
```

### Backend/Frontend loi
```bash
# Xem logs
docker compose -f docker-compose.dev.yml logs -f backend
docker compose -f docker-compose.dev.yml logs -f frontend

# Rebuild
docker compose -f docker-compose.dev.yml up -d --build
```

### Quen mat khau Jenkins
```bash
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword
```

---

## Workflow phat trien

### Lam viec hang ngay
```bash
# Sang: Khoi dong services
docker compose -f docker-compose.dev.yml up -d

# Lam viec voi code (hot reload tu dong)
# - Backend: Sua code trong /backend
# - Frontend: Sua code trong /frontend

# Toi: Dung services
docker compose -f docker-compose.dev.yml down
```

### Khi co code moi tu Git
```bash
git pull origin hai
docker compose -f docker-compose.dev.yml up -d --build
```

### Khi them dependencies moi
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

## Chay tren Windows

1. Cai Docker Desktop cho Windows
   - Download: https://www.docker.com/products/docker-desktop/
   - Enable WSL 2

2. Chay PowerShell hoac Git Bash as Administrator

3. Cac lenh tuong tu Linux/Mac:
```powershell
docker compose -f docker-compose.dev.yml up -d
docker compose -f docker-compose.dev.yml logs -f
```

---

## Database

### Thong tin Database (Supabase)
- Cau hinh trong file: backend/.env
- Tables: type_account, account, students, bus, routes, schedule

### Xem database data
```bash
cd backend
npm run db:fetch  # Cap nhat DATABASE_DATA.md
```

Chi tiet xem file: backend/DATABASE_DATA.md

---

## Cac Scripts quan trong

### scripts/setup-jenkins.sh
- Cai dat Jenkins tu dong
- Port: 8081

### scripts/manage-jenkins.sh
```bash
./scripts/manage-jenkins.sh start    # Khoi dong
./scripts/manage-jenkins.sh stop     # Dung
./scripts/manage-jenkins.sh restart  # Khoi dong lai
./scripts/manage-jenkins.sh logs     # Xem logs
./scripts/manage-jenkins.sh status   # Kiem tra trang thai
```

### scripts/health-check.sh
```bash
bash scripts/health-check.sh  # Kiem tra tat ca services
```

Chi tiet xem: scripts/README.md

---

## Tinh nang chinh

### 1. Authentication System
- Login theo role: Admin, Driver, Parent
- JWT token authentication
- Protected routes

### 2. Dashboard theo role
- Admin: Quan ly he thong
- Driver: Quan ly lich trinh, xe
- Parent: Theo doi con

### 3. Real-time Tracking
- Google Maps integration
- GPS tracking
- Route optimization

### 4. CI/CD voi Jenkins
- Auto build on push
- Auto deploy
- Quality checks

---

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Context API
- Google Maps API

### Backend
- Express.js
- TypeScript
- Supabase (PostgreSQL)
- JWT Authentication

### DevOps
- Docker & Docker Compose
- Jenkins CI/CD
- GitHub Actions

---

## Contributors

- Nguyen Hoang Anh (3123410007)
- Huynh Thanh Hai (3123410091)
- Nguyen Thanh Nhan (3123410239)
- Nguyen Au Gia Bao (3123410025)
- Le Manh Cuong (3123410039)

---

## License

This project is licensed under the MIT License.

---

## License

This project is licensed under the MIT License.

---

*Last Updated: 17/11/2025*  
*Version: 2.0.0*
