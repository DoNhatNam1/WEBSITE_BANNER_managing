INSERT INTO KHACH (MAKH, TENCTY, DCHICTY, NGUOIDAIDIEN, SDT)
VALUES
(1, N'Công ty A', N'Địa chỉ A', N'Người đại diện A', '1234567890'),
(2, N'Công ty B', N'Địa chỉ B', N'Người đại diện B', '0987654321'),
(3, 'Công ty C', N'Địa chỉ C', N'Người đại diện C', '0123456789'),
(4, N'Công ty D', N'Địa chỉ D', N'Người đại diện D', '9876543210'),
(5, N'Công ty E', N'Địa chỉ E', N'Người đại diện E', '1112223333'),
(6, N'Công ty F', N'Địa chỉ F', N'Người đại diện F', '4445556666'),
(7, N'Công ty G', N'Địa chỉ G', N'Người đại diện G', '7778889999'),
(8, N'Công ty H', N'Địa chỉ H', N'Người đại diện H', '0001112222'),
(9, N'Công ty I', N'Địa chỉ I', N'Người đại diện I', '3334445555'),
(10, N'Công ty J', N'Địa chỉ J', N'Người đại diện J', '6667778888');

INSERT INTO NHANVIEN (MANV, HO, TEN, NGAYSINH, NGAYVAOLAM, DCHI)
VALUES
(1, N'Nguyễn', N'Văn A', '1990-01-01', '2020-01-01', N'Địa chỉ A'),
(2, N'Trần', N'Thị B', '1995-02-02', '2019-02-02', N'Địa chỉ B'),
(3, N'Lê', N'Văn C', '1992-03-03', '2018-03-03', N'Địa chỉ C'),
(4, N'Phạm', N'Thị D', '1988-04-04', '2017-04-04', N'Địa chỉ D'),
(5, N'Hoàng', N'Văn E', '1993-05-05', '2016-05-05', N'Địa chỉ E'),
(6, N'Vũ', N'Thị F', '1991-06-06', '2015-06-06', N'Địa chỉ F'),
(7, N'Đặng', N'Văn G', '1989-07-07', '2014-07-07', N'Địa chỉ G'),
(8, N'Bùi', N'Thị H', '1994-08-08', '2013-08-08', N'Địa chỉ H'),
(9, N'Mai', N'Văn I', '1996-09-09', '2012-09-09', N'Địa chỉ I'),
(10, N'Đỗ', N'Thị J', '1997-10-10', '2011-10-10', N'Địa chỉ J');

INSERT INTO HANGHOA (MAHG, TENHG, DGIA)
VALUES
(1, N'Hàng hóa A', 1000000.00),
(2, N'Hàng hóa B', 500000.00),
(3, N'Hàng hóa C', 800000.00),
(4, N'Hàng hóa D', 1200000.00),
(5, N'Hàng hóa E', 1500000.00),
(6, N'Hàng hóa F', 900000.00),
(7, N'Hàng hóa G', 700000.00),
(8, N'Hàng hóa H', 1100000.00),
(9, N'Hàng hóa H', 1100000.00),
(10, N'Hàng hóa I', 850000.00);

INSERT INTO DONHANG (MADDH, MAKH, MANV, NGAYDAT, NGAYPHAIGIAO, DCHIGIAO, TPHOGIAO, TRIGIA)
VALUES
(1, 1, 1, '2021-01-01', '2021-01-05', N'Địa chỉ giao hàng A', N'Người giao hàng A', 1500000.00),
(2, 2, 2, '2021-02-01', '2021-02-05', N'Địa chỉ giao hàng B', N'Người giao hàng B', 2000000.00),
(3, 3, 3, '2021-03-01', '2021-03-05', N'Địa chỉ giao hàng C', N'Người giao hàng C', 1800000.00),
(4, 4, 4, '2021-04-01', '2021-04-05', N'Địa chỉ giao hàng D', N'Người giao hàng D', 2200000.00),
(5, 5, 5, '2021-05-01', '2021-05-05', N'Địa chỉ giao hàng E', N'Người giao hàng E', 2500000.00),
(6, 6, 6, '2021-06-01', '2021-06-05', N'Địa chỉ giao hàng F', N'Người giao hàng F', 1900000.00),
(7, 7, 7, '2021-07-01', '2021-07-05', N'Địa chỉ giao hàng G', N'Người giao hàng G', 1700000.00),
(8, 8, 8, '2021-08-01', '2021-08-05', N'Địa chỉ giao hàng H', N'Người giao hàng H', 2100000.00),
(9, 9, 9, '2021-09-01', '2021-09-05', N'Địa chỉ giao hàng I', N'Người giao hàng I', 1600000.00),
(10, 10, 10, '2021-10-01', '2021-10-05', N'Địa chỉ giao hàng J', N'Người giao hàng J', 1800000.00);

INSERT INTO CT_DDH (MADDH, MAHG, SL, DONGIA)
VALUES
(1, 1, 10, 1000000.00),
(2, 2, 20, 500000.00),
(3, 3, 30, 800000.00),
(4, 4, 40, 1200000.00),
(5, 5, 50, 1500000.00),
(6, 6, 60, 900000.00),
(7, 7, 70, 700000.00),
(8, 8, 80, 1100000.00),
(9, 9, 90, 950000.00),
(10, 10, 100, 850000.00);