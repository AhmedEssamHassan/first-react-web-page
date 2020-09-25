import React, { Component } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import SocialMedia from "../SocialMedia/SocialMedia";
import Work from "../Work/Work";

import { BrowserRouter, Route } from "react-router-dom";

class HomeContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default HomeContainer;
