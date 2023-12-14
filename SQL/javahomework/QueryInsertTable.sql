use javahomework

Insert into dbo.Manager(MgAccountName, MgPass, MgEmail) values
('$2a$10$KK3OExcDuWKsw97HzdaWB.P.6EfKcu2PGZt6rIZBhRbA7I/u3kEtm', '$2a$10$bPYy/0b5VgDw6Xaz5lrRHuz.ZOmNIrWBxjNr58tNPwAHWMNIzLBmi', 'namnhatvtadmin@gmail.com')

Insert into dbo.Banner(BannerName, ContentLink, StatusBanner, ImgLinking) values
('Dai ha gia mua dong', 'Day la banner chuyen ve cac chuyen du lich voi dia diem am ap va ngam nhin canh dep ve dem', 'On Process', 'Anh Banner'),
('Khuyen mai ngay le tinh nhan', 'Day la banner tap trung vao cac cap tinh nhan o do tuoi 15-30 tuoi', 'On Process', 'Anh Banner 2'),
('Sieu Sale Halloween', 'Tap trung ban cac trang phuc va trang tri ve halloween', 'Success', 'Anh Banner 3')

Insert into dbo.BannerSize(BannerSizeName, Hight, Lengths) values
('Một phần ba màn hình LapTop acer ', '650px', '430px'),
('Cả màn hình Taplet', '600px', '600px')

Insert into dbo.BannerPosition(position) values
('Below Navbar'),
('Body1'),
('Body2')

Insert into dbo.BannerPosition(position) values
('None')
