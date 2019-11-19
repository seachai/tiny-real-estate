import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import ListingData from "./data/listingsData";

import Header from "./Header.js";
import AboutUs from "./AboutUs.js";
import RealEstate from "./RealEstate.js";
import Info from "./pages/Info.js";
import Footer from "./Footer.js";
import "../sass/App.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <section id="content-area">
        <Switch>
          <Route exact path="/" component={RealEstate} />
          <Route path="/about" component={AboutUs} />
          <Route path={ListingData.path} component={Info} />
          {/* {ListingData.map(route => (
            <Route path={route.path} component={Info} />
          ))} */}
        </Switch>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
