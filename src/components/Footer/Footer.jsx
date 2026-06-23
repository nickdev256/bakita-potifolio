import {
FaLinkedinIn,
FaInstagram,
FaEnvelope,
FaPhoneAlt,
FaMapMarkerAlt,
FaBalanceScale,
FaChevronRight
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
return ( <footer className="footer">


  <div className="footer-top">

    {/* LEFT */}

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

    {/* LINKS */}

    <div className="footer-links">

      <h3>Quick Links</h3>

      <a href="/">
        <FaChevronRight /> Home
      </a>

      <a href="/about">
        <FaChevronRight /> About
      </a>

      <a href="/academic">
        <FaChevronRight /> Journey
      </a>

      <a href="/publications">
        <FaChevronRight /> Publications
      </a>

      <a href="/contact">
        <FaChevronRight /> Contact
      </a>

    </div>

    {/* CONNECT */}

    <div className="footer-connect">

      <h3>Let's Connect</h3>

      <p>
        I'd love to hear from you.
        Let's connect and create
        something impactful together.
      </p>

      <button>
        Send Message
      </button>

    </div>

  </div>

  {/* MIDDLE */}

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

        <a href="#">
          <FaLinkedinIn />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a href="#">
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
