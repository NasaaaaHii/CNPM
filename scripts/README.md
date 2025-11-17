# Scripts - Cong Cu Tu Dong Hoa

Thu muc nay chua cac script tu dong hoa cho viec cai dat va quan ly du an Smart Bus System.

## Danh Sach Scripts

### Scripts Dang Su Dung (Active)

| Script                   | Muc dich                             | Do uu tien |
| ------------------------ | ------------------------------------ | ---------- |
| `setup-all.sh`           | **Setup toan bo du an 1 lenh**       | Cao nhat   |
| `check-jenkins-build.sh` | **Kiem tra Jenkins truoc khi build** | Cao        |
| `manage-jenkins.sh`      | Quan ly Jenkins container            | Trung binh |
| `health-check.sh`        | Kiem tra health cac services         | Trung binh |

### Scripts Legacy (Khong khuyen nghi)

| Script                  | Ly do              | Thay the bang  |
| ----------------------- | ------------------ | -------------- |
| `setup-jenkins.sh`      | Phuc tap, can sudo | `setup-all.sh` |
| `setup-jenkins-sudo.sh` | Phuc tap, can sudo | `setup-all.sh` |

### Files Khac

- `jenkins_admin_password.txt` - Mat khau Jenkins admin (tu dong tao)
- `README.md` - File nay

---

## Huong Dan Su Dung

### 1. setup-all.sh (KHUYEN NGHI)

**Muc dich**: Setup toan bo du an tu dong - Jenkins, Backend, Frontend

**Tinh nang**:

- Kiem tra Docker, Docker Compose
- Tao file .env cho backend
- Khoi dong Jenkins, Backend, Frontend
- Cai Node.js vao Jenkins container
- Kiem tra health tat ca services
- Hien thi thong tin truy cap

**Cach su dung**:

```bash
# Tu thu muc goc project
bash scripts/setup-all.sh
```

**Ket qua mong doi**:

- Jenkins: http://localhost:8081
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

---

### 2. check-jenkins-build.sh

**Muc dich**: Kiem tra Jenkins truoc khi build va huong dan cau hinh

**Tinh nang**:

- Kiem tra Jenkins container dang chay
- Kiem tra Node.js da cai dat
- Tu dong cai Node.js neu thieu
- Kiem tra Jenkinsfile hop le
- Hien thi huong dan build chi tiet

**Cach su dung**:

```bash
# Chay truoc khi build Jenkins
bash scripts/check-jenkins-build.sh
```

**Khi nao dung**:

- Truoc khi click "Build Now" trong Jenkins
- Khi build Jenkins bi loi
- Sau khi cap nhat code

---

### 3. manage-jenkins.sh

**Muc dich**: Quan ly vong doi Jenkins container

**Tinh nang**:

- Start/stop Jenkins container
- Xem logs realtime
- Backup/restore du lieu Jenkins
- Kiem tra trang thai container
- Khoi dong lai khi can

**Cach su dung**:

```bash
./scripts/manage-jenkins.sh [lenh]

Cac lenh:
  start    - Khoi dong Jenkins
  stop     - Dung Jenkins
  restart  - Khoi dong lai Jenkins
  status   - Kiem tra trang thai
  logs     - Xem logs
```

**Vi du**:

```bash
# Khoi dong Jenkins
./scripts/manage-jenkins.sh start

# Xem logs
./scripts/manage-jenkins.sh logs

# Kiem tra trang thai
./scripts/manage-jenkins.sh status
```

---

### 4. health-check.sh

**Muc dich**: Kiem tra health cua tat ca services

**Tinh nang**:

- Kiem tra Jenkins
- Kiem tra Backend API
- Kiem tra Frontend
- Hien thi trang thai chi tiet

**Cach su dung**:

```bash
bash scripts/health-check.sh
```

---

### 5. build-and-deploy.sh

**Muc dich**: Build va deploy thu cong (khong qua Jenkins)

**Tinh nang**:

- Build Docker images
- Deploy containers
- Health checks tu dong
- Logs chi tiet

**Cach su dung**:

```bash
./scripts/build-and-deploy.sh [command]

Commands:
  clean      - Xoa build directories
  install    - Cai dependencies
  lint       - Chay linters
  build      - Build applications
  test       - Chay tests
  docker     - Build Docker images
  deploy     - Deploy application
  all        - Chay tat ca
```

**Vi du**:

```bash
# Build tat ca
./scripts/build-and-deploy.sh all

# Chi build
./scripts/build-and-deploy.sh build
```

---

## Huong Dan Cau Hinh Jenkins

### Buoc 1: Setup Lan Dau

```bash
# 1. Chay script setup tu dong
bash scripts/setup-all.sh

# 2. Doi khoang 2-3 phut de Jenkins khoi dong
# 3. Lay mat khau admin
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword

# Hoac tu file
cat scripts/jenkins_admin_password.txt
```

### Buoc 2: Truy Cap Jenkins

1. Mo trinh duyet: **http://localhost:8081**
2. Nhap mat khau admin tu buoc 1
3. Click **Continue**

