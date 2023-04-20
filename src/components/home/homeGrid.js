import React from "react";
import webImgmobile from "../../assets/home/mobile/image-web-design.jpg";
import webImgtablet from "../../assets/home/tablet/image-web-design.jpg";
import webImgdesktop from "../../assets/home/desktop/image-web-design-large.jpg";
import appImgmobile from "../../assets/home/mobile/image-app-design.jpg";
import appImgtablet from "../../assets/home/tablet/image-app-design.jpg";
import appImgdesktop from "../../assets/home/desktop/image-app-design.jpg";
import graphicImgmobile from "../../assets/home/mobile/image-graphic-design.jpg";
import graphicImgtablet from "../../assets/home/tablet/image-graphic-design.jpg";
import graphicImgdesktop from "../../assets/home/desktop/image-graphic-design.jpg";
import DarkGridBox from "../dark-grid-box";

function HomeGrid() {
  return (
    <div className="dark-grid">
      <DarkGridBox
        id={"grid-1"}
        topic="WEB DESIGN"
        text="VIEW PROJECT"
        Imgtablet={webImgtablet}
        Imgdesktop={webImgdesktop}
        Imgmobile={webImgmobile}
        link="/web-design"
      />
      <DarkGridBox
        topic="APP DESIGN"
        text="VIEW PROJECT"
        Imgtablet={appImgtablet}
        Imgdesktop={appImgdesktop}
        Imgmobile={appImgmobile}
        link="/app-design"
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

export default HomeGrid;
