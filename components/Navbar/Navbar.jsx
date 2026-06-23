import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-section">

        <img
          src="/law-logo.png"
          alt="Bakita Lydia Logo"
          className="logo-image"
        />

        <div className="logo-text">
          <h2>BAKITA LYDIA ELIZABETH</h2>

          <p>
            LAW STUDENT • RESEARCHER • ADVOCATE
          </p>
        </div>

      </div>

      <nav>
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About</Link></li>

          <li>
            <Link to="/academic">
              Academic Journey
            </Link>
          </li>

          <li>
            <Link to="/publications">
              Publications
            </Link>
          </li>

          <li>
            <Link to="/moot-court">
              Moot Court
            </Link>
          </li>

          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>

        </ul>
      </nav>

      <Link
        to="/contact"
        className="cv-btn"
      >
        Let's Connect
      </Link>

    </header>
  );
}

export default Navbar;