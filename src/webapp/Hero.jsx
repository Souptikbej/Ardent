import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import mann from "../assets/mandeli.png";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle location
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
          // Reverse geocoding API (OpenStreetMap)
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
          setLocation(`${city}, ${state}`);
        } catch (err) {
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
    <section
      className="container-fluid py-5"
      style={{ backgroundColor: "#FEF3E2", minHeight: "90vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold display-5">
              Order Food Online From Your Favorite Restaurants
            </h1>
            <p className="fs-5 text-muted mt-3 mb-4">
              Fast delivery · Fresh meals · Trusted restaurants
            </p>
            <button
              className="btn btn-lg d-flex align-items-center justify-content-center gap-2 px-4 rounded-pill"
              onClick={handleLocation}
              disabled={loading}
            >
              <MapPin size={20} />
              {loading ? "Fetching location..." : "Use my current location"}
              {!loading && <ArrowRight size={20} />}
            </button>

            {/* Show Location or Error */}
            <div className="mt-3">
              {location && (
                <p className="text-success fw-semibold">
                  📍 Your location: {location}
                </p>
              )}
              {error && <p className="text-danger fw-semibold">{error}</p>}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-md-6 col-12 text-center">
            <img
              src={mann}
              className="img-fluid"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
