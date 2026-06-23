import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBalanceScale,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaFileAlt,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-left">

          <span>CONTACT</span>

          <div className="gold-line"></div>

          <h1>
            Let's Connect &
            <br />
            <span>Collaborate.</span>
          </h1>

          <p>
            Whether it's legal discussions,
            academic opportunities, leadership
            initiatives or community projects,
            I'd love to hear from you.
          </p>

          <h2 className="signature">
            Bakita Lydia Elizabeth
          </h2>

          <h4>
            LAW STUDENT | LEADER | ADVOCATE
          </h4>

        </div>

        <div className="contact-right">

          <img
            src="/contact-hero.jpg"
            alt="Bakita Lydia Elizabeth"
          />

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="contact-main">

        {/* INFO CARD */}

        <div className="contact-info-card">

          <h2>GET IN TOUCH</h2>

          <div className="gold-line small"></div>

          <div className="info-item">

            <div className="icon-circle">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>bakitalydia175@gmail.com</p>
            </div>

          </div>

          <div className="info-item">

            <div className="icon-circle">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>
              <p>0700225368</p>
            </div>

          </div>

          <div className="info-item">

            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Mukono, Uganda</p>
            </div>

          </div>

          <div className="info-item">

            <div className="icon-circle">
              <FaBalanceScale />
            </div>

            <div>
              <h3>Profession</h3>
              <p>Law Student & Future Advocate</p>
            </div>

          </div>

        </div>

        {/* FORM */}

        <div className="contact-form-card">

          <h2>SEND A MESSAGE</h2>

          <div className="gold-line small"></div>

          <form>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div className="input-box">
              <FaFileAlt />
              <input
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="input-box textarea">
              <textarea
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit">
              <FaPaperPlane />
              SEND MESSAGE
            </button>

          </form>

        </div>

      </section>

      {/* SOCIAL CONNECT */}

      <section className="social-connect">

        <h2>LET'S CONNECT</h2>

        <div className="gold-line center"></div>

        <div className="social-grid">

          <div className="social-card">

            <div className="social-icon">
              <FaLinkedinIn />
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>

          </div>

          <div className="social-card">

            <div className="social-icon">
              <FaInstagram />
            </div>

            <div>
              <h3>Instagram</h3>
              <p>Follow my journey</p>
            </div>

          </div>

          <div className="social-card">

            <div className="social-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>Send me an email</p>
            </div>

          </div>

        </div>

      </section>

      {/* QUOTE */}

      <section className="contact-quote">

        <div className="quote-overlay">

          <blockquote>
            Every meaningful opportunity
            starts with a simple conversation.
          </blockquote>

          <span>
            — Bakita Lydia Elizabeth —
          </span>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;