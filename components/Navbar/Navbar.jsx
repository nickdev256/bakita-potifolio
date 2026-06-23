import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

      {/* Mobile Menu Button */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "active" : ""}>
        <ul className="nav-links">

          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/academic" onClick={closeMenu}>
              Academic Journey
            </Link>
          </li>

          <li>
            <Link to="/publications" onClick={closeMenu}>
              Publications
            </Link>
          </li>

          <li>
            <Link to="/moot-court" onClick={closeMenu}>
              Moot Court
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
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