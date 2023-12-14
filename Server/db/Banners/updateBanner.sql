Begin Try

       Begin Tran 

       -- Update first from child tables
       Update [dbo].[Banner] set 
       [BannerName] = @BannerName, 
       [BannerSize_id] = @BannerSize_id,   
       [BannerPosition_id] = @BannerPosition_id,   
       [ContentLink] = @ContentLink, 
       [ImgLinking] = @ImgLinking,
       [StatusBanner] = @StatusBanner
       where [banner_id] = @banner_id

       -- Finally Update from parent table


       Commit Tran
End Try 

Begin Catch

       Rollback Tran

End Catch

SELECT * FROM [dbo].[Banner] WHERE [Banner].[banner_id] = @banner_id