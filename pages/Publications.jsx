
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  FaBookOpen,
  FaArrowRight,
  FaBalanceScale,
  FaShieldAlt,
  FaLaptopCode,
  FaGlobeAfrica,
  FaGavel
} from "react-icons/fa";

import "./Publications.css";

function Publications() {
  const [publications, setPublications] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/publications")
      .then((res) => res.json())
      .then((data) => {
        setPublications(data);

        const featuredPublication =
          data.find((item) => item.featured);

        if (featuredPublication) {
          setFeatured(featuredPublication);
        }
      })
      .catch((error) =>
        console.error(error)
      );
  }, []);

  return (
    <>
      <Navbar />

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

      {featured && (

        <section className="featured-publication">

          <div className="featured-label">
            <FaBookOpen />
            <h4>Featured Research</h4>
          </div>

          <div className="featured-image">

            <img
              src={featured.image_url}
              alt={featured.title}
            />

          </div>

          <div className="featured-content">

            <h2>
              {featured.title}
            </h2>

            <p>
              {featured.description}
            </p>

            <button>
              Read Publication
              <FaArrowRight />
            </button>

          </div>

          <div className="featured-meta">

            <div className="meta-item">
              <strong>Category</strong>
              <span>{featured.category}</span>
            </div>

            <div className="meta-item">
              <strong>Year</strong>
              <span>{featured.publication_year}</span>
            </div>

            <div className="meta-item">
              <strong>Status</strong>
              <span>{featured.status}</span>
            </div>

          </div>

        </section>

      )}

      <section className="publications-section">

        <div className="section-header">

          <span>PUBLICATIONS</span>

          <h2>
            Research Papers & Articles
          </h2>

        </div>

        <div className="publications-grid">

          {publications.map((publication) => (

            <div
              key={publication.id}
              className="publication-card"
            >

              <FaBookOpen />

              <h3>
                {publication.title}
              </h3>

              <p>
                {publication.description}
              </p>

              <a href="#">
                Read More
              </a>

            </div>

          ))}

        </div>

      </section>

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

      </section>

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

