DECLARE @CurrentMonth INT

SELECT @CurrentMonth = MONTH(DATEADD(MONTH, -1, GETDATE()))

SELECT COUNT(*) AS [NumberOfViewsLastMonth] FROM [dbo].[ClickLog]
WHERE MONTH([ClickHistory]) = @CurrentMonth