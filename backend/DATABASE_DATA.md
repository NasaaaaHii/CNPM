# DATABASE DATA - Smart Bus System

> **Last Updated**: 10:44:07 17/11/2025  
> **Auto-generated**: Chạy `npm run db:fetch` để cập nhật

---

## Tổng quan

| Bảng | Số lượng records |
| --- | --- |
| `type_account` | 3 |
| `account` | 100 |
| `students` | 100 |
| `bus` | 100 |
| `routes` | 100 |
| `schedule` | 100 |

---

## Dữ liệu các bảng

### 1. Bảng `type_account`


| type_account_id | type_account_name |
| --- | --- |
| 1 | AdminAccount |
| 2 | DriverAccount |
| 3 | ParentAccount |

---

### 2. Bảng `account`


| user_name | user_id | type_account_id | password |
| --- | --- | --- | --- |
| user4 | 4 | 2 | 123456 |
| user5 | 5 | 2 | 123456 |
| user6 | 6 | 1 | 123456 |
| user7 | 7 | 3 | 123456 |
| user8 | 8 | 3 | 123456 |
| user9 | 9 | 2 | 123456 |
| user10 | 10 | 3 | 123456 |
| user11 | 11 | 3 | 123456 |
| user12 | 12 | 3 | 123456 |
| user13 | 13 | 2 | 123456 |
| user14 | 14 | 2 | 123456 |
| user15 | 15 | 2 | 123456 |
| user16 | 16 | 2 | 123456 |
| user17 | 17 | 3 | 123456 |
| user18 | 18 | 1 | 123456 |
| user19 | 19 | 3 | 123456 |
| user20 | 20 | 3 | 123456 |
| user21 | 21 | 2 | 123456 |
| user22 | 22 | 3 | 123456 |
| user23 | 23 | 3 | 123456 |
| user24 | 24 | 1 | 123456 |
| user25 | 25 | 3 | 123456 |
| user26 | 26 | 1 | 123456 |
| user27 | 27 | 2 | 123456 |
| user28 | 28 | 3 | 123456 |
| user29 | 29 | 2 | 123456 |
| user30 | 30 | 2 | 123456 |
| user31 | 31 | 3 | 123456 |
| user32 | 32 | 3 | 123456 |
| user33 | 33 | 3 | 123456 |
| user34 | 34 | 1 | 123456 |
| user35 | 35 | 3 | 123456 |
| user36 | 36 | 3 | 123456 |
| user37 | 37 | 3 | 123456 |
| user38 | 38 | 3 | 123456 |
| user39 | 39 | 3 | 123456 |
| user40 | 40 | 3 | 123456 |
| user41 | 41 | 3 | 123456 |
| user42 | 42 | 2 | 123456 |
| user43 | 43 | 1 | 123456 |
| user44 | 44 | 3 | 123456 |
| user45 | 45 | 1 | 123456 |
| user46 | 46 | 3 | 123456 |
| user47 | 47 | 1 | 123456 |
| user48 | 48 | 3 | 123456 |
| user49 | 49 | 3 | 123456 |
| user50 | 50 | 2 | 123456 |
| user51 | 51 | 1 | 123456 |
| user52 | 52 | 3 | 123456 |
| user53 | 53 | 3 | 123456 |
| user54 | 54 | 2 | 123456 |
| user55 | 55 | 2 | 123456 |
| user56 | 56 | 3 | 123456 |
| user57 | 57 | 3 | 123456 |
| user58 | 58 | 3 | 123456 |
| user59 | 59 | 1 | 123456 |
| user60 | 60 | 3 | 123456 |
| user61 | 61 | 3 | 123456 |
| user62 | 62 | 3 | 123456 |
| user63 | 63 | 3 | 123456 |
| user64 | 64 | 1 | 123456 |
| user65 | 65 | 2 | 123456 |
| user66 | 66 | 2 | 123456 |
| user67 | 67 | 2 | 123456 |
| user68 | 68 | 3 | 123456 |
| user69 | 69 | 3 | 123456 |
| user70 | 70 | 1 | 123456 |
| user71 | 71 | 2 | 123456 |
| user72 | 72 | 2 | 123456 |
| user73 | 73 | 2 | 123456 |
| user74 | 74 | 3 | 123456 |
| user75 | 75 | 2 | 123456 |
| user76 | 76 | 3 | 123456 |
| user77 | 77 | 2 | 123456 |
| user78 | 78 | 2 | 123456 |
| user79 | 79 | 3 | 123456 |
| user80 | 80 | 1 | 123456 |
| user81 | 81 | 3 | 123456 |
| user82 | 82 | 2 | 123456 |
| user83 | 83 | 3 | 123456 |
| user84 | 84 | 3 | 123456 |
| user85 | 85 | 3 | 123456 |
| user86 | 86 | 3 | 123456 |
| user87 | 87 | 3 | 123456 |
| user88 | 88 | 1 | 123456 |
| user89 | 89 | 1 | 123456 |
| user90 | 90 | 2 | 123456 |
| user91 | 91 | 3 | 123456 |
| user92 | 92 | 3 | 123456 |
| user93 | 93 | 2 | 123456 |
| user94 | 94 | 3 | 123456 |
| user95 | 95 | 1 | 123456 |
| user96 | 96 | 2 | 123456 |
| user97 | 97 | 3 | 123456 |
| user98 | 98 | 1 | 123456 |
| user99 | 99 | 1 | 123456 |
| user100 | 100 | 2 | 123456 |
| admin01 | 1 | 1 | admin123 |
| driver01 | 2 | 2 | driver123 |
| parent01 | 3 | 3 | parent123 |

