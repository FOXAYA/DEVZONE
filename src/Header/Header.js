import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "../Home/Home";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar />
        <div className="home-content">
          <Home />
        </div>
      </header>
    );
  }
}
export default Header;
