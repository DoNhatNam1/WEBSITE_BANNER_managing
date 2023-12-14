DECLARE @banner_id INT

SELECT @banner_id = [banner_id] from [dbo].[Banner] where 
[BannerName] = @BannerName AND
[ContentLink] = @ContentLink AND
[StatusBanner] = @StatusBanner AND
[ImgLinking] = @ImgLinking 

if(@banner_id is null)
BEGIN
INSERT INTO [dbo].[Banner] ( 
    [BannerName], 
    [BannerSize_id], 
    [BannerPosition_id], 
    [ContentLink], 
    [StatusBanner], 
    [ImgLinking]
) 
VALUES (
    @BannerName, 
    @BannerSize_id, 
    @BannerPosition_id, 
    @ContentLink, 
    @StatusBanner, 
    @ImgLinking
)
Select @banner_id = SCOPE_IDENTITY()
END



SELECT * FROM [dbo].[Banner] WHERE [Banner].[banner_id] = @banner_id