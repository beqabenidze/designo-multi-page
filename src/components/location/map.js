import React from "react";
import "../../GlobalCss/location.css";
import canadaMap1 from "../../assets/locations/tablet/image-map-canada.png";
import canadaMap2 from "../../assets/locations/desktop/image-map-canada.png";
import australiaMap1 from "../../assets/locations/tablet/image-map-australia.png";
import australiaMap2 from "../../assets/locations/desktop/image-map-australia.png";
import UKMap1 from "../../assets/locations/tablet/image-map-uk.png";
import UKMap2 from "../../assets/locations/desktop/image-map-united-kingdom.png";
import { Context } from "../../context";
import { useContext } from "react";

function Map() {
  const { windowSize } = useContext(Context);
  return (
    <div className="map">
      <div className="map-box">
        <img
          style={{ width: "100%" }}
          src={windowSize != "tablet" ? canadaMap2 : canadaMap1}
        ></img>
        <div className="map-box-info">
          <h1 style={{ color: "rgb(247, 168, 168)" }}>Canada</h1>
          <div className="map-box-address">
            <ul>
              <li>Designo Central Office</li>
              <li>3886 Wellington Street</li>
              <li>Toronto, Ontario M9C 3J5</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>P : +1 253-863-8967</li>
              <li>M : contact@designo.co</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="map-box"
        style={{
          flexDirection: windowSize == "desktop" ? "row-reverse" : "",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={windowSize != "tablet" ? australiaMap2 : australiaMap1}
        ></img>
        <div className="map-box-info">
          <h1 style={{ color: "rgb(247, 168, 168)" }}>Australia</h1>
          <div className="map-box-address">
            <ul>
              <li>Designo AU Office</li>
              <li>19 Balonne Street</li>
              <li>New South Wales 2443</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>P : (02) 6720 9092</li>
              <li>M : contact@designo.au</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="map-box">
        <img src={windowSize != "tablet" ? UKMap2 : UKMap1}></img>
        <div className="map-box-info">
          <h1 style={{ color: "rgb(247, 168, 168)" }}>United Kingdom</h1>
          <div className="map-box-address">
            <ul>
              <li>Designo UK Office</li>
              <li>13 Colorado Way</li>
              <li>Rhyd-y-fro SA8 9GA</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>P : 078 3115 1400</li>
              <li>M : contact@designo.uk</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
