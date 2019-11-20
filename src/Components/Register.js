import React, { useState } from "react";
import SignUpPhoto from "../Images/Signup/signup.jpg";
import HousePhoto from "../Images/Signup/house_login_web.png";
import useForm from "./useForm";

const Register = props => {
  const [values, handleChange] = useForm({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [isRegistered, setIsRegistered] = useState([...props.status].join(""));
  const [signUp, setSignUp] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  console.log(isRegistered);

  const LoginForm = () => {
    return (
      <section id="login">
        <div className="container">
          <div className="sign-up">
            <form className="forms" onSubmit={handleSubmit}>
              <div className="signup-welcome">
                <h1>Welcome to Tiny Real Estates!</h1>
                <p>
                  Log in to purchase, sell or view your new future tiny home!
                </p>
              </div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="email"
                required
                values={values.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="password"
                required
                values={values.password}
                onChange={handleChange}
              />
              <button type="submit">Login</button>
              <div className="member-check">
                <span>Not a member? </span>
                <a href="#login" onClick={() => setSignUp(!signUp)}>
                  Sign Up
                </a>
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

  const RegisterForm = () => {
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
                type="text"
                name="firstname"
                placeholder="* First Name"
                className="firstName"
                values={values.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastname"
                placeholder="* Last Name"
                className="lastName"
                values={values.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="* Email"
                className="email"
                required
                values={values.email}
                onChange={handleChange}
              />
              <button type="submit">Register</button>
              <div className="member-check">
                <span>Already a member? </span>
                <a href="#login" onClick={() => setSignUp(!signUp)}>
                  Log in
                </a>
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

  // return <>{signUp ? RegisterForm() : LoginForm()}</>;
  return <>{isRegistered === "signup" ? RegisterForm() : LoginForm()}</>;
};

export default Register;
