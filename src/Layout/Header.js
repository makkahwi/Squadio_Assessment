import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success justify-content-between fixed-top">
        <h5 className="my-3 navbar-brand mx-4">
          {("Yahoo Finance Data")}
        </h5>

        <button className="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mx-4">
            <li className="nav-item active">
              <Link to="" className={`nav-link ${pathname === "" && "text-danger"}`} >
                {("Home")}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="about" className={`nav-link ${pathname === "about" && "text-danger"}`} >
                {("About")}
              </Link>
            </li>
          </ul>

          <div className="row align-items-center my-2 float-end">
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
