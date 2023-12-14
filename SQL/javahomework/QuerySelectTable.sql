use javahomework

Select * from dbo.UserAccount
Select * from dbo.Manager
Select * from dbo.Banner
Select * from dbo.BannerSize
Select * from dbo.BannerPosition
Select * from dbo.ClickLog
SELECT GETDATE() AS CurrentDateTime, MONTH(GETDATE()) AS CurrentMonth;
Select SUM(ThoiGianChuyenDoi) AS NumberOfClick from dbo.ClickLog
Select COUNT(*) AS NumberOfViews from dbo.ClickLog WHERE MONTH(ClickHistory) = MONTH(GETDATE())
Select SUM(ThoiGianChuyenDoi) AS NumberOfClick from dbo.ClickLog WHERE ClickLog.UserAccount_id = 2
-- Select rows from a Table or View 'BannerSize' in schema 'SchemaName'
SELECT * FROM dbo.BannerSize 	/* add search conditions here */