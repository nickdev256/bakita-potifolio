
import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { HashLink } from "react-router-hash-link";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [clickCount, setClickCount] =
    useState(0);

  const navigate =
    useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = () => {

    const newCount =
      clickCount + 1;

    setClickCount(newCount);

    if (newCount === 3) {

      const pin =
        prompt(
          "Enter Admin PIN"
        );

      if (pin === "1234") {

        navigate("/admin");

      } else {

        alert(
          "Incorrect PIN"
        );

      }

      setClickCount(0);
    }

    setTimeout(() => {

      setClickCount(0);

    }, 1000);
  };

  return (
    <header className="navbar">

      <div
        className="logo-section"
        onClick={
          handleLogoClick
        }
        style={{
          cursor: "pointer",
        }}
      >

        <img
          src="/law-logo.png"
          alt="Bakita Lydia Logo"
          className="logo-image"
        />

        <div className="logo-text">

          <h2>
            BAKITA LYDIA ELIZABETH
          </h2>

          <p>
            LAW STUDENT • RESEARCHER • ADVOCATE
          </p>

        </div>

      </div>

      <div
        className="menu-toggle"
        onClick={() =>
          setMenuOpen(
            !menuOpen
          )
        }
      >

        {menuOpen
          ? <FaTimes />
          : <FaBars />}

      </div>

      <nav
        className={
          menuOpen
            ? "active"
            : ""
        }
      >

        <ul className="nav-links">

          <li>
            <Link
              to="/"
              onClick={
                closeMenu
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={
                closeMenu
              }
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/academic"
              onClick={
                closeMenu
              }
            >
              Academic Journey
            </Link>
          </li>

          <li>
            <Link
              to="/publications"
              onClick={
                closeMenu
              }
            >
              Publications
            </Link>
          </li>

          <li>
            <Link
              to="/moot-court"
              onClick={
                closeMenu
              }
            >
              Moot Court
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={
                closeMenu
              }
            >
              Contact
            </Link>
          </li>

        </ul>

      </nav>

      <HashLink
        smooth
        to="/contact#contact-form"
        className="cv-btn"
      >
        Let's Connect
      </HashLink>

    </header>
  );
}

export default Navbar;
