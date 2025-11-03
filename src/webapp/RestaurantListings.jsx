import React from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurantheader from "./Restaurantheader";
const RestaurantListings = () => {
  const restaurants = [
    {
      id: 1,
      name: "La Pizzeria",
      cuisine: "Italian, Pizza",
      rating: 4.6,
      price: 450,
      location: "Kolkata, Park Street",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Spice Route",
      cuisine: "Indian, North Indian",
      rating: 4.4,
      price: 300,
      location: "Delhi, Connaught Place",
      image:
        "https://images.unsplash.com/photo-1604908177228-3f4d0b9e5d3a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Dragon Bowl",
      cuisine: "Chinese, Asian",
      rating: 4.2,
      price: 350,
      location: "Mumbai, Bandra",
      image:
        "https://images.unsplash.com/photo-1598514982519-6c0fef1b2d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "El Taco Loco",
      cuisine: "Mexican, Fast Food",
      rating: 4.5,
      price: 400,
      location: "Bangalore, Indiranagar",
      image:
        "https://images.unsplash.com/photo-1617196034796-73a1b6e8a3ad?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <Restaurantheader />
      <main className="container my-5">
        <div className="row">
          {restaurants.map((res) => (
            <RestaurantCard key={res.id} {...res} />
          ))}
        </div>
      </main>
    </>
  );
};

export default RestaurantListings;