---

### 3. Bảng `students`


| student_id | parent_id | student_name |
| --- | --- | --- |
| 1 | 11 | Đặng Thị Tuấn |
| 2 | 39 | Hoàng Minh Lan |
| 3 | 87 | Bùi Hoa Tuấn |
| 4 | 11 | Hoàng Huy Nam |
| 5 | 25 | Phạm Quang Hạnh |
| 6 | 58 | Lê Huy Hạnh |
| 7 | 94 | Đặng Dung Linh |
| 8 | 46 | Phạm Dung Hạnh |
| 9 | 61 | Nguyễn Lan Văn |
| 10 | 8 | Đặng Văn Anh |
| 11 | 81 | Hoàng Linh Lan |
| 12 | 92 | Hoàng Quang Tuấn |
| 13 | 39 | Trần Trang Lan |
| 14 | 32 | Phạm Anh Quang |
| 15 | 10 | Đặng Tuấn Tuấn |
| 16 | 87 | Lê Huy Trang |
| 17 | 81 | Vũ Hạnh Văn |
| 18 | 91 | Nguyễn Minh Thị |
| 19 | 74 | Bùi Hạnh Nam |
| 20 | 38 | Võ Hạnh Văn |
| 21 | 92 | Lê Tuấn Trang |
| 22 | 11 | Trần Nam Nam |
| 23 | 12 | Phạm Linh Hoa |
| 24 | 11 | Vũ Thị Hoa |
| 25 | 91 | Hoàng Huy Thị |
| 26 | 40 | Nguyễn Khanh Linh |
| 27 | 32 | Nguyễn Thị Khanh |
| 28 | 61 | Vũ Linh Hoa |
| 29 | 52 | Lê Văn Tuấn |
| 30 | 97 | Bùi Văn Tuấn |
| 31 | 74 | Đặng Trang Hoa |
| 32 | 8 | Võ Huy Tuấn |
| 33 | 79 | Phan Tuấn Linh |
| 34 | 94 | Bùi Anh Linh |
| 35 | 87 | Nguyễn Trang Khanh |
| 36 | 92 | Hoàng Lan Văn |
| 37 | 56 | Trần Khanh Khanh |
| 38 | 61 | Đặng Hạnh Nam |
| 39 | 36 | Phạm Hoa Huy |
| 40 | 17 | Lê Dung Lan |
| 41 | 22 | Trần Hoa Trang |
| 42 | 44 | Phan Trang Nam |
| 43 | 58 | Hoàng Huy Anh |
| 44 | 17 | Phạm Anh Dung |
| 45 | 37 | Phan Văn Anh |
| 46 | 94 | Phạm Quang Hạnh |
| 47 | 86 | Vũ Dung Anh |
| 48 | 60 | Phan Thị Linh |
| 49 | 63 | Đặng Nam Khanh |
| 50 | 85 | Nguyễn Văn Thị |
| 51 | 87 | Vũ Quang Hoa |
| 52 | 8 | Vũ Dung Quang |
| 53 | 10 | Bùi Khanh Hoa |
| 54 | 83 | Lê Dung Nam |
| 55 | 76 | Trần Dung Nam |
| 56 | 69 | Vũ Hạnh Khanh |
| 57 | 41 | Trần Văn Quang |
| 58 | 10 | Phạm Khanh Minh |
| 59 | 84 | Hoàng Hoa Minh |
| 60 | 81 | Võ Văn Hạnh |
| 61 | 52 | Lê Hạnh Anh |
| 62 | 46 | Bùi Linh Văn |
| 63 | 94 | Phạm Nam Lan |
| 64 | 92 | Lê Tuấn Minh |
| 65 | 84 | Phạm Hoa Linh |
| 66 | 33 | Đặng Nam Tuấn |
| 67 | 10 | Vũ Hoa Minh |
| 68 | 48 | Lê Minh Thị |
| 69 | 12 | Vũ Nam Quang |
| 70 | 44 | Lê Minh Nam |
| 71 | 32 | Võ Trang Quang |
| 72 | 60 | Phan Trang Tuấn |
| 73 | 10 | Phan Hạnh Quang |
| 74 | 25 | Hoàng Minh Linh |
| 75 | 46 | Võ Minh Trang |
| 76 | 19 | Lê Huy Anh |
| 77 | 33 | Phạm Lan Văn |
| 78 | 38 | Nguyễn Linh Linh |
| 79 | 22 | Phan Khanh Anh |
| 80 | 49 | Hoàng Trang Thị |
| 81 | 38 | Vũ Khanh Hạnh |
| 82 | 52 | Phạm Trang Hạnh |
| 83 | 36 | Võ Khanh Khanh |
| 84 | 86 | Nguyễn Nam Văn |
| 85 | 91 | Nguyễn Thị Khanh |
| 86 | 46 | Lê Tuấn Thị |
| 87 | 94 | Phan Thị Lan |
| 88 | 76 | Lê Tuấn Văn |
| 89 | 87 | Trần Anh Linh |
| 90 | 94 | Lê Khanh Trang |
| 91 | 63 | Lê Anh Quang |
| 92 | 40 | Lê Linh Văn |
| 93 | 7 | Phan Hạnh Khanh |
| 94 | 33 | Vũ Quang Lan |
| 95 | 28 | Đặng Dung Minh |
| 96 | 76 | Nguyễn Trang Huy |
| 97 | 76 | Bùi Anh Trang |
| 98 | 48 | Hoàng Tuấn Dung |
| 99 | 23 | Lê Lan Nam |
| 100 | 40 | Võ Quang Thị |

