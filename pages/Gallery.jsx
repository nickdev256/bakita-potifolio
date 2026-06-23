import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  FaGraduationCap,
  FaBalanceScale,
  FaUsers,
  FaHandsHelping,
  FaTrophy,
  FaBookOpen,
  FaGavel,
  FaGlobeAfrica,
  FaStar
} from "react-icons/fa";

import "./Gallery.css";

function Gallery() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="gallery-hero">

        <div className="gallery-left">

          <span>PHOTO GALLERY</span>

          <div className="gold-line"></div>

          <h1>
            Capturing
            <br />
            Moments.
            <br />
            <span>Creating Impact.</span>
          </h1>

          <p>
            A visual journey through academic excellence,
            moot court achievements, leadership engagements
            and community service.
          </p>

          <h3>
            Bakita Lydia Elizabeth
          </h3>

          <small>
            Law Student | Leader | Advocate
          </small>

        </div>

        <div className="gallery-right">

          <img
            src="/profile.jpg"
            alt="Bakita Lydia"
          />

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="gallery-categories">

        <div className="category-card">
          <FaGraduationCap />
          <h3>Academic Life</h3>
        </div>

        <div className="category-card">
          <FaBalanceScale />
          <h3>Moot Court & Advocacy</h3>
        </div>

        <div className="category-card">
          <FaUsers />
          <h3>Leadership Activities</h3>
        </div>

        <div className="category-card">
          <FaHandsHelping />
          <h3>Community Impact</h3>
        </div>

      </section>

      {/* GALLERY */}

      <section className="photo-gallery">

        <div className="section-title">

          <h2>Photo Moments</h2>

        </div>

        <div className="gallery-grid">

          <img src="/gallery1.jpg" alt="" />
          <img src="/gallery2.jpg" alt="" />
          <img src="/gallery3.jpg" alt="" />
          <img src="/gallery4.jpg" alt="" />
          <img src="/gallery5.jpg" alt="" />
          <img src="/gallery6.jpg" alt="" />
          <img src="/gallery7.jpg" alt="" />
          <img src="/gallery8.jpg" alt="" />

        </div>

      </section>

      {/* HIGHLIGHTS */}

      <section className="gallery-highlights">

        <div className="highlight-box">
          <FaTrophy />
          <h3>Achievements</h3>
          <p>Milestones and recognitions.</p>
        </div>

        <div className="highlight-box">
          <FaBookOpen />
          <h3>Learning</h3>
          <p>Knowledge in action.</p>
        </div>

        <div className="highlight-box">
          <FaUsers />
          <h3>Connections</h3>
          <p>Building meaningful relationships.</p>
        </div>

        <div className="highlight-box">
          <FaGavel />
          <h3>Advocacy</h3>
          <p>Standing for justice and fairness.</p>
        </div>

        <div className="highlight-box">
          <FaGlobeAfrica />
          <h3>Service</h3>
          <p>Giving back to communities.</p>
        </div>

        <div className="highlight-box">
          <FaStar />
          <h3>Growth</h3>
          <p>Continuously becoming better.</p>
        </div>

      </section>

      {/* QUOTE */}

      <section className="gallery-quote">

        <blockquote>
          Every photograph represents a moment
          of growth, purpose, leadership and impact.
        </blockquote>

        <span>
          — Bakita Lydia Elizabeth —
        </span>

      </section>

      <Footer />

    </>
  );
}

export default Gallery;