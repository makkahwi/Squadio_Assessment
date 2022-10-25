
export default function About() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 mt-5">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            {("Yahoo Finance Data")}
          </h1>

          <p className="col-md-8 fs-4">
            {("A React.Js-based app to call financial data provided by Yahoo API query and illustrate it in CanadleStick chart")}
          </p>

          <button className="btn btn-ghost btn-lg" type="button" href="https://squadio.com/">
            {("Requested By Squadio")}
          </button>

          <button className="btn btn-ghost btn-lg" type="button">
            {("Executed By Suhaib Ahmad")}
          </button>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-success rounded-3">
              <h2>
                {("Required Task")}
              </h2>

              <p>
                {("Do this")}
              </p>

              <p>
                {("Do that")}
              </p>

              <button className="btn btn-outline-light" type="button">
                {("Github Repo")}
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>
                {("Notes")}
              </h2>

              <p>
                {("Why picked the library X for the chart...")}
              </p>

              <p>
                {("What's wrong with the app")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
