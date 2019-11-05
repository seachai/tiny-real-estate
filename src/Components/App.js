import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header.js";
import AboutUs from "./AboutUs.js";
import Register from "./Register.js";
import RealEstate from "./RealEstate.js";
import Info from "./pages/Info.js";
import Footer from "./Footer.js";
import "../sass/App.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <section id="content-area">
          <Route exact path="/" component={RealEstate} />
          <Route path="/about" component={AboutUs} />
          <Route path="/register" component={Register} />
          <Route path="/info" component={Info} />
        </section>
        <Footer />
      </Router>
    );
  }
}
