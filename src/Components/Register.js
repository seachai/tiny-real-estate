import React, { Component } from "react";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <section id="register">
        <div className="container">
          <h1>Register Account</h1>
          <div className="sign-up">
            <form className="forms">
              <label>First Name *</label>
              <br />
              <input
                type="firstname"
                name="firstname"
                placeholder="First Name"
                className="firstName"
              />
              <br />
              <label>Last Name *</label>
              <br />
              <input
                type="lastname"
                name="lastname"
                placeholder="Last Name"
                className="lastName"
              />
              <br />
              <label>Email *</label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="email"
                required
              />
              <br />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
