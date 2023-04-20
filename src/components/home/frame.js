import React from "react";
import "../../GlobalCss/home.css";
import frame from "../../assets/home/desktop/image-hero-phone.png";
import circlebig from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import { Link } from "react-router-dom";

function Frame() {
  return (
    <div className="frame">
      <img className="circlebig" src={circlebig}></img>
      <div style={{ zIndex: "1" }}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, apps, and engaging brand experiences. Find
          out more about our services.
        </p>
        <Link to="/designo-multi-page/about">
          <button>LEARN MORE</button>
        </Link>
      </div>
      <img src={frame}></img>
    </div>
  );
}

export default Frame;
