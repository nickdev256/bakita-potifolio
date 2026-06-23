import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
FaBookOpen,
FaLandmark,
FaShieldAlt,
FaFemale,
FaBalanceScale,
FaFileAlt,
FaArrowRight,
FaLaptopCode,
FaGlobeAfrica,
FaGavel
} from "react-icons/fa";

import "./Publications.css";

function Publications() {
return (
<> <Navbar />


  {/* HERO */}

  <section className="publications-hero">

    <div className="publications-left">

      <span>LEGAL PUBLICATIONS</span>

      <h1>
        Research.
        <br />
        Analysis.
        <br />
        <span>Advocacy.</span>
      </h1>

      <p>
        Exploring contemporary legal issues
        through research, critical analysis
        and a commitment to justice.
      </p>

    </div>

    <div className="publications-right">

      <img
        src="/publications-hero.jpg"
        alt="Legal Publications"
      />

    </div>

  </section>

  {/* FEATURED RESEARCH */}

  <section className="featured-publication">

    <div className="featured-label">

      <FaBookOpen />

      <h4>
        Featured Research
      </h4>

    </div>

    <div className="featured-image">

      <img
        src="/featured-research.jpg"
        alt="Featured Research"
      />

    </div>

    <div className="featured-content">

      <h2>
        Land Rights in Uganda:
        Historical Perspectives and
        Modern Challenges
      </h2>

      <p>
        An in-depth analysis of land ownership,
        legal frameworks, challenges and
        opportunities for reform in Uganda.
      </p>

      <button>
        Read Publication
        <FaArrowRight />
      </button>

    </div>

    <div className="featured-meta">

      <div className="meta-item">
        <strong>Category</strong>
        <span>Land Law</span>
      </div>

      <div className="meta-item">
        <strong>Type</strong>
        <span>Research Paper</span>
      </div>

      <div className="meta-item">
        <strong>Year</strong>
        <span>2026</span>
      </div>

      <div className="meta-item">
        <strong>Pages</strong>
        <span>24</span>
      </div>

      <div className="meta-item">
        <strong>Status</strong>
        <span>Available</span>
      </div>

    </div>

  </section>

  {/* PUBLICATIONS */}

  <section className="publications-section">

    <div className="section-header">

      <span>PUBLICATIONS</span>

      <h2>
        Research Papers & Articles
      </h2>

    </div>

    <div className="publications-grid">

      <div className="publication-card">

        <FaLandmark />

        <h3>
          Constitutional Rights
          in Uganda
        </h3>

        <p>
          A critical examination of constitutional
          rights and their protection mechanisms.
        </p>

        <a href="#">
          Read More
        </a>

      </div>

      <div className="publication-card">

        <FaLaptopCode />

        <h3>
          Technology and
          Privacy Law
        </h3>

        <p>
          Exploring the legal implications
          of technology and data protection.
        </p>

        <a href="#">
          Read More
        </a>

      </div>

      <div className="publication-card">

        <FaShieldAlt />

        <h3>
          Human Rights
          Protection
        </h3>

        <p>
          Examining legal frameworks that
          safeguard human dignity.
        </p>

        <a href="#">
          Read More
        </a>

      </div>

      <div className="publication-card">

        <FaFemale />

        <h3>
          Women and
          Access to Justice
        </h3>

        <p>
          Legal and social barriers affecting
          women in accessing justice.
        </p>

        <a href="#">
          Read More
        </a>

      </div>

      <div className="publication-card">

        <FaBalanceScale />

        <h3>
          Access to Justice
          in Uganda
        </h3>

        <p>
          Practical approaches to making
          legal services more accessible.
        </p>

        <a href="#">
          Read More
        </a>

      </div>

      <div className="publication-card">

        <FaFileAlt />

        <h3>
          Constitutionalism,
          Democracy &
          Governance
        </h3>

        <p>
          Reflections on constitutional
          governance and democratic values.
        </p>

        <a href="#">
          Read More
        </a>

      </div>

    </div>

  </section>

  {/* RESEARCH INTERESTS */}

  <section className="research-interests">

    <div className="interest-box">

      <h2>
        Research Interests
      </h2>

      <div className="interest-grid">

        <div>
          <FaBalanceScale />
          <p>Constitutional Law</p>
        </div>

        <div>
          <FaShieldAlt />
          <p>Human Rights Law</p>
        </div>

        <div>
          <FaGlobeAfrica />
          <p>Land Law</p>
        </div>

        <div>
          <FaGavel />
          <p>Commercial Law</p>
        </div>

        <div>
          <FaLaptopCode />
          <p>Technology & Law</p>
        </div>

      </div>

    </div>

    <div className="future-box">

      <h2>
        Future Publications
      </h2>

      <ul>

        <li>
          Artificial Intelligence and the
          Future of Legal Practice
        </li>

        <li>
          Access to Justice in Rural
          Communities
        </li>

        <li>
          Constitutional Reform and
          Legal Modernization
        </li>

        <li>
          Digital Privacy and Data
          Protection in Uganda
        </li>

      </ul>

    </div>

  </section>

  {/* QUOTE */}

  <section className="publication-quote">

    <blockquote>
      “Research is the foundation of justice
      and the pathway to meaningful change.”
    </blockquote>

    <span>
      — Bakita Lydia Elizabeth
    </span>

  </section>

  <Footer />

</>


);
}

export default Publications;
