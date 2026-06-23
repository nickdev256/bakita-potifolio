
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section className="about-section">

      <div className="about-image">
        <img
          src="/gavel-bg.jpg"
          alt="Bakita Lydia Elizabeth"
        />
      </div>

      <div className="about-content">

        <span className="section-tag">
          About Me
        </span>

        <h2>
          Building a Future in Law Through Excellence,
          Leadership and Service
        </h2>

        <p>
          I am an aspiring advocate and legal researcher
          passionate about justice, leadership and
          community transformation through legal
          awareness. My journey in law is driven by a
          commitment to promoting the rule of law,
          protecting rights and contributing positively
          to society.
        </p>

        <p>
          Through academic excellence, legal research,
          moot court participation and community
          engagement, I continue to develop the skills
          necessary to become a competent legal
          professional and future leader in Uganda's
          legal sector.
        </p>

        <div className="about-values">

          <div className="value-card">
            <h3>Justice</h3>
            <p>Promoting fairness and equality.</p>
          </div>

          <div className="value-card">
            <h3>Integrity</h3>
            <p>Maintaining ethical standards.</p>
          </div>

          <div className="value-card">
            <h3>Leadership</h3>
            <p>Inspiring positive change.</p>
          </div>

          <div className="value-card">
            <h3>Excellence</h3>
            <p>Pursuing the highest standards.</p>
          </div>

        </div>

        <Link
          to="/about"
          className="about-btn"
        >
          Learn More About Me
        </Link>

      </div>

    </section>
  );
}

export default About;

