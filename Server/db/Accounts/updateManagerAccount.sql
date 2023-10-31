       UPDATE [dbo].[Manager] SET 
         [MgPass] = @MgPass
         WHERE [manager_id] = @manager_id


SELECT * FROM [dbo].[Manager] WHERE [Manager].[manager_id] = @manager_id