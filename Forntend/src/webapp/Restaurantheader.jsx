import React from "react";

const Restaurantheader = () => {
  return (
    <header className="bg-light border-bottom shadow-sm mb-4">
      <div className="container py-3">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h1 className="h3 text-primary fw-bold mb-0">Mama Mia's Menu</h1>

          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search restaurants..."
              style={{ width: "220px" }}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        {/* Filters and Sort Options */}
        <div className="row mt-4 g-2 align-items-center">
          <div className="col-md-4">
            <label htmlFor="cuisineFilter" className="form-label fw-semibold">
              Filter by Cuisine:
            </label>
            <select id="cuisineFilter" className="form-select">
              <option>All</option>
              <option>Italian</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Mexican</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="ratingFilter" className="form-label fw-semibold">
              Minimum Rating:
            </label>
            <select id="ratingFilter" className="form-select">
              <option>All</option>
              <option>3+</option>
              <option>4+</option>
              <option>4.5+</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="sortBy" className="form-label fw-semibold">
              Sort By:
            </label>
            <select id="sortBy" className="form-select">
              <option>Default</option>
              <option>Rating: High to Low</option>
              <option>Rating: Low to High</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Restaurantheader;
