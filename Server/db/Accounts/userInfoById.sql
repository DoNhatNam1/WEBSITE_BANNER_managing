SELECT DISTINCT [UserAccount].[UserAccount_id]
        ,[UserAccount].[Full_Name]
        ,[UserAccount].[phone_number]
        ,[UserAccount].[DiaDiem]
        ,[UserAccount].[Gender]
        ,[UserAccount].[ImgUser]
        ,[UserAccount].[Age]
FROM [dbo].[UserAccount]
WHERE [UserAccount].[UserAccount_id] = @UserAccount_id