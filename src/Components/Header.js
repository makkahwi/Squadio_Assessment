
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <h5 className="my-3 navbar-brand mx-4">
          {("Yahoo Finance Data")}
        </h5>

        <div className="collapse navbar-collapse mx-4">
          <div className="row align-items-center my-2">
            <div className="col-8">
              <input
                className="form-control w-100"
                type="search"
                placeholder="Search"
              />
            </div>

            <div className="col-4">
              <button className="btn btn-outline-light w-100" type="button">Search</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
