import React from "react";
import logoLight from "../assets/shared/desktop/logo-light.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-menu-div" style={{ width: "100%" }}>
        <img
          src={logoLight}
          style={{ width: "200px", margin: "20px", cursor: "pointer" }}
        ></img>
        <hr></hr>
        <div>
          <ul style={{ textAlign: "center" }}>
            <Link to="/designo-multi-page/about">
              <li>OUR COMPANY</li>
            </Link>
            <Link to="/designo-multi-page/location">
              <li>LOCATIONS</li>
            </Link>
            <Link to="/designo-multi-page/contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer-info-flex">
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="socials">
          <img src={facebook}></img>
          <img src={youtube}></img>
          <img src={twitter}></img>
          <img src={pinterest}></img>
          <img src={instagram}></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
