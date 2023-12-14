USE QLNhanSuDb

-- Select rows from a Table or View 'DEAN' in schema 'SchemaName'
SELECT * FROM [DEAN]

SELECT * FROM [dbo].[PHONGBAN]


SELECT * FROM DIADIEM_PHG


-- SELECT * FROM CONGVIEC


SELECT * FROM PHANCONG

SELECT * FROM [NHANVIEN]

SELECT * FROM THANHNHAN

 	/* add search conditions here */


	-- CÂU 1 
SELECT *
FROM [NHANVIEN]
WHERE [PHG] = 5;

-- CÂU 2 
SELECT *
FROM [NHANVIEN]
WHERE [LUONG] > 25000;


-- CÂU 3 
SELECT *
FROM [NHANVIEN]
WHERE ([PHG] = 1 AND [LUONG] > 65000)
   OR ([PHG] = 2 AND [LUONG] >= 70000);

-- CÂU 4 
SELECT [HONV],[TENLOT],[TENNV]
FROM [NHANVIEN]
WHERE [DCHI] = N'TP HCM';

-- CÂU 5 [PHG]
SELECT [HONV],[TENLOT],[TENNV]
FROM [NHANVIEN]
WHERE [HONV] LIKE 'N%';

-- CÂU 6 
SELECT [NGSINH], [DCHI]
FROM [NHANVIEN]
WHERE HONV = N'lê'
AND TENLOT = N'Quỳnh'
AND TENNV = N'Như';

-- CÂU 7 
SELECT *
FROM [NHANVIEN]
WHERE YEAR(NGSINH) BETWEEN 1955 AND 1975;

-- CÂU 8 
SELECT [HONV], [TENLOT], [TENNV], [NGSINH]
FROM [NHANVIEN];

-- CÂU 9 
SELECT [TENNV], YEAR(GETDATE()) - YEAR([NGSINH]) - 
    CASE 
        WHEN MONTH(GETDATE()) < MONTH([NGSINH]) OR (MONTH(GETDATE()) = MONTH([NGSINH]) AND DAY(GETDATE()) < DAY(NGSINH)) 
        THEN 1 
        ELSE 0 
    END AS [TUOI]
FROM [NHANVIEN];

-- CÂU 10 [PHG]
SELECT pb.TENPHG, ddp.DIADIEM
FROM [PHONGBAN] pb
JOIN [DIADIEM_PHG] ddp ON pb.MAPHG = ddp.MAPHG;

-- CÂU 11 
SELECT [TENPHG],[TENNV]
FROM [NHANVIEN],[PHONGBAN]
WHERE [PHONGBAN].[TRPHG] = [NHANVIEN].MANV;

-- CÂU 12 
SELECT [TENNV], [DCHI]
FROM [NHANVIEN], [PHONGBAN]
WHERE PHONGBAN.MAPHG=[NHANVIEN].[PHG] AND TENPHG = N'Nghiên cứu'

-- CÂU 13 
SELECT [TENDA], [TENPHG], [HONV], [TENLOT], [TENNV], [NG_NHANCHUC], [DDIEM_DA]
FROM [NHANVIEN], [DEAN], [PHONGBAN]
WHERE [PHONGBAN].[TRPHG]=[NHANVIEN].[MANV] AND [DEAN].[PHONG] = [PHONGBAN].[MAPHG] AND [DDIEM_DA] = N'Nha Trang'

-- CÂU 14 
SELECT [HONV], [TENLOT], [TENNV], [TENTN]
FROM [NHANVIEN],[THANNHAN]
WHERE [THANNHAN].[MA_NVIEN] = [NHANVIEN].[MANV]
AND [NHANVIEN].[PHAI] = N'Nữ';

--CÂU 15 
SELECT [NV1].[TENNV] AS NV, [NV2].[TENNV] AS NQL
FROM [NHANVIEN] NV1
JOIN [NHANVIEN] NV2 ON [NV1].[MA_NQL] = [NV2].[MANV];

-- CÂU 16 

-- CÂU  17 
SELECT 
    [NHANVIEN].[TENNV] AS [NHANVIEN],
    [NV2].[TENNV] AS NQL
