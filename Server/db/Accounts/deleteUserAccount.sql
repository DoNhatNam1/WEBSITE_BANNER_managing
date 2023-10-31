Begin Try

       Begin Tran 

       Declare @UserAccountToDel int = @UserAccount_id 

       -- -- Delete first from child tables
       -- Delete from [dbo].[ClickLog] where [UserAccount_id] = @UserAccountToDel

       -- Finally Delete from parent table
       Delete from [dbo].[UserAccount] where [UserAccount_id] = @UserAccountToDel 

       Commit Tran
End Try 

Begin Catch

       Rollback Tran

End Catch