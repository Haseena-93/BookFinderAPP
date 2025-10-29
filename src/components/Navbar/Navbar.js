import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Book Finder Logo" className="logo" />
        <h1 className="heading">Book Finder</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
