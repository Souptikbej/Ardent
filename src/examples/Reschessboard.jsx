import React from "react";
import Manone from "../assets/Manone.png";
import Mantwo from "../assets/Mantwo.png";
import Manthree from "../assets/Manthree.png";
import Manfour from "../assets/Manfour.png";
const Reschessboard = () => {
  return (
    <div class="container my-5">
      <h3 class="text-center mb-4 section-title">
        💠 Board of Governance Members
      </h3>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 col-12">
          <div class="card">
            <img src={Manone} class="card-img-top" alt="Profile" />
            <p class="h6 card-title mb-1">Dr. Avijit Ghosh</p>
            <span class="designation">Secretary, CEIE</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="card">
            <img src={Mantwo} class="card-img-top" alt="Profile" />
            <p class="h6 card-title mb-1">Prof.(Dr.) Subrata Mondal</p>
            <span class="designation">BOG Member, CEIE</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="card">
            <img src={Manthree} class="card-img-top" alt="Profile" />
            <p class="h6 card-title mb-1">Mr. Amal Kumar Dutta</p>
            <span class="designation">BOG Member, CEIE</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="card">
            <img src={Manfour} class="card-img-top" alt="Profile" />
            <p class="h6 card-title mb-1">Prof.(Dr.) Biswajit Mandal</p>
            <span class="designation">BOG Member, CEIE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reschessboard;
