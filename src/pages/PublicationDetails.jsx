import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  FaArrowLeft,
  FaCalendarAlt,
  FaFolderOpen,
  FaBookOpen,
  FaQuoteLeft,
  FaDownload,
} from "react-icons/fa";

import "./PublicationDetails.css";

function PublicationDetails() {
  const { id } = useParams();

  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/publications/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPublication(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="publication-loading">
          Loading Publication...
        </div>

        <Footer />
      </>
    );
  }

  if (!publication) {
    return (
      <>
        <Navbar />

        <div className="publication-loading">
          Publication Not Found
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="publication-page">

        <div className="publication-hero">

          {publication.image_url && (
            <img
              src={publication.image_url}
              alt={publication.title}
            />
          )}

          <div className="hero-overlay">

            <Link
              to="/publications"
              className="back-link"
            >
              <FaArrowLeft />
              Back to Publications
            </Link>

            <span className="publication-tag">
              {publication.category}
            </span>

            <h1>
              {publication.title}
            </h1>

            <div className="hero-meta">

              <span>
                <FaFolderOpen />
                {publication.category}
              </span>

              <span>
                <FaCalendarAlt />
                {publication.publication_year}
              </span>

              <span>
                <FaBookOpen />
                {publication.status}
              </span>

            </div>

          </div>

        </div>

        <div className="publication-wrapper">

          <div className="publication-main">

            <div className="publication-summary">

              <FaQuoteLeft />

              <p>
                {publication.description}
              </p>

            </div>

            <article className="publication-content">

              <h2>
                Publication Content
              </h2>

              <div>
                {publication.content}
              </div>

            </article>

          </div>

          <aside className="publication-sidebar">

            <div className="sidebar-card">

              <h3>
                Publication Details
              </h3>

              <ul>

                <li>
                  <strong>Category</strong>
                  <span>
                    {publication.category}
                  </span>
                </li>

                <li>
                  <strong>Year</strong>
                  <span>
                    {publication.publication_year}
                  </span>
                </li>

                <li>
                  <strong>Status</strong>
                  <span>
                    {publication.status}
                  </span>
                </li>

              </ul>

            </div>

            <button className="download-btn">
              <FaDownload />
              Download PDF
            </button>

          </aside>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default PublicationDetails;