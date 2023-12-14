DECLARE @CurrentMonth INT

SELECT @CurrentMonth = MONTH(GETDATE())

SELECT COUNT(*) AS [NumberOfViewsThisMonth] FROM [dbo].[ClickLog]
WHERE MONTH([ClickHistory]) = @CurrentMonth