import React, { useState } from "react";

const Twowaybinding = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ username, email, service, budget, message });

    // ✅ Show success message
    setSuccessMsg("✅ Form submitted successfully!");

    // ✅ Clear form fields
    setUsername("");
    setEmail("");
    setService("");
    setBudget("");
    setMessage("");

    // ⏱️ Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  return (
    <div className="contact-form">
      <h2>Hello Student</h2>

      {/* ✅ Success Message */}
      {successMsg && (
        <div className="alert alert-success text-center" role="alert">
          {successMsg}
        </div>
      )}

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Needed Services</label>
          <select
            className="form-select"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Choose Services</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO Optimization">SEO Optimization</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Budget</label>
          <select
            className="form-select"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          >
            <option value="">Select Budget</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="$1000 - $2000">$1000 - $2000</option>
            <option value="$2000+">$2000+</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button type="submit" className="btn-gradient">
          Submit →
        </button>
      </form>
    </div>
  );
};

export default Twowaybinding;
