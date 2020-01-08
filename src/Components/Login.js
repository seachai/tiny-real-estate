import React, { lazy, Suspense } from "react";
import useForm from "./useForm";

const SignUpPhoto = lazy(() => import("./lib/DogPhoto"));
const HousePhoto = lazy(() => import("./lib/HousePhoto"));

const LoginForm = () => {
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
    <section id="login">
      <div className="container">
        <div className="sign-up animated fadeIn">
          <form className="forms" onSubmit={handleSubmit}>
            <div className="signup-welcome">
              <h1>Tiny Real Estates</h1>
              <p>Log in to purchase, sell or view your new future tiny home!</p>
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
              <a href="#login" onClick={() => console.log("click")}>
                Sign Up
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

export default LoginForm;
