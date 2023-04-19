import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../common/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Service from "./Service";
import About from "./About";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
