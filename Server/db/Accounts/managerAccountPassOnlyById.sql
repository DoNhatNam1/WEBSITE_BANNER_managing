SELECT DISTINCT [Manager].[manager_id]
        ,[Manager].[MgPass]
FROM [dbo].[Manager]
WHERE [Manager].[manager_id]=@manager_id