import React, { useEffect, useState } from "react";
import { ShoppingCart, CircleUserRound, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import LoginSignupModal from "./LoginSignupModal"; // 👈 Import your modal component
const Nav = () => {
  const [cartCount, setCartCount] = useState(3);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showModal, setShowModal] = useState(false); // 👈 Modal state
  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg custom-navbar shadow-sm ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-white"
      }`}
    >
      <div className="container">
        {/* Brand */}
        <NavLink
          className={`navbar-brand fw-bold fs-3 ${
            theme === "dark" ? "text-warning" : "text-dark"
          }`}
          to="/"
        >
          FoodBuzz
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
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
              <NavLink
                to="/menu"
                className={`nav-link fw-semibold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Our Menu
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Aboutus"
                className={`nav-link fw-semibold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Stores
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Contactus"
                className={`nav-link fw-semibold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Contact Us
              </NavLink>
            </li>

            {/* Cart */}
            <li className="nav-item position-relative">
              <NavLink
                to="/cart"
                className={`nav-link d-flex align-items-center gap-2 fw-semibold position-relative ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                <ShoppingCart size={18} /> Cart
                {cartCount > 0 && (
                  <span className="cart-count-badge">{cartCount}</span>
                )}
              </NavLink>
            </li>

            {/* Login / Register */}
            <li className="nav-item">
              <button
                type="button"
                onClick={() => setShowModal(true)} // 👈 Open modal
                className={`btn ${
                  theme === "dark"
                    ? "btn-warning text-dark"
                    : "btn-dark text-white"
                } fw-semibold px-3 py-1 rounded-pill d-flex align-items-center gap-1`}
                data-bs-toggle="modal"
                data-bs-target="#authModal"
              >
                <CircleUserRound size={18} /> Login / Signup
              </button>
            </li>

            {/* Theme Toggle */}
            <li className="nav-item">
              <button
                onClick={toggleTheme}
                className={`btn border-0 rounded-circle p-2 ms-2 ${
                  theme === "dark" ? "text-warning" : "text-dark"
                }`}
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.05)",
                }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Render Modal */}
      {showModal && (
        <LoginSignupModal show={showModal} onHide={() => setShowModal(false)} />
      )}
    </nav>
  );
};

export default Nav;