FROM [NHANVIEN], [PHONGBAN], [DEAN], [NHANVIEN] NV2
WHERE [NHANVIEN].[PHG] = [PHONGBAN].[MAPHG] 
    AND [PHONGBAN].[TENPHG] = N'Quản lý'
    AND [PHONGBAN].[MAPHG] = [DEAN].[PHONG] 
    AND [DEAN].[TENDA] = N'Sản phẩm X'
    AND [NHANVIEN].[MA_NQL] = NV2.[MANV];

-- CÂU 18 
SELECT [TENDA]
FROM [DEAN]
WHERE EXISTS (
    SELECT 1
    FROM  [NHANVIEN], [PHONGBAN], [DEAN]
    WHERE  [PHONGBAN].[MAPHG] = [NHANVIEN].[PHG]
      AND [DEAN].[PHONG] = PHONGBAN.MAPHG
      AND [DEAN].[TENDA] = N'Sản phẩm X'
      AND [NHANVIEN].[HONV] = 'Andrea'
	  AND [NHANVIEN].[TENLOT] = 'A.'
	  AND [NHANVIEN].[TENNV] = 'Thomsen'
);

-- CÂU 19 
SELECT COUNT(*) AS DemDeAn
FROM [DEAN];

-- CÂU 20 
SELECT COUNT(*) AS DemDeAnCoNghienCuu
FROM [DEAN]
WHERE EXISTS (
    SELECT 1
    FROM [PHONGBAN]
    WHERE [DEAN].[PHONG] = [PHONGBAN].[TENPHG]
      AND [PHONGBAN].[TENPHG] = 'Nghiên Cứu'
);

-- CÂU 21  
SELECT AVG([LUONG]) AS LuongTrungBinh
FROM [NHANVIEN]
WHERE [PHAI] = N'Nữ';

-- CÂU 22 [PHG]
SELECT COUNT(*) AS SoThanNhan
FROM [THANNHAN]
WHERE [MA_NVIEN] IN (
	SELECT [MANV] FROM [NHANVIEN] WHERE [TENNV] = N'Tùng'
	);

-- CÂU 23 
SELECT DA.TENDEAN, SUM(NV.GIOLAM) AS TONGGIO
FROM DEAN DA
INNER JOIN THAMGIA TG ON DA.MADEAN = TG.MADEAN
INNER JOIN NHANVIEN NV ON TG.MANV = NV.MANV
GROUP BY DA.TENDEAN


-- CÂU 24 
SELECT DEAN.TENDA,
       (SELECT COUNT(*) FROM [NHANVIEN] WHERE [NHANVIEN].[PHG] = DEAN.PHONG) AS SLNhanVien
FROM DEAN;

-- CÂU 25 
SELECT [HONV], [TENLOT], [TENNV],
       (SELECT COUNT(*) FROM [THANNHAN] WHERE [THANNHAN].[MA_NVIEN] = [NHANVIEN].[MANV]) AS SLThanNhan
FROM [NHANVIEN];

-- CÂU 26 
SELECT [NHANVIEN].[HONV], [NHANVIEN].[TENLOT], [NHANVIEN].[TENNV],
       (SELECT COUNT(*) 
        FROM [DEAN] 
        WHERE DEAN.PHONG = [NHANVIEN].[PHG]) AS SLDeAn
FROM [NHANVIEN] ;

-- CÂU 27 
SELECT [NHANVIEN].[HONV], [NHANVIEN].[TENLOT], [NHANVIEN].[TENNV],
       (SELECT COUNT(*) 
        FROM [NHANVIEN] 
        WHERE [NHANVIEN].[MANV] = [NHANVIEN].[MA_NQL]) AS SLNVQuanLy
FROM [NHANVIEN] ;

-- CÂU 28  
SELECT PHONGBAN.TENPHG,
       (
         SELECT AVG([NHANVIEN].[LUONG])
         FROM [NHANVIEN] 
         WHERE [NHANVIEN].[PHG] = [PHONGBAN].[MAPHG]
       ) AS LuongTB
FROM [PHONGBAN] ;

