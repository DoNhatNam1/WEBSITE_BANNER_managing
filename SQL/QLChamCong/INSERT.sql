INSERT INTO QUANLY
(
 [IDQUANLY], [TEN], [EMAIL], [TAIKHOAN], [MATKHAU]
)
VALUES
(
 'QL001', N'Mai Minh Hùng', 'maiminhhung@gmail.com', 'Admin1', '123'
),
( 
 'QL002', N'Huỳnh Thị Kim Thời', 'kimthoi@gmail.com', 'Admin2', '123'
)
GO

INSERT INTO PHONGBAN
(
 [IDPHONGBAN], [TENPB], [IDQUANLY]
)
VALUES
(
 7, N'Kỹ Thuật', 'QL001'
),
( 
 9, N'Giao Diện', 'QL002'
)
GO

INSERT INTO PHONGBAN
(
 [IDPHONGBAN], [TENPB], [IDQUANLY]
)
VALUES
(
 7, N'Kỹ Thuật', 'QL001'
),
( 
 9, N'Giao Diện', 'QL002'
)
GO

INSERT INTO NHANVIEN
(
 [IDPHONGBAN], [IDNHANVIEN], [TENNHANVIEN], [EMAIL], [VITRICONGVIEC]
)
VALUES
(
 7,'NV001', N'Huỳnh Anh Khoa', 'khoahuynh@gmail.com', N'Thành Viên cũ'
),
(
 7,'NV002', N'Nguyễn Tấn Đạt', 'datnguyen123@gmail.com', N'Trưởng nhóm'
),
(
 7,'NV003', N'Vũ Quốc Tùng', 'tung@gmail.com', N'Thành Viên cũ'
),
(
 7,'NV001', N'Trần Anh Tuấn', 'tuantran@gmail.com', N'Thành Viên mới'
),
(
 9,'NV022', N'Nguyễn Bá Hùng', 'hung@gmail.com', N'Thành Viên cũ'
),
(
 9,'NV025', N'Bùi Hồ Xuân An', 'an@gmail.com', N'Thành Viên cũ'
),
(
 9,'NV123', N'Bùi Kim Ngân', 'ngabbui@gmail.com', N'Trưởng nhóm'
),
(
 9,'NV147', N'Apple', 'SmallApple@gmail.com', N'Thành Viên mới'
)
GO

INSERT INTO CHANCONG
(
 [IDCHAMCONG], [IDNHANVIEN], [CHECKIN], [CHECKOUT], [SOGIOLAMTHEM]
)
VALUES
(
 1, 'NV001', 1, 1, 0
),
(
 2, 'NV002', 0, 0, 0
),
(
 3, 'NV003', 1, 0, 8
),
(
 4, 'NV123', 0, 0, 3
),
(
 6, 'NV147', 1, 1, 12
),
(
 9, 'NV011', 0, 0, 5
),
(
 11, 'NV022', 0, 0, 2
),
(
 12, 'NV025', 1, 1, 1
)
GO

INSERT INTO BAOCAO
(
 [IDBAOCAO], [IDNHANVIEN], [SOGIOLAMVIECTRONGTUAN], [NGAYBAOCAO]
)
VALUES
(
 1, 'NV001', 63, '2023-12-1'
),
(
 2, 'NV002', 45, '2023-12-8'
),
(
 3, 'NV003', 63, '2023-12-15'
),
(
 4, 'NV011', 54, '2023-12-24'
),
(
 5, 'NV022', 54, '2023-12-31'
),
(
 6, 'NV025', 63, '2023-11-1'
),
(
 7, 'NV123', 54, '2023-11-8'
),
(
 8, 'NV147', 63, '2023-11-15'
)
GO

INSERT INTO YEUCAUNGHI
(
 [IDYEUCAU], [IDNHANVIEN], [SONGAYNGHI], [LYDO]
)
VALUES
(
 1, 'NV002', 2, N'Có việc đột xuất'
),
(
 2, 'NV011', 1, 'Bệnh'
),
(
 3, 'NV022', 1, 'Hư xe'
),
(
 4, 'NV123', 1, 'Bệnh'
)

GO



