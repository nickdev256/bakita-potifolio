
import { useState } from "react";

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

  const [formData, setFormData] =
    useState({
      full_name: "",
      email: "",
      subject: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await fetch(
          "http://localhost:5000/api/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              formData
            ),
          }
        );

      const data =
        await response.json();

      if (response.ok) {

        alert(
          "Message sent successfully!"
        );

        setFormData({
          full_name: "",
          email: "",
          subject: "",
          message: "",
        });

      } else {

        alert(
          data.message
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Failed to send message."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Navbar />

      {/* KEEP ALL YOUR EXISTING HERO
          AND INFO CARD CODE */}

      <section className="contact-main">

        <div className="contact-info-card">

          {/* KEEP YOUR CURRENT
              INFO CARD CONTENT */}

        </div>

        <div className="contact-form-card">

          <h2>
            SEND A MESSAGE
          </h2>

          <div className="gold-line small"></div>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <div className="input-box">

              <FaUser />

              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={
                  formData.full_name
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            <div className="input-box">

              <FaEnvelope />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            <div className="input-box">

              <FaFileAlt />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={
                  formData.subject
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            <div className="input-box textarea">

              <textarea
                name="message"
                placeholder="Write your message here..."
                value={
                  formData.message
                }
                onChange={
                  handleChange
                }
                required
              ></textarea>

            </div>

            <button
              type="submit"
            >

              <FaPaperPlane />

              {loading
                ? "SENDING..."
                : "SEND MESSAGE"}

            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;
