import React from "react";
import logoDark from "../assets/shared/desktop/logo-dark.png";
import menu from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";
import { Context } from "../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
  const { toggler, setToggler } = useContext(Context);
  const { windowSize } = useContext(Context);

  const handleToggler = () => {
    setToggler(!toggler);
  };
  return (
    <div className="header">
      <Link to="/designo-multi-page">
        <img style={{ width: "200px", cursor: "pointer" }} src={logoDark} />
      </Link>
      {windowSize != "mobile" ? (
        <div className="header-flex">
          <Link to="/designo-multi-page/about">OUR COMPANY</Link>
          <Link to="/designo-multi-page/location">LOCATIONS</Link>
          <Link to="/designo-multi-page/contact">CONTACT</Link>
        </div>
      ) : (
        <img
          className="menu"
          onClick={handleToggler}
          src={toggler ? menu : close}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default Header;
