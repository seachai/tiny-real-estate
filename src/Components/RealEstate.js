import React, { Component } from "react";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Listings from "./Listings.js";
import listingsData from "./data/listingsData.js";
import "../sass/App.scss";

class RealEstate extends Component {
  constructor() {
    super();
    this.state = {
      listingsData,
      city: "all",
      homeType: "all",
      rooms: "0",
      min_price: "",
      max_price: "",
      min_floor_space: "",
      max_floor_space: "",
      loft: false,
      patio: false,
      bar: false,
      gym: false,
      filteredData: listingsData,
      populateFormsData: "",
      sortBy: "price-descending",
      view: "horizontal",
      search: ""
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount() {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price;
    });

    this.setState({
      listingsData
    });
  }

  change(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.filteredData();
        console.log(this.state.filteredData);
      }
    );
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    });
  }

  filteredData() {
    let newData = this.state.listingsData;

    if (this.state.sortBy === "price-descending") {
      newData = this.state.listingsData.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (this.state.sortBy === "price-ascending") {
      newData = this.state.listingsData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.city !== "all") {
      newData = newData.filter(
        listing => {
          return listing.city === this.state.city;
        },
        () => {
          console.log("Does this work");
        }
      );
    }

    if (this.state.homeType !== "all") {
      newData = newData.filter(listing => {
        return listing.homeType === this.state.homeType;
      });
    }

    if (this.state.rooms !== "all") {
      newData = newData.filter(listing => {
        return listing.rooms >= this.state.rooms;
      });
    }

    if (this.state.min_price !== "" && this.state.max_price !== "") {
      newData = newData.filter(listing => {
        return (
          listing.price >= this.state.min_price &&
          listing.price <= this.state.max_price
        );
      });
    }

    if (
      this.state.min_floor_space !== "" &&
      this.state.max_floor_space !== ""
    ) {
      newData = newData.filter(listing => {
        return (
          listing.floorSpace >= this.state.min_floor_space &&
          listing.floorSpace <= this.state.max_floor_space
        );
      });
    }

    if (this.state.search !== "") {
      newData = newData.filter(listing => {
        const city = listing.city.toLowerCase();
        const searchText = this.state.search.toLowerCase();
        const n = city.match(searchText);

        if (n != null) {
          return true;
        }
      });
    }

    if (this.state.loft !== false) {
      newData = newData.filter(listing => {
        return listing.loft === this.state.loft;
      });
    }

    if (this.state.patio !== false) {
      newData = newData.filter(listing => {
        return listing.patio === this.state.patio;
      });
    }

    if (this.state.bar !== false) {
      newData = newData.filter(listing => {
        return listing.bar === this.state.bar;
      });
    }

    this.setState({
      filteredData: newData
    });
  }

  populateForms() {
    // city
    let cities = this.state.listingsData.map(listing => {
      return listing.city;
    });

    cities = new Set(cities);
    cities = [...cities];
    cities.sort();

    // homeType
    let homeTypes = this.state.listingsData.map(listing => {
      return listing.homeType;
    });

    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];
    homeTypes.sort();

    // rooms
    let rooms = this.state.listingsData.map(listing => {
      return listing.rooms;
    });

    rooms = new Set(rooms);
    rooms = [...rooms];
    rooms.sort();

    this.setState({
      populateFormsData: {
        cities,
        homeTypes,
        rooms
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
            resetFilters={this.resetFilters}
          />
          <Listings
            listingsData={this.state.filteredData}
            change={this.change}
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
      </div>
    );
  }
}

export default RealEstate;
