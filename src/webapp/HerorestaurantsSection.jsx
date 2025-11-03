import React, { useState, useEffect } from "react";
import { MapPin, Star, Loader2 } from "lucide-react";
import restu from "../assets/restu.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";

const allRestaurants = [
  {
    name: "Fire And Ice Pizzeria",
    cuisine: "Italian • Pizza",
    rating: 4.3,
    price: "1600 for two",
    location: "Park Street, Kolkata",
    city: "Kolkata",
    image: restu,
  },
  {
    name: "Mainland China",
    cuisine: "Chinese • Asian",
    rating: 4.4,
    price: "1600 for two",
    location: "Jadavpur, Kolkata",
    city: "Kolkata",
    image: restu,
  },
  {
    name: "Momo I Am",
    cuisine: "Japanese • Tibetan",
    rating: 4.3,
    price: "800 for two",
    location: "Golpark, Kolkata",
    city: "Kolkata",
    image: restu,
  },
  {
    name: "Cafe Coffee Day",
    cuisine: "Cafe • Beverages",
    rating: 4.0,
    price: "600 for two",
    location: "Connaught Place, Delhi",
    city: "Delhi",
    image: restu,
  },
  {
    name: "Karim's",
    cuisine: "Mughlai • North Indian",
    rating: 4.5,
    price: "900 for two",
    location: "Jama Masjid, Delhi",
    city: "Delhi",
    image: restu,
  },
];

const HerorestaurantsSection = () => {
  const [userCity, setUserCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

  // Detect user location using geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            // Use OpenStreetMap reverse geocoding
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "Unknown";

            setUserCity(city);
            const nearby = allRestaurants.filter(
              (res) => res.city.toLowerCase() === city.toLowerCase()
            );
            setFilteredRestaurants(nearby.length ? nearby : allRestaurants);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  // Handle manual city change
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setUserCity(selectedCity);
    const filtered = allRestaurants.filter(
      (res) => res.city.toLowerCase() === selectedCity.toLowerCase()
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <section className="container my-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
        <h2 className="fw-bold text-dark mb-3 mb-md-0">
          Discover best restaurants {userCity ? `in ${userCity}` : "near you"}{" "}
          🍽️
        </h2>

        <select
          className="form-select w-auto"
          value={userCity}
          onChange={handleCityChange}
        >
          <option value="">Select City</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Loader2 size={32} className="text-primary mb-2 animate-spin" />
          <p>Detecting your location...</p>
        </div>
      ) : (
        <div className="row">
          {filteredRestaurants.map((res, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0 shadow-sm position-relative overflow-hidden hover-zoom"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: "15px 15px 0 0" }}
                >
                  <img
                    src={res.image}
                    className="card-img-top"
                    alt={res.name}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{res.name}</h5>
                  <p className="card-text text-muted mb-2">{res.cuisine}</p>

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-warning text-dark">
                      ⭐ {res.rating}
                    </span>
                    <span className="text-secondary small">
                      <i className="bi bi-currency-rupee"></i>
                      {res.price}
                    </span>
                  </div>

                  <p className="text-secondary small mb-3 d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                    {res.location}
                  </p>

                  <button
                    className="btn btn-primary w-100 fw-semibold shadow-sm"
                    style={{
                      borderRadius: "25px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#ff7b00";
                      e.currentTarget.style.borderColor = "#ff7b00";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    View Menu <i className="bi bi-arrow-right-short ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HerorestaurantsSection;
