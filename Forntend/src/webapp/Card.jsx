import React, { useState, useEffect } from "react";
import { MapPin, Star, Clock, ChevronRight } from "lucide-react";
// --- Utility Functions (for Star Rating) ---
function getRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
  const totalStars = 5;
  let stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} size={16} fill="#ffc107" color="#ffc107" />); // Full Star
    } else if (i === fullStars && hasHalfStar) {
      // Half star simulation: using a filled star with reduced opacity or different icon if available
      // For simplicity with Lucide, we'll use a filled star for full/half, and an outline for empty.
      stars.push(<Star key={i} size={16} fill="#ffc10766" color="#ffc107" />);
    } else {
      stars.push(<Star key={i} size={16} color="#ced4da" />); // Empty Star
    }
  }

  return (
    <div className="d-flex align-items-center me-3">
      {stars}
      <span className="ms-1 fw-bold text-dark">{rating.toFixed(1)}</span>
    </div>
  );
}

const Card = ({ restaurant }) => {
  const isFreeDelivery = restaurant.deliveryFee === 0.0;
  const {
    name,
    cuisine,
    location,
    rating,
    estimatedTime,
    isTopRated,
    imageUrl,
  } = restaurant;
  return (
    <div
      className="card restaurant-card border-0 shadow-lg rounded-3 h-100 overflow-hidden"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image/Logo Area */}
      <div className="position-relative">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={name}
          style={{ height: "160px", objectFit: "cover" }}
        />
        {isTopRated && (
          <span className="position-absolute top-0 start-0 m-2 badge bg-warning text-dark shadow-sm">
            <Star size={14} className="me-1" fill="currentColor" /> Top Rated
          </span>
        )}
        {isFreeDelivery && (
          <span className="position-absolute bottom-0 end-0 m-2 badge bg-success shadow-sm">
            Free Delivery
          </span>
        )}
      </div>

      {/* Details Area */}
      <div className="card-body p-3">
        <h5 className="card-title fw-bold text-truncate mb-1">{name}</h5>
        <p className="card-text text-muted small mb-3">{cuisine}</p>
        <p className="text-secondary small mb-3 d-flex align-items-center">
          <MapPin
            size={16}
            color="#dc3545"
            strokeWidth={1.5}
            className="me-1"
          />
          {location}
        </p>

        {/* Stats Row */}
        <div className="d-flex justify-content-between align-items-center small mb-3">
          {getRatingStars(rating)}
          <div className="d-flex align-items-center text-secondary">
            <Clock size={16} className="me-1 text-danger" />
            {estimatedTime} min
          </div>
          <div className="fw-bold text-dark">
            {isFreeDelivery ? "FREE" : `$${restaurant.deliveryFee.toFixed(2)}`}
          </div>
        </div>

        {/* Action Button */}
        <button
          className="btn w-100 fw-bold shadow-sm text-white"
          style={{
            backgroundColor: "#ff7f32",
            borderColor: "#ff7f32",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e5670c")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff7f32")}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Card;
