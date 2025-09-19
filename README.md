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

## Cấu trúc project

```bash
CNPM/
├── client/ # Frontend (Next.js + Tailwind + TS)
│ ├── package.json
│ ├── package-lock.json
│ └── src/...
│
├── server/ # Backend (Express + TS)
│ ├── package.json
│ ├── package-lock.json
│ └── src/...
│
├── README.md
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
cd server
npm install # cài dependencies
npm run dev # chạy server ở chế độ dev (nodemon)
---Build ra file .js
npm run build
npm start # -> http://localhost:5000
```
## Frontend
```bash
cd client
npm install # cài dependencies
npm run dev # chạy frontend (nextjs) -> http://localhost:3000
```