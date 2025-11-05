import React from "react";
import {
  ChefHat,
  Menu,
  Rocket,
  Eye,
  Award,
  Zap,
  Headphones,
  Heart,
} from "lucide-react";
const About = () => {
  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#f7f9fb" }}
    >
      {/* Hero Section */}
      <section className="text-center py-5 container">
        <h1 className="fw-bold display-5 mb-3 text-dark">
          Savor the Story Behind{" "}
          <span className="text-success">Every Dish</span>
        </h1>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "700px" }}
        >
          We're more than just a food delivery platform. We are a community
          built around the love of great taste and shared convenience.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm border-top border-4 border-success h-100">
              <Rocket className="text-success mb-3" size={40} />
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-secondary">
                To connect people with the best local restaurants, offering a
                seamless, quick, and delightful food delivery experience while
                empowering culinary businesses to thrive in the digital world.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm border-top border-4 border-warning h-100">
              <Eye className="text-warning mb-3" size={40} />
              <h2 className="fw-bold mb-3">Our Vision</h2>
              <p className="text-secondary">
                To be the most trusted and preferred food ordering platform
                globally, known for our commitment to quality, speed, and
                fostering genuine relationships between diners and chefs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="bg-white rounded-4 shadow p-5 text-center">
          <h2 className="fw-bold text-success mb-4">The FoodBuzz Journey</h2>
          <p className="text-muted mb-3">
            FoodBuzz was founded in 2021 by three college friends who were tired
            of late-night pizza runs and limited delivery options. We believed
            that ordering food should be as enjoyable as eating it. Starting
            with just five local partners and a single delivery bike, we focused
            relentlessly on making the platform intuitive and the service
            reliable.
          </p>
          <p className="text-muted fst-italic">
            Today, we serve millions of customers across the nation, but our
            core philosophy remains the same: use technology to bring the joy of
            cooking directly to your doorstep, faster and fresher than ever
            before.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container text-center py-5">
        <h2 className="fw-bold mb-5 text-dark">Why Choose FoodBuzz?</h2>
        <div className="row g-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition-transform">
              <Award className="text-success mb-3" size={35} />
              <h5 className="fw-semibold mb-2">Quality Focus</h5>
              <p className="text-secondary small">
                We partner only with restaurants that meet our strict standards
                for freshness and food safety.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition-transform">
              <Zap className="text-warning mb-3" size={35} />
              <h5 className="fw-semibold mb-2">Lightning Fast</h5>
              <p className="text-secondary small">
                Our optimized logistics ensure your meal arrives piping hot and
                right on time.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition-transform">
              <Headphones className="text-success mb-3" size={35} />
              <h5 className="fw-semibold mb-2">Dedicated Support</h5>
              <p className="text-secondary small">
                A real person is always ready to assist you, 24/7, with any
                order issues.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-shadow transition-transform">
              <Heart className="text-warning mb-3" size={35} />
              <h5 className="fw-semibold mb-2">Local Love</h5>
              <p className="text-secondary small">
                Every order supports local businesses and keeps our community
                vibrant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 mt-4">
        <div className="container text-center">
          <p className="fs-5 mb-3 fw-medium">
            Ready to Dash? Start Ordering Today!
          </p>
          <a
            href="#"
            className="btn btn-warning text-white fw-bold px-4 py-2 rounded-pill shadow-sm"
          >
            View Restaurants
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
