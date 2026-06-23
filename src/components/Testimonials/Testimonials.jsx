
import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-header">

        <span>TESTIMONIALS</span>

        <h2>
          What People Say
        </h2>

        <p>
          Reflections from mentors,
          lecturers and colleagues who
          have witnessed my academic and
          leadership journey.
        </p>

      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <p>
            Bakita demonstrates strong
            analytical skills and a genuine
            commitment to legal research
            and academic excellence.
          </p>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h4>Academic Mentor</h4>
          <span>Uganda Christian University</span>

        </div>

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <p>
            A dedicated student leader
            who approaches every task
            with professionalism,
            integrity and determination.
          </p>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h4>Student Leader</h4>
          <span>UCU Community</span>

        </div>

        <div className="testimonial-card">

          <FaQuoteLeft className="quote-icon" />

          <p>
            Her passion for justice and
            advocacy makes her a promising
            future legal professional.
          </p>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h4>Community Mentor</h4>
          <span>Legal Awareness Program</span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;

