import React from "react";
import "../GlobalCss/about.css";
import Header from "../components/header";
import Touch from "../components/touch";
import Footer from "../components/footer";
import MenuPop from "../components/menu-pop";
import Map from "../components/location/map";

function Location() {
  return (
    <div className="location">
      <Header />
      <MenuPop />
      <Map />
      <Touch />
      <Footer />
    </div>
  );
}

export default Location;
