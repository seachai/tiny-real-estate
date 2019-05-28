import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Listings from "./Listings";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <header>
          <div className="logo">
            <Link exact to="/">
              <i className="fas fa-home" />
            </Link>
          </div>

          <nav>
            <Link to="#home">Post Ad</Link>
            <Link to="/about/">About Us</Link>
            <Link to="#home">Login</Link>
            <Link to="#home" className="register-btn">
              Register
            </Link>
          </nav>
        </header>
      </Router>
    );
  }
}
