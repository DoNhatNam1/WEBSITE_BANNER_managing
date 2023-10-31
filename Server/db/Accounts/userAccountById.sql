SELECT DISTINCT [UserAccount].[UserAccount_id]
        ,[UserAccount].[email]
        ,[UserAccount].[AccountName]
        ,[UserAccount].[Pass]
FROM [dbo].[UserAccount]
WHERE [UserAccount].[UserAccount_id] = @UserAccount_id