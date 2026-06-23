import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  FaBalanceScale,
  FaUsers,
  FaHandsHelping,
  FaBullhorn,
  FaGraduationCap,
  FaGlobeAfrica,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

import "./CommunityImpact.css";

function CommunityImpact() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="impact-hero">

        <div className="impact-left">

          <span>COMMUNITY IMPACT & SERVICE</span>

          <div className="gold-line"></div>

          <h1>
            Making a
            <br />
            Difference.
            <br />
            <span>Changing Lives.</span>
          </h1>

          <p>
            Using legal knowledge, leadership and
            compassion to empower communities and
            promote justice for all.
          </p>

          <button className="impact-btn">
            My Impact Journey
            <FaArrowRight />
          </button>

        </div>

        <div className="impact-right">

          <img
            src="/public/moot-hero.jpg"
            alt="Community Impact"
          />

        </div>

      </section>

      {/* STATS */}

      <section className="impact-stats">

        <div className="stat-card">
          <h3>250+</h3>
          <p>People Reached</p>
        </div>

        <div className="stat-card">
          <h3>12+</h3>
          <p>Outreach Events</p>
        </div>

        <div className="stat-card">
          <h3>5+</h3>
          <p>Awareness Campaigns</p>
        </div>

        <div className="stat-card">
          <h3>8+</h3>
          <p>Leadership Roles</p>
        </div>

      </section>

      {/* AREAS OF IMPACT */}

      <section className="areas-section">

        <div className="section-title">

          <span>IMPACT AREAS</span>

          <h2>
            Areas Of Impact
          </h2>

        </div>

        <div className="areas-grid">

          <div className="area-card">
            <FaBalanceScale />
            <h3>Legal Awareness</h3>

            <p>
              Educating communities about
              their rights and access to justice.
            </p>
          </div>

          <div className="area-card">
            <FaUsers />
            <h3>Youth Empowerment</h3>

            <p>
              Inspiring young people through
              leadership and skill building.
            </p>
          </div>

          <div className="area-card">
            <FaHandsHelping />
            <h3>Community Service</h3>

            <p>
              Serving communities through
              volunteer initiatives.
            </p>
          </div>

          <div className="area-card">
            <FaBullhorn />
            <h3>Advocacy</h3>

            <p>
              Raising voices for justice,
              equality and human dignity.
            </p>
          </div>

          <div className="area-card">
            <FaGraduationCap />
            <h3>Mentorship</h3>

            <p>
              Guiding students toward
              academic excellence.
            </p>
          </div>

          <div className="area-card">
            <FaGlobeAfrica />
            <h3>Social Justice</h3>

            <p>
              Promoting fairness and inclusion
              in communities.
            </p>
          </div>

        </div>

      </section>

      {/* FEATURED INITIATIVE + JOURNEY */}

      <section className="initiative-journey">

        <div className="initiative-card">

          <span>FEATURED INITIATIVE</span>

          <h2>
            Legal Rights
            Awareness Project
          </h2>

          <p>
            A community education program aimed
            at empowering citizens with knowledge
            about their rights.
          </p>

          <ul>

            <li>
              <FaCheckCircle />
              Constitutional Rights
            </li>

            <li>
              <FaCheckCircle />
              Human Rights
            </li>

            <li>
              <FaCheckCircle />
              Women's Rights
            </li>

            <li>
              <FaCheckCircle />
              Land Rights
            </li>

            <li>
              <FaCheckCircle />
              Access To Justice
            </li>

          </ul>

          <button>
            Learn More
            <FaArrowRight />
          </button>

        </div>

        <div className="journey-card">

          <h2>
            My Impact Journey
          </h2>

          <div className="timeline">

            <div className="timeline-item">

              <h3>2023</h3>

              <div>
                <h4>Getting Involved</h4>

                <p>
                  Started volunteering in
                  community outreach and service.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <h3>2024</h3>

              <div>
                <h4>Awareness & Education</h4>

                <p>
                  Participated in legal awareness
                  campaigns.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <h3>2025</h3>

              <div>
                <h4>Mentorship & Growth</h4>

                <p>
                  Mentored students and youth
                  groups through leadership.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <h3>2026</h3>

              <div>
                <h4>Leadership & Advocacy</h4>

                <p>
                  Leading initiatives that
                  promote justice and equality.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="community-gallery">

        <div className="section-title">

          <span>PHOTO STORIES</span>

          <h2>
            Community Moments
          </h2>

        </div>

        <div className="gallery-grid">

          <img src="/community1.jpg" alt="" />
          <img src="/community2.jpg" alt="" />
          <img src="/community3.jpg" alt="" />
          <img src="/community4.jpg" alt="" />
          <img src="/community5.jpg" alt="" />
          <img src="/community6.jpg" alt="" />

        </div>

      </section>

      {/* QUOTE */}

      <section className="impact-quote">

        <blockquote>
          "The true measure of success is not in
          what we achieve for ourselves, but in
          the lives we touch and the communities
          we uplift."
        </blockquote>

        <span>
          — Bakita Lydia Elizabeth
        </span>

      </section>

      <Footer />

    </>
  );
}

export default CommunityImpact;