import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  FaBookOpen,
  FaSchool,
  FaGraduationCap,
  FaBullseye,
  FaBalanceScale,
  FaPenNib,
  FaGavel,
  FaUsers,
  FaFileAlt,
  FaTrophy,
  FaAward,
} from "react-icons/fa";

import "./AcademicJourney.css";

function AcademicJourney() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="academic-hero">

        <div className="academic-left">

          <span>ACADEMIC JOURNEY</span>

          <h1>
            A Path Towards
            <br />
            Legal <span>Excellence.</span>
          </h1>

          <p>
            Every stage of my education has shaped
            my passion for justice, leadership and
            advocacy.
          </p>

        </div>

        <div className="academic-right">
          <img
            src="/law-books.jpg"
            alt="Academic Journey"
          />
        </div>

      </section>

      {/* TIMELINE */}

      <section className="timeline-section">

        <h2>My Academic Journey</h2>

        <div className="timeline-grid">

          <div className="timeline-card">
            <FaBookOpen className="timeline-icon" />

            <h3>2008 – 2017</h3>

            <h4>Primary Education</h4>

            <p>
              Paul Mukasa Primary School where
              I developed discipline, values
              and academic excellence.
            </p>
          </div>

          <div className="timeline-card">
            <FaSchool className="timeline-icon" />

            <h3>2018 – 2021</h3>

            <h4>High School</h4>

            <p>
              St Joseph Nagalama where I
              developed leadership skills and
              interest in law and human rights.
            </p>
          </div>

          <div className="timeline-card">
            <FaGraduationCap className="timeline-icon" />

            <h3>2022 – Present</h3>

            <h4>University</h4>

            <p>
              Bachelor of Laws (LLB) at
              Uganda Christian University,
              Main Campus.
            </p>
          </div>

          <div className="timeline-card">
            <FaBullseye className="timeline-icon" />

            <h3>Future Goals</h3>

            <h4>Advocate</h4>

            <p>
              Graduate, join legal practice
              and contribute to justice and
              legal reform.
            </p>
          </div>

        </div>

      </section>

      {/* INTERESTS */}

      <section className="academic-cards">

        <div className="academic-card">
          <FaBalanceScale />

          <h3>Key Areas of Interest</h3>

          <ul>
            <li>Constitutional Law</li>
            <li>Human Rights Law</li>
            <li>Land Law</li>
            <li>Commercial Law</li>
            <li>Technology & Law</li>
          </ul>
        </div>

        <div className="academic-card">
          <FaPenNib />

          <h3>Research & Writing</h3>

          <p>
            Passionate about legal research,
            legal writing and policy analysis.
          </p>
        </div>

        <div className="academic-card">
          <FaGavel />

          <h3>Moot Court Experience</h3>

          <p>
            Active participation in moot court
            competitions, advocacy and legal
            argumentation.
          </p>
        </div>

        <div className="academic-card">
          <FaUsers />

          <h3>Leadership & Activities</h3>

          <p>
            Leadership initiatives, mentorship
            and community legal awareness.
          </p>
        </div>

      </section>

      {/* HIGHLIGHTS */}

      <section className="highlights">

        <h2>Academic Highlights</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <FaFileAlt />
            <h3>10+</h3>
            <p>Research Papers</p>
          </div>

          <div className="highlight-card">
            <FaTrophy />
            <h3>5+</h3>
            <p>Moot Court Events</p>
          </div>

          <div className="highlight-card">
            <FaUsers />
            <h3>6+</h3>
            <p>Community Projects</p>
          </div>

          <div className="highlight-card">
            <FaAward />
            <h3>3+</h3>
            <p>Leadership Roles</p>
          </div>

        </div>

      </section>

      {/* FUTURE VISION */}

      <section className="future-vision">

        <h2>Future Vision</h2>

        <blockquote>
          "My goal is to become a respected
          advocate and legal scholar who uses
          the law as a tool for positive social
          transformation."
        </blockquote>

        <span>- Bakita Lydia Elizabeth</span>

      </section>

      <Footer />
    </>
  );
}

export default AcademicJourney;