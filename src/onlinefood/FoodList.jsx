import React from "react";

const foods = {
  1: [
    { id: 1, name: "Margherita Pizza", price: 250 },
    { id: 2, name: "Cheese Burst Pizza", price: 350 },
  ],
  2: [
    { id: 3, name: "Veg Burger", price: 180 },
    { id: 4, name: "Paneer Burger", price: 200 },
  ],
  3: [
    { id: 5, name: "Chicken Biryani", price: 220 },
    { id: 6, name: "Mutton Biryani", price: 320 },
  ],
};

export default function FoodList({ restaurant, onBack }) {
  const items = foods[restaurant.id] || [];

  return (
    <div className="card p-3">
      <button className="btn btn-secondary mb-3" onClick={onBack}>
        ← Back
      </button>
      <h4>{restaurant.name} Menu</h4>
      <ul className="list-group">
        {items.map((f) => (
          <li
            key={f.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {f.name} <span>₹{f.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
