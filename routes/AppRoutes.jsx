import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import AcademicJourney from "../pages/AcademicJourney";
import Publications from "../pages/Publications";
import MootCourt from "../pages/MootCourt";
import CommunityImpact from "../pages/CommunityImpact";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academic" element={<AcademicJourney />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/moot-court" element={<MootCourt />} />
      <Route path="/community-impact" element={<CommunityImpact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;