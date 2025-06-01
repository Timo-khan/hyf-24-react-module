"use client";

import "./windowResizer.css";

import { useEffect, useState } from "react";

export const WindowResizer = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <div className="window-resizer-wrapper">
      {/* <pre>{JSON.stringify(windowSize, null, 2)}</pre> */}
      <p className="window-resizer-head">Current Window Size :</p>
      <span className="window-resizer-size">
        {windowSize[0]} x {windowSize[1]}
      </span>
    </div>
  );
};
