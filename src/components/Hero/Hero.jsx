
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          LAW STUDENT • RESEARCHER • ADVOCATE
        </span>

        <h1>
          Building a
          <br />
          legacy of
          <span> justice.</span>
        </h1>

        <p>
          I am Bakita Lydia Elizabeth, a Bachelor of Laws
          student passionate about justice, legal research,
          advocacy and community engagement. Through academic
          excellence, leadership and service, I am building
          a foundation for a future dedicated to the rule of
          law and positive social impact.
        </p>

        <div className="hero-buttons">

          <Link
            to="/academic"
            className="primary-btn"
          >
            Explore My Journey
          </Link>

          <Link
            to="/about"
            className="secondary-btn"
          >
            About Me
          </Link>

        </div>

        <div className="stats-container">

          <div className="stat-card">
            <h2>2nd Year</h2>
            <p>Law Student</p>
          </div>

          <div className="stat-card">
            <h2>LL.B</h2>
            <p>Academic Journey</p>
          </div>

          <div className="stat-card">
            <h2>Research</h2>
            <p>Legal Writing</p>
          </div>

          <div className="stat-card">
            <h2>Advocacy</h2>
            <p>Future Practice</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="main-image">
          <img
            src="/contact-hero.jpg"
            alt="Bakita Lydia Elizabeth"
          />
        </div>

        <div className="floating-card card-1">

          <img
            src="/mootcourt.jpg"
            alt="Moot Court"
          />

          <h4>Moot Court</h4>

          <p>
            Advocating with purpose.
          </p>

        </div>

        <div className="floating-card card-2">

          <img
            src="/research.jpg"
            alt="Legal Research"
          />

          <h4>Legal Research</h4>

          <p>
            Exploring. Analysing. Impacting.
          </p>

        </div>

        <div className="floating-card card-3">

          <img
            src="/community.jpg"
            alt="Community Impact"
          />

          <h4>Community Impact</h4>

          <p>
            Service through law.
          </p>

        </div>

        <div className="quote-box">

          <p>
            "Justice begins with knowledge,
            integrity and service."
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;

