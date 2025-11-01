import React from "react";
import { House } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(255, 89, 0)" }}
      >
        <div className="container-fluid">
          {/* Website Name */}
          <NavLink className="navbar-brand fw-bold fs-3 text-white" to="/">
            FoodBuzz
          </NavLink>

          {/* Toggle Button (Hamburger) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link d-flex align-items-center gap-1"
                >
                  <ShoppingCart size={18} /> Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link d-flex align-items-center gap-1"
                >
                  <CircleUserRound size={18} /> Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
