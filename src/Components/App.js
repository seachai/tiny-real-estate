import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header.js";
import AboutUs from "./AboutUs.js";
import RealEstate from "./RealEstate.js";
import "../sass/App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <section id="content-area">
          <Route exact path="/" component={RealEstate} />
          <Route path="/about" component={AboutUs} />
          </section>
        </div>
      </Router>
    );
  }
}
