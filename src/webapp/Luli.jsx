import React from "react";

const Luli = ({ location }) => {
  return (
    <div className="container mt-4">
      <h3>Nearby Restaurants</h3>
      {location ? (
        <p>
          Showing results for location: <strong>{location}</strong>
        </p>
      ) : (
        <p>Please allow location access to see nearby restaurants.</p>
      )}
    </div>
  );
};

export default Luli;