-- CÂU 29 
SELECT [PHONGBAN].[TENPHG], COUNT([NHANVIEN].[MANV]) AS SLNhanVien
FROM [PHONGBAN] , [NHANVIEN] 
WHERE [PHONGBAN].[MAPHG] = [NHANVIEN].[PHG]
GROUP BY [PHONGBAN].[TENPHG]
HAVING AVG([NHANVIEN].[LUONG]) > 30000;

-- CÂU 30 
SELECT [PHONGBAN].[TENPHG],
       (
         SELECT COUNT(*)
         FROM [DEAN] 
         WHERE [DEAN].[PHONG] = [PHONGBAN].[MAPHG]
       ) AS SLDeAn
FROM [PHONGBAN] ;

--CÂU 31 
SELECT [PHONGBAN].[TENPHG],
       (SELECT [NHANVIEN].[HONV] +  + [NHANVIEN].[TENLOT] +  + [NHANVIEN].[TENNV]
        FROM [NHANVIEN] 
        WHERE [NHANVIEN].MANV = [PHONGBAN].[TRPHG]) AS TruongPhong,
       (
         SELECT COUNT(*)
         FROM [DEAN] 
         WHERE [DEAN].[PHONG] = [PHONGBAN].[MAPHG]
       ) AS SLDeAn
FROM [PHONGBAN] ;

-- CÂU 32 
SELECT [PHONGBAN].[TENPHG],
       (
         SELECT COUNT(*)
         FROM [DEAN] 
         WHERE [DEAN].[PHONG] = [PHONGBAN].[MAPHG]
       ) AS SLDeAn
FROM [PHONGBAN] 
WHERE (
        SELECT AVG([NHANVIEN].[LUONG])
        FROM [NHANVIEN] 
        WHERE [NHANVIEN].[PHG] = [PHONGBAN].[MAPHG]
      ) > 50000;

-- CÂU 33
SELECT DEAN.DDIEM_DA, COUNT(*) AS SLDeAn
FROM [DEAN] 
GROUP BY DEAN.DDIEM_DA;

-- CÂU 34 
SELECT DA.[TENDA], COUNT(CV.[MACV]) AS SOLUONGCV
FROM DEAN DA
INNER JOIN CV_DA CVDA ON DA.MADEAN = CVDA.MADEAN
INNER JOIN CONGVIEC CV ON CVDA.MACV = CV.MACV
GROUP BY DA.TENDA

-- CÂU 35 
SELECT CV.TENCV, COUNT(TG.MANV) AS SOLUONGNV
FROM CONGVIEC CV
INNER JOIN THAMGIA TG ON CV.MACV = TG.MACV
WHERE CV.MADA = 20
GROUP BY CV.TENCV

-- CÂU 36 
SELECT DISTINCT DA.[MADA]
FROM [DEAN] DA
INNER JOIN THAMGIA TG ON DA.[MADA] = TG.[MADA]
INNER JOIN NHANVIEN NV ON TG.[MANV] = NV.[MANV]
INNER JOIN PHONGBAN PB ON NV.[PHG] = PB.[MAPHG]
WHERE NV.[HONV] = N'Lê' OR PB.[HONV] = N'Lê'

-- CÂU 37 
SELECT [HONV], [TENLOT], [TENNV]
FROM [NHANVIEN]
WHERE [MANV] IN (
    SELECT [MANV]
    FROM [THANNHAN]
    GROUP BY [MA_NVIEN]
    HAVING COUNT(*) >= 2
);

-- CÂU 38 
SELECT [HONV], [TENLOT], [TENNV]
FROM [NHANVIEN]
WHERE [MANV] NOT IN (
    SELECT [MA_NVIEN]
    FROM [THANNHAN] )

-- CÂU 39 
SELECT [HONV], [TENLOT], [TENNV]
FROM [NHANVIEN] 
WHERE [MANV] IN (
    SELECT DISTINCT [TRPHG]
    FROM [PHONGBAN]
    WHERE [TRPHG] IS NOT NULL
)
AND EXISTS (
    SELECT 1
    FROM [THANNHAN]
    WHERE [NHANVIEN].[MANV] = [THANNHAN].[MA_NVIEN]
);

