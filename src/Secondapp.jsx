import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./webapp/About";
import Contact from "./webapp/Contact";
import "./Menucss.css";
import Hero from "./webapp/Hero";
import FoodCategories from "./webapp/FoodCategories";
import Footer from "./webapp/Footer";
import Nav from "./webapp/Nav";
import RestaurantListing from "./webapp/RestaurantListing";
import HerorestaurantsSection from "./webapp/HerorestaurantsSection";
const Secondapp = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contactus" element={<Contact />}></Route>
        </Routes>
        <FoodCategories />
        <HerorestaurantsSection />
        <Footer />
      </Router>
    </div>
  );
};

export default Secondapp;
