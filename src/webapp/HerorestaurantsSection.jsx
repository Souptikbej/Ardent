import React from "react";
import { NavLink } from "react-router-dom";
import restu from "../assets/restu.jpg";
import { MapPin, Star, Loader2 } from "lucide-react";
import Card from "./Card";
const restaurantsData = [
  {
    name: "Mama Mia's Pasta House",
    cuisine: "Italian",
    location: "Jama Masjid, Delhi",
    rating: 4.7,
    deliveryFee: 0.0,
    estimatedTime: 25,
    isTopRated: true,
    imageUrl: restu,
  },
  {
    name: "The Curry Corner",
    cuisine: "Indian",
    location: "Connaught Place, Delhi",
    rating: 4.5,
    deliveryFee: 3.5,
    estimatedTime: 40,
    isTopRated: true,
    imageUrl: restu,
  },
  {
    name: "Burger Bonanza",
    cuisine: "American",
    location: "Golpark, Kolkata",
    rating: 3.9,
    deliveryFee: 5.0,
    estimatedTime: 30,
    isTopRated: false,
    imageUrl: restu,
  },
  {
    name: "Taco Tsunami",
    cuisine: "Mexican",
    location: "Jadavpur, Kolkata",
    rating: 4.3,
    deliveryFee: 0.0,
    estimatedTime: 35,
    isTopRated: false,
    imageUrl: restu,
  },
  {
    name: "Sushi Zen Garden",
    cuisine: "Japanese",
    location: "Park Street, Kolkata",
    rating: 4.9,
    deliveryFee: 2.0,
    estimatedTime: 45,
    isTopRated: true,
    imageUrl: restu,
  },
  {
    name: "Vegan Vibes",
    cuisine: "Healthy",
    location: "Park Street, Kolkata",
    rating: 4.6,
    deliveryFee: 0.0,
    estimatedTime: 20,
    isTopRated: false,
    imageUrl: restu,
  },
];
const HeroRestaurantsSection = ({ location }) => {
  // Only first 4 restaurants for display
  const visibleRestaurants = restaurantsData.slice(0, 4);

  return (
    <section className="container my-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
        {location ? (
          <h2 className="fw-bold text-dark mb-3 mb-md-0 text-center text-md-start">
            Discover best restaurants <strong>{location}</strong> 🍽️
          </h2>
        ) : (
          <p className="text-center text-muted">
            Please allow location access to see nearby restaurants.
          </p>
        )}

        {/* Only show "View More" if more than 4 restaurants */}
        {restaurantsData.length > 4 && location && (
          <NavLink
            to="/restaurants"
            className="btn btn-outline-success fw-semibold align-self-center align-self-md-end"
          >
            View More
          </NavLink>
        )}
      </div>
      {!location ? (
        <div className="text-center py-5">
          <Loader2 size={32} className="text-primary mb-2 animate-spin" />
          <p>
            Detecting your location, Click Above Use Current Location option
          </p>
        </div>
      ) : (
        <div className="row justify-content-center">
          {visibleRestaurants.map((restaurant, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-10 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card restaurant={restaurant} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroRestaurantsSection;
