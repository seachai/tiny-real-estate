import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Listings extends Component {
  constructor() {
    super();
    this.loopListings = this.loopListings.bind(this);
  }

  //Function to add commas to the prices of the listing
  formatNumbers(num) {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  loopListings() {
    const { listingsData } = this.props;

    if (listingsData === undefined || listingsData.length === 0) {
      return ":( Sorry your filter did not match any listing, please try again";
    }

    return listingsData.map((listing, index) => {
      // Box view
      if (this.props.globalState.view === "box") {
        return (
          <div className="col-md-3" key={index}>
            <div className="listing">
              <div
                className="listing-img"
                style={{
                  background: `url('${listing.image}') no-repeat center center`
                }}
                loading="lazy"
              >
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-md-9">
                    <div className="user-details">
                      <span
                        className="user-name"
                        style={{ fontSize: "1.2rem" }}
                      >
                        Posted by {listing.userName}
                      </span>
                      <span className="post-date-box">
                        Posted on {listing.postDate}
                      </span>
                    </div>

                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="far fa-square" />
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fas fa-bed" />
                        <span>
                          {listing.rooms > 1 ? "Bedrooms" : "Bedroom"}{" "}
                          {listing.rooms}
                        </span>
                      </div>
                      <div className="listing-btn-box">
                        <Link to="/listing">View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-info">
                <span className="price">${listing.price}</span>
                <br />
                <span className="location">
                  {listing.city}, {listing.state}
                </span>
              </div>
            </div>
          </div>
        );
      } else if (this.props.globalState.view === "horizontal") {
        // Horizontal view
        return (
          <div className="col-md-12 col-lg-6" key={index}>
            <div className="listing">
              <div
                className="listing-img"
                style={{
                  background: `url('${listing.image}') no-repeat center center`
                }}
              >
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">{listing.userName}</span>
                      <span className="post-date">
                        Posted on {listing.postDate}
                      </span>
                    </div>

                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="far fa-square" />
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fas fa-bed" />
                        <span>
                          {listing.rooms > 1 ? "Bedrooms" : "Bedroom"}{" "}
                          {listing.rooms}
                        </span>
                      </div>
                      <div className="listing-btn">
                        <Link to={listing.path}>View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-info">
                <span className="location">
                  {listing.city}, {listing.state}
                </span>
                <br />
                <span className="price">
                  $<strong>{listing.price}</strong>
                </span>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.props.change}
          />
        </section>

        <section className="sortby-area">
          <div className="number-results">
            {this.props.globalState.filteredData.length} results found
          </div>

          <div className="sort-options">
            <select
              className="sortby"
              name="sortBy"
              onChange={this.props.change}
            >
              <option value="price-descending">Lowest Price</option>
              <option value="price-ascending">Highest Price</option>
            </select>

            <div className="view">
              <i
                className="fas fa-list"
                onClick={this.props.changeView.bind(null, "horizontal")}
              />
              <i
                className="fas fa-th"
                onClick={this.props.changeView.bind(null, "box")}
              />
            </div>
          </div>
        </section>

        <section className="list-results">
          <div className="row">{this.loopListings()}</div>
        </section>

        <section id="pagination">
          <div className="row">
            <ul className="pages">
              <li>Prev</li>
              <li className="active">1</li>
              <li>Next</li>
            </ul>
          </div>
        </section>
      </section>
    );
  }
}
