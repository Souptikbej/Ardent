import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        {/* Top Section */}
        <div className="row gy-4">
          {/* Brand Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-3">
              <svg
                className="me-2"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke="#FF6B1B"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m-6 0h6" />
              </svg>
              <h3 className="fw-bold text-white mb-0">
                Food<span style={{ color: "#FF6B1B" }}>Buzz</span>
              </h3>
            </div>
            <p className="text-light small">
              Fresh meals, fast delivery — enjoy every bite with FeastFlow.
            </p>
            <div className="mt-3 small">
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} color="#FF6B1B" className="me-2" />
                <span>(+91) 72786-63190</span>
              </div>
              <div className="d-flex align-items-center">
                <Mail size={16} color="#FF6B1B" className="me-2" />
                <span>support@foodbuzz.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-semibold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              {["Home", "Menu", "Offers", "Order Tracking"].map(
                (item, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href="#"
                      className="text-light text-decoration-none hover-link"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-semibold text-white mb-3">Company</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none hover-link"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none hover-link"
                >
                  Careers{" "}
                  <span className="badge bg-warning text-dark text-uppercase ms-1">
                    Hiring
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none hover-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none hover-link"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* App + Social */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-semibold text-white mb-3">Get the App</h5>
            <div className="d-flex flex-column gap-3">
              <a href="#">
                <img
                  src="https://placehold.co/180x50/212529/ffffff?text=App+Store"
                  alt="App Store"
                  className="img-fluid rounded shadow-sm"
                />
              </a>
              <a href="#">
                <img
                  src="https://placehold.co/180x50/212529/ffffff?text=Google+Play"
                  alt="Google Play"
                  className="img-fluid rounded shadow-sm"
                />
              </a>
            </div>
            <h6 className="fw-semibold text-white mt-4 mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              {[
                { icon: <Facebook size={18} />, color: "#3b5998" },
                { icon: <Instagram size={18} />, color: "#E1306C" },
                { icon: <Twitter size={18} />, color: "#1DA1F2" },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle bg-secondary"
                  style={{
                    width: "36px",
                    height: "36px",
                    color: "#fff",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = s.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#6c757d")
                  }
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-light">
          <p className="mb-2 mb-md-0">
            © {currentYear} FeastFlow Food Delivery. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-light text-decoration-none hover-link">
              Security
            </a>
            <a href="#" className="text-light text-decoration-none hover-link">
              Accessibility
            </a>
            <a href="#" className="text-light text-decoration-none hover-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Hover Style */}
      <style>{`
        .hover-link:hover {
          color: #FF6B1B !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
