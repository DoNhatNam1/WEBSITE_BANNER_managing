       UPDATE [dbo].[UserAccount] SET 
         [Pass] = @Pass
         WHERE [UserAccount_id] = @UserAccount_id


SELECT * FROM [dbo].[UserAccount] WHERE [UserAccount].[UserAccount_id] = @UserAccount_id