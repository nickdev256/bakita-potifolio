import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
FaBookOpen,
FaUsers,
FaUniversity,
FaBalanceScale,
FaMicrophone,
FaFileAlt,
FaSearch,
FaComments,
FaTrophy,
FaGavel,
FaAward
} from "react-icons/fa";

import "./MootCourt.css";

function MootCourt() {
return (
<> <Navbar />

```
  {/* HERO */}

  <section className="moot-hero">

    <div className="moot-left">

      <span>MOOT COURT & ADVOCACY</span>

      <h1>
        Moot Court
        <br />
        <span>Portfolio</span>
      </h1>

      <p>
        Advocacy • Legal Research • Oral Arguments
      </p>

      <small>
        Driven by a passion for justice and equipped
        with strong advocacy skills, I strive to
        present compelling legal arguments that
        make a difference.
      </small>

    </div>

    <div className="moot-right">

      <img
        src="/moot-hero.jpg"
        alt="Moot Court"
      />

    </div>

  </section>

  {/* JOURNEY */}

  <section className="journey-section">

    <h2>My Moot Court Journey</h2>

    <div className="journey-grid">

      <div className="journey-card">

        <span className="year">
          2024
        </span>

        <FaBookOpen />

        <h3>
          Introduction to Moot Court
        </h3>

        <p>
          Gained foundational knowledge in
          legal research, memorial drafting
          and oral advocacy.
        </p>

      </div>

      <div className="journey-card">

        <span className="year">
          2025
        </span>

        <FaUsers />

        <h3>
          Internal Moot Competition
        </h3>

        <p>
          Participated as researcher and
          oral advocate in internal
          competitions.
        </p>

      </div>

      <div className="journey-card">

        <span className="year">
          2026
        </span>

        <FaUniversity />

        <h3>
          National Moot Court
        </h3>

        <p>
          Representing the institution in
          national moot competitions.
        </p>

      </div>

    </div>

  </section>

  {/* SKILLS */}

  <section className="skills-section">

    <div className="skills-box">

      <h2>
        Core Skills Developed
      </h2>

      <div className="skills-grid">

        <div>
          <FaSearch />
          <p>Legal Research</p>
        </div>

        <div>
          <FaBalanceScale />
          <p>Oral Advocacy</p>
        </div>

        <div>
          <FaFileAlt />
          <p>Memorial Drafting</p>
        </div>

        <div>
          <FaGavel />
          <p>Case Analysis</p>
        </div>

        <div>
          <FaMicrophone />
          <p>Public Speaking</p>
        </div>

        <div>
          <FaUsers />
          <p>Team Collaboration</p>
        </div>

      </div>

    </div>

    <div className="case-box">

      <h2>
        Sample Moot Case
      </h2>

      <h3>
        Land Rights and
        Constitutional Protection
      </h3>

      <p>
        Role: Lead Oral Advocate
      </p>

      <ul>

        <li>
          Conducted legal research
        </li>

        <li>
          Drafted memorials
        </li>

        <li>
          Presented oral arguments
        </li>

        <li>
          Responded to judicial questions
        </li>

      </ul>

    </div>

  </section>

  {/* ACHIEVEMENTS */}

  <section className="moot-achievements">

    <h2>
      Advocacy Achievements
    </h2>

    <div className="achievement-grid">

      <div className="achievement-card">
        <FaTrophy />
        <h3>5+</h3>
        <p>Moot Competitions</p>
      </div>

      <div className="achievement-card">
        <FaBookOpen />
        <h3>20+</h3>
        <p>Authorities Researched</p>
      </div>

      <div className="achievement-card">
        <FaMicrophone />
        <h3>10+</h3>
        <p>Oral Presentations</p>
      </div>

      <div className="achievement-card">
        <FaAward />
        <h3>Strong</h3>
        <p>Leadership Skills</p>
      </div>

    </div>

  </section>

  {/* GALLERY */}

  <section className="moot-gallery">

    <h2>
      Moot Court Gallery
    </h2>

    <div className="gallery-grid">

      <img src="/gallery1.jpg" alt="" />
      <img src="/gallery2.jpg" alt="" />
      <img src="/gallery3.jpg" alt="" />
      <img src="/gallery4.jpg" alt="" />
      <img src="/gallery5.jpg" alt="" />

    </div>

  </section>

  {/* QUOTE */}

  <section className="moot-quote">

    <blockquote>
      "The essence of advocacy is not
      to win a case, but to serve justice."
    </blockquote>

    <span>
      — Bakita Lydia Elizabeth
    </span>

  </section>

  <Footer />
</>
);
}

export default MootCourt;
