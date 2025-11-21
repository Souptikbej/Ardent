import React, { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import "./LoginSignupModal.css";

const LoginSignupModal = ({ show, onHide }) => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="custom-modal"
      contentClassName="custom-modal-content slide-in"
    >
      <Modal.Header closeButton className="border-0 text-center d-block">
        <Modal.Title className="fw-bold fs-3 text-gradient">
          {activeTab === "login" ? "Welcome Back!" : "Create an Account"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Tabs */}
        <Nav variant="pills" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link
              active={activeTab === "login"}
              onClick={() => setActiveTab("login")}
              className="fw-semibold rounded-pill px-4 py-2"
            >
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === "signup"}
              onClick={() => setActiveTab("signup")}
              className="fw-semibold rounded-pill px-4 py-2"
            >
              Signup
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Login Form */}
        {activeTab === "login" && (
          <Form className="form-animate">
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="input-glow"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="input-glow"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-glow w-100">
              Login
            </Button>
          </Form>
        )}

        {/* Signup Form */}
        {activeTab === "signup" && (
          <Form className="form-animate">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                className="input-glow"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="input-glow"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create password"
                className="input-glow"
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              className="btn-glow w-100 signup-btn"
            >
              Create Account
            </Button>
          </Form>
        )}
      </Modal.Body>

      {/* <Modal.Footer className="border-0">
        <Button
          variant="outline-light"
          onClick={onHide}
          className="w-100 close-btn"
        >
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default LoginSignupModal;
