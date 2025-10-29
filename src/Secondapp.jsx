import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./webapp/Menu";
import About from "./webapp/About";
import Contact from "./webapp/Contact";
import "./Menucss.css";
const Secondapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contactus" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Secondapp;
