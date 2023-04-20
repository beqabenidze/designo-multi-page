import React from "react";
import "../GlobalCss/menu.css";
import { Context } from "../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function MenuPop() {
  const { toggler, setToggler } = useContext(Context);

  const handleToggler = () => {
    setToggler(!toggler);
  };

  return (
    <div className="overlay" style={{ display: toggler ? "none" : "block" }}>
      <div className="menuPop">
        <ul>
          <Link to="/designo-multi-page/about" onClick={handleToggler}>
            <li>OUR COMPANY</li>
          </Link>
          <Link to="/designo-multi-page/location" onClick={handleToggler}>
            <li>LOCATIONS</li>
          </Link>
          <Link to="/designo-multi-page/contact" onClick={handleToggler}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MenuPop;
