
import { useState } from "react";
import {
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubscribe = async (
    e
  ) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data =
        await response.json();

      if (response.ok) {
        alert(
          "Successfully subscribed!"
        );

        setEmail("");
      } else {
        alert(
          data.message ||
            "Subscription failed"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Server connection error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span>
          NEWSLETTER
        </span>

        <h2>
          Stay Informed.
          <br />
          Stay Inspired.
        </h2>

        <p>
          Subscribe for legal
          insights, research
          publications and updates
          from my academic and
          professional journey.
        </p>

        <form
          className="newsletter-form"
          onSubmit={
            handleSubscribe
          }
        >

          <div className="input-group">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />

          </div>

          <button
            type="submit"
          >
            {loading
              ? "Subscribing..."
              : "Subscribe Now"}
          </button>

        </form>

        <div className="newsletter-benefits">

          <div>
            <FaCheckCircle />
            <span>
              Legal Research Updates
            </span>
          </div>

          <div>
            <FaCheckCircle />
            <span>
              New Publications
            </span>
          </div>

          <div>
            <FaCheckCircle />
            <span>
              Community Initiatives
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;

