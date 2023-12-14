-- Câu 1:
-- Tạo hàm F_TiLeCK nhận vào số lượng hàng đặt và trả về tỉ lệ chiết khấu theo qui tắc:

CREATE FUNCTION F_TiLeCK (@SoLuongHangDat INT)
RETURNS DECIMAL(4, 2)
AS
BEGIN
    DECLARE @TiLeCK DECIMAL(4, 2)
    IF @SoLuongHangDat >= 50
        SET @TiLeCK = 0.05
    ELSE IF @SoLuongHangDat >= 30
        SET @TiLeCK = 0.03
    ELSE
        SET @TiLeCK = 0
    RETURN @TiLeCK
END;

-- Câu 2:
-- Thêm vào bảng CT_DDH một cột mới có tên là TiLeCK có kiểu Number(3,2), 
-- có giá trị mặc định là 0, ràng buộc giá trị từ 0 đến 1. 
-- Sử dụng hàm TiLeCK vừa tạo để cập nhật giá trị cho cột này.

ALTER TABLE CT_DDH
ADD TiLeCKNew DECIMAL(3, 2) DEFAULT 0 CONSTRAINT CK_TiLeCKNew CHECK (TiLeCKNew >= 0 AND TiLeCKNew <= 1);

UPDATE CT_DDH
SET TiLeCKNew = dbo.F_TiLeCK(SL);

-- Câu 3:
-- Viết hàm F_TrigiaDH nhận vào mã đơn hàng và trả về trị giá của đơn hàng tương ứng:

CREATE FUNCTION F_TrigiaDH (@MaDonHang INT)
RETURNS DECIMAL(10, 2)
AS
BEGIN
    DECLARE @Trigia DECIMAL(10, 2)
    SELECT @Trigia = SUM(SL * DonGia * (1 - TiLeCK))
    FROM CT_DDH
    WHERE MADDH = @MaDonHang
    RETURN @Trigia
END;

-- Sử dụng hàm này để cập nhật giá trị của cột TriGia trong bảng DONHANG:
UPDATE DONHANG
SET TRIGIA = dbo.F_TrigiaDH(MADDH);

-- Câu 4:
-- Viết trigger để tự động cập nhật giá trị cột TriGia của bảng 
-- DONHANG mỗi khi có thay đổi dữ liệu liên quan đến các bảng CT_DDH, HANGHOA:

CREATE TRIGGER trg_UpdateTriGia
ON CT_DDH
AFTER INSERT, UPDATE, DELETE 
AS
BEGIN
    UPDATE DONHANG
    SET TRIGIA = dbo.F_TrigiaDH(MADDH)
    WHERE MADDH IN (SELECT MADDH FROM inserted)
END;

-- Câu 5:
-- Tạo view để truy vấn thông tin về doanh số bán hàng theo từng tháng của năm:

CREATE VIEW DoanhSoBanHang AS
SELECT MONTH(NGAYDAT) AS Thang, YEAR(NGAYDAT) AS Nam, SUM(TRIGIA) AS TongDoanhSo
FROM DONHANG
GROUP BY MONTH(NGAYDAT), YEAR(NGAYDAT);

-- Câu 6:
-- Viết stored procedure để thống kê top 5 khách hàng mua nhiều hàng nhất trong năm:

CREATE PROCEDURE Top5KhachHangMuaNhieuHang
AS
BEGIN
    SELECT TOP 5 KHACH.MAKH, TENCTY, SUM(SL) AS TongSoLuongDat
    FROM KHACH
    JOIN DONHANG ON KHACH.MAKH = DONHANG.MAKH
    JOIN CT_DDH ON DONHANG.MADDH = CT_DDH.MADDH
    GROUP BY KHACH.MAKH, TENCTY
    ORDER BY SUM(SL) DESC;
END;

-- Câu 7:
-- Tạo chỉ mục (index) cho cột MADDH của bảng DONHANG để tối ưu hiệu năng truy vấn:

CREATE INDEX idx_MADDH ON DONHANG (MADDH);

-- Câu 8:
-- Viết câu lệnh SQL để cập nhật giá trị mặc định của cột TiLeCK trong bảng CT_DDH thành 0.01. 
-- Sau đó, viết câu lệnh để hiển thị cấu trúc bảng CT_DDH đã cập nhật:

ALTER TABLE CT_DDH
DROP CONSTRAINT DF__CT_DDH__TiLeCK__403A8C7D;

-- Thay đổi giá trị mặc định của cột TiLeCK
ALTER TABLE CT_DDH
ADD CONSTRAINT DF_TiLeCK DEFAULT 0.01 FOR TiLeCK;

EXEC sp_help 'CT_DDH';

-- Kiểm tra DEFAULT constraint của Tileck
SELECT name, definition
FROM sys.default_constraints
WHERE parent_object_id = OBJECT_ID('CT_DDH') 
AND parent_column_id = (SELECT column_id FROM sys.columns WHERE Name = 'TiLeCK' AND object_id = OBJECT_ID('CT_DDH'));