---

### 4. Bảng `bus`


| bus_id | license_plate_number | number_of_seats |
| --- | --- | --- |
| 1 | 58-612.41 | 29 |
| 2 | 51-110.20 | 35 |
| 3 | 60-308.17 | 16 |
| 4 | 56-803.73 | 40 |
| 5 | 68-500.71 | 16 |
| 6 | 61-913.77 | 16 |
| 7 | 78-352.44 | 24 |
| 8 | 64-885.72 | 24 |
| 9 | 61-386.81 | 40 |
| 10 | 77-924.62 | 16 |
| 11 | 59-698.24 | 45 |
| 12 | 58-196.66 | 35 |
| 13 | 57-636.86 | 24 |
| 14 | 58-172.43 | 16 |
| 15 | 74-406.35 | 29 |
| 16 | 51-418.78 | 16 |
| 17 | 74-414.43 | 45 |
| 18 | 65-427.11 | 45 |
| 19 | 65-620.20 | 16 |
| 20 | 58-576.10 | 40 |
| 21 | 51-203.66 | 35 |
| 22 | 60-824.39 | 35 |
| 23 | 57-526.44 | 40 |
| 24 | 57-981.99 | 35 |
| 25 | 76-991.74 | 29 |
| 26 | 52-627.95 | 35 |
| 27 | 52-123.55 | 35 |
| 28 | 54-846.90 | 45 |
| 29 | 53-711.21 | 29 |
| 30 | 73-794.77 | 24 |
| 31 | 72-980.24 | 29 |
| 32 | 77-568.18 | 40 |
| 33 | 65-507.93 | 35 |
| 34 | 65-676.76 | 16 |
| 35 | 62-251.23 | 40 |
| 36 | 77-417.36 | 40 |
| 37 | 53-339.56 | 35 |
| 38 | 64-816.22 | 35 |
| 39 | 65-218.81 | 35 |
| 40 | 53-825.99 | 45 |
| 41 | 78-862.64 | 24 |
| 42 | 51-602.38 | 40 |
| 43 | 77-679.83 | 24 |
| 44 | 74-589.23 | 29 |
| 45 | 78-556.20 | 16 |
| 46 | 73-861.12 | 35 |
| 47 | 77-709.50 | 29 |
| 48 | 67-738.15 | 29 |
| 49 | 71-230.51 | 29 |
| 50 | 69-958.46 | 24 |
| 51 | 54-137.82 | 45 |
| 52 | 77-377.65 | 45 |
| 53 | 65-166.50 | 24 |
| 54 | 78-423.76 | 35 |
| 55 | 57-373.26 | 16 |
| 56 | 68-475.17 | 45 |
| 57 | 67-604.13 | 40 |
| 58 | 60-328.15 | 29 |
| 59 | 50-830.84 | 16 |
| 60 | 72-637.33 | 40 |
| 61 | 68-653.20 | 35 |
| 62 | 51-936.18 | 24 |
| 63 | 65-575.92 | 29 |
| 64 | 58-142.73 | 16 |
| 65 | 67-380.11 | 16 |
| 66 | 59-521.52 | 45 |
| 67 | 56-607.52 | 40 |
| 68 | 66-963.83 | 45 |
| 69 | 67-910.37 | 29 |
| 70 | 65-292.54 | 40 |
| 71 | 57-789.50 | 16 |
| 72 | 57-408.79 | 29 |
| 73 | 78-473.47 | 40 |
| 74 | 60-984.76 | 35 |
| 75 | 58-853.59 | 45 |
| 76 | 60-717.16 | 16 |
| 77 | 69-923.80 | 35 |
| 78 | 76-423.67 | 29 |
| 79 | 79-999.34 | 24 |
| 80 | 71-654.46 | 35 |
| 81 | 53-976.26 | 35 |
| 82 | 63-860.40 | 24 |
| 83 | 67-771.66 | 24 |
| 84 | 72-528.48 | 40 |
| 85 | 51-791.40 | 16 |
| 86 | 51-935.67 | 29 |
| 87 | 72-772.50 | 45 |
| 88 | 62-146.53 | 45 |
| 89 | 70-747.60 | 35 |
| 90 | 76-899.27 | 29 |
| 91 | 74-192.36 | 45 |
| 92 | 59-534.98 | 29 |
| 93 | 54-949.34 | 24 |
| 94 | 64-361.88 | 16 |
| 95 | 59-168.72 | 16 |
| 96 | 67-502.25 | 29 |
| 97 | 53-930.17 | 35 |
| 98 | 53-488.98 | 40 |
| 99 | 78-183.88 | 16 |
| 100 | 61-703.61 | 35 |

