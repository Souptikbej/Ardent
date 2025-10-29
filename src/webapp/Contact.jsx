import React from "react";
import Menu from "./Menu";
const Contact = () => {
  return (
    <>
      <Menu />
      <header class="text-center py-4 bg-dark text-white">
        <h2>Contact Us</h2>
      </header>

      <div class="container contact-container">
        <div class="row g-4">
          <div class="col-lg-6 col-md-12">
            <div class="contact-form">
              <h4 class="mb-3 text-center">Get in Touch</h4>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    class="form-control"
                    rows="4"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117440.18563268934!2d88.26495025671877!3d22.572645862591627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027712a6f8a7f1%3A0xf7b9a6b508bb0b26!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1694169552511!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <footer class="text-center py-3 bg-dark text-white mt-4">
        <p class="mb-0">© 2025 Your Company | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Contact;
