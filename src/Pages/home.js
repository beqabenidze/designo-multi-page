import React from "react";
import Header from "../components/header";
import MenuPop from "../components/menu-pop";
import Frame from "../components/home/frame";
import HomeGrid from "../components/home/homeGrid";
import Illustrations from "../components/home/illustrations";
import Touch from "../components/touch";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <MenuPop />
      <Frame />
      <HomeGrid />
      <Illustrations />
      <Touch />
      <Footer />
    </div>
  );
}

export default Home;
