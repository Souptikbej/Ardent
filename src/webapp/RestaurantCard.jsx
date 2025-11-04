import React from "react";

const RestaurantCard = ({ image, name, cuisine, rating, price, location }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold text-dark">{name}</h5>
          <p className="card-text text-muted mb-2">{cuisine}</p>
          <p className="mb-1">
            <strong>Rating:</strong> ⭐ {rating}
          </p>
          <p className="mb-1">
            <strong>Average Price:</strong> ₹{price}
          </p>
          <p className="text-secondary small mb-3">{location}</p>
          <button className="btn btn-outline-primary w-100">View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
