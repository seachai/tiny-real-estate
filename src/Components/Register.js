import React, { useState } from "react";
import SignUpPhoto from "../Images/Signup/signup.jpg";
import HousePhoto from "../Images/Signup/house_login_web.png";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email);
  };

  return (
    <section id="register">
      <div className="container">
        <div className="sign-up">
          <form className="forms" onSubmit={handleSubmit}>
            <div className="signup-welcome">
              <h1>Welcome to Tiny Real Estates</h1>
              <p>
                Sign up to purchase, sell or view your new future tiny home!
              </p>
            </div>
            <input
              type="firstname"
              name="firstname"
              placeholder="* First Name"
              className="firstName"
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              type="lastname"
              name="lastname"
              placeholder="* Last Name"
              className="lastName"
              onChange={e => setLastName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="* Email"
              className="email"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Register</button>
            <div className="member-check">
              <span>Already a member? </span>
              <a href="#login">Log in</a>
            </div>
            <img
              className="bottom-house-photo"
              src={HousePhoto}
              alt="Bottom house details"
            />
          </form>
        </div>
        <div className="signup-detail">
          <i className="fas fa-times"></i>
          <img
            className="signup-photo"
            src={SignUpPhoto}
            alt="Cozy room with dog"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
