import React from "react";

const Herooffersec = () => {
  const offerGradient = {
    background: "linear-gradient(135deg, #FFC107 0%, #FF9800 100%)", // Bootstrap warning-like gradient
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <section id="offers-updates" className="py-5">
      <div className="container">
        {/* Offer Box */}
        <div
          style={offerGradient}
          className="text-white p-4 p-md-5 rounded-4 shadow-lg"
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.01)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            {/* Text Content */}
            <div className="text-center text-md-start mb-4 mb-md-0 col-md-8">
              <p className="text-uppercase fw-semibold small opacity-75 mb-2">
                Exclusive Deal Alert!
              </p>
              <h3 className="fw-bold display-6 lh-sm">
                Get 50% Off Your First Order
                <span className="d-block fs-5 fw-normal opacity-90 mt-1">
                  Limited Time Offer – Ends Sunday!
                </span>
              </h3>
            </div>

            {/* CTA Button */}
            <div className="text-center text-md-end col-md-4">
              <a
                href="#order"
                className="btn btn-warning fw-bold px-4 py-2 rounded-pill border-0 shadow-sm"
                style={{
                  transition: "all 0.3s ease-in-out",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 0.5rem 1rem rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Claim Your Discount
              </a>
            </div>
          </div>
        </div>

        {/* Update Info */}
        <div className="text-center text-muted mt-4">
          <p className="fw-medium small">
            New Feature:{" "}
            <span className="text-primary fw-semibold">Live Tracking</span> is
            now available for all orders!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herooffersec;
