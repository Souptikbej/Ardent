import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./webapp/Menu";
import About from "./webapp/About";
import Contact from "./webapp/Contact";
import "./Menucss.css";
import Hero from "./webapp/Hero";
const Secondapp = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contactus" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Secondapp;
