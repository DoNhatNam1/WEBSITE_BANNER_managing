DECLARE @clicklog_id INT

SELECT @clicklog_id = [clicklog_id] from [dbo].[ClickLog] where 
[banner_id] = @banner_id AND
[UserAccount_id] = @UserAccount_id AND
[ThoiGianChuyenDoi] = @ThoiGianChuyenDoi AND
[ClickHistory] = @ClickHistory

if(@clicklog_id is null)
BEGIN
INSERT INTO [dbo].[ClickLog] ( 
    [banner_id], 
    [UserAccount_id], 
    [ThoiGianChuyenDoi], 
    [ClickHistory]
) 
VALUES (
    @banner_id, 
    @UserAccount_id, 
    @ThoiGianChuyenDoi, 
    @ClickHistory
)
Select @clicklog_id = SCOPE_IDENTITY()
END

SELECT * FROM [dbo].[ClickLog] WHERE [ClickLog].[clicklog_id] = @clicklog_id