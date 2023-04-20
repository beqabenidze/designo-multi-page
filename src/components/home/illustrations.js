import React from "react";
import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";

function Illustrations() {
  return (
    <div className="illustrations">
      <div className="illustrations-box">
        <img src={passionate}></img>
        <div className="illustration-flex">
          <h2>PASSIONATE</h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="illustrations-box">
        <img src={resourceful}></img>
        <div className="illustration-flex">
          <h2>RESOURCEFUL</h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="illustrations-box">
        <img src={friendly}></img>
        <div className="illustration-flex">
          <h2>FRIENDLY</h2>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Illustrations;
