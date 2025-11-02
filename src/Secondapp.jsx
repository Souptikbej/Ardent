import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./webapp/Menu";
import About from "./webapp/About";
import Contact from "./webapp/Contact";
import "./Menucss.css";
import Hero from "./webapp/Hero";
import FoodCategories from "./webapp/FoodCategories";
import Footer from "./webapp/Footer";
import MamaMiaMenu from "./webapp/MamaMiaMenu";
const Secondapp = () => {
  return (
    <div>
      <Router>
        <MamaMiaMenu/>
        <Menu />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contactus" element={<Contact />}></Route>
        </Routes>
        <FoodCategories />
        <Footer/>
      </Router>
    </div>
  );
};

export default Secondapp;
