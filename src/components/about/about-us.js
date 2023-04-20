import React from "react";
import { Context } from "../../context";
import { useContext } from "react";
import circle2 from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import aboutImg1 from "../../assets/about/mobile/image-about-hero.jpg";
import aboutImg2 from "../../assets/about/tablet/image-about-hero.jpg";
import aboutImg3 from "../../assets/about/desktop/image-about-hero.jpg";

function AboutUs() {
  const { windowSize } = useContext(Context);
  return (
    <div className="about-us">
      <img className="circle2" src={circle2}></img>
      <img
        src={
          windowSize !== "mobile"
            ? windowSize === "tablet"
              ? aboutImg2
              : aboutImg3
            : aboutImg1
        }
      ></img>
      <div style={{ padding: "max(30px, 5vw)" }}>
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
