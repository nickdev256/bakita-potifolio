
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

import "./ResearchWriting.css";

function ResearchWriting() {
  return (
    <section className="research-preview">

      {/* HEADER */}

      <div className="research-top">

        <div className="research-left">

          <span>RESEARCH & WRITING</span>

          <h2>
            Research.
            <br />
            Insight.
            <br />
            <span>Impact.</span>
          </h2>

          <p>
            Exploring legal issues through
            research, critical analysis and
            academic writing across various
            fields of law.
          </p>

          <Link
            to="/publications"
            className="research-btn"
          >
            View Research
            <FaArrowRight />
          </Link>

        </div>

        <div className="research-right">

          <img
            src="/research-books.jpg"
            alt="Research & Writing"
          />

        </div>

      </div>

      {/* RESEARCH AREAS */}

      <div className="research-focus">

        <div className="focus-item">
          <FaBalanceScale />
          <h3>Constitutional Law</h3>
          <p>
            Governance, justice and
            constitutional rights.
          </p>
        </div>

        <div className="focus-item">
          <FaShieldAlt />
          <h3>Human Rights Law</h3>
          <p>
            Promoting equality,
            dignity and justice.
          </p>
        </div>

        <div className="focus-item">
          <FaLaptopCode />
          <h3>Technology & Law</h3>
          <p>
            Digital rights, privacy
            and data protection.
          </p>
        </div>

      </div>

      {/* FEATURED RESEARCH */}

      <div className="research-grid">

        <div className="research-card">

          <span className="research-number">
            01
          </span>

          <h3>
            Land Rights in Uganda
          </h3>

          <p>
            Historical perspectives,
            legal challenges and
            future reforms.
          </p>

          <Link to="/publications">
            Read More
          </Link>

        </div>

        <div className="research-card">

          <span className="research-number">
            02
          </span>

          <h3>
            Constitutional Rights
          </h3>

          <p>
            Protection, governance
            and access to justice.
          </p>

          <Link to="/publications">
            Read More
          </Link>

        </div>

        <div className="research-card">

          <span className="research-number">
            03
          </span>

          <h3>
            Technology & Privacy Law
          </h3>

          <p>
            Digital rights, privacy
            and data protection.
          </p>

          <Link to="/publications">
            Read More
          </Link>

        </div>

      </div>

      {/* QUOTE */}

      <div className="research-quote">

        <blockquote>
          "Research transforms legal knowledge
          into meaningful social impact."
        </blockquote>

        <span>
          — Bakita Lydia Elizabeth
        </span>

      </div>

    </section>
  );
}

export default ResearchWriting;

