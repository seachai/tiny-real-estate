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
        {/* <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="title">Social Media</h1>
              <div className="footer--links">
              </div>
            </div>

            <div className="col-md-4">
              <h1 className="title">Footer Links</h1>
              <div className="footer--links">
              </div>
            </div>

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
        </div> */}

        <div className="footer-bottom">
          <div className="container">
            <div className="col-md-4 copyright">
              <h4>&copy; {currentYear()} Chai Lee</h4>
            </div>
            <div className="col-md-4 logo">
              <Link to="/">
                <i className="fas fa-home" />
                <span>Tiny Real Estates</span>
              </Link>
            </div>
            <div className="col-md-4 social-media">
              <ul>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
