import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import LegalInterests from "../components/LegalInterests/LegalInterests";
import ResearchWriting from "../components/ResearchWriting/ResearchWriting";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import Footer from "../components/Footer/Footer";

import "./Home.css";
function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <AboutPreview />

      <LegalInterests />

      <ResearchWriting />

      <Testimonials />

      <Newsletter />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Home;

