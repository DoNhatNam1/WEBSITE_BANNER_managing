SELECT DISTINCT [Banner].[banner_id]
        ,[Banner].[BannerPosition_id]
        ,[BannerPosition].[position]
        ,[Banner].[ImgLinking]
FROM  [dbo].[Banner]
INNER JOIN [dbo].[BannerPosition] ON [Banner].[BannerPosition_id] = [BannerPosition].[BannerPosition_id]
WHERE [BannerPosition].[position] != 'None'
