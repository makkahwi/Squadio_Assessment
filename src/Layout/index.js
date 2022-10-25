import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "../Views/About";
import Home from "../Views/Home";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
};