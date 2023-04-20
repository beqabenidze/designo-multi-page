import React from "react";
import "../GlobalCss/view.css";
import Header from "../components/header";
import WebGrid from "../components/web/web-grid";
import MenuPop from "../components/menu-pop";
import ViewTop from "../components/view-top";
import WebDarkGrid from "../components/web/web-dark-grid";
import Touch from "../components/touch";
import Footer from "../components/footer";

function Web() {
  return (
    <div className="view">
      <Header />
      <MenuPop />
      <ViewTop
        topic="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <WebGrid />
      <WebDarkGrid />
      <Touch />
      <Footer />
    </div>
  );
}

export default Web;
