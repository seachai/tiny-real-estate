import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Listings from "./Listings.js";
import AboutUs from "./AboutUs.js";
import RealEstate from "./RealEstate.js";
import "../sass/App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
<<<<<<< HEAD
          {/* <Header /> */}
          {/* <section id="content-area"> */}
          <Route exact path="/" component={RealEstate} />
          <Route path="/about" component={AboutUs} />
          {/* </section> */}
=======
          <Header />
          <section id="content-area">
            <Route path="/home" exact component={RealEstate} />
            <Route path="/about" component={AboutUs} />
          </section>
>>>>>>> 52de3f37d4fc66ece989d6e8781f17f835e4bf54
        </div>
      </Router>
    );
  }
}
