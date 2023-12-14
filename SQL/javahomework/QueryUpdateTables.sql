use javahomework

-- Update rows in table 'Banner'
UPDATE Banner
SET
    [BannerSize_id] = 1,
    [BannerPosition_id] = 4
    -- add more columns and values here
WHERE [Banner].[banner_id] = 6	/* add search conditions here */




UPDATE Banner
SET
    [ImgLinking] = 'https://img.freepik.com/free-vector/realistic-winter-sale-banner-template_52683-100252.jpg'
    -- add more columns and values here
WHERE [Banner].[banner_id] = 4

UPDATE Banner
SET
    [ImgLinking] = 'https://media.istockphoto.com/id/1206905095/vi/vec-to/valentines-day-love-and-feelings-sale-background-design-vector-minh-h%E1%BB%8Da-eps10-ng%C3%A0y-valentine.jpg?s=1024x1024&w=is&k=20&c=5hlKHt6quRkjUC5OBLc3H0MEO6EA8qsb41TOboHier8='
    -- add more columns and values here
WHERE [Banner].[banner_id] = 5

UPDATE Banner
SET
    [ImgLinking] = 'https://onforuleds.com/cdn/shop/articles/Onforu_Happy_Halloween_Sale.jpg?v=1665302628'
    -- add more columns and values here
WHERE [Banner].[banner_id] = 6


UPDATE BannerSize
SET
    [BannerSizeName] = 'Nua man hinh Taplet'
    -- add more columns and values here
WHERE [BannerSize].[BannerSize_id] = 1

UPDATE BannerSize
SET
    [BannerSizeName] = 'Nua man hinh Taplet'
    -- add more columns and values here
WHERE [BannerSize].[BannerSize_id] = 1

UPDATE BannerSize
SET
    [BannerSizeName] = 'Mot phan ba màn hình LapTop acer'
    -- add more columns and values here
WHERE [BannerSize].[BannerSize_id] = 2

UPDATE BannerSize
SET
    [BannerSizeName] = 'Ca màn hình Taplet'
    -- add more columns and values here
WHERE [BannerSize].[BannerSize_id] = 3

UPDATE Banner
SET
    [BannerPosition_id] = 4
    -- add more columns and values here
WHERE [Banner].[banner_id] = 4