-- CÂU 40 
SELECT DISTINCT [HONV]
FROM [NHANVIEN] 
WHERE [MANV] IN (
    SELECT DISTINCT [TRPHG]
    FROM [PHONGBAN]
    WHERE [TRPHG] IS NOT NULL
)
AND NOT EXISTS (
    SELECT 1
    FROM [THANNHAN] 
    WHERE [NHANVIEN].[MANV] = [THANNHAN].[MA_NVIEN]
);

-- CÂU 41
SELECT NHANVIEN.HONV, NHANVIEN.TENLOT, NHANVIEN.TENNV
FROM NHANVIEN
INNER JOIN PHONGBAN ON NHANVIEN.PHG = PHONGBAN.MAPHG
WHERE NHANVIEN.LUONG > 
    (SELECT AVG(LUONG) FROM NHANVIEN INNER JOIN PHONGBAN 
    ON NHANVIEN.PHG = PHONGBAN.MAPHG WHERE PHONGBAN.TENPHG = N'Nhân sự')

-- CÂU 42
SELECT PHONGBAN.TENPHG, TRUONGPHONG.HONV, TRUONGPHONG.TENLOT, TRUONGPHONG.TENNV
FROM PHONGBAN
INNER JOIN NHANVIEN AS TRUONGPHONG ON PHONGBAN.TRPHG = TRUONGPHONG.MANV
WHERE PHONGBAN.MAPHG IN (
  SELECT TOP 1 WITH TIES PHONGBAN.MAPHG
  FROM (
    SELECT PHONG.MAPHG, COUNT(*) AS NUM_EMPLOYEE, RANK() OVER (ORDER BY COUNT(*) DESC) AS EMPLOYEE_RANK
    FROM PHONGBAN PHONG
    INNER JOIN NHANVIEN NV ON PHONG.MAPHG = NV.PHG
    GROUP BY PHONG.MAPHG
    ) AS MAX_EMPLOYEE
  ORDER BY EMPLOYEE_RANK
)

-- CÂU 43
SELECT DA.MADA
FROM DEAN DA
WHERE DA.MADA NOT IN (
  SELECT CTDA.MADA
  FROM CONGVIEC CTDA
  WHERE CTDA.MANV = 60
)
-- CÂU 44
SELECT NHANVIEN.MANV, CONCAT(NHANVIEN.HONV, ' ', NHANVIEN.TENLOT, ' ', NHANVIEN.TENNV) AS HoVaTen, NHANVIEN.DCHI
FROM NHANVIEN
INNER JOIN CONGVIEC ON NHANVIEN.MANV = CONGVIEC.MANV
INNER JOIN DEAN ON CONGVIEC.MADA = DEAN.MADA
INNER JOIN PHONGBAN ON NHANVIEN.PHG = PHONGBAN.MAPHG
WHERE DEAN.DIADIEM = 'TP HCM' AND PHONGBAN.DIACHI != N'TP HCM'


-- CÂU 45
SELECT NHANVIEN.HONV, NHANVIEN.TENLOT, NHANVIEN.TENNV, NHANVIEN.DCHI
FROM NHANVIEN
INNER JOIN CONGVIEC ON
NHANVIEN.MANV = CONGVIEC.MANV
INNER JOIN DEAN ON CONGVIEC.MADA = DEAN.MADA
INNER JOIN PHONGBAN ON
NHANVIEN.PHG = PHONGBAN.MAPHG
WHERE DEAN.DIADIEM = N'thành phố X'
AND PHONGBAN.DIACHI != 'thành phố X'

-- CÂU 46

SELECT NHANVIEN.MANV, CONCAT(NHANVIEN.HONV, ' ', NHANVIEN.TENLOT, ' ', NHANVIEN.TENNV) AS HoVaTen, 
    DATEDIFF(YEAR, NHANVIEN.NGAYSINH, GETDATE()) AS Tuoi 
FROM NHANVIEN
COMPUTE AVG(DATEDIFF(YEAR, NHANVIEN.NGAYSINH, GETDATE())) 

