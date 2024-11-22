import React, { Component } from "react";
import logo from "../images/Logo.png";

class Header extends Component {
  render() {
    return (
      <header className="flex">
          <div className="logo-container">
          <img src={logo} alt="Logo_Image" className="logo" />
          </div>
          <div className="navbar flex ">
          <ul className="flex">
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Contact US</li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Header;
