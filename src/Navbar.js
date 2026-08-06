import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="left">
        <h2 className="logo">ANUSHAYA </h2>
      </div>

      <div className="center">

        <Link to="/" className="nav-link">Home</Link>

        <Link to="/about" className="nav-link">About</Link>

        <Link to="/skills" className="nav-link">Skills</Link>

        <Link to="/projects" className="nav-link">Projects</Link>

        <Link to="/certificates" className="nav-link">Certificates</Link>

        <Link to="/contact" className="nav-link">Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;