-- CÂU 47
SELECT P.TENPB, D.TENDA, AVG(CT.LUONGx) AS LuongTrungBinh
FROM PHONGBAN P
JOIN CONGVIEC CV ON P.MAPHG = CV.MAPHG
JOIN DEAN D ON CV.MADA = D.MADA
JOIN CHITIET CT ON CV.MACV = CT.MACV
GROUP BY P.TENPB, D.TENDA
COMPUTE AVG(AVG(CT.LUONGx))

-- CÂU 48
SELECT NHANVIEN.MANV, NHANVIEN.PHAI, CONCAT(NHANVIEN.HONV, ' ', NHANVIEN.TENLOT, ' ', NHANVIEN.TENNV) AS HoTen
FROM NHANVIEN
WHERE NHANVIEN.MANV IN (
    SELECT CV.MANV
    FROM CONGVIEC CV
    GROUP BY CV.MANV
    HAVING COUNT(DISTINCT CV.MADA) = (SELECT COUNT(DISTINCT MADA) FROM DEAN)
)

-- CÂU 49
SELECT NHANVIEN.MANV, NHANVIEN.PHAI, CONCAT(NHANVIEN.HONV, ' ', NHANVIEN.TENLOT, ' ', NHANVIEN.TENNV) AS HoTen
FROM NHANVIEN
WHERE NHANVIEN.MANV IN (
    SELECT CV.MANV
    FROM CONGVIEC CV
    JOIN DEAN D ON CV.MADA = D.MADA
    WHERE D.MAPHG = 5
    GROUP BY CV.MANV
    HAVING COUNT(DISTINCT CV.MADA) = (SELECT COUNT(DISTINCT MADA) FROM DEAN WHERE MAPHG = 5)
)

-- CÂU 50
SELECT DISTINCT NHANVIEN.MANV, NHANVIEN.PHAI, CONCAT(NHANVIEN.HONV, ' ', NHANVIEN.TENLOT, ' ', NHANVIEN.TENNV) AS HoTen
FROM NHANVIEN
WHERE NHANVIEN.MANV <> 'Le Minh Tinh'
    AND NOT EXISTS (
        SELECT D.MADA
        FROM DEAN D
        LEFT JOIN CONGVIEC CV ON CV.MADA = D.MADA
        WHERE CV.MANV = 'Le Minh Tinh'
        AND NOT EXISTS (
            SELECT CV2.MADA
            FROM CONGVIEC CV2
            WHERE CV2.MANV = NHANVIEN.MANV
                AND CV2.MADA = D.MADA
        )
    )

-- CÂU 51
SELECT NV.MaNV, NV.Phai, CONCAT(NV.HONV, ' ', NV.TENLOT, ' ', NV.TENNV) AS HoTen
FROM NHANVIEN NV
WHERE NOT EXISTS (
    SELECT DA.MADA
    FROM DEAN_DA DA
    JOIN DEAN D ON DA.MADA = D.MADA
    WHERE D.TENDA IN (
        SELECT TENDA
        FROM DEAN
        WHERE TP = 'TP HCM'
    )
    AND DA.MANV = NV.MaNV
    GROUP BY DA.MADA
    HAVING COUNT(DISTINCT DA.MANV) < (
        SELECT COUNT(DISTINCT MANV)
        FROM DEAN_DA DA2
        WHERE DA2.MADA = DA.MADA
    )
)
-- CÂU 52
SELECT PB.TENPB
FROM PHONGBAN PB
WHERE NOT EXISTS (
    SELECT DISTINCT D.MADA
    FROM DEAN D
    LEFT JOIN CONGVIEC CV ON D.MADA = CV.MADA
    WHERE PB.MAPHG <> CV.MAPHG
        OR PB.TENPB NOT IN (
            SELECT PB2.TENPB
            FROM PHONGBAN PB2
            JOIN CONGVIEC CV2 ON PB2.MAPHG = CV2.MAPHG
            WHERE CV2.MADA = D.MADA
                AND PB2.TENPB = 'HaNoi'
        )
)
-- CÂU 53
SELECT DISTINCT PB.TENPB
FROM PHONGBAN PB
JOIN CONGVIEC CV ON PB.MAPHG = CV.MAPHG
JOIN DEAN D ON CV.MADA = D.MADA
WHERE D.TP = 'HaNoi'
    AND PB.TENPB IN (
        SELECT PB2.TENPB
        FROM PHONGBAN PB2
        JOIN CONGVIEC CV2 ON PB2.MAPHG = CV2.MAPHG
        JOIN DEAN D2 ON CV2.MADA = D2.MADA
        WHERE D2.TP = 'Tp.HCM'
    )
