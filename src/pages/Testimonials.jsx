import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Testimonials() {
  return (
    <>
      <Navbar />

      <section className="page-section">
        <h1>Testimonials</h1>

        <div className="testimonial-card">
          <p>
            "A highly dedicated law student with
            exceptional leadership potential."
          </p>

          <h4>Lecturer</h4>
        </div>

        <div className="testimonial-card">
          <p>
            "Committed to excellence and legal
            research."
          </p>

          <h4>Mentor</h4>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Testimonials;