### Buoc 3: Cai Dat Plugins

1. Chon **Install suggested plugins**
2. Doi cai dat hoan tat (2-5 phut)
3. Cac plugins quan trong se tu dong duoc cai:
   - Git Plugin
   - Pipeline Plugin
   - GitHub Plugin
   - Docker Plugin

### Buoc 4: Tao Admin User

1. Nhap thong tin:
   - **Username**: `admin` (hoac ten ban muon)
   - **Password**: (chon password manh)
   - **Full name**: Ten day du cua ban
   - **Email**: Email cua ban
2. Click **Save and Continue**
3. Click **Save and Finish**
4. Click **Start using Jenkins**

### Buoc 5: Tao Pipeline Job (QUAN TRONG)

#### 5.1. Tao Job Moi

1. Tu Jenkins Dashboard, click **New Item** (goc trai)
2. Nhap ten job: `CNPM`
3. Chon **Pipeline** (KHONG chon Freestyle Project)
4. Click **OK**

#### 5.2. Cau Hinh General

1. **Description**: `Smart Bus System CI/CD Pipeline`
2. Tick **GitHub project**
3. **Project url**: `https://github.com/NasaaaaHii/CNPM/`

#### 5.3. Cau Hinh Build Triggers (Tuy chon)

**Option 1: Poll SCM** (Kiem tra code dinh ky)

- Tick **Poll SCM**
- **Schedule**: `H/5 * * * *` (kiem tra moi 5 phut)

**Option 2: GitHub Webhook** (Khuyen nghi - build ngay khi push)

- Tick **GitHub hook trigger for GITScm polling**
- Can cau hinh webhook tren GitHub (xem phan duoi)

#### 5.4. Cau Hinh Pipeline (QUAN TRONG NHAT)

1. **Definition**: Chon **Pipeline script from SCM**

2. **SCM**: Chon **Git**

3. **Repository URL**: `https://github.com/NasaaaaHii/CNPM.git`

4. **Credentials**:

   - Neu public repo: de trong
   - Neu private repo: Add credentials (GitHub token)

5. **Branches to build**:

   - **Branch Specifier**: `*/main`
   - Hoac `*/hai` neu muon build branch hai
   - Hoac `*/*` de build tat ca branches

6. **Script Path**: `jenkinsfile` (chinh xac ten file)

7. Click **Save**

### Buoc 6: Build Lan Dau

#### 6.1. Kiem Tra Prerequisites

```bash
# Chay script kiem tra
bash scripts/check-jenkins-build.sh
```

Script se kiem tra:

- Jenkins container running
- Node.js da cai dat (tu dong cai neu thieu)
- Jenkinsfile hop le
- Project structure OK

#### 6.2. Trigger Build

