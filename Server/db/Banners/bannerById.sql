SELECT DISTINCT [Banner].[banner_id]
        ,[Banner].[BannerSize_id]
        ,[Banner].[BannerPosition_id]
        ,[Banner].[BannerName]
        ,[BannerSize].[BannerSizeName]
        ,[Banner].[ContentLink]
        ,[Banner].[ImgLinking]
        ,[Banner].[StatusBanner]
        ,[BannerPosition].[position]
FROM (([dbo].[Banner]
INNER JOIN [dbo].[BannerSize] ON [Banner].[BannerSize_id] = [BannerSize].[BannerSize_id])
INNER JOIN [dbo].[BannerPosition] ON [Banner].[BannerPosition_id] = [BannerPosition].[BannerPosition_id])
WHERE [Banner].[banner_id] = @banner_id