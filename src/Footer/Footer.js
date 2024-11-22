import React, { Component } from "react";
import Header from "../Header/Header";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import insta from "../images/instagram.svg";
import pintrest from "../images/pint.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-container">
          <Header />
          <ul className=" flex row social-icons">
            <li>
              <img src={facebook} alt="facebook_Image" className="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter_Image" className="twitter" />
            </li>
            <li>
              <img src={insta} alt="insta_Image" className="insta" />
            </li>
            <li>
              <img src={pintrest} alt="pintrest_Image" className="pintrest" />
            </li>
          </ul>
          <p className="footer_copyright">
            2023 Copyright raselcoder Designed by FOXAYA . All Rights Reserved
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
