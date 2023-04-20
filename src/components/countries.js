import React from "react";
import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import kingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import smallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import { Link } from "react-router-dom";

function Countries() {
  return (
    <div className="countries">
      <div className="country">
        <img src={smallCircle} className="circle"></img>
        <img src={canada}></img>
        <h1>Canada</h1>
        <Link to="/designo-multi-page/location">
          <button>SEE LOCATION</button>
        </Link>
      </div>
      <div className="country">
        <img src={smallCircle} className="circle"></img>
        <img src={australia}></img>
        <h1>Australia</h1>
        <Link to="/designo-multi-page/location">
          <button>SEE LOCATION</button>
        </Link>
      </div>
      <div className="country">
        <img src={smallCircle} className="circle"></img>
        <img src={kingdom}></img>
        <h1>Kingdom</h1>
        <Link to="/designo-multi-page/location">
          <button>SEE LOCATION</button>
        </Link>
      </div>
    </div>
  );
}

export default Countries;
