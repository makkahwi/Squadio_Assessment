
export default function About() {
  const requirements = [
    { text: "Use this API URL", link: "https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1={from_timestamp}&period2={to_timestamp}&interval={interval}&events=history" },
    { text: "Variables: ticker = SPUS | from_timestamp = timestamp | to_timestamp = timestamp | interval = 1d/1wk/1mo" },
    { text: "Example", link: "https://query1.finance.yahoo.com/v7/finance/download/SPUS?period1=1633381200&period2=1664917199&interval=1d&events=history&crumb=5YTX%2FgVGBmg" },
    { text: "Make a page has a candlestick chart ", link: "https://www.investopedia.com/trading/candlestick-charting-what-is-it/" },
    { text: "The x-axis witll be the date" },
    { text: "Allow user to select the interval (day|week|month)" },
    { text: "Allow user to select the date range" },
    { text: "Select any charts library fits this solution but you should answer why you choosed it" },
    { text: "Make a github repository has the task" },
    { text: "Make sure your commits are descriptive and has small changes" }
  ];

  const notes = [
    { title: "Chart Library (Apexcharts)", details: "It was picked as it simply met the criteria required and offered couple of user helpful tools like zooming in and out." },
    { title: "Given Yahoo API URL", details: "It's not working with React.js, seems for some reason that service provider barred using the API call with development environments like http://localhost:1234. So a fixed sample data was picked just to confirm the chart functionality." },
    { title: "Yahoo API Error Msg", details: "Access to XMLHttpRequest at 'https://query1.finance.yahoo.com/v7/finance/download/SPUS?period1=&period2=&interval=&events=history' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource." },
    { title: "Involved Libraries", details: "apexcharts, axios, bootstrap, react, react-router-dom" },
    { title: "Possible Enhancements", details: "localization (i18n), allow user to type down the endpoint and spacify the params to send (postman simulation with better UI)" },
  ];

  return (
    <>
      <div className="p-5 bg-light rounded-3 mt-5">
        <div className="container-fluid py-5">
          <h1 className="display-6 fw-bold">
            {("Yahoo Finance Data")}
          </h1>

          <p className="col-md-8 fs-4 text-justify">
            {("A React.Js-based app to call financial data provided by Yahoo API query and illustrate it in CanadleStick chart.")}
          </p>

          <div className="btn-group" role="group" aria-label="Basic example">
            <a href="https://squadio.com/" target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-success" >
              {("Requested By Squadio")}
            </a>

            <a href="http://suhaib.dev/" target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-success">
              {("Executed By Suhaib Ahmad")}
            </a>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-success rounded-3">
              <h2>
                {("Task Requirments")}
              </h2>

              <ul className="list-group bg-success">
                {requirements.map(({ text, link }, i) => (
                  <li key={i} className="list-group-item list-group-item-action bg-success text-white d-flex align-items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      className="mx-2"
                    />
                    {text}

                    {link && (
                      <a href={link} target="_blank" rel="noreferrer" className="mx-2 btn btn-ghost">
                        {("Link")}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>
                {("Notes")}
              </h2>

              <ul className="list-group">
                {notes.map(({ title, details }, i) => (
                  <li key={i} className="list-group-item list-group-item-action d-flex align-items-center">
                    <span>
                      <b>
                        {title}
                      </b>

                      <br />

                      {details && (
                        <span className="mx-2">
                          {details}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="https://github.com/makkahwi/Squadio_Assessment" target="_blank" rel="noreferrer" className="btn btn-outline-success my-2" type="button">
                {("Github Repo")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
