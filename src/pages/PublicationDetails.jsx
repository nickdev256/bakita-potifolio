import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
FaArrowLeft,
FaCalendarAlt,
FaFolderOpen,
FaBookOpen,
} from "react-icons/fa";

import "./PublicationDetails.css";

function PublicationDetails() {
const { id } = useParams();

const [publication, setPublication] =
useState(null);

const [loading, setLoading] =
useState(true);

const API_URL =
import.meta.env.VITE_API_URL ||
"http://localhost:5000";

useEffect(() => {
fetch(
`${API_URL}/api/publications/${id}`
)
.then((res) => res.json())
.then((data) => {
setPublication(data);
setLoading(false);
})
.catch((error) => {
console.error(error);
setLoading(false);
});
}, [id]);

if (loading) {
return (
<> <Navbar />

```
    <div className="publication-loading">
      Loading Publication...
    </div>

    <Footer />
  </>
);


}

if (!publication) {
return (
<> <Navbar />


    <div className="publication-not-found">
      Publication Not Found
    </div>

    <Footer />
  </>
);


}

return (
<> <Navbar />


  <section className="publication-details">

    <Link
      to="/publications"
      className="back-btn"
    >
      <FaArrowLeft />
      Back to Publications
    </Link>

    {publication.image_url && (
      <img
        src={publication.image_url}
        alt={publication.title}
      />
    )}

    <h1>
      {publication.title}
    </h1>

    <div className="publication-meta">

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

    <p className="publication-description">
      {publication.description}
    </p>

    <div className="publication-content">
      {publication.content}
    </div>

  </section>

  <Footer />
</>


);
}

export default PublicationDetails;
