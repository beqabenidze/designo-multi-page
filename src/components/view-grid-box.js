import React from "react";

function ViewGridBox(props) {
  return (
    <div className="view-grid-box">
      <img src={props.gridImg}></img>
      <div style={{ padding: "20px", margin: "auto" }}>
        <h1>{props.topic}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ViewGridBox;
