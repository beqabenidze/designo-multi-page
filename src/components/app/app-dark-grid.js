import React from "react";
import DarkGridBox from "../dark-grid-box";
import appImgmobile from "../../assets/home/mobile/image-app-design.jpg";
import appImgtablet from "../../assets/home/tablet/image-app-design.jpg";
import appImgdesktop from "../../assets/home/desktop/image-app-design.jpg";
import graphicImgmobile from "../../assets/home/mobile/image-graphic-design.jpg";
import graphicImgtablet from "../../assets/home/tablet/image-graphic-design.jpg";
import graphicImgdesktop from "../../assets/home/desktop/image-graphic-design.jpg";

function AppDarkGrid() {
  return (
    <div className="dark-grid">
      <DarkGridBox
        topic="WEB DESIGN"
        text="VIEW PROJECT"
        Imgtablet={appImgtablet}
        Imgdesktop={appImgdesktop}
        Imgmobile={appImgmobile}
        link="/web-design"
      />
      <DarkGridBox
        topic="GRAPHIC DESIGN"
        text="VIEW PROJECT"
        Imgtablet={graphicImgtablet}
        Imgdesktop={graphicImgdesktop}
        Imgmobile={graphicImgmobile}
        link="/graphic-design"
      />
    </div>
  );
}

export default AppDarkGrid;
