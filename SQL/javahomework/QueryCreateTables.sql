use javahomework

-- Drop table dbo.employees
-- Drop table dbo.Banner
-- Drop table dbo.BannerSize
-- Drop table dbo.Manager
-- Drop table dbo.BannerPosition
-- Drop table dbo.CampaignSchedule
-- Drop table dbo.CampaignBudget
-- Drop table dbo.Analystics
-- Drop table dbo.UserInfo
-- Drop table dbo.UserAccount
-- Drop table dbo.ClickLog
-- Drop table dbo.TargetAudience
-- Drop table dbo.Campaign

CREATE TABLE Manager (
manager_id int Not null identity(1,1) Primary Key,
MgName Nvarchar(20),
MgAge int,
MgGender Nvarchar(10),
MgEmail Nvarchar(100),
MgAddress Nvarchar(30),
MgImg Nvarchar(1000),
MgAccountName Nvarchar(100),
MgPass Nvarchar(100)
)

CREATE TABLE BannerSize (
BannerSize_id int Not null identity(1,1) Primary Key,
Hight Nvarchar(20),
Lengths Nvarchar(20)
)

CREATE TABLE CampaignSchedule (
CampaignSchedule_id int Not null identity(1,1) Primary Key,
TanSuatHienThi Nvarchar(20),
DayStart DATETIME,
DayEnd DATETIME,
StatusCampaign Nvarchar(10)
)

CREATE TABLE BannerPosition (
BannerPosition_id int Not null identity(1,1) Primary Key,
position Nvarchar(20)
)

CREATE TABLE CampaignBudget (
CampaignBudget_id int Not null identity(1,1) Primary Key,
DailyBudget int,
TotalBudget int,
TotalBudgetUsed int
)


CREATE TABLE UserAccount (
UserAccount_id int Not null identity(1,1) Primary Key,
AccountName Nvarchar(100),
Pass Nvarchar(100),
email Nvarchar(100),
ImgUser Nvarchar(1000),
phone_number Nvarchar(15),
Full_Name Nvarchar(20),
Age int,
DiaDiem Nvarchar(50),
Gender Nvarchar(10)
)

CREATE TABLE ClickLog (
clicklog_id int Not null identity(1,1) Primary Key,
UserAccount_id INT REFERENCES UserAccount(UserAccount_id),
ClickHistory DATE,
ThoiGianChuyenDoi int
)

CREATE TABLE Banner (
banner_id int Not null identity(1,1) Primary Key,
BannerSize_id INT REFERENCES BannerSize(BannerSize_id),
BannerPosition_id INT REFERENCES BannerPosition(BannerPosition_id),
BannerName Nvarchar(50),
ContentLink Nvarchar(1000),
StatusBanner Nvarchar(15),
ImgLinking Nvarchar(1000)
)

CREATE TABLE Campaign (
campaign_id int Not null identity(1,1) Primary Key,
manager_id INT REFERENCES Manager(manager_id),
banner_id INT REFERENCES Banner(banner_id),
CampaignSchedule_id INT REFERENCES CampaignSchedule(CampaignSchedule_id),
CampaignName Nvarchar(50)
)

ALTER TABLE dbo.ClickLog
ADD banner_id INT REFERENCES Banner(banner_id);


ALTER TABLE dbo.BannerSize
ADD BannerSizeName Nvarchar(50);


ALTER TABLE dbo.CampaignBudget
ADD campaign_id INT REFERENCES Campaign(campaign_id);


