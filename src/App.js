import Home from "./Pages/home.js";
import Web from "./Pages/web.js";
import APP from "./Pages/app.js";
import Graphic from "./Pages/graphic.js";
import About from "./Pages/about.js";
import Location from "./Pages/location.js";
import Contact from "./Pages/contact.js";
import "./GlobalCss/Global.css";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context";
import { useState, useEffect } from "react";

function App() {
  const [toggler, setToggler] = useState(true);
  const [windowSize, setWindowSize] = useState(
    window.innerWidth > 768
      ? window.innerWidth > 1440
        ? "desktop"
        : "tablet"
      : "mobile"
  );

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 1440) {
        setWindowSize("desktop");
      } else if (window.innerWidth > 768) {
        setWindowSize("tablet");
      } else {
        setWindowSize("mobile");
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <Context.Provider value={{ toggler, setToggler, windowSize }}>
      <div className="backbone">
        <Routes>
          <Route path="/designo-multi-page" element={<Home />}></Route>
          <Route
            path="/designo-multi-page/web-design"
            element={<Web />}
          ></Route>
          <Route
            path="/designo-multi-page/app-design"
            element={<APP />}
          ></Route>
          <Route
            path="/designo-multi-page/graphic-design"
            element={<Graphic />}
          ></Route>
          <Route path="/designo-multi-page/about" element={<About />}></Route>
          <Route
            path="/designo-multi-page/location"
            element={<Location />}
          ></Route>
          <Route
            path="/designo-multi-page/contact"
            element={<Contact />}
          ></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
