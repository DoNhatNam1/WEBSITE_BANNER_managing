SELECT DISTINCT [Manager].[manager_id]
        ,[Manager].[MgName]
        ,[Manager].[MgAddress]
        ,[Manager].[MgGender]
        ,[Manager].[MgImg]
        ,[Manager].[MgAge]
FROM [dbo].[Manager]
WHERE [Manager].[manager_id] = @manager_id