import React, { lazy, Suspense } from "react";
import useForm from "./useForm";

const SignUpPhoto = lazy(() => import("./lib/DogPhoto"));
const HousePhoto = lazy(() => import("./lib/HousePhoto"));

const RegisterForm = () => {
  const [values, handleChange] = useForm({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section id="register">
      <div className="container">
        <div className="sign-up animated fadeIn">
          <form className="forms" onSubmit={handleSubmit}>
            <div className="signup-welcome">
              <h1>Tiny Real Estates</h1>
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
              <a href="#login" onClick={() => console.log("click")}>
                Log in
              </a>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <HousePhoto />
            </Suspense>
          </form>
        </div>
        <div className="signup-detail">
          <Suspense fallback={<div>Loading...</div>}>
            <SignUpPhoto />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