1. Vao job **CNPM**
2. Click **Build Now** (ben trai)
3. Build se xuat hien trong **Build History**
4. Click vao so build (vd: #1)
5. Click **Console Output** de xem logs

#### 6.3. Theo Doi Build

Build se chay qua cac stages:

1. **Checkout** - Clone code tu GitHub
2. **Install Dependencies** - npm install backend & frontend
3. **Code Quality Check** - Lint (co the co warnings)
4. **Build** - Build backend & frontend
5. **Test** - Run tests (neu co)
6. **Security Scan** - npm audit
7. **Build Docker Images** - (disabled)
8. **Deploy to Development** - (neu branch = hai)
9. **Deploy to Staging** - (neu branch = main)
10. **Smoke Tests** - Health check

**Thoi gian mong doi**:

- Lan dau: **5-10 phut** (download dependencies)
- Lan sau: **2-3 phut** (co cache)

### Buoc 7: Setup GitHub Webhook (Tuy chon)

De build tu dong khi push code:

1. Vao GitHub repo: https://github.com/NasaaaaHii/CNPM
2. **Settings** -> **Webhooks** -> **Add webhook**
3. **Payload URL**: `http://<your-ip>:8081/github-webhook/`
   - Thay `<your-ip>` bang IP public hoac domain
   - Neu local: can ngrok hoac expose port
4. **Content type**: `application/json`
5. **Which events**: Chon **Just the push event**
6. **Active**
7. Click **Add webhook**

---

## Workflow Hang Ngay

### Sang: Khoi Dong Services

```bash
# Option 1: Khoi dong tat ca
docker compose -f docker-compose.dev.yml up -d

# Option 2: Dung script
bash scripts/setup-all.sh
```

### Lam Viec: Code & Build

```bash
# 1. Code trong /backend hoac /frontend
# 2. Git commit & push
git add .
git commit -m "feat: your changes"
git push origin hai

# 3. Jenkins tu dong build (neu co webhook)
# Hoac click "Build Now" trong Jenkins
```

### Kiem Tra Loi

```bash
# Xem logs Jenkins
docker logs jenkins_dev -f

# Xem logs Backend
docker compose -f docker-compose.dev.yml logs -f backend

# Xem logs Frontend
docker compose -f docker-compose.dev.yml logs -f frontend

# Health check
bash scripts/health-check.sh
```

### Toi: Dung Services (Tuy chon)

```bash
docker compose -f docker-compose.dev.yml down
```

---

## Troubleshooting

### 1. Jenkins: "npm: not found"

**Nguyen nhan**: Node.js chua duoc cai trong Jenkins

**Giai phap**:

```bash
# Tu dong fix
bash scripts/check-jenkins-build.sh

# Hoac manual
docker exec -u root jenkins_dev bash -c "curl -fsSL https://deb.nodesource.com/setup_22.x | bash -"
docker exec -u root jenkins_dev apt-get install -y nodejs
```

### 2. Jenkins: "package.json not found"

**Nguyen nhan**: Job config sai (dung Execute Shell thay vi Pipeline)

**Giai phap**:

1. XOA job cu
2. Tao lai job kieu **Pipeline**
3. Cau hinh Pipeline script from SCM
4. Build Now

### 3. Jenkins: "Couldn't find any revision to build"

**Nguyen nhan**: Branch specifier sai (`*/master` thay vi `*/main`)

**Giai phap**:

1. Vao job Config
2. Sua Branch Specifier thanh `*/main`
3. Save va Build Now

### 4. Frontend: Permission Denied (.next)

**Nguyen nhan**: Loi quyen thu muc .next

**Giai phap**:

```bash
rm -rf frontend/.next
docker compose -f docker-compose.dev.yml restart frontend
```

### 5. Port Already in Use

**Kiem tra**:

```bash
sudo lsof -i :8081  # Jenkins
sudo lsof -i :5000  # Backend
sudo lsof -i :3000  # Frontend
```

**Giai phap**: Doi port trong `docker-compose.dev.yml`

---

## Tai Lieu Tham Khao

### Ben Trong Repo

- [../README.md](../README.md) - Huong dan tong quan
- [../docs/JENKINS_SETUP.md](../docs/JENKINS_SETUP.md) - Chi tiet Jenkins setup
- [../docs/WINDOWS_SETUP.md](../docs/WINDOWS_SETUP.md) - Huong dan cho Windows
- [../PRE_COMMIT_CHECKLIST.md](../PRE_COMMIT_CHECKLIST.md) - Checklist truoc commit

### Ben Ngoai

- [Jenkins Documentation](https://www.jenkins.io/doc/)
- [Jenkinsfile Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/)
- [Docker Documentation](https://docs.docker.com/)

---

## Quick Commands

```bash
# Setup toan bo
bash scripts/setup-all.sh

# Kiem tra Jenkins
bash scripts/check-jenkins-build.sh

# Xem Jenkins logs
docker logs jenkins_dev -f

# Restart Jenkins
docker restart jenkins_dev

# Lay admin password
docker exec jenkins_dev cat /var/jenkins_home/secrets/initialAdminPassword

# Health check
bash scripts/health-check.sh

# Xem tat ca containers
docker compose -f docker-compose.dev.yml ps

# Dung tat ca
docker compose -f docker-compose.dev.yml down

# Restart tat ca
docker compose -f docker-compose.dev.yml restart
```

---

## Best Practices

### 1. Luon Kiem Tra Truoc Khi Build

```bash
bash scripts/check-jenkins-build.sh
```

### 2. Backup Jenkins Dinh Ky

```bash
# Tao backup
docker exec jenkins_dev tar -czf /tmp/jenkins-backup.tar.gz /var/jenkins_home
docker cp jenkins_dev:/tmp/jenkins-backup.tar.gz ./jenkins-backup-$(date +%Y%m%d).tar.gz
```

### 3. Monitor Logs Thuong Xuyen

```bash
# Jenkins
docker logs jenkins_dev -f --tail 100

# All services
docker compose -f docker-compose.dev.yml logs -f
```

### 4. Giu Node.js Cap Nhat Trong Jenkins

```bash
# Kiem tra version
docker exec jenkins_dev bash -c "node --version && npm --version"

# Update neu can
docker exec -u root jenkins_dev npm install -g npm@latest
```

---

## Tips Pro

### Tang Toc Build

1. **Cache dependencies** - Da duoc cau hinh trong docker-compose
2. **Parallel stages** - Da duoc su dung trong Jenkinsfile
3. **Incremental builds** - Jenkins tu dong cache

### Debug Khi Build Loi

```bash
# 1. Xem Jenkins console output
# 2. Kiem tra logs chi tiet
docker exec jenkins_dev bash -c "cat /var/jenkins_home/jobs/CNPM/builds/*/log"

# 3. Chay lai stage bi loi manually
docker exec jenkins_dev bash -c "cd /var/jenkins_home/workspace/CNPM/backend && npm run build"
```

### Clean Up Dinh Ky

```bash
# Don dep Docker
docker system prune -f

# Don build artifacts cu trong Jenkins
# Manage Jenkins -> Discard Old Builds
```

---

_Cap nhat lan cuoi: 17/11/2025_  
_Version: 2.0.0_

