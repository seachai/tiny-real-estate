import React, { useState } from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

const Header = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <i className="fas fa-home" />
            <span>Tiny Real Estates</span>
          </Link>
        </div>

        <nav>
          <Link to="/">Post Ad</Link>
          <Link to="/about/">FAQ</Link>
          <Link href="#login" onClick={e => setRegister("login")}>
            Log in
          </Link>
          <a
            href="#signup"
            className="register-btn"
            onClick={e => setRegister("signup")}
          >
            Sign up
          </a>
        </nav>
      </header>
      {register ? <Register status={register} /> : ""}
    </>
  );
};

export default Header;
