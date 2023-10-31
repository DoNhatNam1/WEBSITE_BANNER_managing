SELECT DISTINCT [UserAccount].[UserAccount_id]
        ,[UserAccount].[Pass]
FROM [dbo].[UserAccount]
WHERE [UserAccount].[UserAccount_id]=@UserAccount_id