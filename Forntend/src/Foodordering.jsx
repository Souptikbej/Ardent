import React, { useState } from "react";
import FoodList from "./onlinefood/FoodList";
import RestaurantList from "./onlinefood/RestaurantList";

function Foodordering() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Mock user location (latitude, longitude)
  const userLocation = { lat: 22.5726, lon: 88.3639 }; // Kolkata

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🍔 Food Delivery Demo</h2>

      {!selectedRestaurant ? (
        <RestaurantList
          userLocation={userLocation}
          onSelect={setSelectedRestaurant}
        />
      ) : (
        <FoodList restaurant={selectedRestaurant} onBack={() => setSelectedRestaurant(null)} />
      )}
    </div>
  );
}

export default Foodordering;
