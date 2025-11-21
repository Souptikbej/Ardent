import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import biryani from "../assets/biryani.png";
import chinese from "../assets/chinese.png";
import northindian from "../assets/northindian.png";
import pizza from "../assets/pizza.png";
import rolls from "../assets/rolls.png";
import cake from "../assets/cake.png";
import dosa from "../assets/dosa.png";
import chole from "../assets/chole.png";
import rasgulla from "../assets/rasgulla.png";
import icecream from "../assets/icecream.png";
import pasta from "../assets/pasta.png";
import salad from "../assets/salad.png";
import paratha from "../assets/paratha.png";
import pastry from "../assets/pastry.png";

const categories = [
  { name: "Biryani", img: biryani },
  { name: "Chinese", img: chinese },
  { name: "North Indian", img: northindian },
  { name: "Pizza", img: pizza },
  { name: "Rolls", img: rolls },
  { name: "Cake", img: cake },
  { name: "Dosa", img: dosa },
  { name: "Chole Bhature", img: chole },
  { name: "Rasgulla", img: rasgulla },
  { name: "Ice Cream", img: icecream },
  { name: "Pasta", img: pasta },
  { name: "Salad", img: salad },
  { name: "Paratha", img: paratha },
  { name: "Pastry", img: pastry },
];

const FoodCategories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="container py-5 position-relative"
      style={{ overflow: "hidden" }}
    >
      <h2
        className="fw-bold text-center mb-4"
        style={{ color: "#FF7B00", fontSize: "40px" }}
      >
        Order Our Best Food Options
      </h2>

      {/* Left Arrow */}
      <button
        className="btn position-absolute top-50 start-0 translate-middle-y shadow-sm"
        style={{
          zIndex: 2,
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          border: "none",
        }}
        onClick={() => scroll("left")}
      >
        <ChevronLeft color="#FF7B00" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="d-flex gap-3 px-4 py-3"
        style={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="text-center flex-shrink-0"
            style={{
              width: "140px",
              scrollSnapAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div
              className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
              style={{
                width: "140px",
                height: "140px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(255, 123, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding:"10px",
                }}
              />
            </div>
            <p
              className="fw-semibold mt-2"
              style={{
                fontSize: "20px",
                color: "#333",
              }}
            >
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="btn position-absolute top-50 end-0 translate-middle-y shadow-sm"
        style={{
          zIndex: 2,
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          border: "none",
        }}
        onClick={() => scroll("right")}
      >
        <ChevronRight color="#FF7B00" />
      </button>
    </section>
  );
};

export default FoodCategories;
