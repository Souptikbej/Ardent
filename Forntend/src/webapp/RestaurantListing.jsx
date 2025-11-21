import React, { useState, useEffect } from "react";
import {
  MapPin,
  Search,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  Menu,
  SlidersHorizontal,
  List,
  CircleDot,
} from "lucide-react";
import Card from "./Card";
import Data from "./Data";

// --- Mock Data (Same as original HTML) ---
const restaurantsData = [
  {
    name: "Mama Mia's Pasta House",
    cuisine: "Italian",
    rating: 4.7,
    deliveryFee: 0.0,
    estimatedTime: 25,
    isTopRated: true,
    imageUrl: "https://placehold.co/400x250/dc3545/ffffff?text=Italian+Food",
  },
  {
    name: "The Curry Corner",
    cuisine: "Indian",
    rating: 4.5,
    deliveryFee: 3.5,
    estimatedTime: 40,
    isTopRated: true,
    imageUrl: "https://placehold.co/400x250/ffc107/000000?text=Indian+Curry",
  },
  {
    name: "Burger Bonanza",
    cuisine: "American",
    rating: 3.9,
    deliveryFee: 5.0,
    estimatedTime: 30,
    isTopRated: false,
    imageUrl: "https://placehold.co/400x250/20c997/000000?text=Burgers",
  },
  {
    name: "Taco Tsunami",
    cuisine: "Mexican",
    rating: 4.3,
    deliveryFee: 0.0,
    estimatedTime: 35,
    isTopRated: false,
    imageUrl: "https://placehold.co/400x250/0d6efd/ffffff?text=Tacos",
  },
  {
    name: "Sushi Zen Garden",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryFee: 2.0,
    estimatedTime: 45,
    isTopRated: true,
    imageUrl: "https://placehold.co/400x250/6610f2/ffffff?text=Sushi+Rolls",
  },
  {
    name: "Vegan Vibes",
    cuisine: "Healthy",
    rating: 4.6,
    deliveryFee: 0.0,
    estimatedTime: 20,
    isTopRated: false,
    imageUrl: "https://placehold.co/400x250/fd7e14/ffffff?text=Vegan+Eats",
  },
];

