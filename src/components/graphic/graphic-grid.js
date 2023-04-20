import React from "react";
import ViewGridBox from "../view-grid-box";
import graphicGridImg1 from "../../assets/graphic-design/desktop/image-change.jpg";
import graphicGridImg2 from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import graphicGridImg3 from "../../assets/graphic-design/desktop/image-science.jpg";

function GraphicGrid() {
  return (
    <div className="view-grid">
      <ViewGridBox
        gridImg={graphicGridImg1}
        topic="TIM BROWN"
        text="A book cover designed for Tim Brown’s new release, ‘Change’"
      />
      <ViewGridBox
        gridImg={graphicGridImg2}
        topic="BOXED WATER"
        text="A simple packaging concept made for Boxed Water"
      />
      <ViewGridBox
        gridImg={graphicGridImg3}
        topic="SCIENCE!"
        text="A poster made in collaboration with the Federal Art Project"
      />
    </div>
  );
}

export default GraphicGrid;
