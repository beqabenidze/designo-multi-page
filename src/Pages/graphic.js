import React from "react";
import "../GlobalCss/view.css";
import Header from "../components/header";
import GraphicGrid from "../components/graphic/graphic-grid";
import MenuPop from "../components/menu-pop";
import ViewTop from "../components/view-top";
import GraphicDarkGrid from "../components/graphic/graphic-dark-grid";
import Touch from "../components/touch";
import Footer from "../components/footer";

function Graphic() {
  return (
    <div className="view">
      <Header />
      <MenuPop />
      <ViewTop
        topic="Graphic Design"
        text="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives."
      />
      <GraphicGrid />
      <GraphicDarkGrid />
      <Touch />
      <Footer />
    </div>
  );
}

export default Graphic;