---

### 5. Bảng `routes`


| route_id | route_name |
| --- | --- |
| 1 | Tuyến 1 - Quận Phú Nhuận |
| 2 | Tuyến 2 - Huyện Nhà Bè |
| 3 | Tuyến 3 - Quận 1 |
| 4 | Tuyến 4 - Quận Tân Bình |
| 5 | Tuyến 5 - Quận Tân Phú |
| 6 | Tuyến 6 - Quận 10 |
| 7 | Tuyến 7 - Quận Tân Bình |
| 8 | Tuyến 8 - Quận Gò Vấp |
| 9 | Tuyến 9 - Quận Phú Nhuận |
| 10 | Tuyến 10 - Quận 5 |
| 11 | Tuyến 11 - Quận Tân Phú |
| 12 | Tuyến 12 - Quận 3 |
| 13 | Tuyến 13 - Quận Phú Nhuận |
| 14 | Tuyến 14 - Quận Tân Bình |
| 15 | Tuyến 15 - Quận Thủ Đức |
| 16 | Tuyến 16 - Quận 7 |
| 17 | Tuyến 17 - Quận 5 |
| 18 | Tuyến 18 - Quận Gò Vấp |
| 19 | Tuyến 19 - Quận Thủ Đức |
| 20 | Tuyến 20 - Quận 5 |
| 21 | Tuyến 21 - Quận Tân Phú |
| 22 | Tuyến 22 - Huyện Nhà Bè |
| 23 | Tuyến 23 - Huyện Nhà Bè |
| 24 | Tuyến 24 - Quận 3 |
| 25 | Tuyến 25 - Quận Thủ Đức |
| 26 | Tuyến 26 - Huyện Nhà Bè |
| 27 | Tuyến 27 - Quận Phú Nhuận |
| 28 | Tuyến 28 - Quận Gò Vấp |
| 29 | Tuyến 29 - Quận Thủ Đức |
| 30 | Tuyến 30 - Quận 5 |
| 31 | Tuyến 31 - Quận 5 |
| 32 | Tuyến 32 - Quận 10 |
| 33 | Tuyến 33 - Huyện Nhà Bè |
| 34 | Tuyến 34 - Quận 3 |
| 35 | Tuyến 35 - Quận 10 |
| 36 | Tuyến 36 - Quận Tân Phú |
| 37 | Tuyến 37 - Quận Tân Phú |
| 38 | Tuyến 38 - Quận 1 |
| 39 | Tuyến 39 - Quận Bình Thạnh |
| 40 | Tuyến 40 - Quận Tân Phú |
| 41 | Tuyến 41 - Quận 1 |
| 42 | Tuyến 42 - Quận Thủ Đức |
| 43 | Tuyến 43 - Huyện Nhà Bè |
| 44 | Tuyến 44 - Huyện Nhà Bè |
| 45 | Tuyến 45 - Quận Phú Nhuận |
| 46 | Tuyến 46 - Quận 1 |
| 47 | Tuyến 47 - Quận 1 |
| 48 | Tuyến 48 - Quận 7 |
| 49 | Tuyến 49 - Quận 5 |
| 50 | Tuyến 50 - Quận Gò Vấp |
| 51 | Tuyến 51 - Quận 5 |
| 52 | Tuyến 52 - Quận Tân Bình |
| 53 | Tuyến 53 - Quận 3 |
| 54 | Tuyến 54 - Quận 7 |
| 55 | Tuyến 55 - Quận Phú Nhuận |
| 56 | Tuyến 56 - Quận 3 |
| 57 | Tuyến 57 - Quận 7 |
| 58 | Tuyến 58 - Quận Gò Vấp |
| 59 | Tuyến 59 - Quận 5 |
| 60 | Tuyến 60 - Huyện Nhà Bè |
| 61 | Tuyến 61 - Quận Phú Nhuận |
| 62 | Tuyến 62 - Quận 10 |
| 63 | Tuyến 63 - Quận Thủ Đức |
| 64 | Tuyến 64 - Quận Gò Vấp |
| 65 | Tuyến 65 - Huyện Nhà Bè |
| 66 | Tuyến 66 - Quận Tân Phú |
| 67 | Tuyến 67 - Quận 1 |
| 68 | Tuyến 68 - Quận 10 |
| 69 | Tuyến 69 - Quận 3 |
| 70 | Tuyến 70 - Quận Bình Thạnh |
| 71 | Tuyến 71 - Quận 10 |
| 72 | Tuyến 72 - Huyện Nhà Bè |
| 73 | Tuyến 73 - Quận Thủ Đức |
| 74 | Tuyến 74 - Quận 7 |
| 75 | Tuyến 75 - Quận 5 |
| 76 | Tuyến 76 - Quận Tân Bình |
| 77 | Tuyến 77 - Quận Gò Vấp |
| 78 | Tuyến 78 - Quận Phú Nhuận |
| 79 | Tuyến 79 - Quận Thủ Đức |
| 80 | Tuyến 80 - Quận 5 |
| 81 | Tuyến 81 - Quận 1 |
| 82 | Tuyến 82 - Quận 5 |
| 83 | Tuyến 83 - Quận Tân Bình |
| 84 | Tuyến 84 - Quận 1 |
| 85 | Tuyến 85 - Quận 5 |
| 86 | Tuyến 86 - Quận 10 |
| 87 | Tuyến 87 - Quận Tân Phú |
| 88 | Tuyến 88 - Quận Thủ Đức |
| 89 | Tuyến 89 - Quận Tân Phú |
| 90 | Tuyến 90 - Quận 5 |
| 91 | Tuyến 91 - Quận Phú Nhuận |
| 92 | Tuyến 92 - Quận Tân Phú |
| 93 | Tuyến 93 - Quận 1 |
| 94 | Tuyến 94 - Quận 1 |
| 95 | Tuyến 95 - Quận 1 |
| 96 | Tuyến 96 - Huyện Nhà Bè |
| 97 | Tuyến 97 - Quận Bình Thạnh |
| 98 | Tuyến 98 - Quận 3 |
| 99 | Tuyến 99 - Quận Phú Nhuận |
| 100 | Tuyến 100 - Quận 5 |

