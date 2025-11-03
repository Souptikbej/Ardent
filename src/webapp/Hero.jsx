import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import mann from "../assets/heroimg.png";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Unknown area";
          const state = data.address.state || "";
          const fullLocation = `${city}, ${state}`;
          setLocation(`${city}, ${state}`);
        } catch {
          setError("Failed to fetch location details.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Permission denied or unable to get location.");
        setLoading(false);
      }
    );
  };

  return (
    <section className="hero-section py-lg-2 py-2">
      <div className="container position-relative">
        <div className="row align-items-center justify-content-between flex-column-reverse flex-md-row">
          {/* Left Content */}
          <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mt-4 mt-md-0">
            <h1 className="fw-bold display-6 display-md-4 mb-3 text-dark hero-heading">
              Safe food <span className="span">Delivery</span>
            </h1>
            <p className="fs-5 text-muted mb-4">
              Fresh, fast, and delivered right to your doorstep!
            </p>

            <div className="d-flex justify-content-center justify-content-md-start mb-3">
              <button
                className="btn hero-btn px-4 py-2 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                onClick={handleLocation}
                disabled={loading}
              >
                <MapPin size={20} />
                {loading ? "Fetching location..." : "Use my current location"}
                {!loading && <ArrowRight size={20} />}
              </button>
            </div>

            {location && (
              <p className="text-success fw-semibold small mb-0">
                📍 Your location: {location}
              </p>
            )}
            {error && (
              <p className="text-danger fw-semibold small mb-0">{error}</p>
            )}
          </div>

          {/* Right Image */}
          <div className="col-lg-5 col-md-6 col-10 text-center mb-4 mb-md-0 mx-auto">
            <img
              src={mann}
              alt="Delivery Illustration"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
