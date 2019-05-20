import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      // <Router>
        <header>
          <div className="logo">
            <a href="#home">
              <i className="fas fa-home" />
            </a>
          </div>

          <nav>
            <a href="#home">Post Ad</a>
            <a href="#home">About Us</a>
            <a href="#home">Login</a>
            <a href="#home" className="register-btn">
              Register
            </a>
          </nav>
        </header>
      // </Router>
    );
  }
}
