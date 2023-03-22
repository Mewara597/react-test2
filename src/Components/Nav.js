import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container" to="/">
        <Link className="navbar-brand">Album</Link>
        {/* <button
          className="navbar-toggler bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-Link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" style={{ color: "white" }} to="/add">
                Add album
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
