import "./Stats.css";
import {
FaGraduationCap,
FaBookOpen,
FaGavel,
FaHandsHelping,
FaBalanceScale,
} from "react-icons/fa";

function Stats() {
return ( <section className="stats-section">


  <div className="stats-header">
    <span>ACHIEVEMENTS</span>

    <h2>
      A Journey of Growth,
      <span> Impact & Excellence</span>
    </h2>

    <p>
      Every number represents dedication,
      hard work and commitment to justice,
      leadership and service.
    </p>
  </div>

  <div className="stats-grid">

    <div className="stat-card">
      <div className="icon-circle">
        <FaGraduationCap />
      </div>

      <h3>02+</h3>

      <h4>Year Of Study </h4>

      <p>
        Pursuing excellence in legal education.
      </p>
    </div>

    <div className="stat-card">
      <div className="icon-circle">
        <FaBookOpen />
      </div>

      <h3>10+</h3>

      <h4>Research Papers</h4>

      <p>
        Legal research on emerging issues and reforms.
      </p>
    </div>

    <div className="stat-card">
      <div className="icon-circle">
        <FaGavel />
      </div>

      <h3>05+</h3>

      <h4>Moot Court Events</h4>

      <p>
        Advocacy, argumentation and legal competitions.
      </p>
    </div>

    <div className="stat-card">
      <div className="icon-circle">
        <FaHandsHelping />
      </div>

      <h3>15+</h3>

      <h4>Community Projects</h4>

      <p>
        Creating awareness and impact through service.
      </p>
    </div>

  </div>

  <div className="quote-banner">

    <div className="quote-icon">
      <FaBalanceScale />
    </div>

    <p>
      Justice is not just a career path,
      it is a calling to serve and uplift
      humanity with integrity and purpose.
    </p>

  </div>

</section>


);
}

export default Stats;
