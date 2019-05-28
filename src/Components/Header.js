import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }

  toggleModal = () => {
    this.setState(
      {
        modal: !this.state.modal
      },
      () => {
        console.log(this.state.modal);
      }
    );
  };

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
          <Link to="/" className="register-btn" onClick={this.toggleModal}>
            Register
          </Link>
        </nav>
      </header>
    );
  }
}
