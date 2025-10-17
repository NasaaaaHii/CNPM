# Công Nghệ Phần Mềm :computer:

> [!IMPORTANT]
>
> ## :point_right: Thông tin thành viên nhóm
>
> |    MSSV    |      Họ tên       |
> | :--------: | :---------------: |
> | 3123410007 | Nguyễn Hoàng Anh  |
> | 3123410091 |  Huỳnh Thanh Hải  |
> | 3123410239 | Nguyễn Thanh Nhàn |
> | 3123410025 | Nguyễn Âu Gia Bảo |
> | 3123410039 |   Lê Mạnh Cường   |

---

## Metting

[Meeting_nhom2](https://docs.google.com/document/d/1lQykKHJ-ZNztgOThJkBnfzYeF6E_ISaT/edit)

## Cấu trúc project

```bash
CNPM/
├── frontend/ # Frontend (Next.js + Tailwind + TS)
│ ├── package.json
│ ├── package-lock.json
│ └── src/...
│
├── backend/ # Backend (Express + TS)
│ ├── package.json
│ ├── package-lock.json
│ └── src/...
│
├── README.md
└── .gitignore
├── docker-compose.dev.yml
└── .gitignore

```

## ⚡ Yêu cầu môi trường

- \*\*Node.js === v22.14.0
- \*\*npm === 10.9.2

Kiểm tra version:

```bash
node -v
npm -v
```

# Cách chạy project

```bash
git clone <link-project>
cd CNPM
```

## Backend

```bash
cd backend
npm install # cài dependencies
npm run dev # chạy server ở chế độ dev (nodemon) -> run backend
---Build ra file .js
npm run build
npm start # -> http://localhost:5000
```

## Frontend

```bash
cd frontend
npm install # cài dependencies
npm run dev # chạy frontend (nextjs) -> http://localhost:3000
```

# RUN DOCKER
<!-- ở thư mục CNPM -->
docker compose -f docker-compose.dev.yml up --build # chạy cả fe + be
<!-- nếu muốn chạy riêng đổi up thành frontend or backend -->

### Note

- selenium,vercel,ci/cd
- mô hình aida,scrum cycle,agile scrum
- plantUML,latex
- tích hợp Zod để validation
- tối ưu performance: thư viện lodash, (useTransition), Suspense, API cache, Lazy loading,
-google map: Polyline, Marker(đánh dấu điểm)