// --- Component 2: Filter Sidebar ---
const FilterSidebar = ({ isMobileOpen, toggleMobileFilter }) => {
  // State to manage the collapse/expand of filters
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (id) => {
    setOpenFilters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isFilterOpen = (id) => openFilters[id] || false;

  // Use a custom style to show/hide the sidebar based on screen size/state
  const sidebarClass = `bg-white p-4 rounded-3 shadow-lg mb-4 mb-md-0${
    isMobileOpen ? "d-block" : "d-none d-md-block"
  }`;

  return (
    <aside className={sidebarClass} style={{ top: "20px" }}>
      <h2 className="fs-5 fw-bold mb-4 border-bottom pb-2 d-flex justify-content-between align-items-center">
        Filter Listings
        <button
          className="btn btn-sm btn-outline-secondary d-md-none"
          onClick={toggleMobileFilter}
        >
          <ChevronLeft size={16} /> Close
        </button>
      </h2>

      {/* Cuisine Type Filter */}
      <div className="mb-4">
        <h3
          className="fw-normal text-dark mb-3 d-flex justify-content-between align-items-center cursor-pointer"
          onClick={() => toggleFilter("cuisine")}
        >
          Cuisine Type
          <span className="text-secondary">
            {isFilterOpen("cuisine") ? "-" : "+"}
          </span>
        </h3>
        <div
          className={`collapse ${isFilterOpen("cuisine") ? "show" : ""}`}
          id="cuisine-options"
        >
          <div className="form-check small">
            <input
              className="form-check-input"
              type="checkbox"
              id="italianCheck"
            />
            <label className="form-check-label" htmlFor="italianCheck">
              Italian
            </label>
          </div>
          <div className="form-check small">
            <input
              className="form-check-input"
              type="checkbox"
              id="asianCheck"
            />
            <label className="form-check-label" htmlFor="asianCheck">
              Asian
            </label>
          </div>
          {/* ... other cuisine checks ... */}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3
          className="fw-normal text-dark mb-3 d-flex justify-content-between align-items-center cursor-pointer"
          onClick={() => toggleFilter("price")}
        >
          Price Range
          <span className="text-secondary">
            {isFilterOpen("price") ? "-" : "+"}
          </span>
        </h3>
        <div
          className={`collapse ${isFilterOpen("price") ? "show" : ""}`}
          id="price-options"
        >
          <div className="form-check small">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              id="price1"
            />
            <label className="form-check-label" htmlFor="price1">
              $ (Budget)
            </label>
          </div>
          {/* ... other price checks ... */}
        </div>
      </div>

      {/* Delivery Time Filter (using custom range style for better Bootstrap look) */}
      <div className="mb-4">
        <h3
          className="fw-normal text-dark mb-3 d-flex justify-content-between align-items-center cursor-pointer"
          onClick={() => toggleFilter("time")}
        >
          Max Delivery Time
          <span className="text-secondary">
            {isFilterOpen("time") ? "-" : "+"}
          </span>
        </h3>
        <div
          className={`collapse ${isFilterOpen("time") ? "show" : ""}`}
          id="time-options"
        >
          <input
            type="range"
            className="form-range"
            min="15"
            max="90"
            defaultValue="45"
            id="timeRange"
            onChange={(e) =>
              (document.getElementById(
                "timeOutput"
              ).value = `${e.target.value} min`)
            }
          />
          <output
            id="timeOutput"
            className="d-block text-center small fw-bold text-success"
          >
            45 min
          </output>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <h3
          className="fw-normal text-dark mb-3 d-flex justify-content-between align-items-center cursor-pointer"
          onClick={() => toggleFilter("rating")}
        >
          Min Rating
          <span className="text-secondary">
            {isFilterOpen("rating") ? "-" : "+"}
          </span>
        </h3>
        <div
          className={`collapse ${isFilterOpen("rating") ? "show" : ""}`}
          id="rating-options"
        >
          <div className="form-check small">
            <input
              className="form-check-input"
              type="radio"
              name="rating"
              id="rating1"
            />
            <label className="form-check-label" htmlFor="rating1">
              4.5+ Stars
            </label>
          </div>
          {/* ... other rating checks ... */}
        </div>
      </div>

      <button className="btn btn-success w-100 fw-bold shadow">
        Apply Filters
      </button>
    </aside>
  );
};
// --- Component 3: Main App / Listing Component ---
const RestaurantListing = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen((prev) => !prev);
  };

  // Card hover effect style (using a mix of custom class and Bootstrap utility)
  const hoverStyle = {
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)",
  };

  // Applying the hover style to the card (requires a separate CSS file or a custom styled-component approach for pure React/Bootstrap)
  // For this demonstration, we'll keep the focus on the structure and rely on a minor internal style or external CSS to handle the transform/shadow on hover if needed.

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f7f9fb" }}>
      {/* Header & Search Bar (Sticky) */}
      <header className="bg-white shadow-sm p-3">
        <div className="container-xxl d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Search Input */}
          <div className="w-100 w-md-50 mx-md-3">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <Search size={20} className="text-muted" />
              </span>
              <input
                type="search"
                id="search-bar"
                placeholder="Search by restaurant name, dish, or cuisine..."
                className="form-control border-start-0 shadow-none"
              />
            </div>
          </div>
          {/* Location Button */}
          <button
            className="btn d-none d-md-flex align-items-center text-secondary hover-success mt-3 mt-md-0"
            style={{ whiteSpace: "nowrap" }}
          >
            <MapPin size={20} className="me-1" />
            Current Location
          </button>
        </div>
      </header>

      {/* Main Content Area (Filters + Listings) */}
      <div className="container-xxl p-4 mt-4">
        <div className="row">
          {/* Filters Sidebar */}
          <div className="col-md-3">
            <FilterSidebar
              isMobileOpen={isMobileFilterOpen}
              toggleMobileFilter={toggleMobileFilter}
            />
          </div>

          {/* Restaurant Listings */}
          <main className="col-md-9">
            <h2 className="fs-4 fw-bold text-dark mb-4">
              Restaurants near you ({restaurantsData.length} Results)
            </h2>

            {/* Mobile Filter/View Toggle */}
            <div className="d-flex justify-content-between mb-4 d-md-none">
              <button
                onClick={toggleMobileFilter}
                className="btn btn-outline-secondary btn-sm d-flex align-items-center"
              >
                <SlidersHorizontal size={18} className="me-1" />
                Filters
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
                <List size={18} className="me-1" />
                List View
              </button>
            </div>

            {/* Restaurant Cards Grid */}
            <div className="row g-4">
              {restaurantsData.map((restaurant, index) => (
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                  <Card restaurant={restaurant} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="d-flex justify-content-center mt-5">
              <ul className="pagination shadow-sm">
                <li className="page-item disabled">
                  <button className="page-link" aria-label="Previous">
                    <ChevronLeft size={16} />
                  </button>
                </li>
                <li className="page-item active">
                  <button className="page-link bg-success border-success fw-bold">
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link text-dark">2</button>
                </li>
                <li className="page-item disabled">
                  <button className="page-link text-dark">...</button>
                </li>
                <li className="page-item">
                  <button className="page-link text-dark">10</button>
                </li>
                <li className="page-item">
                  <button className="page-link" aria-label="Next">
                    <ChevronRight size={16} />
                  </button>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListing;
