DECLARE @UserAccount_id INT

SELECT @UserAccount_id = [UserAccount_id] from [dbo].[UserAccount] where 
[email] = @email AND
[AccountName] = @AccountName AND
[Pass] = @pass 

if(@UserAccount_id is null)
BEGIN
INSERT INTO [dbo].[UserAccount] ( 
    [email], 
    [AccountName], 
    [Pass]
) 
VALUES (
    @email, 
    @AccountName, 
    @pass
)
Select @UserAccount_id = SCOPE_IDENTITY()
END



SELECT * FROM [dbo].[UserAccount] WHERE [UserAccount].[UserAccount_id] = @UserAccount_id