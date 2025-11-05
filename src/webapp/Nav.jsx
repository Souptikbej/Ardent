import React, { useState } from "react";
import { ShoppingCart, CircleUserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // Example cart count (you can later make it dynamic using props or context)
  const [cartCount, setCartCount] = useState(3);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold fs-3 text-white" to="/">
          FoodBuzz
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-lg-3">
            <li className="nav-item">
              <NavLink to="/menu" className="nav-link text-white fw-semibold">
                Our Menu
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Aboutus"
                className="nav-link text-white fw-semibold"
              >
                Stores
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Contactus"
                className="nav-link text-white fw-semibold"
              >
                Contact Us
              </NavLink>
            </li>

            {/* Cart */}
            <li className="nav-item position-relative">
              <NavLink
                to="/cart"
                className="nav-link d-flex align-items-center gap-1 text-white fw-semibold position-relative"
              >
                <ShoppingCart size={18} /> Cart
                {cartCount > 0 && (
                  <span className="cart-count-badge">{cartCount}</span>
                )}
              </NavLink>
            </li>

            {/* Register */}
            <li className="nav-item">
              <NavLink
                to="/login"
                className="btn btn-light text-dark fw-semibold px-3 py-1 rounded-pill d-flex align-items-center gap-1"
              >
                <CircleUserRound size={18} /> Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
