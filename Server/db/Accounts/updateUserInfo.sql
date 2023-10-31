       UPDATE [dbo].[UserAccount] SET 
         [Full_Name] = @Full_Name
         , [phone_number] = @phone_number
         , [DiaDiem] = @DiaDiem 
         , [Gender] = @Gender 
         , [ImgUser] = @ImgUser 
         , [Age] = @Age 
         WHERE [UserAccount_id] = @UserAccount_id


SELECT * FROM [dbo].[UserAccount] WHERE [UserAccount].[UserAccount_id] = @UserAccount_id