---

### 6. Bảng `schedule`


| driver_id | bus_id | route_id | schedule_date |
| --- | --- | --- | --- |
| 16 | 2 | 64 | 2025-10-12 |
| 9 | 61 | 59 | 2025-08-19 |
| 13 | 32 | 74 | 2025-05-21 |
| 93 | 79 | 51 | 2025-09-22 |
| 54 | 41 | 12 | 2025-09-20 |
| 50 | 7 | 7 | 2025-08-11 |
| 50 | 38 | 25 | 2025-05-04 |
| 55 | 78 | 85 | 2025-05-10 |
| 90 | 77 | 36 | 2025-11-23 |
| 77 | 3 | 81 | 2025-03-03 |
| 30 | 19 | 61 | 2025-05-19 |
| 67 | 7 | 83 | 2025-10-27 |
| 27 | 6 | 46 | 2025-01-11 |
| 16 | 3 | 67 | 2025-08-01 |
| 65 | 43 | 78 | 2025-10-03 |
| 14 | 32 | 75 | 2025-11-10 |
| 14 | 69 | 47 | 2025-02-05 |
| 54 | 53 | 90 | 2025-09-05 |
| 73 | 4 | 33 | 2025-05-11 |
| 9 | 48 | 17 | 2025-11-08 |
| 42 | 34 | 58 | 2025-05-22 |
| 77 | 9 | 3 | 2025-06-11 |
| 65 | 58 | 32 | 2025-05-08 |
| 30 | 56 | 71 | 2025-06-22 |
| 50 | 55 | 68 | 2025-04-04 |
| 78 | 46 | 82 | 2025-08-25 |
| 9 | 57 | 10 | 2025-03-12 |
| 77 | 76 | 87 | 2025-05-24 |
| 75 | 17 | 53 | 2025-05-23 |
| 13 | 6 | 36 | 2025-05-25 |
| 42 | 54 | 15 | 2025-01-09 |
| 90 | 82 | 98 | 2025-01-15 |
| 27 | 74 | 95 | 2025-08-13 |
| 77 | 32 | 13 | 2025-05-06 |
| 3 | 81 | 72 | 2025-02-25 |
| 21 | 38 | 43 | 2025-10-03 |
| 100 | 53 | 29 | 2025-02-07 |
| 5 | 95 | 70 | 2025-03-15 |
| 50 | 88 | 24 | 2025-05-19 |
| 55 | 50 | 13 | 2025-03-09 |
| 96 | 27 | 13 | 2025-06-06 |
| 77 | 29 | 71 | 2025-09-04 |
| 27 | 15 | 61 | 2025-05-02 |
| 55 | 39 | 54 | 2025-01-04 |
| 78 | 85 | 69 | 2025-09-15 |
| 50 | 4 | 79 | 2025-11-04 |
| 27 | 90 | 49 | 2025-07-24 |
| 93 | 21 | 13 | 2025-06-24 |
| 4 | 69 | 51 | 2025-10-28 |
| 29 | 21 | 1 | 2025-06-07 |
| 13 | 60 | 88 | 2025-06-06 |
| 90 | 41 | 8 | 2025-02-25 |
| 21 | 14 | 8 | 2025-01-22 |
| 5 | 93 | 71 | 2025-10-28 |
| 3 | 60 | 19 | 2025-11-06 |
| 67 | 80 | 57 | 2025-03-12 |
| 66 | 68 | 90 | 2025-06-13 |
| 77 | 79 | 59 | 2025-09-01 |
| 42 | 13 | 66 | 2025-10-24 |
| 42 | 39 | 50 | 2025-11-04 |
| 75 | 77 | 49 | 2025-02-11 |
| 72 | 37 | 39 | 2025-11-19 |
| 90 | 19 | 59 | 2025-10-01 |
| 5 | 27 | 9 | 2025-04-26 |
| 21 | 83 | 43 | 2025-07-20 |
| 100 | 13 | 87 | 2025-04-23 |
| 78 | 58 | 4 | 2025-03-14 |
| 14 | 84 | 13 | 2025-10-16 |
| 15 | 64 | 47 | 2025-07-06 |
| 16 | 6 | 88 | 2025-07-08 |
| 14 | 90 | 5 | 2025-02-13 |
| 3 | 82 | 79 | 2025-11-28 |
| 30 | 37 | 73 | 2025-05-17 |
| 96 | 37 | 8 | 2025-05-20 |
| 27 | 18 | 98 | 2025-05-04 |
| 29 | 88 | 38 | 2025-09-20 |
| 72 | 79 | 99 | 2025-09-07 |
| 21 | 86 | 23 | 2025-11-26 |
| 42 | 72 | 95 | 2025-09-11 |
| 90 | 75 | 32 | 2025-02-16 |
| 13 | 13 | 81 | 2025-03-20 |
| 15 | 42 | 18 | 2025-06-07 |
| 9 | 12 | 66 | 2025-01-07 |
| 77 | 73 | 49 | 2025-11-18 |
| 96 | 58 | 75 | 2025-11-22 |
| 42 | 79 | 73 | 2025-04-02 |
| 66 | 1 | 72 | 2025-11-07 |
| 5 | 24 | 58 | 2025-07-05 |
| 96 | 51 | 91 | 2025-05-11 |
| 54 | 43 | 92 | 2025-11-09 |
| 5 | 77 | 93 | 2025-08-10 |
| 14 | 100 | 33 | 2025-08-17 |
| 75 | 74 | 51 | 2025-01-28 |
| 29 | 51 | 2 | 2025-04-14 |
| 75 | 54 | 50 | 2025-10-24 |
| 14 | 6 | 27 | 2025-06-11 |
| 96 | 33 | 87 | 2025-02-25 |
| 66 | 40 | 79 | 2025-11-12 |
| 66 | 45 | 90 | 2025-08-17 |
| 16 | 99 | 21 | 2025-11-08 |

