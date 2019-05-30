import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link exact to="/">
            <i className="fas fa-home" />
          </Link>
        </div>

        <nav>
          <Link to="/">Post Ad</Link>
          <Link to="/about/">About Us</Link>
          <Link to="/">Login</Link>
          <Link to="/register/" className="register-btn">
            Register
          </Link>
        </nav>
      </header>
    );
  }
}
