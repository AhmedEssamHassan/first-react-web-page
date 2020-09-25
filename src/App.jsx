import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import Contact from "./components/Contact/Contact";
class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
