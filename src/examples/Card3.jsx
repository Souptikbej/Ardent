import React from "react";
import tele from "../assets/telephone-symbol-button.png";
import mail from "../assets/mail.png";
import linkd from "../assets/linkedin-sign.png";
const Card3 = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="profile-card card text-center shadow-sm">
        <img
          src={props.userphoto}
          className="card-img-top profile-img mx-auto mt-3"
          alt="Profile"
        />
        <div className="card-body">
          <p className="h6 card-title mb-1">{props.username}</p>
          <span className="designation d-block mb-3">{props.userinfo}</span>
          {/* Social Icons */}
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" className="icon-link" title="LinkedIn">
              <img src={tele} className="icon" alt="LinkedIn" />
            </a>
            <a href="#" className="icon-link" title="Email">
              <img src={mail} className="icon" alt="Email" />
            </a>
            <a href="#" className="icon-link" title="Phone">
              <img src={linkd} className="icon" alt="Phone" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
