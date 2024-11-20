import React, { Component } from "react";
import Navbar from "../Header/Navbar";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar />
        <div class="container">
          <div class="footer_copyright">
            <p>
              2023 Copyright raselcoder Designed by Love . All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
