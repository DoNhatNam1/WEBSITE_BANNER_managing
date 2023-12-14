Begin Try

       Begin Tran 

       Declare @bannerToDel int = @banner_id 

       -- -- Delete first from child tables
       -- Delete from [dbo].[ClickLog] where [UserAccount_id] = @UserAccountToDel

       -- Finally Delete from parent table
       Delete from [dbo].[Banner] where [banner_id] = @bannerToDel 

       Commit Tran
End Try 

Begin Catch

       Rollback Tran

End Catch