import React from "react";
import ViewGridBox from "../view-grid-box";
import appGridImg1 from "../../assets/app-design/desktop/image-airfilter.jpg";
import appGridImg2 from "../../assets/app-design/desktop/image-eyecam.jpg";
import appGridImg3 from "../../assets/app-design/desktop/image-faceit.jpg";
import appGridImg4 from "../../assets/app-design/desktop/image-todo.jpg";
import appGridImg5 from "../../assets/app-design/desktop/image-loopstudios.jpg";

function AppGrid() {
  return (
    <div className="view-grid">
      <ViewGridBox
        gridImg={appGridImg1}
        topic="AIRFILTER"
        text="Solving the problem of poor indoor air quality by filtering the air"
      />
      <ViewGridBox
        gridImg={appGridImg2}
        topic="EYECAM"
        text="Product that lets you edit your favorite photos and videos at any time"
      />
      <ViewGridBox
        gridImg={appGridImg3}
        topic="FACEIT"
        text="Get to meet your favorite internet superstar with the faceit app"
      />
      <ViewGridBox
        gridImg={appGridImg4}
        topic="TODO"
        text="A todo app that features cloud sync with light and dark mode"
      />
      <ViewGridBox
        gridImg={appGridImg5}
        topic="LOOPSTUDIOS"
        text="A VR experience app made for Loopstudios"
      />
    </div>
  );
}

export default AppGrid;
