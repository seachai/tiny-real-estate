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
            <label>Personal Info</label><br />
            <input type="firstname" name="firstname" placeholder="First Name" /><br />
            <input type="lastname" name="lastname" placeholder="Last Name" /><br />
            <input type="text" name="email" placeholder="Email" /><br />
            <button type="submit">Register</button>
          </form>
          </div>
        </div>
      </section>
    );
  }
}