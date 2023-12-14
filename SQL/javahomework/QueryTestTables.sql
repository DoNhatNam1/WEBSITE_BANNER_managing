use javahomework

Create index Ten_Truong On BannerSize (Hight, Lengths)
Create index ThongTinAdmin On Manager (MgName, MgAge)

DROP Index Ten_Truong On BannerSize
DROP Index ThongTinAdmin On Manager

 SELECT
         OBJECT_NAME(object_id) AS TableName,
         name AS IndexName
     FROM
         sys.indexes
     WHERE
         index_id > 0 AND object_id = OBJECT_ID('Manager');


SELECT
    TableName = t.Name,
    IndexName = i.Name
FROM
    sys.tables t
INNER JOIN
    sys.indexes i ON t.object_id = i.object_id
WHERE
    t.Name = 'Manager'
    AND i.Name = 'ThongTinAdmin';