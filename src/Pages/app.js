import React from "react";
import "../GlobalCss/view.css";
import Header from "../components/header";
import AppGrid from "../components/app/app-grid";
import MenuPop from "../components/menu-pop";
import ViewTop from "../components/view-top";
import AppDarkGrid from "../components/app/app-dark-grid";
import Touch from "../components/touch";
import Footer from "../components/footer";

function APP() {
  return (
    <div className="view">
      <Header />
      <MenuPop />
      <ViewTop
        topic="App Design"
        text="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      <AppGrid />
      <AppDarkGrid />
      <Touch />
      <Footer />
    </div>
  );
}

export default APP;
