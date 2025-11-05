import React from "react";

const SeriesCard = ({ title, description, image, link }) => {
  return (
    <div className="col">
      <div
        className="card h-100 border-0 shadow-sm text-light"
        style={{
          backgroundColor: "#141414",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="overflow-hidden">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{
              height: "250px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        <div className="card-body text-center">
          <h5 className="card-title text-danger fw-bold">{title}</h5>
          <p className="card-text text-light opacity-75">{description}</p>
          <a href={link} className="btn btn-outline-danger w-100 fw-semibold">
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
