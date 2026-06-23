import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import AcademicJourney from "../pages/AcademicJourney";
import Publications from "../pages/Publications";
import MootCourt from "../pages/MootCourt";
import CommunityImpact from "../pages/CommunityImpact";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManagePublications from "../pages/Admin/ManagePublications";
import ManageSubscribers from "../pages/Admin/ManageSubscribers";
import ManageMessages from "../pages/Admin/ManageMessages";
import ManageGallery from "../pages/Admin/ManageGallery";


function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/academic"
        element={<AcademicJourney />}
      />

      <Route
        path="/publications"
        element={<Publications />}
      />

      <Route
        path="/moot-court"
        element={<MootCourt />}
      />

      <Route
        path="/community-impact"
        element={<CommunityImpact />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ADMIN */}

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/publications"
        element={<ManagePublications />}
      />

      <Route
        path="/admin/subscribers"
        element={<ManageSubscribers />}
      />

      <Route
        path="/admin/messages"
        element={<ManageMessages />}
      />

      <Route
  path="/admin/gallery"
  element={<ManageGallery />}
/>

    </Routes>
  );
}

export default AppRoutes;

