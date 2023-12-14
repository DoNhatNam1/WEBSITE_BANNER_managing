SELECT DISTINCT [Banner].[banner_id]
        ,[Banner].[BannerSize_id]
        ,[Banner].[BannerPosition_id]
        ,[Banner].[BannerName]
        ,[BannerSize].[BannerSizeName]
        ,[BannerPosition].[position]
        ,[Banner].[ContentLink]
        ,[Banner].[ImgLinking]
        ,[Banner].[StatusBanner]
FROM (( [dbo].[Banner]
INNER JOIN [dbo].[BannerSize] ON [Banner].[BannerSize_id] = [BannerSize].[BannerSize_id])
INNER JOIN [dbo].[BannerPosition] ON [Banner].[BannerPosition_id] = [BannerPosition].[BannerPosition_id])