-- CÂU 54
SELECT DISTINCT PB.TENPB
FROM PHONGBAN PB
JOIN CONGVIEC CV ON PB.MAPHG = CV.MAPHG
JOIN DEAN D ON CV.MADA = D.MADA
WHERE D.TP = 'Tp.HCM'
    OR D.TP = 'HaNoi'


   -- Module 4+5
    --Phần 1:Batches
   --1. 
   DECLARE @manv char(9)  
   SET @manv = '333445555' 
   DECLARE @soluong int 
   SELECT @soluong = COUNT(MADA) FROM PHANCONG WHERE MA_NVIEN = 
   @manv 
   IF @soluong < 3  
   PRINT N'Tham gia ít'  
   ELSE 
   PRINT N'Tham gia nhiều'

--    2.
    DECLARE @i INT  
    SET @i = 1  
    WHILE (@i <= 10)  
    BEGIN  
    PRINT '2 x ' + CAST(@i AS varchar(5)) + ' = ' + CAST(@i*2 AS varchar(5))  
    SET @i = @i + 1 
    END 

    -- 3.
    DECLARE @manv CHAR(9)  
    DECLARE email_cursor CURSOR  
    FOR SELECT MANV FROM NHANVIEN  
    OPEN email_cursor  
    FETCH NEXT FROM email_cursor INTO @manv 
    WHILE @@FETCH_STATUS = 0  
    BEGIN  
    UPDATE NHANVIEN  
    SET Email = 'User_' + @manv + '@mail.com'  
    WHERE MANV = @manv 
    FETCH NEXT FROM email_cursor INTO @manv 
    END  
    CLOSE email_cursor  
    DEALLOCATE email_cursor

    SELECT * FROM NHANVIEN

--4.
   SELECT MANV, HONV+TENLOT+TENNV AS HoTen, CASE 
WHEN YEAR(GETDATE()) - YEAR(NGSINH) BETWEEN 18 AND 30 THEN 
N'Thanh niên' WHEN YEAR(GETDATE()) - YEAR(NGSINH) BETWEEN 31 AND 45 
THEN N'Trung niên' WHEN YEAR(GETDATE()) - YEAR(NGSINH) BETWEEN 46 
AND 60 THEN N'Cao niên' END AS DoTuoi FROM NHANVIEN

-- Phần 2:Views

-- 1. Viết truy vấn liệt kê tên các nhân viên cùng với các dự án mà nhân viên đó
-- tham gia. Run và kiểm tra kết quả
SELECT DISTINCT HONV + TENLOT + TENNV AS HoTen, TENDA 
FROM NHANVIEN NV JOIN PHANCONG PC ON NV.MANV = PC.MA_NVIEN 
JOIN DEAN D ON D.MADA = PC.MADA 

-- 2. Tạo một View có tên NV_DA với nội dung truy vấn là câu 1. Mở cửa sổ Object Explorer
-- , xem view vừa tạo lưu ở đâu?. Xem kết quả dữ liệu từ View vừa tạo
-- (SELECT * FROM NV_DA) và so sánh với kết quả ở câu 1; có khác nhau không? Tại sao?
CREATE VIEW NV_DA AS 
SELECT DISTINCT HONV + ' ' + TENLOT + ' ' + TENNV AS HoTen, TENDA 
FROM NHANVIEN NV JOIN PHANCONG PC ON NV.MANV = PC.MA_NVIEN 
JOIN DEAN D ON D.MADA = PC.MADA 

SELECT * FROM NV_DA

-- 3
INSERT INTO PHANCONG VALUES ('006', 30, 2)
SELECT * FROM NV_DA

-- 4.
UPDATE NV_DA 
SET TENDA = N'Quản lý các dự án CNTT thông tin'
WHERE TENDA=N'Resort nghỉ dưỡng'

