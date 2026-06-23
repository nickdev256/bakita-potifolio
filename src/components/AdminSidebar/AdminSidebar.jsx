import React from "react";
import { NavLink } from "react-router-dom";

import {
FaTachometerAlt,
FaBookOpen,
FaUsers,
FaEnvelope,
FaImages,
FaCog,
FaSignOutAlt,
} from "react-icons/fa";

import "./AdminSidebar.css";

function AdminSidebar() {
return ( <aside className="admin-sidebar">


  <div className="sidebar-logo">
    <h2>Bakita Admin</h2>
    <p>Law Portfolio CMS</p>
  </div>

  <div className="admin-profile">
    <img
      src="/profile.jpg"
      alt="Bakita Lydia"
    />

    <h3>Bakita Lydia</h3>

    <span>Administrator</span>
  </div>

  <nav className="sidebar-nav">

    <NavLink
      to="/admin"
      end
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <FaTachometerAlt />
      <span>Dashboard</span>
    </NavLink>

    <NavLink
      to="/admin/publications"
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <FaBookOpen />
      <span>Publications</span>
    </NavLink>

    <NavLink
      to="/admin/subscribers"
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <FaUsers />
      <span>Subscribers</span>
    </NavLink>

    <NavLink
      to="/admin/messages"
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <FaEnvelope />
      <span>Messages</span>
    </NavLink>

    <NavLink
      to="/admin/gallery"
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <FaImages />
      <span>Gallery</span>
    </NavLink>

    <NavLink
      to="/admin/settings"
      className={({ isActive }) =>
        isActive
          ? "sidebar-link active"
          : "sidebar-link"
      }
    >
      <FaCog />
      <span>Settings</span>
    </NavLink>

  </nav>

  <div className="sidebar-footer">

    <button className="logout-btn">
      <FaSignOutAlt />
      Logout
    </button>

  </div>

</aside>

);
}

export default AdminSidebar;
