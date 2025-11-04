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
import Luli from "./webapp/Luli";
import AllRestaurants from "./webapp/AllRestaurants";
const Secondapp = () => {
  const [location, sendLocation] = useState("");
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Hero sendLocation={sendLocation} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contactus" element={<Contact />}></Route>
          <Route path="/restaurants" element={<AllRestaurants/>} />
        </Routes>
        <FoodCategories />
        <HerorestaurantsSection location={location} />
        <Footer />
      </Router>
    </div>
  );
};

export default Secondapp;