--5.
CREATE VIEW View5b AS  
SELECT DISTINCT HONV + ' '+ TENLOT + ' ' + TENNV AS HoTen, 
TENDA, ThoiGian*LUONG AS [Tổng tiền lương] 
FROM NHANVIEN NV JOIN PHANCONG PC ON NV.MANV = PC.MA_NVIEN 
JOIN DEAN D ON D.MADA = PC.MADA  
ORDER BY [Tổng tiền lương]
OFFSET 0 ROWS
SELECT * from View5b

--6.a
CREATE VIEW View6a AS
SELECT * FROM DEAN WHERE DEAN.DDIEM_DA = 'TP HCM'

ALTER VIEW View6a
WITH ENCRYPTION
AS
SELECT * FROM DEAN WHERE DEAN.DDIEM_DA = 'TP HCM'

SELECT * from View6a


-- 6.b
CREATE VIEW View6b AS
SELECT * FROM DEAN WHERE DEAN.DDIEM_DA = 'TP HCM'

ALTER VIEW View6b
WITH SCHEMABINDING
AS
SELECT TENDA, DDIEM_DA, MADA, PHONG FROM dbo.DEAN WHERE DEAN.DDIEM_DA = 'TP HCM'

SELECT * from View6b


-- 6.c
CREATE VIEW View6c AS
SELECT * FROM DEAN WHERE DEAN.DDIEM_DA = 'TP HCM'

ALTER VIEW View6c
WITH SCHEMABINDING
AS
SELECT TENDA, DDIEM_DA, MADA, PHONG FROM dbo.DEAN WHERE DEAN.DDIEM_DA = 'TP HCM'
WITH CHECK OPTION

INSERT View6c
VALUES (N'Xây cao tốc', N'TP HCM', 99, 5)

SELECT * from View6c


--6.d
DELETE FROM View6c WHERE MaDA = 99

-- 7
-- 1. Tạo bảng DEAN_HCM:
CREATE TABLE DEAN_HCM
(
    MaDA varchar(2) PRIMARY KEY,
    TenDA nvarchar(50),
    DDIEM_DA varchar(20),
    PHONG varchar(2),
    CONSTRAINT CHK_DDIEM_DA_HCM CHECK (DDIEM_DA = 'Tp.Hồ Chí Minh')
);

INSERT INTO DEAN_HCM (MaDA, TenDA, DDIEM_DA, PHONG)
VALUES 
('1', N'Dự án Tp.HCM 1', 'Tp.Hồ Chí Minh', 'PH'),
('2', N'Dự án Tp.HCM 2', 'Tp.Hồ Chí Minh', 'PH')

-- 2. Tạo bảng DEAN_HANOI:
CREATE TABLE DEAN_HANOI
(
    MaDA varchar(2) PRIMARY KEY,
    TenDA nvarchar(50),
    DDIEM_DA varchar(20),
    PHONG varchar(2),
    CONSTRAINT CHK_DDIEM_DA_HANOI CHECK (DDIEM_DA = 'Hà Nội')
);

INSERT INTO DEAN_HANOI (MaDA, TenDA, DDIEM_DA, PHONG)
VALUES 
('3', N'Dự án Hà Nội 1', 'Hà Nội', 'PH'),
('4', N'Dự án Hà Nội 2', 'Hà Nội', 'PH')

-- 3. Tạo bảng DEAN_VT:
CREATE TABLE DEAN_VT
(
    MaDA varchar(2) PRIMARY KEY,
    TenDA nvarchar(50),
    DDIEM_DA varchar(20),
    PHONG varchar(2),
    CONSTRAINT CHK_DDIEM_DA_VT CHECK (DDIEM_DA = 'Vũng Tàu')
);

INSERT INTO DEAN_VT (MaDA, TenDA, DDIEM_DA, PHONG)
VALUES 
('5', N'Dự án Vũng Tàu 1', 'Vũng Tàu', 'PH'),
('6', N'Dự án Vũng Tàu 2', 'Vũng Tàu', 'PH')

