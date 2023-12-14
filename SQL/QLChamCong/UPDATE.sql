-- 1. Cập nhật lương của nhân viên có mã 'NV001' thành 1500.
   UPDATE NHANVIEN
   SET LUONG = 1500
   WHERE MANV = 'NV001';

--    2. Cập nhật lương của nhân viên từ bảng NHANVIEN dựa trên lương của chức vụ tương ứng từ bảng CHUCVU.
   UPDATE NHANVIEN
   SET LUONG = CV.LUONG
   FROM CHUCVU CV
   WHERE NHANVIEN.MACV = CV.MACV;

--    3.cập nhật số giờ công của tất cả nhân viên trong tháng 12 năm 2023 trong bảng CHAMCONG:
   UPDATE CHAMCONG
   SET SOGIOCONG = 160
   WHERE MONTH(NGAY) = 12 AND YEAR(NGAY) = 2023;




