
-- Create the table in the specified schema
CREATE TABLE dbo.QUANLY
(
    ID_QL INT NOT NULL PRIMARY KEY, 
    TENQL [NVARCHAR](50) NOT NULL,
    MATKHAU [NVARCHAR](50) NOT NULL
);
GO

CREATE TABLE dbo.CHAMCONG
(
    ID_CC INT NOT NULL PRIMARY KEY, 
    NGAY DATE NOT NULL,
    TENNV NVARCHAR(50) NOT NULL,
    GIOVAOLAM DATETIME NOT NULL,
    GIOTANLAM DATETIME NOT NULL,
    SOGIOCONG INT NOT NULL,
    GHICHU NVARCHAR(100),
    
);
GO