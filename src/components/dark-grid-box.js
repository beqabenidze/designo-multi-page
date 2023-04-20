import React from "react";
import { Context } from "../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function DarkGridBox(props) {
  const { windowSize } = useContext(Context);

  return (
    <div className="dark-grid-box" id={props.id}>
      <img
        src={
          windowSize !== "mobile"
            ? windowSize === "tablet"
              ? props.Imgtablet
              : props.Imgdesktop
            : props.Imgmobile
        }
      ></img>
      <div className="dark-grid-abs">
        <h1>{props.topic}</h1>
        <Link to={props.link}>
          <p>{props.text}</p>
        </Link>
      </div>
    </div>
  );
}

export default DarkGridBox;
