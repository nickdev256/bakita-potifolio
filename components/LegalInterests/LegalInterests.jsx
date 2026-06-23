import "./LegalInterests.css";

function LegalInterests() {
return ( <section className="legal-interests">

```
  <div className="section-title">
    <span>LEGAL INTERESTS</span>
    <h2>Areas of Legal Focus</h2>
  </div>

  <div className="interests-grid">

    <div className="interest-card">
      <h3>Constitutional Law</h3>
      <p>
        Governance, constitutional principles
        and the rule of law.
      </p>
    </div>

    <div className="interest-card">
      <h3>Human Rights Law</h3>
      <p>
        Protection of human dignity,
        equality and justice.
      </p>
    </div>

    <div className="interest-card">
      <h3>Land Law</h3>
      <p>
        Property rights and legal
        frameworks governing land.
      </p>
    </div>

    <div className="interest-card">
      <h3>Commercial Law</h3>
      <p>
        Business transactions and
        corporate governance.
      </p>
    </div>

  </div>

</section>


);
}

export default LegalInterests;
