
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span>NEWSLETTER</span>

        <h2>
          Stay Informed.
          <br />
          Stay Inspired.
        </h2>

        <p>
          Subscribe for legal insights,
          research publications and updates
          from my academic and professional
          journey.
        </p>

        <div className="newsletter-form">

          <div className="input-group">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Enter your email address"
            />

          </div>

          <button>
            Subscribe Now
          </button>

        </div>

        <div className="newsletter-benefits">

          <div>
            <FaCheckCircle />
            <span>Legal Research Updates</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>New Publications</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Community Initiatives</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;
