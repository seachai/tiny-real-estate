import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link exact to="/">
          <i className="fas fa-home" />
          <span>Tiny Real Estates</span>
        </Link>
      </div>

      <nav>
        <Link to="/">Post Ad</Link>
        <Link to="/about/">FAQ</Link>
        <Link to="/">Log in</Link>
        <Link to="/register/" className="register-btn">
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
