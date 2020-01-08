import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  // const [register, setRegister] = useState(false);

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
          <ul className="nav-links">
            <li>
              <Link to="/">Post Ad</Link>
            </li>
            <li>
              <Link to="/about">FAQ</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/register" className="register-btn">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
