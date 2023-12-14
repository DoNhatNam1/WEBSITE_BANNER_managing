-- 1. xóa dữ liệu trong bảng CHAMCONG của nhân viên có mã 'EMP001' trong ngày '2023-12-01':
   DELETE FROM CHAMCONG
   WHERE MANV = 'EMP001' AND NGAY = '2023-12-01';

--    2. xóa tất cả dữ liệu trong bảng CHAMCONG của nhân viên có mã 'EMP002':
   DELETE FROM CHAMCONG
   WHERE MANV = 'EMP002';

--    3. xóa toàn bộ dữ liệu trong bảng CHAMCONG của tất cả nhân viên trong tháng 9 năm 2022:
   DELETE FROM CHAMCONG
   WHERE MONTH(NGAY) = 12 AND YEAR(NGAY) = 2023;

--    4. xóa tất cả dữ liệu trong bảng CHAMCONG của nhân viên không có bản ghi nào trong bảng NHANVIEN:
   DELETE FROM CHAMCONG
   WHERE MANV NOT IN (SELECT MANV FROM NHANVIEN);

--    5. xóa toàn bộ dữ liệu trong bảng CHAMCONG:
   DELETE FROM CHAMCONG;