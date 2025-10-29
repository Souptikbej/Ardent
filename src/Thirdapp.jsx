import React from "react";
import Manone from "./assets/Manone.png";
import Mantwo from "./assets/Mantwo.png";
import Manthree from "./assets/Manthree.png";
import Manfour from "./assets/Manfour.png";
import Card3 from "./examples/card3";
import "./Card3css.css";
const Thirdapp = () => {
  const users = [
    {
      id: 1,
      profilePhoto: Manone,
      name: "Arjun Mehta",
      profession: "Software Engineer",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 2,
      profilePhoto: Manfour,
      name: "Priya Sharma",
      profession: "Data Analyst",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 3,
      profilePhoto: Mantwo,
      name: "Rohit Banerjee",
      profession: "Graphic Designer",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 4,
      profilePhoto: Manthree,
      name: "Neha Gupta",
      profession: "UX/UI Designer",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 5,
      profilePhoto: Mantwo,
      name: "Vikram Das",
      profession: "Marketing Manager",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 6,
      profilePhoto: Manthree,
      name: "Ananya Sen",
      profession: "AI Researcher",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 7,
      profilePhoto: Manone,
      name: "Siddharth Rao",
      profession: "Full Stack Developer",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
    {
      id: 8,
      profilePhoto: Manfour,
      name: "Kavya Iyer",
      profession: "Product Manager",
      linkedin: "https://linkedin.com/in/arjunmehta",
      email: "mailto:arjun@example.com",
      phone: "tel:+919876543210",
    },
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4 section-title">
        Ours Elight Teams Members
      </h3>
      <div className="row g-4">
        {users.map(function (elem, idx) {
          return (
            <Card3
              key={idx}
              userphoto={elem.profilePhoto}
              username={elem.name}
              userinfo={elem.profession}
              userlinkdin={elem.linkedin}
              useremail={elem.email}
              userphone={elem.phone}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Thirdapp;
