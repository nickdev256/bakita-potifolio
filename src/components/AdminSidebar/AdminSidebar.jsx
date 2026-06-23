
import { Link } from "react-router-dom";

import {
  FaTachometerAlt,
  FaBookOpen,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <div className="sidebar-logo">

        <h2>
          Bakita Admin
        </h2>

        <p>
          Law Portfolio CMS
        </p>

      </div>

      <nav>

        <Link
          to="/admin"
          className="sidebar-link"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link
          to="/admin/publications"
          className="sidebar-link"
        >
          <FaBookOpen />
          Publications
        </Link>

        <Link
          to="/admin/subscribers"
          className="sidebar-link"
        >
          <FaUsers />
          Subscribers
        </Link>

        <Link
          to="/admin/messages"
          className="sidebar-link"
        >
          <FaEnvelope />
          Messages
        </Link>

      </nav>

    </aside>
  );
}

export default AdminSidebar;

