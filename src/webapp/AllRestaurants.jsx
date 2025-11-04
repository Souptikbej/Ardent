import React from "react";
import restu from "../assets/restu.jpg";

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

const AllRestaurants = () => {
  return (
    <section className="container my-5">
      <h2 className="fw-bold text-center text-dark mb-4">All Restaurants 🍴</h2>
      <div className="row justify-content-center">
        {allRestaurants.map((res, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-10 mb-4" key={index}>
            <div
              className="card h-100 border-0 shadow-sm overflow-hidden"
              style={{ borderRadius: "15px" }}
            >
              <img
                src={res.image}
                alt={res.name}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "15px 15px 0 0",
                }}
              />
              <div className="card-body">
                <h5 className="fw-bold">{res.name}</h5>
                <p className="text-muted">{res.cuisine}</p>
                <span className="badge bg-warning text-dark mb-2">
                  ⭐ {res.rating}
                </span>
                <p className="small text-secondary mb-2">{res.location}</p>
                <p className="text-primary fw-semibold">₹{res.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllRestaurants;
