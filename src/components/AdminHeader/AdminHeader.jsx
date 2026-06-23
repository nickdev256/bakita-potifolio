
import "./AdminHeader.css";

function AdminHeader() {
  return (
    <header className="admin-header-bar">

      <div>

        <h1>
          Bakita Lydia Elizabeth
        </h1>

        <p>
          Admin Dashboard
        </p>

      </div>

      <div className="admin-user">

        <img
          src="/contact-hero.jpg"
          alt="Admin"
        />

        <div>
          <h4>
            Bakita Lydia
          </h4>

          <span>
            Administrator
          </span>
        </div>

      </div>

    </header>
  );
}

export default AdminHeader;

