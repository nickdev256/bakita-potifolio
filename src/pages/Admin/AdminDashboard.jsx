import React from "react";
import { Link } from "react-router-dom";

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
return ( <div className="admin-dashboard">

  <AdminSidebar />

  <main className="admin-content">

    <AdminHeader
      title="Dashboard"
      subtitle="Manage publications, subscribers and messages."
    />

    <div className="stats-grid">

      <div className="stat-card">
        <FaBookOpen className="stat-icon" />
        <h2>12</h2>
        <p>Publications</p>
      </div>

      <div className="stat-card">
        <FaUsers className="stat-icon" />
        <h2>120</h2>
        <p>Subscribers</p>
      </div>

      <div className="stat-card">
        <FaEnvelope className="stat-icon" />
        <h2>45</h2>
        <p>Messages</p>
      </div>

      <div className="stat-card">
        <FaChartLine className="stat-icon" />
        <h2>2.5K</h2>
        <p>Views</p>
      </div>

    </div>

    <section className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="action-buttons">

        <Link
          to="/admin/publications"
          className="action-btn"
        >
          Add Publication
        </Link>

        <Link
          to="/admin/messages"
          className="action-btn"
        >
          View Messages
        </Link>

        <Link
          to="/admin/subscribers"
          className="action-btn"
        >
          View Subscribers
        </Link>

      </div>

    </section>

    <section className="recent-activity">

      <h2>Recent Activity</h2>

      <div className="activity-card">
        <p>
          New subscriber joined the newsletter.
        </p>
      </div>

      <div className="activity-card">
        <p>
          New contact message received.
        </p>
      </div>

      <div className="activity-card">
        <p>
          Publication updated successfully.
        </p>
      </div>

    </section>

  </main>

</div>

);
}

export default AdminDashboard;
