import React from "react";
import { Context } from "../../context";
import { useContext } from "react";

function AboutStoryBox(props) {
  const { windowSize } = useContext(Context);

  return (
    <div className="about-story-box">
      <img
        src={
          windowSize !== "mobile"
            ? windowSize === "tablet"
              ? props.Imgtablet
              : props.Imgdesktop
            : props.Imgmobile
        }
      ></img>
      <div style={{ padding: "max(40px,5vw)" }}>
        <h1>{props.topic}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </div>
  );
}

export default AboutStoryBox;
