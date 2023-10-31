       UPDATE [dbo].[Manager] SET 
         [MgName] = @MgName
         , [MgAddress] = @MgAddress 
         , [MgGender] = @MgGender
         , [MgImg] = @MgImg 
         , [MgAge] = @MgAge 

         WHERE [manager_id] = @manager_id


SELECT * FROM [dbo].[Manager] WHERE [Manager].[manager_id] = @manager_id