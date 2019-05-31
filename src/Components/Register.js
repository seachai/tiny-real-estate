import React, { Component } from "react";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: ""
    };
  }
  userInfo = e => {
    const input = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(
      {
        [input]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submit works");
  };
  render() {
    return (
      <section id="register">
        <div className="container">
          <h1>Register Account</h1>
          <div className="sign-up">
            <form className="forms" onSubmit={this.handleSubmit}>
              <label>First Name *</label>
              <br />
              <input
                type="firstname"
                name="firstname"
                placeholder="first name"
                className="firstName"
                onChange={this.userInfo}
              />
              <br />
              <label>Last Name *</label>
              <br />
              <input
                type="lastname"
                name="lastname"
                placeholder="last name"
                className="lastName"
                onChange={this.userInfo}
              />
              <br />
              <label>Email *</label>
              <br />
              <input
                type="text"
                name="email"
                placeholder="myemail@email.com"
                className="email"
                onChange={this.userInfo}
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
