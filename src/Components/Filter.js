import React, { Component } from "react";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {};
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.rooms = this.rooms.bind(this);
  }

  componentWillMount() {
    this.props.populateAction();
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities !== undefined) {
      let { cities } = this.props.globalState.populateFormsData;
      return cities.map(listing => {
        return (
          <option key={listing} value={listing}>
            {listing}
          </option>
        );
      });
    }
  }

  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes !== undefined) {
      let { homeTypes } = this.props.globalState.populateFormsData;
      return homeTypes.map(listing => {
        return (
          <option key={listing} value={listing}>
            {listing}
          </option>
        );
      });
    }
  }

  rooms() {
    if (this.props.globalState.populateFormsData.rooms !== undefined) {
      let { rooms } = this.props.globalState.populateFormsData;
      return rooms.map(listing => {
        return (
          <option key={listing} value={listing}>
            {listing}+ BR
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section id="filter">
        <div className="filter-contents">
          <h4>Filter</h4>
          <label htmlFor="city" className="title">
            City
          </label>
          <select
            name="city"
            className="filters city"
            onChange={this.props.change}
          >
            <option defaultValue="Location" hidden>
              Location
            </option>
            <option value="all">All</option>
            {this.cities()}
          </select>
          <label htmlFor="homeType" className="title">
            Home Style
          </label>
          <select
            name="homeType"
            className="filters homeType"
            onChange={this.props.change}
          >
            <option defaultValue="House Style" hidden>
              Select
            </option>
            <option value="all">All</option>
            {this.homeTypes()}
          </select>
          <label htmlFor="rooms" className="title">
            Bedrooms
          </label>
          <select
            name="rooms"
            className="filters rooms"
            onChange={this.props.change}
          >
            <option defaultValue="Bedrooms" hidden>
              Bedrooms
            </option>
            <option value="all">All</option>
            {this.rooms()}
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              placeholder="$1000"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              placeholder="$100,000"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>

          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-price"
              placeholder="100 ft&sup2;"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-price"
              placeholder="500 ft&sup2;"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Loft</span>
              <input
                name="loft"
                value="loft"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>

            <label htmlFor="extras">
              <span>Patio</span>
              <input
                name="patio"
                value="patio"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>

            <label htmlFor="extras">
              <span>Bar</span>
              <input
                name="bar"
                value="bar"
                type="checkbox"
                onChange={this.props.change}
              />
            </label>
          </div>

          <button className="reset-btn" onClick={this.props.resetFilters}>
            Reset
          </button>
        </div>
      </section>
    );
  }
}
