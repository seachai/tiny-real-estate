import React, { Component } from "react";
import Gallery from "./Gallery";

export default class Info extends Component {
  render() {
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="sub-menu">
              <nav className="sub-links">
                <a href="#moreadsbyuser">More ads by this user</a>
                <a href="#print">Print</a>
                <a href="#share">Share</a>
                <a href="#contactseller">Contact Seller</a>
              </nav>
            </section>

            <section className="content-area">
              <div className="media-column">
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">Posted: May 25th</div>
                <h3 className="title">Title from data</h3>
                <h4 className="price">$100,000</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Address</label>
                    <h5>JAHASF154WA215</h5>
                  </div>
                  <div className="info">
                    <label>Home Type</label>
                    <h5>5,000</h5>
                  </div>
                  <div className="info">
                    <label>Bedrooms</label>
                    <h5>6-Speed Automatic</h5>
                  </div>
                  <div className="info">
                    <label>Price</label>
                    <h5>Excellent</h5>
                  </div>
                  <div className="info">
                    <label>Floor Space</label>
                    <h5>Pearl White</h5>
                  </div>
                  <div className="info">
                    <label>Extras</label>
                    <h5>Sport</h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ultrices quis lorem ut facilisis. Praesent vel commodo
                    ante, efficitur rhoncus dui. Morbi venenatis velit sapien,
                    vel finibus magna molestie et. Nulla erat mauris, elementum
                    ut tempor et, feugiat nec dui. Morbi venenatis velit sapien,
                    vel finibus magna molestie et. Nulla erat mauris, elementum
                    ut tempor et, feugiat nec dui.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
