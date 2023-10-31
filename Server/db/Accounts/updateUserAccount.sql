       UPDATE [dbo].[UserAccount] SET 
         [AccountName] = @AccountName
         , [Pass] = @Pass
         , [email] = @email 
         , [Full_Name] = @Full_Name 
         WHERE [UserAccount_id] = @UserAccount_id


SELECT * FROM [dbo].[UserAccount] WHERE [UserAccount].[UserAccount_id] = @UserAccount_id