SELECT * from [dbo].[BOPHAN]
SELECT * from [dbo].[CHAMCONG]
SELECT * from [dbo].[NHANVIEN]
SELECT * from [dbo].[CHUCVU]
SELECT * from [dbo].[QUANLY]

-- 1 Lấy thông tin tất cả nhân viên và thông tin bộ phận tương ứng của họ.

   SELECT NV.MANV, NV.TENNV, BP.TENBP
   FROM NHANVIEN NV
   INNER JOIN BOPHAN BP ON NV.MABP = BP.MABP;

--    2. Lấy danh sách nhân viên và chức vụ của họ theo điều kiện tên bộ phận.
   SELECT NV.TENNV, CV.CHUCVU
   FROM NHANVIEN NV
   INNER JOIN CHUCVU CV ON NV.MACV = CV.MACV
   INNER JOIN BOPHAN BP ON NV.MABP = BP.MABP
   WHERE BP.TENBP = N'Bộ phận A';

--   3. Lấy thông tin ngày và số giờ công của nhân viên trong một khoảng thời gian.
   SELECT CC.NGAY, CC.SOGIOCONG
   FROM CHAMCONG CC
   WHERE CC.MANV = 'NV001' AND CC.NGAY BETWEEN '2022-09-01' AND '2022-09-30';

--    4. Lấy thông tin nhân viên và chức vụ.
   SELECT NV.TENNV, CV.CHUCVU
   FROM NHANVIEN NV
   INNER JOIN CHUCVU CV ON NV.MACV = CV.MACV

--    5.Lấy thông tin nhân viên, bộ phận và chức vụ cùng với số giờ công của họ trong một ngày cụ thể.
   SELECT NV.TENNV, BP.TENBP, CV.CHUCVU, CC.SOGIOCONG
   FROM NHANVIEN NV
   INNER JOIN BOPHAN BP ON NV.MABP = BP.MABP
   INNER JOIN CHUCVU CV ON NV.MACV = CV.MACV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   WHERE CC.NGAY = '2022-09-01';

--    6. Lấy thông tin nhân viên và số giờ làm việc của họ từ ngày X đến ngày Y.
   SELECT NV.TENNV, CC.SOGIOCONG
   FROM NHANVIEN NV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   WHERE CC.NGAY BETWEEN '2022-09-01' AND '2022-09-30';

--    7. Lấy danh sách nhân viên và tổng số giờ làm việc của mỗi nhân viên trong tháng hiện tại.
   SELECT NV.TENNV, SUM(CC.SOGIOCONG) AS TONGGIOCONG
   FROM NHANVIEN NV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   WHERE MONTH(CC.NGAY) = MONTH(GETDATE()) AND YEAR(CC.NGAY) = YEAR(GETDATE())
   GROUP BY NV.TENNV;

--    8. Lấy danh sách các chức vụ có số lượng nhân viên.
   SELECT CV.CHUCVU, COUNT(NV.MANV) AS SOLUONG
   FROM CHUCVU CV
   INNER JOIN NHANVIEN NV ON CV.MACV = NV.MACV
   GROUP BY CV.CHUCVU
   HAVING COUNT(NV.MANV) > 0;

--    9. Lấy thông tin nhân viên và số giờ làm việc cao nhất của mỗi nhân viên.
   SELECT NV.TENNV, MAX(CC.SOGIOCONG) AS MAXGIOCONG
   FROM NHANVIEN NV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   GROUP BY NV.TENNV;

--    10. Lấy danh sách bộ phận và số lượng nhân viên của mỗi bộ phận có số giờ công lớn hơn 5.
   SELECT BP.TENBP, COUNT(NV.MANV) AS SOLUONG
   FROM BOPHAN BP
   INNER JOIN NHANVIEN NV ON BP.MABP = NV.MABP
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   GROUP BY BP.TENBP
   HAVING SUM(CC.SOGIOCONG) > 5;

--    11. Lấy thông tin nhân viên và số giờ công của họ trong một khoảng thời gian, sắp xếp theo số giờ công giảm dần.
   SELECT NV.TENNV, CC.SOGIOCONG
   FROM NHANVIEN NV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   WHERE CC.NGAY BETWEEN '2023-12-01' AND '2023-12-02'
   ORDER BY CC.SOGIOCONG DESC;

--    12. Lấy thông tin nhân viên và số giờ công cao nhất của mỗi ngày.
   SELECT CC.NGAY, NV.TENNV, MAX(CC.SOGIOCONG) AS MAXGIOCONG
   FROM CHAMCONG CC
   INNER JOIN NHANVIEN NV ON CC.MANV = NV.MANV
   GROUP BY CC.NGAY,NV.TENNV

   -- 13. Lấy danh sách nhân viên và số giờ công của họ trong một tháng cụ thể, sắp xếp theo số giờ công tăng dần.
   SELECT NV.TENNV, SUM(CC.SOGIOCONG) AS TONGGIOCONG
   FROM NHANVIEN NV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   WHERE MONTH(CC.NGAY) = 12 AND YEAR(CC.NGAY) = 2023
   GROUP BY NV.TENNV
   ORDER BY TONGGIOCONG ASC;

   -- 14. Lấy thông tin chức vụ và số lượng nhân viên theo chức vụ, sắp xếp theo số lượng nhân viên giảm dần.
   SELECT CV.CHUCVU, COUNT(NV.MANV) AS SOLUONG
   FROM CHUCVU CV
   INNER JOIN NHANVIEN NV ON CV.MACV = NV.MACV
   GROUP BY CV.CHUCVU
   ORDER BY SOLUONG DESC;

   -- 15. Lấy danh sách nhân viên và tổng số giờ làm việc của mỗi nhân viên trong từng tháng, sắp xếp theo tổng số giờ công giảm dần.
   SELECT NV.TENNV, MONTH(CC.NGAY) AS THANG, SUM(CC.SOGIOCONG) AS TONGGIOCONG
   FROM NHANVIEN NV
   INNER JOIN CHAMCONG CC ON NV.MANV = CC.MANV
   GROUP BY NV.TENNV, MONTH(CC.NGAY)
   ORDER BY TONGGIOCONG DESC;


