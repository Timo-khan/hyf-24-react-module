"use client";

import "./clock.css";

import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const d = new Date();
      const currentTime = `${
        d.getHours() > "9" ? d.getHours() : `0${d.getHours()}`
      }:${d.getMinutes() > "9" ? d.getMinutes() : `0$${d.getMinutes()}`}:${
        d.getSeconds() > "9" ? d.getSeconds() : `0${d.getSeconds()}`
      }`;
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="clock-wrapper">{time}</div>;
};
