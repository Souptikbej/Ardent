import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, User, Send, Menu } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending message...");
    setLoading(true);

    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        setStatus("✅ Your message has been sent successfully!");
        e.target.reset();
      } else {
        setStatus("❌ Error: Could not send your message. Please try again.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Main Section */}
      <main className="container my-5">
        <section className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-3 text-dark">Get In Touch</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            We'd love to hear from you! Whether you have a question about our
            food, an order, or just want to say hi — our team is ready to help.
          </p>
        </section>

        <div className="row g-4">
          {/* Left - Contact Info */}
          <div className="col-lg-4">
            <div className="bg-white p-4 rounded-4 h-100 contact-form">
              <h4 className="fw-semibold mb-4 border-bottom pb-2">
                Our Details
              </h4>

              <div className="d-flex align-items-start mb-4">
                <MapPin className="text-orange me-3 mt-1" />
                <div>
                  <p className="fw-medium mb-1">Office Location</p>
                  <p className="text-muted mb-0">
                    123 Food Street, Downtown, FL 90210
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <Phone className="text-orange me-3 mt-1" />
                <div>
                  <p className="fw-medium mb-1">Call Us</p>
                  <a
                    href="tel:+15551234567"
                    className="text-muted text-decoration-none"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <Mail className="text-orange me-3 mt-1" />
                <div>
                  <p className="fw-medium mb-1">Email Support</p>
                  <a
                    href="mailto:support@flavorhub.com"
                    className="text-muted text-decoration-none"
                  >
                    support@FoodBuzz.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <Clock className="text-orange me-3 mt-1" />
                <div>
                  <p className="fw-medium mb-1">Opening Hours</p>
                  <p className="text-muted mb-0">
                    Mon - Sat: 11:00 AM - 10:00 PM
                  </p>
                  <p className="text-muted mb-0">Sun: 12:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded-4 contact-form">
              <h4 className="fw-semibold mb-4 border-bottom pb-2">
                Send A Message
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-medium">
                    Full Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <User className="text-muted" size={18} />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium">
                    Email Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <Mail className="text-muted" size={18} />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-control"
                    required
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-orange w-100 fw-semibold d-flex align-items-center justify-content-center"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ms-2" size={18} />
                </button>

                {status && (
                  <div
                    className={`alert mt-4 ${
                      status.startsWith("✅")
                        ? "alert-success"
                        : status.startsWith("❌")
                        ? "alert-danger"
                        : "alert-info"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Custom Styles */}
      <style jsx="true">{`
        .contact-form {
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .text-orange {
          color: #ea580c !important;
        }
        .btn-orange {
          background-color: #ea580c;
          color: white;
          border: none;
          transition: 0.3s;
        }
        .btn-orange:hover {
          background-color: #c94c0a;
        }
      `}</style>
    </>
  );
};

export default Contact;
