import React from "react";

// Mock restaurant data
const restaurants = [
  { id: 1, name: "Pizza Planet", lat: 22.573, lon: 88.3635 },
  { id: 2, name: "Burger House", lat: 22.582, lon: 88.369 },
  { id: 3, name: "Biryani Point", lat: 22.6, lon: 88.4 },
];

// Simple distance function (Haversine)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function RestaurantList({ userLocation, onSelect }) {
  const nearby = restaurants.filter(
    (r) => getDistance(userLocation.lat, userLocation.lon, r.lat, r.lon) < 5
  );

  return (
    <div className="card p-3">
      <h4>Nearby Restaurants (within 5 km)</h4>
      {nearby.length > 0 ? (
        <ul className="list-group">
          {nearby.map((r) => (
            <li
              key={r.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {r.name}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => onSelect(r)}
              >
                View Menu
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No restaurants nearby 😞</p>
      )}
    </div>
  );
}
