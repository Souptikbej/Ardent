import React from "react";
import restu from "../assets/moneyheist.jpg";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  const seriesList = [
    {
      title: "Stranger Things",
      description:
        "A thrilling sci-fi adventure set in the mysterious town of Hawkins.",
      image: restu,
      link: "#",
    },
    {
      title: "Money Heist",
      description:
        "A suspenseful story about the greatest heist ever planned in Spain.",
      image: restu,
      link: "#",
    },
    {
      title: "Breaking Bad",
      description:
        "A chemistry teacher turns to crime in a gripping transformation story.",
      image: restu,
      link: "#",
    },
    {
      title: "The Witcher",
      description:
        "A monster hunter faces chaos and destiny in a dark fantasy world.",
      image: restu,
      link: "#",
    },
  ];

  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="p-3 bg-dark text-light border rounded shadow-sm">
            🎬 All Netflix Series Available Here
          </h1>
        </header>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {seriesList.map((series, index) => (
            <SeriesCard
              key={index}
              title={series.title}
              description={series.description}
              image={series.image}
              link={series.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetflixSeries;
