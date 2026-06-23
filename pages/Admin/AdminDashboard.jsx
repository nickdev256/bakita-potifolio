
import {
  FaBookOpen,
  FaUsers,
  FaEnvelope,
  FaChartLine,
} from "react-icons/fa";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      <aside className="admin-sidebar">

        <h2>Bakita Admin</h2>

        <ul>
          <li>Dashboard</li>
          <li>Publications</li>
          <li>Subscribers</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>

      </aside>

      <main className="admin-content">

        <div className="admin-header">

          <h1>
            Welcome Back,
            Bakita Lydia
          </h1>

          <p>
            Manage publications,
            subscribers and messages.
          </p>

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <FaBookOpen />
            <h2>12</h2>
            <p>Publications</p>
          </div>

          <div className="stat-card">
            <FaUsers />
            <h2>120</h2>
            <p>Subscribers</p>
          </div>

          <div className="stat-card">
            <FaEnvelope />
            <h2>45</h2>
            <p>Messages</p>
          </div>

          <div className="stat-card">
            <FaChartLine />
            <h2>2.5K</h2>
            <p>Views</p>
          </div>

        </div>

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <button>
            Add Publication
          </button>

          <button>
            View Messages
          </button>

          <button>
            View Subscribers
          </button>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;

