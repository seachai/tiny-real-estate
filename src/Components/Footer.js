import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    const currentYear = () => {
      let date = new Date();
      let year = date.getFullYear();
      return year;
    };

    return (
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="title">Social Media</h1>
              <div className="footer--links">
                {/* <Link to="/products/road_runner">Road Runner</Link>
                <Link to="/products/envision_mobile">Envision Mobile</Link>
                <Link to="/products/envision_touch">Envision Touch</Link> */}
              </div>
            </div>

            <div className="col-md-4">
              <h1 className="title">Footer Links</h1>
              <div className="footer--links">
                {/* <Link to="/company">About Us</Link> */}
              </div>
            </div>

            {/* <div className="col-md-3">
              <h1 className="title">Location</h1>
              <div className="footer--links">
                <Link to="/location">Find a location</Link>
              </div>
            </div> */}

            <div className="col-md-3">
              <h1 className="title">Contact Us</h1>
              <div className="footer--links">
                <div className="contact-info">
                  <i className="fas fa-envelope">
                    <a href="mailto:tinyrealestates@email.com" target="_top">
                      tinyrealestates@email.com
                    </a>
                  </i>
                  <i className="fas fa-phone-alt">
                    <a
                      href="tel:1-800-123-4567"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      1 (800) 123-4567
                    </a>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="container">
            <div className="col-md-4 copyright">
              <h4>&copy; {currentYear()} Chai Lee</h4>
            </div>
            <div className="col-md-4 logo">
              {/* <Link to="/">
                <img src={Logo} alt="Allied Mobile Logo" />
              </Link> */}
            </div>
            <div className="col-md-4 social-media">
              <ul>
                <li>
                  <a href="#linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#youtube" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
