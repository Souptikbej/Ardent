import React from "react";
import tree from "../assets/Tree.jpg";
import Menu from "./Menu";
const About = () => {
  return (
    <>
      <Menu />
      <div className="container my-5">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">About Us</h2>
          <p className="text-muted">
            Learn more about who we are and what we do
          </p>
        </div>

        {/* Section 1 - Image and Text */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={tree}
              alt="Our Team"
              className="img-thumbnail rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h4 className="fw-semibold mb-3">Who We Are</h4>
            <p className="text-muted">
              We are a passionate team of developers and designers dedicated to
              creating modern, responsive, and user-friendly web applications.
              Our goal is to deliver digital solutions that make a positive
              impact and help businesses grow.
            </p>
            <p className="text-muted">
              With expertise in front-end, back-end, and full-stack development,
              we ensure every project we build is fast, secure, and visually
              appealing across all devices.
            </p>
          </div>
        </div>

        {/* Section 2 - Mission & Vision */}
        <div className="row text-center mt-5 g-4">
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold text-primary mb-2">Our Mission</h5>
              <p className="text-muted">
                To empower innovation through technology, delivering scalable
                and efficient web solutions for our clients worldwide.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold text-primary mb-2">Our Vision</h5>
              <p className="text-muted">
                To be a trusted global tech partner known for creativity,
                quality, and continuous learning in the digital transformation
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
