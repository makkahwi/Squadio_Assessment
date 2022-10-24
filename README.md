# Squadio Technical Assessment Task

Suhaib Ahmad | Monday, 24th Oct 2022

- Use this API URL | GET <https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1={from_timestamp}&period2={to_timestamp}&interval={interval}&events=history>
  - Variables: ticker = SPUS | from_timestamp = timestamp | to_timestamp = timestamp | interval = 1d/1wk/1mo
  - Example: <https://query1.finance.yahoo.com/v7/finance/download/SPUS?period1=1633381200&period2=1664917199&interval=1d&events=history&crumb=5YTX%2FgVGBmg>
- Make a page has a candlestick chart (<https://www.investopedia.com/trading/candlestick-charting-what-is-it/>)
- The x-axis witll be the date
- Allow user to select the interval (day|week|month)
- Allow user to select the date range
- Select any charts library fits this solution but you should answer why you choosed it

Notes:

- Make a github repository has the task
- Make sure your commits are descriptive and has small changes

## TODO List

- Build API Call            DONE
- Build User Inputs Form    DONE
- Build CandleStick Chart   DONE
- Fix API Data Call
- Fix Styling
- Include Task Description & Checklist in UI
- Include Chart Pickup Reason in Description
