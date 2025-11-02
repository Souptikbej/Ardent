import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="text-warning fw-bold mb-3">EatFast</h3>
            <p className="text-secondary small mb-0">
              Delicious food, delivered fast.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-secondary text-decoration-none d-block mb-2 hover-link"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary text-decoration-none d-block mb-2 hover-link"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary text-decoration-none d-block mb-2 hover-link"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-secondary text-decoration-none d-block mb-2 hover-link"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary text-decoration-none d-block mb-2 hover-link"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-semibold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-secondary hover-link"
                title="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a href="#" className="text-secondary hover-link" title="Twitter">
                <Twitter size={22} />
              </a>
              <a
                href="#"
                className="text-secondary hover-link"
                title="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="text-center">
          <p className="text-secondary small mb-0">
            &copy; 2025 EatFast. All rights reserved.
          </p>
        </div>
      </div>

      {/* Custom Hover Style */}
      <style jsx>{`
        .hover-link:hover {
          color: #fd7e14 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