-- 4. Tạo Partition View từ 3 bảng:
CREATE VIEW DEAN_PARTITION
AS
SELECT MaDA, TenDA, DDIEM_DA, PHONG
FROM DEAN_HCM
UNION ALL
SELECT MaDA, TenDA, DDIEM_DA, PHONG
FROM DEAN_HANOI
UNION ALL
SELECT MaDA, TenDA, DDIEM_DA, PHONG
FROM DEAN_VT;

SELECT * FROM DEAN_PARTITION

--PHAN 3
--1
CREATE FUNCTION fn_LuongTB (@maphg INT) 
RETURNS float 
AS 
BEGIN 
DECLARE @tongluong FLOAT 
DECLARE @soluongNV INT 
SELECT @tongluong = SUM(LUONG), @soluongNV = COUNT(MANV) 
FROM NHANVIEN 
WHERE PHG = @maphg 
RETURN @tongluong / @soluongNV 
END 

-- 2
CREATE FUNCTION fn_TongLuongTheoDA (@manv NCHAR(9), @mada INT) 
RETURNS float 
AS 
BEGIN 
DECLARE @tongluong FLOAT 
SELECT @tongluong = SUM(N.LUONG * PC.THOIGIAN)  
FROM NHANVIEN N
    INNER JOIN PHONGBAN PB ON N.PHG = PB.MAPHG
    INNER JOIN DEAN D ON PB.MAPHG = D.PHONG
    INNER JOIN PHANCONG PC ON N.MANV = PC.MA_NVIEN AND D.MADA = PC.MADA
    WHERE N.MANV = @manv AND D.MADA = @mada;
RETURN ISNULL(@tongluong, 0)  
END

--3.
CREATE FUNCTION fn_TongLuongTrungBinhPB 
RETURNS @Bang TABLE ( 
MAPHG INT, 
TenPHG NVARCHAR(15), 
LuongTB FLOAT 
) 
AS 
BEGIN 
INSERT INTO @Bang 
SELECT PHG, TENPHG, dbo.fn_LuongTB(PHG) 
FROM PHONGBAN 
RETURN 
END

--4.
CREATE FUNCTION fn_TienThuong (@time_total float) 
RETURNS float 
AS 
BEGIN 
DECLARE @tienthuong float 
SELECT @tienthuong = 
CASE 
WHEN @time_total >= 30 AND @time_total <= 60 THEN 500 
WHEN @time_total > 60 AND @time_total < 100 THEN 1000 
WHEN @time_total >= 100 AND @time_total < 150 THEN 1200 
WHEN @time_total >= 150 THEN 1600 
END 
RETURN ISNULL(@tienthuong,0) 
END

-- 5
CREATE FUNCTION fn_SoDATheoPB 
RETURNS @Bang TABLE ( 
MAPHG INT, 
SoDA INT 
) 
AS 
BEGIN 
INSERT INTO @Bang 
SELECT P.MAPHG, COUNT(D.MADA) AS SoDA 
FROM PHONGBAN P LEFT JOIN DEAN D ON P.MAPHG = D.PHONG 
GROUP BY P.MAPHG 
RETURN 
END

-- 6
CREATE FUNCTION fn_ThongTinVien() 
RETURNS TABLE 
AS 
RETURN 
( 
SELECT MANV, HONV +' '+TENLOT+' ' +TENNV AS HoTen, NGSINH, 
TENTN AS NguoiThan, dbo.fn_LuongTB(PHG) AS TongLuongTB 
FROM NHANVIEN JOIN THANNHAN ON NHANVIEN.MANV = 
THANNHAN.MA_NVIEN 
) 
-- B. Multistatement Table-Valued Functions 
CREATE FUNCTION fn_ThongTinVien2() 
RETURNS @Bang TABLE ( 
MANV CHAR(9), 
HoTen NVARCHAR(50), 
NgaySinh DATE, 
NguoiThan NVARCHAR(15), 
TongLuongTB FLOAT 
) 
AS 
BEGIN 
INSERT INTO @Bang 
SELECT MANV, HONV + ' ' + TENLOT + ' ' + TENNV, NGSINH, TENTN, 
dbo.fn_LuongTB(PHG) 
FROM NHANVIEN NV JOIN THANNHAN TN ON NV.MANV = 
TN.MA_NVIEN 
RETURN 
END