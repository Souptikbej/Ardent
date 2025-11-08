import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./webapp/About";
import Contact from "./webapp/Contact";
import "./Menucss.css";
import Hero from "./webapp/Hero";
import FoodCategories from "./webapp/FoodCategories";
import Footer from "./webapp/Footer";
import Nav from "./webapp/Nav";
import HerorestaurantsSection from "./webapp/HerorestaurantsSection";
import RestaurantListing from "./webapp/RestaurantListing";
import Herooffersec from "./webapp/Herooffersec";

const MainContent = ({ sendLocation, location }) => {
  const { pathname } = useLocation();

  // ✅ Check if the user is on the home page
  const isHomePage = pathname === "/";

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero sendLocation={sendLocation} />
              <FoodCategories />
              <HerorestaurantsSection location={location} />
              <Herooffersec />
            </>
          }
        />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/restaurants" element={<RestaurantListing />} />
      </Routes>
    </>
  );
};

const Secondapp = () => {
  const [location, sendLocation] = useState("");

  return (
    <Router>
      <Nav />
      <MainContent sendLocation={sendLocation} location={location} />
      <Footer />
    </Router>
  );
};

export default Secondapp;
