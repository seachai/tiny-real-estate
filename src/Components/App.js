import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import ListingData from "./data/listingsData";

import NavigationBar from "./NavigationBar.js";
import AboutUs from "./AboutUs.js";
import RealEstate from "./RealEstate.js";
import Info from "./pages/Info.js";
import Footer from "./Footer.js";
import "../sass/App.scss";
import RegisterForm from "./Register";
import LoginForm from "./Login";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <section id="content-area">
        <Switch>
          <Route exact path="/" component={RealEstate} />
          <Route path="/about" component={AboutUs} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path={ListingData.path} component={Info} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
