import React from "react";
import circle2 from "../assets/shared/desktop/bg-pattern-two-circles.svg";

function ViewTop(props) {
  return (
    <div className="view-top">
      <img className="circle2" src={circle2}></img>
      <h1>{props.topic}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default ViewTop;