---

## Cách cập nhật dữ liệu

### Tự động (Khuyên dùng)
```bash
cd /home/thanhhai/Documents/CNPM/CNPM/backend
npm run db:fetch
```

### Thủ công - Kiểm tra từng bảng trên Terminal

```bash
# Chuẩn bị (lấy DATABASE_URL từ file .env)
export DATABASE_URL="your_supabase_connection_string"

# Xem từng bảng
psql $DATABASE_URL -c "SELECT * FROM type_account;"
psql $DATABASE_URL -c "SELECT * FROM account;"
psql $DATABASE_URL -c "SELECT * FROM students;"
psql $DATABASE_URL -c "SELECT * FROM bus;"
psql $DATABASE_URL -c "SELECT * FROM routes;"
psql $DATABASE_URL -c "SELECT * FROM schedule;"

# Xem tổng quan
psql $DATABASE_URL -c "SELECT 
  (SELECT COUNT(*) FROM account) as accounts,
  (SELECT COUNT(*) FROM students) as students,
  (SELECT COUNT(*) FROM bus) as buses,
  (SELECT COUNT(*) FROM routes) as routes,
  (SELECT COUNT(*) FROM schedule) as schedules;"
```

### Hoặc dùng Supabase CLI
```bash
npm install -g supabase
supabase link --project-ref your-project-ref
supabase db query "SELECT * FROM type_account;"
```

---

*File này được tạo tự động bởi `scripts/fetch-database-data.js`*
