
import { NavLink } from "react-router-dom";

import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBalanceScale,
  FaChevronRight,
  FaYoutube,
} from "react-icons/fa";

import {
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-logo">
            <FaBalanceScale />
          </div>

          <h2>
            BAKITA
            <br />
            LYDIA ELIZABETH
          </h2>

          <span>
            LAW STUDENT • RESEARCHER • ADVOCATE
          </span>

          <div className="gold-line"></div>

          <p>
            Aspiring advocate dedicated to promoting
            justice, upholding integrity and creating
            meaningful impact through the law.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <NavLink to="/">
            <FaChevronRight />
            Home
          </NavLink>

          <NavLink to="/about">
            <FaChevronRight />
            About
          </NavLink>

          <NavLink to="/academic">
            <FaChevronRight />
            Journey
          </NavLink>

          <NavLink to="/publications">
            <FaChevronRight />
            Publications
          </NavLink>

          <NavLink to="/contact">
            <FaChevronRight />
            Contact
          </NavLink>

        </div>

        {/* CONNECT */}

        <div className="footer-connect">

          <h3>Let's Connect</h3>

          <p>
            I'd love to hear from you.
            Let's connect and create
            something impactful together.
          </p>

          <a
            href="mailto:info.bakitalydiaelizabeth@gmail.com"
            className="footer-btn"
          >
            Send Message
          </a>

        </div>

      </div>

      {/* CONTACT SECTION */}

      <div className="footer-middle">

        <div className="contact-info">

          <h3>Contact</h3>

          <p>
            <FaEnvelope />
            info.bakitalydiaelizabeth@gmail.com
          </p>

          <p>
            <FaPhoneAlt />
            0700225368
          </p>

          <p>
            <FaMapMarkerAlt />
            Mukono, Uganda
          </p>

        </div>

        <div className="social-area">

          <h3>Follow Me</h3>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/in/bakita-lydia-elizabeth-b94267419/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@BakitaLydiaElizabeth"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.instagram.com/bakiliz10/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/BakitalydiaEliz"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.tiktok.com/@lydializ14"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href="mailto:info.bakitalydiaelizabeth@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <FaBalanceScale className="bottom-icon" />

        <p>
          © 2026 Bakita Lydia Elizabeth.
          All Rights Reserved.
        </p>

        <div className="developer-credit">
          Designed & Developed by
          <span> ETH TECH SOLUTIONS</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;

