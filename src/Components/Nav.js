import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container" to="/">
        <Link className="navbar-brand">Album</Link>
    
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item md-5" >
              <Link to="/" className="nav-Link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item" style={{'margin': '0 20px'}}>
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
