import React from "react";
import touchPattern from "../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg";
import { Link } from "react-router-dom";

function Touch() {
  return (
    <div className="touch">
      <img src={touchPattern} className="touchPattern"></img>
      <div className="touch-flex">
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link to="/designo-multi-page/contact">
        <button>GET IN TOUCH</button>
      </Link>
    </div>
  );
}

export default Touch;
