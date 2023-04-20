import React from "react";
import ViewGridBox from "../view-grid-box";
import webGridImg1 from "../../assets/web-design/desktop/image-express.jpg";
import webGridImg2 from "../../assets/web-design/desktop/image-transfer.jpg";
import webGridImg3 from "../../assets/web-design/desktop/image-photon.jpg";
import webGridImg4 from "../../assets/web-design/desktop/image-builder.jpg";
import webGridImg5 from "../../assets/web-design/desktop/image-blogr.jpg";
import webGridImg6 from "../../assets/web-design/desktop/image-camp.jpg";

function WebGrid() {
  return (
    <div className="view-grid">
      <ViewGridBox
        gridImg={webGridImg1}
        topic="EXPRESS"
        text="A multi-carrier shipping website for ecommerce businesses"
      />
      <ViewGridBox
        gridImg={webGridImg2}
        topic="TRANSFER"
        text="Site for low-cost money transfers and sending money within seconds"
      />
      <ViewGridBox
        gridImg={webGridImg3}
        topic="PHOTON"
        text="A state-of-the-art music player with high-resolution audio and DSP effects"
      />
      <ViewGridBox
        gridImg={webGridImg4}
        topic="BUILDER"
        text="Connects users with local contractors based on their location"
      />
      <ViewGridBox
        gridImg={webGridImg5}
        topic="BLOGR"
        text="Blogr is a platform for creating an online blog or publication"
      />
      <ViewGridBox
        gridImg={webGridImg6}
        topic="CAMP"
        text="Get expert training in coding, data, design, and digital marketing"
      />
    </div>
  );
}

export default WebGrid;
