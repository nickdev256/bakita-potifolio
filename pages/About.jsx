import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
FaGraduationCap,
FaBullseye,
FaBalanceScale,
FaBookOpen,
FaUsers,
FaTrophy
} from "react-icons/fa";

import "./About.css";

function About() {
return (
<> <Navbar />

```
  {/* HERO */}

  <section className="about-hero">

    <div className="about-left">

      <span className="about-tag">
        ABOUT ME
      </span>

      <h1>
        Driven by Justice.
        <br />
        Committed to
        <span> Impact.</span>
      </h1>

      <p>
        I am Bakita Lydia Elizabeth, an aspiring
        advocate, legal researcher and future leader
        dedicated to promoting justice, integrity and
        positive social transformation through law.
      </p>

      <button className="about-btn">
        Let's Connect
      </button>

    </div>

    <div className="about-right">
      <img
        src="/profile.jpg"
        alt="Bakita Lydia"
      />
    </div>

  </section>

  {/* CARDS */}

  <section className="about-cards">

    <div className="about-card">
      <FaGraduationCap className="card-icon" />

      <h3>Educational Background</h3>

      <p>
        Currently pursuing a Bachelor of Laws
        (LLB), building strong foundations in
        legal research, advocacy and ethics.
      </p>
    </div>

    <div className="about-card">
      <FaBullseye className="card-icon" />

      <h3>Career Aspirations</h3>

      <p>
        To become a respected advocate and
        legal scholar contributing to justice
        and legal reform.
      </p>
    </div>

    <div className="about-card">
      <FaBalanceScale className="card-icon" />

      <h3>Core Values</h3>

      <p>
        Integrity, professionalism, leadership,
        excellence and service.
      </p>
    </div>

  </section>

  {/* JOURNEY */}

  <section className="journey">

    <span>MY JOURNEY</span>

    <h2>
      A Path of Growth and Purpose
    </h2>

    <div className="journey-grid">

      <div className="journey-item">
        <FaBookOpen />

        <h3>The Foundation</h3>

        <p>
          Developing a strong academic
          foundation in law.
        </p>
      </div>

      <div className="journey-item">
        <FaBalanceScale />

        <h3>Building Skills</h3>

        <p>
          Strengthening legal research
          and advocacy abilities.
        </p>
      </div>

      <div className="journey-item">
        <FaUsers />

        <h3>Making Impact</h3>

        <p>
          Engaging in community service
          and legal awareness.
        </p>
      </div>

      <div className="journey-item">
        <FaTrophy />

        <h3>Future Vision</h3>

        <p>
          Aspiring to contribute to a
          fair and just society.
        </p>
      </div>

    </div>

  </section>

  {/* CTA */}

  <section className="about-cta">

    <div>
      <h2>
        Let's build something
        <span> impactful</span> together.
      </h2>

      <p>
        I am always open to collaborations,
        opportunities and meaningful conversations.
      </p>
    </div>

    <button>
      Get In Touch
    </button>

  </section>

  <Footer />
</>


);
}

export default About;
