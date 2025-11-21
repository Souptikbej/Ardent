import React from "react";
import Email from "../assets/Email.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";
const Card2 = () => {
  return (
    <div class="container my-5">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="contact-card">
            <img src={Location} class="contact-icon" alt="Profile" />
            <div>
              <p class="contact-title">Address</p>
              <p class="contact-text mb-0">
                Registered Office: 29V/F/1, Dharmapala Road, Kasba, Kolkata -
                700042
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="contact-card">
            <img src={Phone} class="contact-icon" alt="Profile" />
            <div>
              <p class="contact-title">Mobile</p>
              <p class="contact-text mb-0">+91 9830752111</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="contact-card">
            <img src={Email} class="contact-icon" alt="Profile" />
            <div>
              <p class="contact-title">Email</p>
              <p class="contact-text mb-0">ceie@ceie.org.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
